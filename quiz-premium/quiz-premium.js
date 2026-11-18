/* Quiz de carreira Liderium · PREMIUM v4 · interface e estado.
 * Sem regra de pontos: teto e saída = regua.js (a mesma do /quiz/ no ar); percentual, gap, entrada e conferência da IA = regua-premium.js.
 * Fluxo: cadastro (+ código opcional) → cargo → (P0b) → autoavaliação → perguntas (T3.4b na T3/T4) → objetivo + campo aberto → relatório.
 * O nome é posto só por esta página; nunca vai para a IA. */
(function () {
  var X = window.QUIZ_ESTRUTURA, P = window.QUIZ_PERGUNTAS, Rg = window.QUIZ_REGUA, R = window.QUIZ_RESULTADOS || {};
  var RP = window.QUIZ_REGUA_PREMIUM, CT = window.QUIZ_CONTEUDO || {}, TV = CT.telas || {};
  var API_OK = !!(window.CONFIG && CONFIG.API && !/COLOCAR/.test(CONFIG.API));
  var ESPERA_MS = (window.CONFIG && CONFIG.ESPERA_IA_MS) || 90000; // o script pode levar até ~70 s (duas chamadas paralelas à IA, limite de 60 s do Apps Script)
  var KEY = 'quiz_liderium_premium', VALIDADE = 14 * 86400000;
  var qs = new URLSearchParams(location.search);
  var TESTE = qs.get('teste') === '1', SEED = qs.get('seed');
  var T0 = Date.now(), S = null, ver = null, tela = null, tVer = 0, bloqueio = 0;
  var TL = R.telas || {};
  var REDUZ = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  function tt(v, d) { return v === undefined || v === null || v === '' ? d : v; }
  var memoria = null;

  /* ---------- utilidades ---------- */
  function $(id) { return document.getElementById(id); }
  function h(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt !== undefined && txt !== null) e.textContent = txt; return e; }
  function limpa(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function uuid() {
    try { if (window.crypto && crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
  }
  function agora() { return Date.now(); }
  function svg(html, cls, vb) { var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', vb || '0 0 24 24'); if (cls) s.setAttribute('class', cls); s.innerHTML = html; return s; }

  /* ---------- armazenamento ---------- */
  function ler() { try { var t = localStorage.getItem(KEY); return t ? JSON.parse(t) : null; } catch (e) { return memoria; } }
  function salvar() { if (!S) return; S.atualizadoEm = agora(); memoria = JSON.parse(JSON.stringify(S)); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function apagar() { memoria = null; try { localStorage.removeItem(KEY); } catch (e) {} }
  function novo() {
    return { id: uuid(), estruturaVersao: X.versao, premiumVersao: RP.versao, criadoEm: agora(), atualizadoEm: agora(), captura: null, origem: (location.search || '').slice(1, 200),
      teste: TESTE, cargo: null, desvio: null, auto: {}, respostas: {}, objetivo: null, campoAberto: '', codigo: '', codigoEstado: '',
      ordemM: {}, tempos: {}, fase: 'captura', saida: null, resultado: null, ia: null, iaEstado: '', primeiroNome: '' };
  }

  /* ---------- fluxo ---------- */
  function trilha() { if (!S.cargo) return null; var r = Rg.rotear(S.cargo, S.desvio); return r.trilha || null; }
  function papel(q) { return RP.ehExtra(q) ? 'pontua' : X.perguntas[q].papel; }
  function sequencia() {
    var seq = [{ tipo: 'cargo', id: 'P0' }];
    if (!S.cargo) return seq;
    var c = Rg.cargoDe(S.cargo);
    if (c.destino === 'EMPRESARIO') { seq.push({ tipo: 'emp' }); return seq; }
    if (c.destino === 'DESVIO') { seq.push({ tipo: 'desvio', id: 'P0b' }); if (!S.desvio) return seq; }
    seq.push({ tipo: 'auto', id: 'AUTO' });
    RP.montarFila(trilha(), S.respostas).forEach(function (q) { seq.push({ tipo: papel(q) === 'mentalidade' ? 'm' : 'q', id: q }); });
    seq.push({ tipo: 'obj', id: 'OBJ' });
    seq.push({ tipo: 'fim' });
    return seq;
  }
  function autoCompleta() { return RP.PILARES.every(function (p) { return S.auto[p] !== undefined && S.auto[p] !== null; }); }
  function respondida(el) {
    if (el.tipo === 'cargo') return !!S.cargo;
    if (el.tipo === 'desvio') return !!S.desvio;
    if (el.tipo === 'auto') return autoCompleta();
    if (el.tipo === 'obj') return !!S.objetivo;
    if (el.tipo === 'q' || el.tipo === 'm') return S.respostas[el.id] !== undefined && S.respostas[el.id] !== null;
    return false;
  }
  function primeiraPendente() { var seq = sequencia(); for (var i = 0; i < seq.length; i++) if (seq[i].tipo === 'emp' || seq[i].tipo === 'fim' || !respondida(seq[i])) return seq[i]; return seq[seq.length - 1]; }
  function indiceDe(el) { var seq = sequencia(); for (var i = 0; i < seq.length; i++) if (seq[i].tipo === el.tipo && seq[i].id === el.id) return i; return -1; }
  function proximo(el) { var seq = sequencia(), i = indiceDe(el); return seq[i + 1] || null; }
  function anterior(el) { var seq = sequencia(), i = indiceDe(el); return i > 0 ? seq[i - 1] : null; }

  function posicao(el) {
    var tr = trilha(); if (!tr || el.tipo === 'cargo' || el.tipo === 'desvio' || el.tipo === 'auto' || el.tipo === 'obj') return null;
    var fixas = RP.filaFixa(tr), offset = 1 + (S.cargo && Rg.cargoDe(S.cargo).destino === 'DESVIO' ? 1 : 0);
    var total = offset + fixas.length, prova = false, id = el.id;
    if (fixas.indexOf(id) < 0) {
      prova = true;
      for (var i = 0; i < fixas.length; i++) { var e = X.perguntas[fixas[i]]; if (e && e.prova && e.prova.id === id) { id = fixas[i]; break; } }
    }
    return { n: offset + fixas.indexOf(id) + 1, total: total, prova: prova };
  }
  function desenharProg(div, pos) {
    limpa(div);
    if (!pos) { div.className = 'prog vazio'; return; }
    div.className = 'prog';
    for (var i = 1; i <= pos.total; i++) div.appendChild(h('span', i < pos.n ? 'f' : i === pos.n ? 'c' : ''));
  }

  /* ---------- telas ---------- */
  var TELAS = ['t-e0', 't-q', 't-auto', 't-obj', 't-m', 't-trans', 't-calc', 't-emp', 't-r', 't-retomar', 't-ja'];
  function mostrar(id) {
    TELAS.forEach(function (t) { $(t).classList.toggle('on', t === id); });
    tela = id; document.body.setAttribute('data-tela', id); window.scrollTo(0, 0);
    var f = document.querySelector('#' + id + ' h1, #' + id + ' h2'); if (f) try { f.focus({ preventScroll: true }); } catch (e) {}
  }
  function empurrar() { try { history.pushState({ quiz: 1 }, ''); } catch (e) {} }

  function irPara(el, push) {
    if (!el) return;
    ver = el; if (push) empurrar(); tVer = agora();
    if (el.tipo === 'cargo' || el.tipo === 'desvio' || el.tipo === 'q') return telaPergunta(el);
    if (el.tipo === 'auto') return telaAuto();
    if (el.tipo === 'obj') return telaObjetivo();
    if (el.tipo === 'm') return (push && !S.respostas[el.id] && TL.transicaoMentalidade) ? telaTransicao(el) : telaMentalidade(el);
    if (el.tipo === 'emp') return telaEmpresario();
    if (el.tipo === 'fim') return finalizar();
  }

  function defPergunta(q) { if (RP.ehExtra(q)) { var x = RP.perguntaExtra(q); return { texto: x.texto, alternativas: x.alternativas }; } return P[q]; }
  function telaPergunta(el) {
    var q = el.id, def = defPergunta(q), pos = posicao(el);
    $('qTitulo').textContent = def.texto;
    $('qProva').hidden = !(pos && pos.prova); $('qProva').textContent = tt(TL.provaRotulo, 'Só mais uma sobre essa');
    $('qPasso').textContent = pos ? 'Pergunta ' + pos.n + ' de ' + pos.total : (el.tipo === 'cargo' ? 'Primeiro, o seu cargo' : 'Só mais uma antes');
    desenharProg($('qProg'), pos);
    var alts = $('qAlts'); limpa(alts);
    var lista = el.tipo === 'cargo' ? X.cargos.map(function (c) { return { id: c.id, texto: c.rotulo }; }) : def.alternativas;
    var atual = el.tipo === 'cargo' ? S.cargo : el.tipo === 'desvio' ? S.desvio : S.respostas[q];
    lista.forEach(function (a) {
      var b = h('button', 'alt' + (a.id === atual ? ' sel' : '')); b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', a.id === atual ? 'true' : 'false');
      b.dataset.id = a.id; b.appendChild(h('span', 'm')); b.appendChild(h('span', null, a.texto));
      b.addEventListener('click', function () { escolher(el, a.id); });
      alts.appendChild(b);
    });
    $('qContinuar').hidden = atual === undefined || atual === null;
    mostrar('t-q');
  }
  function respostasExistem() { return Object.keys(S.respostas).length > 0; }
  function confirmar(texto, ok) {
    $('modalTxt').textContent = texto; $('modal').classList.add('on'); $('modalOk').focus();
    $('modalOk').onclick = function () { $('modal').classList.remove('on'); ok(); };
    $('modalNao').onclick = function () { $('modal').classList.remove('on'); };
  }
  function escolher(el, id) {
    if (agora() < bloqueio) return;
    bloqueio = agora() + 300;
    var efetivar = function () {
      if (el.tipo === 'cargo') {
        var antes = S.cargo ? Rg.cargoDe(S.cargo).destino : null, depois = Rg.cargoDe(id).destino;
        if (antes !== depois) { S.respostas = {}; S.desvio = null; S.auto = {}; }
        S.cargo = id;
      } else if (el.tipo === 'desvio') { if (S.desvio && S.desvio !== id) { S.respostas = {}; S.auto = {}; } S.desvio = id; }
      else { S.respostas[el.id] = id; S.tempos[el.id] = (S.tempos[el.id] || 0) + (agora() - tVer); }
      salvar(); progresso();
      document.querySelectorAll('#qAlts .alt').forEach(function (b) { var s = String(b.dataset.id) === String(id); b.classList.toggle('sel', s); b.setAttribute('aria-checked', s ? 'true' : 'false'); });
      setTimeout(function () { avancar(); }, 250);
    };
    if (el.tipo === 'cargo' && S.cargo && S.cargo !== id && Rg.cargoDe(S.cargo).destino !== Rg.cargoDe(id).destino && respostasExistem()) {
      bloqueio = 0; return confirmar(tt(TL.trocaCargo, 'Trocar o cargo muda as perguntas. Continuar?'), efetivar);
    }
    if (el.tipo === 'desvio' && S.desvio && S.desvio !== id && respostasExistem()) { bloqueio = 0; return confirmar('Trocar esta resposta muda as perguntas. Continuar?', efetivar); }
    efetivar();
  }
  function avancar() { irPara(proximo(ver), true); }
  function voltarDireto() {
    if (!ver) return;
    if (ver.tipo === 'emp') { S.fase = 'perguntas'; S.saida = null; salvar(); }
    var a = anterior(ver);
    if (!a) { ver = null; mostrar('t-e0'); return; }
    irPara(a, false);
  }
  function botaoVoltar() { if (history.state && history.state.quiz) history.back(); else voltarDireto(); }

  /* ---------- autoavaliação (D7) ---------- */
  function linhaAuto(p) {
    var f = RP.fixoPilar(trilha() || 'T3', p);
    return f.linha_autoavaliacao || ((TV.autoavaliacao || {}).linhas || {})[RP.CURTO[p]] || '';
  }
  function nomePilar(p) { var f = RP.fixoPilar(trilha() || 'T3', p); return (f.nome && !f.provisorio ? f.nome : null) || X.rotulosPilar[p]; }
  function telaAuto() {
    var A = TV.autoavaliacao || {};
    $('autoTitulo').textContent = tt(A.titulo, 'Antes de começar');
    $('autoTexto').textContent = tt(A.instrucao, '');
    $('autoPasso').textContent = '';
    var box = $('autoReguas'); limpa(box);
    RP.PILARES.forEach(function (p, i) {
      var tocado = S.auto[p] !== undefined && S.auto[p] !== null;
      var d = h('div', 'regua' + (tocado ? ' tocada' : '')), id = 'ra-' + p;
      var cab = h('div', 'regua-cab'); var lb = h('label', null); lb.htmlFor = id;
      lb.appendChild(h('b', null, nomePilar(p))); lb.appendChild(h('span', null, linhaAuto(p)));
      cab.appendChild(lb); var v = h('output', 'regua-v', tocado ? String(S.auto[p]) : '–'); v.setAttribute('for', id); cab.appendChild(v); d.appendChild(cab);
      var inp = document.createElement('input'); inp.type = 'range'; inp.min = 0; inp.max = 10; inp.step = 1; inp.id = id; inp.value = tocado ? S.auto[p] : 5;
      inp.setAttribute('aria-valuetext', tocado ? String(S.auto[p]) : 'sem nota');
      function marcar() { S.auto[p] = Number(inp.value); v.textContent = inp.value; inp.setAttribute('aria-valuetext', inp.value); d.classList.add('tocada'); pinta(); salvar(); $('autoContinuar').disabled = !autoCompleta(); }
      function pinta() { inp.style.setProperty('--p', (Number(inp.value) * 10) + '%'); }
      inp.addEventListener('input', marcar); inp.addEventListener('change', marcar);
      inp.addEventListener('pointerdown', function () { setTimeout(marcar, 0); });
      pinta(); d.appendChild(inp);
      var es = h('div', 'regua-esc'); es.setAttribute('aria-hidden', 'true'); es.appendChild(h('span', null, '0 · ' + tt(A.rotulo_0, ''))); es.appendChild(h('span', null, '10 · ' + tt(A.rotulo_10, ''))); d.appendChild(es);
      box.appendChild(d);
    });
    $('autoContinuar').textContent = tt(A.botao, 'Continuar');
    $('autoContinuar').disabled = !autoCompleta();
    $('autoContinuar').onclick = function () { if (!autoCompleta()) return; S.tempos.AUTO = (S.tempos.AUTO || 0) + (agora() - tVer); salvar(); avancar(); };
    mostrar('t-auto');
  }

  /* ---------- objetivo + campo aberto (D6) ---------- */
  function telaObjetivo() {
    var O = TV.objetivo || {}, CA = TV.campo_aberto || {};
    $('objTitulo').textContent = tt(O.pergunta, 'O que você quer para a sua carreira?');
    $('objPasso').textContent = 'Para terminar';
    var alts = $('objAlts'); limpa(alts);
    (O.alternativas || RP.OBJETIVOS).forEach(function (a) {
      var b = h('button', 'alt' + (a.id === S.objetivo ? ' sel' : '')); b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', a.id === S.objetivo ? 'true' : 'false');
      b.appendChild(h('span', 'm')); b.appendChild(h('span', null, a.texto));
      b.addEventListener('click', function () {
        S.objetivo = a.id; salvar();
        alts.querySelectorAll('.alt').forEach(function (x) { var s = x === b; x.classList.toggle('sel', s); x.setAttribute('aria-checked', s ? 'true' : 'false'); });
        mostraAberto(true);
      });
      alts.appendChild(b);
    });
    $('lAberto').textContent = tt(CA.pergunta, '');
    var lb = $('lAberto'); var op = h('small', null, ' ' + tt(CA.opcional, 'Opcional')); lb.appendChild(op);
    $('abertoAviso').textContent = tt(CA.aviso, '');
    var ta = $('campoAberto'), lim = Number(CA.limite) || 600; ta.maxLength = lim; ta.value = S.campoAberto || '';
    function conta() { $('abertoCont').textContent = tt(CA.contador, '{n} de ' + lim + ' caracteres').replace('{n}', ta.value.length); }
    ta.oninput = function () { S.campoAberto = ta.value.slice(0, lim); salvar(); conta(); };
    conta();
    function mostraAberto(rolar) { $('objAberto').hidden = !S.objetivo; $('objContinuar').disabled = !S.objetivo; if (rolar && !REDUZ) setTimeout(function () { try { $('objAberto').scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {} }, 80); }
    mostraAberto(false);
    $('objContinuar').textContent = tt(CA.botao_seguir, 'Ver o meu resultado');
    $('objContinuar').onclick = function () { if (!S.objetivo) return; S.tempos.OBJ = (S.tempos.OBJ || 0) + (agora() - tVer); salvar(); avancar(); };
    mostrar('t-obj');
  }

  /* ---------- mentalidade ---------- */
  function ordemM(m) {
    if (!S.ordemM[m]) {
      var ids = P[m].alternativas.map(function (a) { return a.id; });
      if (!SEED) for (var i = ids.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = ids[i]; ids[i] = ids[j]; ids[j] = t; }
      S.ordemM[m] = ids; salvar();
    }
    return S.ordemM[m];
  }
  function telaTransicao(el) {
    var t = TL.transicaoMentalidade;
    $('transTitulo').textContent = t.titulo; $('transTexto').textContent = t.texto; $('transBotao').textContent = t.botao || 'Continuar';
    $('transBotao').onclick = function () { telaMentalidade(el); };
    mostrar('t-trans');
  }
  function telaMentalidade(el) {
    var m = el.id, pos = posicao(el), sel = (S.respostas[m] || []).slice();
    $('mTitulo').textContent = P[m].texto;
    $('mPasso').textContent = pos ? 'Seu jeito de pensar · ' + pos.n + ' de ' + pos.total : '';
    desenharProg($('mProg'), pos);
    var chips = $('mChips'); limpa(chips);
    var texto = {}; P[m].alternativas.forEach(function (a) { texto[a.id] = a.texto; });
    function atualiza() {
      var n = sel.length, pts = document.querySelectorAll('#mContador .pts i');
      pts.forEach(function (p, i) { p.classList.toggle('f', i < n); });
      $('mCont').textContent = n + ' de 3 escolhidas';
      chips.querySelectorAll('.chip').forEach(function (c) { var s = sel.indexOf(Number(c.dataset.id)) >= 0; c.classList.toggle('sel', s); c.setAttribute('aria-pressed', s ? 'true' : 'false'); c.classList.toggle('off', n >= 3 && !s); });
      $('mContinuar').disabled = n !== 3;
    }
    ordemM(m).forEach(function (id) {
      var b = h('button', 'chip', texto[id]); b.type = 'button'; b.dataset.id = id; b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        var k = sel.indexOf(id);
        if (k >= 0) sel.splice(k, 1);
        else if (sel.length >= 3) {
          $('mCont').textContent = tt(TL.mentalidadeLimite, 'Você já escolheu 3. Desmarque uma para trocar.');
          var c = $('mContador'); c.classList.remove('pisca'); void c.offsetWidth; c.classList.add('pisca');
          return;
        } else sel.push(id);
        S.respostas[m] = sel.slice(); if (!sel.length) delete S.respostas[m];
        salvar(); atualiza();
      });
      chips.appendChild(b);
    });
    atualiza();
    $('mContinuar').onclick = function () { if (sel.length !== 3) return; S.respostas[m] = sel.slice(); S.tempos[m] = (S.tempos[m] || 0) + (agora() - tVer); salvar(); progresso(); avancar(); };
    mostrar('t-m');
  }

  /* ---------- Empresário(a): tela própria atual ---------- */
  function telaEmpresario() {
    var em = R.empresario || {};
    $('eTitulo').textContent = Rg.subst(em.titulo || 'Obrigado!', { nome: S.primeiroNome });
    $('eCorpo').textContent = Rg.subst(em.corpo || '', {});
    var cta = $('eCta'); cta.textContent = (em.cta && em.cta.rotulo) || 'Falar no WhatsApp';
    cta.href = Rg.linkWhatsApp('EMPRESARIAL', 'EMP');
    cta.onclick = function () { ctaClique('EMPRESARIAL', 'EMPRESARIO'); };
    $('eEmail').textContent = '';
    S.saida = 'EMPRESARIO'; S.fase = 'fim'; salvar();
    mostrar('t-emp');
    enviarPremium(0, null);
  }

  /* ---------- fim: régua na hora, IA quando chegar ---------- */
  var calcAtual = null, esperaTimer = null, frasesTimer = null;
  function finalizar() {
    var tr = trilha(), calc;
    try { calc = RP.calcular(tr, S.respostas, S.auto); }
    catch (e) { return irPara(primeiraPendente(), false); }
    S.saida = calc.saida; S.resultado = calc.res; S.fase = 'fim'; S.concluidoEm = agora();
    var querIa = !!(S.codigo && S.codigoEstado !== 'invalido' && S.codigoEstado !== 'usado' && API_OK);
    S.iaEstado = querIa ? 'esperando' : 'sem_ia'; S.ia = null; salvar();
    calcAtual = calc;
    enviarPremium(0, calc);
    var cl = TL.calculando;
    var mostra = function () { desenharRelatorio(calc, S.iaEstado === 'esperando', true); if (S.iaEstado === 'esperando') iniciarEspera(); };
    if (!cl) return mostra();
    telaCalculando(cl, calc.res, mostra);
  }
  function iniciarEspera() {
    clearTimeout(esperaTimer);
    esperaTimer = setTimeout(function () { if (S.iaEstado === 'esperando') { S.iaEstado = 'tempo'; salvar(); preencher(null); } }, ESPERA_MS);
  }
  function chegouIa(rel) {
    if (S.iaEstado !== 'esperando') return; // passou do tempo de espera: fica o texto fixo (e o código continua válido)
    clearTimeout(esperaTimer);
    var ok = rel && RP.validarSaidaIA(rel, { calc: calcAtual }).ok;
    S.ia = ok ? rel : null; S.iaEstado = ok ? 'ok' : 'sem_ia'; salvar();
    preencher(S.ia);
    if (ok) confirmarEntrega(0); // o código só é gasto agora, com o relatório da IA na tela
  }
  function confirmarEntrega(tent) {
    if (!API_OK || !S.codigo) return;
    post({ acao: 'entregue', id: S.id, estruturaVersao: X.versao, teste: !!S.teste, site: '', codigo: S.codigo }).then(function (r) { if (!r || !r.ok) throw new Error('falhou'); })
      .catch(function () { if (tent < 2) setTimeout(function () { confirmarEntrega(tent + 1); }, 3000); });
  }

  /* ---------- calculando (a mesma animação do /quiz/) ---------- */
  var ICONES = {
    entrega: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.6"/>',
    visibilidade: '<path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    influencia: '<circle cx="12" cy="5.5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.8 7.7L6.3 15.8M13.2 7.7l4.5 8.1M7.5 18h9"/>',
    proximo_nivel: '<path d="M3 20h5v-5h5v-5h5"/><path d="M15 4h5v5M20 4l-6 6"/>',
    conversa: '<path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5z"/><path d="M8.5 11.5h7"/>',
    luz: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
    pessoa: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.2-6 8-6s7 2 8 6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', sobe: '<path d="M12 19V5M5 12l7-7 7 7"/>', desce: '<path d="M12 5v14M5 12l7 7 7-7"/>'
  };
  function icone(id, cls) { var e = h('span', cls); e.setAttribute('aria-hidden', 'true'); e.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONES[id] || '') + '</svg>'; return e; }
  function telaCalculando(cl, res, depois) {
    $('calcTitulo').textContent = cl.titulo;
    var msg = $('calcMsg'), ul = $('calcPil'), barra = $('calcBarra'), nos = document.querySelectorAll('#t-calc .radar .no');
    limpa(ul); msg.textContent = ''; barra.style.width = '0';
    nos.forEach(function (n) { n.classList.remove('on'); });
    var ids = RP.PILARES;
    var lis = ids.map(function (id) {
      var li = h('li'); li.appendChild(icone(id, 'ic')); li.appendChild(h('span', null, nomePilar(id))); li.appendChild(h('span', 'ok'));
      var tr = h('span', 'trilho'); tr.appendChild(h('i')); li.appendChild(tr); ul.appendChild(li); return li;
    });
    var linhas = cl.linhas || [], PASSO = REDUZ ? 60 : 550, INI = REDUZ ? 20 : 200, total = INI + ids.length * PASSO + (REDUZ ? 50 : 300);
    linhas.forEach(function (t, j) { setTimeout(function () { if (tela === 't-calc') msg.textContent = t; }, INI + j * ((ids.length * PASSO) / Math.max(1, linhas.length))); });
    lis.forEach(function (li, i) {
      setTimeout(function () { li.classList.add('lendo'); if (nos[i]) nos[i].classList.add('on'); }, INI + i * PASSO);
      setTimeout(function () { li.classList.remove('lendo'); li.classList.add('feito'); barra.style.width = ((i + 1) / lis.length * 100) + '%'; }, INI + (i + 1) * PASSO - 40);
    });
    mostrar('t-calc');
    setTimeout(function () { if (tela === 't-calc') depois(); }, total);
  }

  /* ---------- relatório (visual da demo-v4b) ---------- */
  var slots = [], observador = null;
  function rv(el) { el.classList.add('r-rv'); return el; }
  function paras(el, lista, cls) { (lista || []).forEach(function (t) { if (t) el.appendChild(h('p', cls || null, t)); }); }
  function esqueleto(el, n) { limpa(el); var s = h('div', 'r-esq'); s.setAttribute('aria-hidden', 'true'); for (var i = 0; i < (n || 3); i++) s.appendChild(h('i')); el.appendChild(s); }
  function slot(el, fn, linhas) { slots.push({ el: el, fn: fn, n: linhas }); return el; }
  function dataBr(t) { var d = new Date(t); return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear(); }
  function secs() { return TV.secoes_relatorio || {}; }
  function nivelRot(n) { return (TV.niveis || {})[n] || n; }
  function primeiraParte(t) { t = String(t || ''); var i = t.indexOf(':'); return i > 0 ? t.slice(0, i) : t; }
  function tituloH1(el, txt) { limpa(el); String(txt || '').split('**').forEach(function (p, i) { if (!p) return; if (i % 2) el.appendChild(h('span', null, p)); else el.appendChild(document.createTextNode(p)); }); }

  function radar(vm) {
    var c = { x: 190, y: 170 }, Rr = 110, ps = {};
    vm.pilares.forEach(function (p) { ps[p.id] = Math.max(4, p.pct) / 100; });
    var pt = { entrega: [c.x, c.y - Rr * ps.entrega], visibilidade: [c.x + Rr * ps.visibilidade, c.y], influencia: [c.x, c.y + Rr * ps.influencia], proximo_nivel: [c.x - Rr * ps.proximo_nivel, c.y] };
    var aneis = '';
    [0.25, 0.5, 0.75, 1].forEach(function (k) { aneis += '<polygon class="anel' + (k === 1 ? ' ext' : '') + '" points="' + [c.x + ',' + (c.y - Rr * k), (c.x + Rr * k) + ',' + c.y, c.x + ',' + (c.y + Rr * k), (c.x - Rr * k) + ',' + c.y].join(' ') + '"/>'; });
    var area = RP.PILARES.map(function (p) { return pt[p][0].toFixed(1) + ',' + pt[p][1].toFixed(1); }).join(' ');
    var pontos = RP.PILARES.map(function (p) { return '<circle class="ponto" cx="' + pt[p][0].toFixed(1) + '" cy="' + pt[p][1].toFixed(1) + '" r="4.5"/>'; }).join('');
    var L = { entrega: { bx: 140, by: 2, bw: 100, bh: 52, tx: 190, ty: 22, px: 168, py: 29 }, visibilidade: { bx: 296, by: 138, bw: 84, bh: 56, tx: 338, ty: 160, px: 316, py: 167 },
      influencia: { bx: 130, by: 284, bw: 120, bh: 56, tx: 190, ty: 302, px: 168, py: 310 }, proximo_nivel: { bx: 0, by: 128, bw: 78, bh: 72, tx: 40, ty: 149, px: 18, py: 173 } };
    var rots = vm.pilares.map(function (p) {
      var l = L[p.id], teto = p.teto, nm = p.id === 'proximo_nivel' ? '<text class="nm" x="40" y="149" text-anchor="middle">Próximo</text><text class="nm" x="40" y="165" text-anchor="middle">nível</text>' : '<text class="nm" x="' + l.tx + '" y="' + l.ty + '" text-anchor="middle">' + p.nome + '</text>';
      var px = teto && p.id === 'influencia' ? 140 : l.px;
      return '<a class="rot' + (teto ? ' at' : '') + '" href="#dd-' + p.id + '" data-alvo="dd-' + p.id + '" tabindex="0" role="link" aria-label="' + p.nome + ' ' + p.pct + '%' + (teto ? ', seu próximo degrau' : '') + ', abrir leitura">' +
        '<rect class="bg" x="' + l.bx + '" y="' + l.by + '" width="' + l.bw + '" height="' + l.bh + '" rx="10"/>' + nm +
        '<rect class="pill" x="' + px + '" y="' + l.py + '" width="44" height="20" rx="10"/><text class="pct" x="' + (px + 22) + '" y="' + (l.py + 14.5) + '" text-anchor="middle" data-n="' + p.pct + '">' + (REDUZ ? p.pct + '%' : '0%') + '</text>' +
        (teto && p.id === 'influencia' ? '<text class="tetotag" x="192" y="324" text-anchor="start">PRÓXIMO DEGRAU</text>' : '') + '</a>';
    }).join('');
    var tit = vm.pilares.map(function (p) { return p.nome + ' ' + p.pct + '%'; }).join(', ');
    var s = svg('<title>' + tit + '</title><defs><radialGradient id="gArea" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#5fe0ff" stop-opacity=".55"/><stop offset="1" stop-color="#1162cf" stop-opacity=".35"/></radialGradient>' +
      '<filter id="brilho" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>' +
      aneis + '<line class="eixo" x1="190" y1="60" x2="190" y2="280"/><line class="eixo" x1="80" y1="170" x2="300" y2="170"/>' +
      '<polygon class="area" points="' + area + '"/>' + pontos + rots, 'r-radar', '0 0 380 340');
    s.setAttribute('role', 'img'); s.id = 'rRadar';
    return s;
  }

  function anel(p) {
    var a = h('span', 'r-anelp'), c = 2 * Math.PI * 22;
    a.appendChild(svg('<circle class="f" cx="27" cy="27" r="22"/><circle class="v" cx="27" cy="27" r="22" style="stroke-dasharray:' + c.toFixed(1) + ';stroke-dashoffset:' + (REDUZ ? (c * (1 - p.pct / 100)).toFixed(1) : c.toFixed(1)) + '" data-off="' + (c * (1 - p.pct / 100)).toFixed(1) + '"/>', null, '0 0 54 54'));
    a.appendChild(h('b', null, p.pct + '%')); return a;
  }
  function citacao(el, c) {
    limpa(el); if (!c) { el.hidden = true; return; } el.hidden = false;
    var bq = h('blockquote'); var as = h('span', 'r-aspas', '“'); as.setAttribute('aria-hidden', 'true'); bq.appendChild(as);
    bq.appendChild(h('q', null, c.texto)); var ci = h('cite', null, c.autor); bq.appendChild(ci); el.appendChild(bq);
  }

  function desenharRelatorio(calc, pendente, primeiraVez) {
    slots = [];
    var vm = RP.montarRelatorio(calc, S.ia, { primeiroNome: S.primeiroNome }), nome = S.primeiroNome, m = Rg.montarResultado(calc.res, nome);
    var c = $('rCorpo'); limpa(c);
    var rel = h('div', 'rel'); c.appendChild(rel);
    if (pendente) {
      var es = h('div', 'r-espera'); es.id = 'rEspera'; es.setAttribute('role', 'status'); es.setAttribute('aria-live', 'polite');
      es.appendChild(h('span', 'r-giro')); es.appendChild(h('span', null, ((TV.espera || {}).frases || ['Montando o seu relatório.'])[0])); rel.appendChild(es);
      girarFrases(es.lastChild);
    }
    // cabeçalho
    var hero = rv(h('header', 'r-hero'));
    hero.appendChild(h('div', 'r-kick', 'Relatório' + (nome ? ' de ' + nome : '') + ' · ' + dataBr(S.concluidoEm || agora())));
    var h1 = h('h1'); h1.tabIndex = -1; tituloH1(h1, m.titulo); hero.appendChild(h1);
    var chips = h('div', 'r-chips'), cargo = Rg.cargoDe(S.cargo);
    var ctx = calc.res.contexto || {}, tempoTxt = { '<1': 'menos de 1 ano', '1-2': '1 a 2 anos', '3-5': '3 a 5 anos', '>5': 'mais de 5 anos' }[ctx.tempo];
    var ch1 = h('span', 'r-chip'); ch1.appendChild(h('i')); ch1.appendChild(document.createTextNode((cargo ? cargo.rotulo : '') + (tempoTxt ? ' · ' + tempoTxt + ' na cadeira' : ''))); chips.appendChild(ch1);
    var tetoP = vm.pilares.filter(function (p) { return p.teto; })[0];
    var ch2 = h('span', 'r-chip teto'); ch2.appendChild(h('i')); ch2.appendChild(document.createTextNode(tetoP ? 'Próximo degrau em ' + tetoP.nome : 'Os 4 pilares firmes')); chips.appendChild(ch2);
    hero.appendChild(chips);
    var esc = h('div', 'r-escadinha'); esc.setAttribute('aria-hidden', 'true');
    vm.pilares.forEach(function (p) { esc.appendChild(h('i', p.estado === 'consolidado' ? 'ok' : (p.teto ? 'foco' : 'vaz'))); });
    hero.appendChild(esc);
    var el2 = h('div', 'r-esc-leg'); el2.setAttribute('aria-hidden', 'true'); vm.pilares.forEach(function (p) { el2.appendChild(h('span', p.teto ? 'f' : '', p.nome)); }); hero.appendChild(el2);
    rel.appendChild(hero);

    var n = 0;
    function kick(txt) { n++; var k = rv(h('div', 'r-kick')); k.appendChild(h('span', 'n', String(n))); k.appendChild(document.createTextNode(txt)); return k; }

    // 1 · resumo
    var s1 = h('section', 'r-bloco'); s1.id = 'resumo'; s1.appendChild(kick(tt(secs().resumo, 'Resumo executivo')));
    var grid = h('div', 'r-resumo-grid'), tx = rv(h('div', 'r-tx'));
    slot(tx, function (el, v) {
      limpa(el);
      if (v.ia) {
        el.appendChild(h('p', 'r-lead', v.resumo.abertura));
        if (v.resumo.traco) { var nt = h('div', 'r-nome-traco'); nt.appendChild(h('small', null, 'Um traço seu')); nt.appendChild(h('div', null, v.resumo.traco.nome)); el.appendChild(nt); el.appendChild(h('p', null, v.resumo.traco.explicacao)); }
      } else el.appendChild(h('p', 'r-lead', m.resumo));
    }, 4);
    grid.appendChild(tx);
    var pn = rv(h('div', 'r-painel')); var pc = h('div', 'r-p-cab', 'Seus 4 pilares'); pc.appendChild(h('span', null, '% das respostas')); pn.appendChild(pc);
    pn.appendChild(radar(vm)); pn.appendChild(h('div', 'r-dica', 'Toque num pilar para ir à leitura dele'));
    grid.appendChild(pn); s1.appendChild(grid);
    if (vm.abertura_pilares) s1.appendChild(rv(h('p', 'r-abertura', vm.abertura_pilares)));
    var ordem = rv(h('div', 'r-ordem'));
    vm.pilares.forEach(function (p, i) {
      var d = h('div', 'd' + (p.teto ? ' foco' : (p.estado === 'consolidado' ? '' : ' vaz'))); d.appendChild(h('span', 'num', String(i + 1)));
      var dd = h('div'); dd.appendChild(h('b', null, p.nome)); dd.appendChild(h('span', null, p.teto ? 'O seu próximo degrau' : nivelRot(p.nivel))); d.appendChild(dd); ordem.appendChild(d);
    });
    s1.appendChild(ordem); rel.appendChild(s1);

    // 2 · como você se vê
    if (vm.gaps.length) {
      var s2 = h('section', 'r-bloco'); s2.appendChild(kick('Leitura cruzada'));
      s2.appendChild(rv(h('h2', null, tt(secs().gaps, 'Como você se vê × o que as respostas mostram'))));
      var gp = rv(h('div', 'r-painel r-gap')); gp.id = 'rGap';
      var lg = h('div', 'r-gap-leg'); var l1 = h('span'); l1.appendChild(h('i', 'mk-v')); l1.appendChild(document.createTextNode('A nota que você se deu (×10)')); var l2 = h('span'); l2.appendChild(h('i', 'mk-e')); l2.appendChild(document.createTextNode('O que as respostas mostram')); lg.appendChild(l1); lg.appendChild(l2); gp.appendChild(lg);
      vm.gaps.forEach(function (g) {
        var li = h('div', 'r-g-lin'); li.dataset.v = g.nota * 10; li.dataset.e = g.pct;
        var top = h('div', 'r-g-top'); top.appendChild(h('b', null, g.nome)); top.appendChild(h('span', 'r-badge' + (g.tipo === 'acima' ? ' acima' : g.tipo === 'abaixo' ? ' abaixo' : ''), ((TV.gaps || {})[g.tipo]) || g.tipo)); li.appendChild(top);
        var tr = h('div', 'r-trilho'); [25, 50, 75].forEach(function (x) { var t = h('i', 't'); t.style.left = x + '%'; tr.appendChild(t); });
        tr.appendChild(h('i', 'vao' + (g.tipo === 'alinhado' ? ' leve' : ''))); tr.appendChild(h('i', 'm v')); tr.appendChild(h('i', 'm e')); li.appendChild(tr);
        var nn = h('div', 'r-g-nums'); var a1 = h('span', null, 'Sua nota: '); a1.appendChild(h('em', null, String(g.nota))); var a2 = h('span', null, 'Respostas: '); a2.appendChild(h('strong', null, g.pct + '%')); nn.appendChild(a1); nn.appendChild(a2); li.appendChild(nn);
        gp.appendChild(li);
      });
      if (TV.como_lemos_isso) gp.appendChild(h('p', 'r-como-lemos', TV.como_lemos_isso));
      s2.appendChild(gp);
      var gtx = h('div'); s2.appendChild(gtx);
      slot(gtx, function (el, v) {
        limpa(el);
        v.gaps.forEach(function (g) {
          if (!g.texto.length) return;
          var b = rv(h('div', 'r-gaptx')); b.appendChild(h('div', 'cab', g.nome + ' · ' + Math.abs(g.gap) + ' pontos de diferença'));
          paras(b, g.texto); el.appendChild(b);
        });
      }, vm.gaps.some(function (g) { return g.tipo !== 'alinhado'; }) ? 3 : 0);
      rel.appendChild(s2);
    }
    var fe = h('div'); rel.appendChild(fe);
    slot(fe, function (el, v) { limpa(el); if (v.ia && v.resumo.fecho) { var f = rv(h('div', 'r-fecho')); f.appendChild(h('p', null, v.resumo.fecho)); el.appendChild(f); } }, 2);

    // pausas (3 citações)
    var cits = [0, 1, 2].map(function () { var s = rv(h('section', 'r-cit')); s.setAttribute('aria-label', 'Citação'); return s; });
    cits.forEach(function (ce, i) { slot(ce, function (el, v) { citacao(el, v.citacoes[i]); }, 0); });
    rel.appendChild(cits[0]);

    // 3 · pilar por pilar
    var s3 = h('section', 'r-bloco'); s3.appendChild(kick('Pilar por pilar'));
    function artigo(p) {
      var a = rv(h('article', 'r-pilar' + (p.teto ? ' teto' : ''))); a.id = 'dd-' + p.id;
      var hd = h('div', 'r-p-head'); hd.appendChild(anel(p));
      var mm = h('span', 'r-p-meio'); mm.appendChild(h('span', 'r-p-est', p.nome + ' · ' + (p.teto ? 'seu próximo degrau' : nivelRot(p.nivel)))); mm.appendChild(h('h3', null, primeiraParte(p.o_que_medimos) || p.nome)); hd.appendChild(mm); a.appendChild(hd);
      var inn = h('div', 'r-p-in');
      if (p.como_funciona.length) {
        var cf = h('div', 'r-cf'); var ro = h('div', 'r-rotulo'); ro.appendChild(icone('luz', 'ic')); ro.appendChild(document.createTextNode('Como funciona')); cf.appendChild(ro);
        paras(cf, p.como_funciona); inn.appendChild(cf);
      }
      if (p.por_que_pesa) {
        var bt = h('button', 'r-evid'); bt.type = 'button'; bt.setAttribute('aria-expanded', 'false'); bt.appendChild(h('span', 'mais', '+')); bt.appendChild(document.createTextNode('Por que isso pesa?'));
        var ab = h('div', 'r-abre'), d1 = h('div'), dn = h('div', 'dentro'); dn.appendChild(h('p', null, p.por_que_pesa)); d1.appendChild(dn); ab.appendChild(d1); ab.id = 'pq-' + p.id; bt.setAttribute('aria-controls', ab.id);
        bt.addEventListener('click', function () { var o = bt.getAttribute('aria-expanded') !== 'true'; bt.setAttribute('aria-expanded', o ? 'true' : 'false'); ab.classList.toggle('on', o); });
        inn.appendChild(bt); inn.appendChild(ab);
      }
      var ns = h('div', 'r-ns'); var r2 = h('div', 'r-rotulo'); r2.appendChild(icone('pessoa', 'ic')); r2.appendChild(document.createTextNode('Agora, o seu caso')); ns.appendChild(r2);
      var corpo = h('div'); ns.appendChild(corpo); inn.appendChild(ns);
      slot(corpo, function (el, v) {
        limpa(el); var q = v.pilares.filter(function (x) { return x.id === p.id; })[0];
        if (q.titulo) el.appendChild(h('h4', 'r-tit-ia', q.titulo));
        paras(el, q.seu_caso);
        if (q.cruzamento) { var cz = h('div', 'r-cruza'); cz.appendChild(h('small', null, 'Cruzando as suas respostas')); cz.appendChild(h('p', null, q.cruzamento)); el.appendChild(cz); }
        if (q.ponte) {
          var alvo = q.ponteAlvo, pt = h(alvo ? 'a' : 'div', 'r-ponte'); if (alvo) { pt.href = '#dd-' + alvo; pt.dataset.alvo = 'dd-' + alvo; pt.addEventListener('click', function (ev) { ev.preventDefault(); vaiPara('dd-' + alvo); }); }
          pt.appendChild(icone('desce', 'ic')); pt.appendChild(h('p', null, q.ponte)); el.appendChild(pt);
        }
      }, 4);
      a.appendChild(inn);
      return a;
    }
    var porId = {}; vm.pilares.forEach(function (p) { porId[p.id] = p; });
    function titSec(txt, ic, at) { var t = rv(h('div', 'r-sec-tit' + (at ? ' at' : ''))); t.appendChild(icone(ic, 'ic')); t.appendChild(h('h2', null, txt)); return t; }
    if (vm.forcas.length) {
      s3.appendChild(titSec(tt(secs().forcas, 'O que foi muito bom'), 'check'));
      vm.forcas.forEach(function (id, i) { if (i) s3.appendChild(rv(h('div', 'r-divisor', 'segunda força'))); s3.appendChild(artigo(porId[id])); });
      // pilar firme que não entrou nas duas forças fica aqui, e não em "o que pede atenção"
      var firmesFora = vm.pilares.filter(function (p) { return p.grupo === 'outro' && p.estado === 'consolidado'; });
      if (firmesFora.length) { s3.appendChild(rv(h('div', 'r-divisor', 'também firme'))); firmesFora.forEach(function (p) { s3.appendChild(artigo(p)); }); }
    }
    rel.appendChild(s3);
    rel.appendChild(cits[1]);
    var s4 = h('section', 'r-bloco r-sem-topo');
    s4.appendChild(titSec(tt(secs().oportunidades, 'O que pede atenção'), 'sobe', true));
    vm.oportunidades.forEach(function (id) { s4.appendChild(artigo(porId[id])); });
    var outros = vm.pilares.filter(function (p) { return p.grupo === 'outro' && p.estado !== 'consolidado'; });
    if (outros.length) { s4.appendChild(rv(h('div', 'r-divisor', 'os outros pilares'))); outros.forEach(function (p) { s4.appendChild(artigo(p)); }); }
    rel.appendChild(s4);
    rel.appendChild(cits[2]);

    // 4 · plano
    var s5 = h('section', 'r-bloco r-sem-topo'); s5.id = 'plano'; s5.appendChild(kick('Plano de 30 dias'));
    s5.appendChild(rv(h('h2', null, tt(secs().plano, 'Seu plano para os próximos 30 dias'))));
    var dias = rv(h('div', 'r-dias')); dias.id = 'rDias'; dias.setAttribute('aria-hidden', 'true');
    for (var i = 1; i <= 30; i++) { var di = h('i', i <= 10 ? 'f1' : (i <= 20 ? 'f2' : 'f3')); di.style.transitionDelay = (i * 25) + 'ms'; dias.appendChild(di); }
    s5.appendChild(dias);
    var dl = rv(h('div', 'r-dias-leg')); dl.setAttribute('aria-hidden', 'true'); ['Dia 1', 'Dia 15', 'Dia 30'].forEach(function (t) { dl.appendChild(h('span', null, t)); }); s5.appendChild(dl);
    var linha = h('div', 'r-linha'); linha.id = 'rLinha'; s5.appendChild(linha);
    slot(linha, function (el, v) {
      limpa(el); el.appendChild(h('i', 'trilha')); var en = h('i', 'enche'); en.id = 'rEnche'; el.appendChild(en);
      v.plano.forEach(function (a, k) {
        var ps = rv(h('div', 'r-passo' + (k === 0 ? ' princ' : ''))); ps.appendChild(h('span', 'no', String(k + 1)));
        if (a.quando) ps.appendChild(h('div', 'quando', a.quando));
        var cx = h('div', 'cx'); cx.appendChild(h('h3', null, a.titulo)); cx.appendChild(h('p', null, a.como_fazer));
        if (a.frase_pronta) { var bo = h('div', 'r-bolhas'); bo.appendChild(h('div', 'r-bolha', '“' + a.frase_pronta.replace(/^[“"]|[”"]$/g, '') + '”')); cx.appendChild(bo); }
        if (a.sinal) { var si = h('div', 'r-sinal'); si.appendChild(icone('check', 'ic')); si.appendChild(h('p', null, a.sinal)); cx.appendChild(si); }
        ps.appendChild(cx); el.appendChild(ps);
      });
    }, 5);
    rel.appendChild(s5);

    // 5 · convite
    var s6 = h('section', 'r-bloco'); s6.id = 'convite'; s6.appendChild(kick(tt(secs().convite, 'O convite')));
    var cv = rv(h('div', 'r-convite')); s6.appendChild(cv);
    slot(cv, function (el, v) {
      limpa(el); var k = v.convite;
      if (k.abertura) el.appendChild(h('p', 'r-conv-ab', k.abertura));
      var selo = h('div', 'r-selo'); var conv = k.chave === 'conversa';
      var giro = (conv ? 'PRÓXIMO PASSO · CONVERSA COM A EQUIPE · ' : 'MATCH ALTO · ' + String(k.nome).toUpperCase() + ' · ');
      selo.appendChild(svg('<defs><path id="rCirc" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"/></defs><circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,.18)"/><g class="giro"><text font-size="8" font-weight="800" fill="#5fe0ff"><textPath href="#rCirc" textLength="242" lengthAdjust="spacing">' + giro.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</textPath></text></g><circle cx="50" cy="50" r="26" fill="#fff"/><path d="M39 50.5l7.5 7.5L62 42.5" fill="none" stroke="#1162cf" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>', null, '0 0 100 100'));
      var st = h('div'); st.appendChild(h('div', 't1', 'Seu resultado indica')); st.appendChild(h('div', 't2', conv ? 'Uma conversa sobre o seu próximo passo' : 'Match alto com ' + (k.chave === 'lap' ? 'o ' : 'a ') + k.nome)); selo.appendChild(st);
      el.appendChild(selo);
      if (k.match) el.appendChild(h('p', 'r-conv-p', k.match));
      if (k.motivos.length) { var mo = h('div', 'r-motivos'); k.motivos.forEach(function (t, j) { var it = h('div', 'r-motivo'); it.appendChild(h('span', null, String(j + 1))); var dv = h('div'); dv.appendChild(h('p', null, t)); it.appendChild(dv); mo.appendChild(it); }); el.appendChild(mo); }
      if (k.acesso) el.appendChild(h('p', 'r-conv-p', k.acesso));
      if (k.dores.length) {
        el.appendChild(h('div', 'r-dores-t', 'Toque no que você sente hoje'));
        k.dores.forEach(function (d, j) {
          var bx = h('div', 'r-dor'), b = h('button', null); b.type = 'button'; b.setAttribute('aria-expanded', 'false'); b.appendChild(document.createTextNode(d.dor)); b.appendChild(h('span', 'mais', '+'));
          var ab = h('div', 'r-abre'), d1 = h('div'), pp = h('p'); pp.appendChild(h('b', null, conv ? 'Na conversa: ' : 'No caminho: ')); pp.appendChild(document.createTextNode(d.o_que_trabalha)); d1.appendChild(pp); ab.appendChild(d1);
          ab.id = 'dor-' + j; b.setAttribute('aria-controls', ab.id);
          b.addEventListener('click', function () { var o = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', o ? 'true' : 'false'); ab.classList.toggle('on', o); });
          bx.appendChild(b); bx.appendChild(ab); el.appendChild(bx);
        });
      }
      if (k.fecho) el.appendChild(h('p', 'r-conv-p', k.fecho));
      var a = h('a', 'r-btn'); a.href = k.link; a.target = '_blank'; a.rel = 'noopener'; a.id = 'rCta';
      a.appendChild(icone('conversa')); a.appendChild(document.createTextNode(k.botao));
      a.addEventListener('click', function () { ctaClique(calc.produto, calc.saida); });
      el.appendChild(a);
    }, 6);
    rel.appendChild(s6);
    var rf = h('button', 'link-sec', 'Refazer o diagnóstico'); rf.type = 'button'; rf.addEventListener('click', refazer); rel.appendChild(rf);
    rel.appendChild(h('div', 'assina', 'Mentoria Liderium · @oyurygarcia'));

    // preenche: com IA pendente, os espaços da IA ficam em esqueleto; o resto (radar, gráfico, como funciona) já aparece
    slots.forEach(function (s) { if (pendente && s.n) esqueleto(s.el, s.n); else s.fn(s.el, vm); });
    mostrar('t-r');
    ligarRelatorio(!primeiraVez);
  }

  function preencher(ia) {
    if (tela !== 't-r' || !calcAtual) return;
    var vm = RP.montarRelatorio(calcAtual, ia, {});
    slots.forEach(function (s) { s.fn(s.el, vm); });
    var es = $('rEspera'); if (es) { es.classList.add('fim'); setTimeout(function () { if (es.parentNode) es.parentNode.removeChild(es); }, REDUZ ? 0 : 500); }
    clearInterval(frasesTimer);
    observar(document.querySelectorAll('#rCorpo .r-rv:not(.on)'));
    aoRolar();
  }
  function girarFrases(el) {
    clearInterval(frasesTimer);
    var fr = (TV.espera || {}).frases || [], k = 0, iv = ((TV.espera || {}).intervalo_segundos || 6) * 1000;
    if (fr.length < 2) return;
    frasesTimer = setInterval(function () { k = (k + 1) % fr.length; if (el && el.parentNode) el.textContent = fr[k]; else clearInterval(frasesTimer); }, iv);
  }

  /* ---------- animação e interação do relatório ---------- */
  function contar(el) {
    var alvo = +el.getAttribute('data-n');
    if (REDUZ) { el.textContent = alvo + '%'; return; }
    var t0 = null;
    function passo(t) { if (!t0) t0 = t; var k = Math.min(1, (t - t0) / 1300); el.textContent = Math.round(alvo * (1 - Math.pow(1 - k, 3))) + '%'; if (k < 1) requestAnimationFrame(passo); }
    requestAnimationFrame(passo);
  }
  function ativa(el) {
    if (!el || el.dataset.feito) return; el.dataset.feito = 1;
    el.classList.add('on');
    if (el.id === 'rRadar') el.querySelectorAll(".pct").forEach(contar);
    if (el.id === 'rGap') {
      el.querySelectorAll('.r-g-lin').forEach(function (l) {
        var v = +l.dataset.v, e = +l.dataset.e;
        l.querySelector('.m.v').style.left = v + '%'; l.querySelector('.m.e').style.left = e + '%';
        var vao = l.querySelector('.vao'); vao.style.left = Math.min(v, e) + '%'; vao.style.width = Math.abs(v - e) + '%';
      });
      el.classList.add('vis');
    }
    el.querySelectorAll('.r-anelp .v').forEach(function (c) { c.style.strokeDashoffset = c.getAttribute('data-off'); });
  }
  function observar(lista) {
    var alvos = Array.prototype.slice.call(lista);
    if (observador) alvos.forEach(function (a) { observador.observe(a); }); else alvos.forEach(ativa);
  }
  function ligarRelatorio(rapido) {
    if (observador) { observador.disconnect(); observador = null; }
    var alvos = Array.prototype.slice.call(document.querySelectorAll('#rCorpo .r-rv')).concat([$('rRadar'), $('rGap'), $('rDias')]).filter(Boolean);
    if ('IntersectionObserver' in window && !REDUZ && !rapido) {
      observador = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { ativa(e.target); observador.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
      alvos.forEach(function (a) { observador.observe(a); });
    } else alvos.forEach(ativa);
    document.querySelectorAll('#rRadar .rot').forEach(function (a) {
      function vai(ev) { ev.preventDefault(); vaiPara(a.getAttribute('data-alvo')); }
      a.addEventListener('click', vai);
      a.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') vai(ev); });
    });
    aoRolar();
  }
  function vaiPara(id) {
    var card = document.getElementById(id); if (!card) return;
    ativa(card); card.querySelectorAll('.r-rv').forEach(ativa);
    card.scrollIntoView({ behavior: REDUZ ? 'auto' : 'smooth', block: 'start' });
    card.classList.add('realce'); setTimeout(function () { card.classList.remove('realce'); }, 1800);
  }
  function aoRolar() {
    if (tela !== 't-r') return;
    var linha = $('rLinha'), en = $('rEnche'); if (!linha || !en) return;
    var r = linha.getBoundingClientRect(), vh = window.innerHeight;
    var prog = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / Math.max(1, r.height)));
    en.style.height = (prog * Math.max(0, r.height - 12)) + 'px';
    linha.querySelectorAll('.r-passo').forEach(function (p) { if (p.getBoundingClientRect().top < vh * 0.7) p.classList.add('ativo'); });
  }
  window.addEventListener('scroll', aoRolar, { passive: true });

  function refazer() { confirmar('Refazer o diagnóstico começa de novo. Continuar?', function () { reiniciar(); }); }
  function reiniciar() {
    apagar(); S = novo(); ver = null; clearTimeout(esperaTimer); clearInterval(frasesTimer);
    $('aceite').checked = false; $('erro').textContent = ''; $('codigo').value = ''; $('codMsg').textContent = '';
    mostrar('t-e0');
  }

  /* ---------- rede ---------- */
  function post(corpo, keepalive) {
    return fetch(CONFIG.API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(corpo), keepalive: !!keepalive }).then(function (r) { return r.json(); });
  }
  function base(acao) { return { acao: acao, id: S.id, estruturaVersao: X.versao, premiumVersao: RP.versao, teste: !!S.teste, site: '', ms: agora() - T0 }; }
  function dadosProgresso(c) {
    c.cargo = S.cargo; c.desvio = S.desvio; c.trilha = trilha(); c.respostas = RP.respostasBase(S.respostas); c.ordemM = S.ordemM; c.tempos = S.tempos;
    c.ultima = ver && ver.id ? ver.id : (ver ? ver.tipo : null); return c;
  }
  var emVoo = false, pend = false;
  function progresso() {
    if (!API_OK || !S || S.fase !== 'perguntas') return;
    if (emVoo) { pend = true; return; }
    emVoo = true;
    post(dadosProgresso(base('progresso'))).catch(function () {}).then(function () { emVoo = false; if (pend) { pend = false; progresso(); } });
  }
  function iniciar() {
    if (!API_OK) return;
    var c = base('iniciar'); c.captura = S.captura; c.origem = S.origem; c.site = S.site || ''; c.ms = S.msComecar;
    post(c).then(function (r) {
      if (r && r.ok === false && S.fase === 'perguntas' && !S.cargo) {
        var er = TL.erro || {}; ver = null; S.fase = 'captura'; mostrar('t-e0');
        $('erro').textContent = r.mensagem || er.texto || 'Não conseguimos começar agora. Confira a sua conexão e tente de novo.';
      }
    }).catch(function () {});
  }
  /** Ação "premium": grava tudo (como o "fim" do /quiz/) + autoavaliação, objetivo, campo aberto; com código válido e IA ligada, devolve o relatório. */
  function enviarPremium(tent, calc) {
    if (!API_OK) { if (calc && S.iaEstado === 'esperando') chegouIa(null); return; }
    var c = dadosProgresso(base('premium')); c.captura = S.captura; c.origem = S.origem; c.saidaCliente = S.saida;
    c.respostasPremium = {}; for (var q in S.respostas) if (RP.ehExtra(q)) c.respostasPremium[q] = S.respostas[q];
    c.autoavaliacao = S.auto; c.objetivo = S.objetivo; c.campoAberto = S.campoAberto || ''; c.codigo = S.codigo || '';
    post(c).then(function (r) {
      if (!r || !r.ok) throw new Error('falhou');
      S.enviado = true; S.captura = null; salvar();
      if (calc) chegouIa(r.premium && r.premium.ia === 'ok' ? r.premium.relatorio : null);
    }).catch(function () {
      if (tent < 1 && !(calc && S.iaEstado === 'esperando')) return setTimeout(function () { enviarPremium(tent + 1, calc); }, 3000);
      if (calc) chegouIa(null);
      S.fimPendente = true; salvar();
    });
  }
  function ctaClique(produto, saida) {
    if (!API_OK) return;
    var c = base('cta'); c.destino = produto; c.saida = saida; var txt = JSON.stringify(c);
    try { if (navigator.sendBeacon && navigator.sendBeacon(CONFIG.API, new Blob([txt], { type: 'text/plain;charset=UTF-8' }))) return; } catch (e) {}
    try { post(c, true).catch(function () {}); } catch (e) {}
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'hidden' || !API_OK || !S || S.fase !== 'perguntas' || !S.cargo) return;
    try { navigator.sendBeacon(CONFIG.API, new Blob([JSON.stringify(dadosProgresso(base('progresso')))], { type: 'text/plain;charset=UTF-8' })); } catch (e) {}
  });

  /* ---------- cadastro + código (D2) ---------- */
  function normCodigo(v) { return String(v || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12); }
  function iniciarCaptura() {
    var f = $('f'), erro = $('erro'), zap = $('whatsapp'), CA = TV.codigo_acesso || {};
    $('lCodigo').firstChild.textContent = tt(CA.rotulo, 'Tem um código de acesso?') + ' ';
    $('codAjuda').textContent = tt(CA.ajuda, ''); $('codigo').placeholder = tt(CA.placeholder, '');
    $('codigo').addEventListener('input', function () { var c = $('codigo'), v = normCodigo(c.value); if (c.value !== v) c.value = v; $('codMsg').textContent = ''; $('codMsg').className = 'cod-msg'; });
    zap.addEventListener('input', function () {
      var d = zap.value.replace(/\D/g, '').slice(0, 11), o = d;
      if (d.length > 2) o = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      if (d.length > 7) o = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length - 4) + '-' + d.slice(-4);
      zap.value = o;
    });
    var validando = false;
    f.addEventListener('submit', function (ev) {
      ev.preventDefault(); erro.textContent = '';
      if (validando) return;
      var nome = $('nome').value.replace(/\s+/g, ' ').trim(), email = $('email').value.trim().toLowerCase(), d = zap.value.replace(/\D/g, '');
      if (d.length === 13 && d.indexOf('55') === 0) d = d.slice(2);
      if (nome.length < 2) return erro.textContent = 'Conte seu nome.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return erro.textContent = 'Confira o e-mail.';
      if (d.length < 10 || d.length > 11) return erro.textContent = 'Confira o WhatsApp, com DDD.';
      if (!$('aceite').checked) return erro.textContent = 'Para começar, marque a autorização para receber o resultado e o contato da equipe.';
      var codigo = normCodigo($('codigo').value);
      var seguir = function (estado) {
        validando = false; $('bComecar').disabled = false;
        S.codigo = codigo; S.codigoEstado = estado;
        S.captura = { nome: nome, email: email, whatsapp: d, consentimento: { versao: X.consentimentoVersao, em: new Date().toISOString() } };
        S.site = $('site').value; S.msComecar = agora() - T0; S.fase = 'perguntas'; S.primeiroNome = Rg.primeiroNome(nome);
        salvar(); iniciar();
        irPara({ tipo: 'cargo', id: 'P0' }, true);
      };
      if (!codigo) return seguir('');
      if (!API_OK) return seguir('nao_conferido');
      validando = true; $('bComecar').disabled = true; $('codMsg').textContent = 'Conferindo o código…';
      var feito = false, fim = setTimeout(function () { if (!feito) { feito = true; seguir('nao_conferido'); } }, 8000);
      post({ acao: 'codigo', id: S.id, estruturaVersao: X.versao, teste: !!S.teste, site: $('site').value, codigo: codigo }).then(function (r) {
        if (feito) return; feito = true; clearTimeout(fim);
        if (r && r.ok && r.valido) { $('codMsg').textContent = tt(CA.aceito, 'Código confirmado.'); $('codMsg').className = 'cod-msg ok'; setTimeout(function () { seguir('ok'); }, REDUZ ? 0 : 700); return; }
        validando = false; $('bComecar').disabled = false;
        $('codMsg').className = 'cod-msg erro-c';
        $('codMsg').textContent = r && r.motivo === 'usado' ? tt(CA.erro_usado, 'Esse código já foi usado.') : tt(CA.erro_invalido, 'Não encontramos esse código.');
      }).catch(function () { if (feito) return; feito = true; clearTimeout(fim); seguir('nao_conferido'); });
    });
  }
  function preencherCaptura() {
    if (S.captura) { $('nome').value = S.captura.nome; $('email').value = S.captura.email; $('whatsapp').value = S.captura.whatsapp; $('aceite').checked = true; $('whatsapp').dispatchEvent(new Event('input')); $('codigo').value = S.codigo || ''; }
  }

  /* ---------- retomar / já fez ---------- */
  function mostrarSalvo() {
    try { calcAtual = RP.calcular(trilha(), S.respostas, S.auto); } catch (e) { return reiniciar(); }
    if (S.iaEstado === 'esperando') { S.iaEstado = 'tempo'; salvar(); }
    desenharRelatorio(calcAtual, false, false);
  }
  function iniciarTela() {
    var guardado = ler();
    if (guardado && guardado.estruturaVersao === X.versao && guardado.premiumVersao === RP.versao && agora() - guardado.atualizadoEm < VALIDADE) {
      S = guardado; if (TESTE) S.teste = true;
      if (S.fase === 'fim' && S.saida && S.saida !== 'EMPRESARIO') {
        var jf = TL.jaFez || {}; $('jaTexto').textContent = jf.texto || 'Você já fez o diagnóstico. Quer ver o seu resultado de novo?'; $('jaVer').textContent = jf.ver || 'Ver meu resultado'; $('jaRefazer').textContent = jf.refazer || 'Refazer';
        $('jaVer').onclick = mostrarSalvo; $('jaRefazer').onclick = function () { reiniciar(); };
        mostrar('t-ja'); return;
      }
      if (S.fase === 'perguntas' && S.captura) {
        var p = primeiraPendente(), pos = posicao(p);
        var rt = TL.retomar || {}; $('retTexto').textContent = rt.texto || (pos ? 'Você parou na pergunta ' + pos.n + ' de ' + pos.total + '. Continuar ou recomeçar?' : 'Você parou no começo. Continuar ou recomeçar?');
        $('retContinuar').textContent = rt.continuar || 'Continuar'; $('retRecomecar').textContent = rt.recomecar || 'Recomeçar';
        $('retContinuar').onclick = function () { irPara(p, true); }; $('retRecomecar').onclick = function () { reiniciar(); };
        mostrar('t-retomar'); return;
      }
    }
    if (guardado) apagar();
    S = novo(); mostrar('t-e0');
  }

  /* ---------- ligações ---------- */
  ['qVoltar', 'mVoltar', 'eVoltar', 'transVoltar', 'autoVoltar', 'objVoltar'].forEach(function (id) { $(id).addEventListener('click', botaoVoltar); });
  $('qContinuar').addEventListener('click', function () { if (agora() < bloqueio) return; bloqueio = agora() + 300; avancar(); });
  window.addEventListener('popstate', function () {
    if (!S || tela === 't-r' || tela === 't-calc' || tela === 't-e0' || tela === 't-retomar' || tela === 't-ja') return;
    voltarDireto();
  });
  if (TESTE) $('faixaTeste').hidden = false;
  (function textosAbertura() {
    var a = TL.abertura || {}, c = a.campos || {}, k = TL.consentimento || {};
    if (a.titulo) $('aTitulo').textContent = a.titulo;
    if (a.subtitulo) $('aSub').textContent = a.subtitulo;
    if (a.tempo) $('aKick').textContent = 'Gratuito · ' + a.tempo.replace(/\.$/, '').replace(/^Leva/, 'leva');
    if (c.nome) $('lNome').textContent = c.nome; if (c.email) $('lEmail').textContent = c.email; if (c.whatsapp) $('lZap').textContent = c.whatsapp;
    if (a.botao) $('bComecar').textContent = a.botao;
    if (k.texto) $('aceiteTxt').textContent = k.texto; if (k.link) $('aceiteLink').textContent = k.link;
  })();
  iniciarCaptura();
  iniciarTela();
  preencherCaptura();
  window.__quiz = { estado: function () { return S; }, ver: function () { return ver; } }; // só leitura, para os testes
})();
