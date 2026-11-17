/* Quiz de carreira Liderium · interface e estado. Não tem regra de pontos (isso é regua.js + quiz-estrutura.js). */
(function () {
  var X = window.QUIZ_ESTRUTURA, P = window.QUIZ_PERGUNTAS, Rg = window.QUIZ_REGUA, R = window.QUIZ_RESULTADOS || {};
  var API_OK = !!(window.CONFIG && CONFIG.API && !/COLOCAR/.test(CONFIG.API));
  var KEY = 'quiz_liderium', VALIDADE = 14 * 86400000;
  var qs = new URLSearchParams(location.search);
  var TESTE = qs.get('teste') === '1', SEED = qs.get('seed');
  var T0 = Date.now(), S = null, ver = null, tela = null, tVer = 0, bloqueio = 0, emailTela = '';
  var TL = R.telas || {};
  function tt(v, d) { return v === undefined || v === null || v === '' ? d : v; }
  var memoria = null; // reserva quando o armazenamento do navegador não funciona

  /* ---------- utilidades ---------- */
  function $(id) { return document.getElementById(id); }
  function h(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt !== undefined && txt !== null) e.textContent = txt; return e; }
  function limpa(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function uuid() {
    try { if (window.crypto && crypto.randomUUID) return crypto.randomUUID(); } catch (e) {}
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
  }
  function agora() { return Date.now(); }

  /* ---------- armazenamento ---------- */
  function ler() {
    try { var t = localStorage.getItem(KEY); return t ? JSON.parse(t) : null; } catch (e) { return memoria; }
  }
  function salvar() {
    if (!S) return; S.atualizadoEm = agora();
    memoria = JSON.parse(JSON.stringify(S));
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  }
  function apagar() { memoria = null; try { localStorage.removeItem(KEY); } catch (e) {} }
  function novo() {
    return { id: uuid(), estruturaVersao: X.versao, criadoEm: agora(), atualizadoEm: agora(), captura: null, origem: (location.search || '').slice(1, 200),
      teste: TESTE, cargo: null, desvio: null, respostas: {}, ordemM: {}, tempos: {}, fase: 'captura', enviado: {}, saida: null, resultado: null, primeiroNome: '' };
  }

  /* ---------- fluxo derivado das respostas ---------- */
  function trilha() {
    if (!S.cargo) return null;
    var r = Rg.rotear(S.cargo, S.desvio); return r.trilha || null;
  }
  function sequencia() {
    var seq = [{ tipo: 'cargo', id: 'P0' }];
    if (!S.cargo) return seq;
    var c = Rg.cargoDe(S.cargo);
    if (c.destino === 'EMPRESARIO') { seq.push({ tipo: 'emp' }); return seq; }
    if (c.destino === 'DESVIO') { seq.push({ tipo: 'desvio', id: 'P0b' }); if (!S.desvio) return seq; }
    var tr = trilha();
    Rg.montarFila(tr, S.respostas).forEach(function (q) { seq.push({ tipo: X.perguntas[q].papel === 'mentalidade' ? 'm' : 'q', id: q }); });
    seq.push({ tipo: 'fim' });
    return seq;
  }
  function respondida(el) {
    if (el.tipo === 'cargo') return !!S.cargo;
    if (el.tipo === 'desvio') return !!S.desvio;
    if (el.tipo === 'q' || el.tipo === 'm') return S.respostas[el.id] !== undefined && S.respostas[el.id] !== null;
    return false;
  }
  function primeiraPendente() {
    var seq = sequencia();
    for (var i = 0; i < seq.length; i++) if (seq[i].tipo === 'emp' || seq[i].tipo === 'fim' || !respondida(seq[i])) return seq[i];
    return seq[seq.length - 1];
  }
  function indiceDe(el) { var seq = sequencia(); for (var i = 0; i < seq.length; i++) if (seq[i].tipo === el.tipo && seq[i].id === el.id) return i; return -1; }
  function proximo(el) { var seq = sequencia(), i = indiceDe(el); return seq[i + 1] || null; }
  function anterior(el) { var seq = sequencia(), i = indiceDe(el); return i > 0 ? seq[i - 1] : null; }

  /** posição para a barra: {n, total, prova} (n e total só existem depois que a trilha é conhecida) */
  function posicao(el) {
    var tr = trilha(); if (!tr || el.tipo === 'cargo' || el.tipo === 'desvio') return null;
    var fixas = Rg.filaFixa(tr), offset = 1 + (S.cargo && Rg.cargoDe(S.cargo).destino === 'DESVIO' ? 1 : 0);
    var total = offset + fixas.length, prova = false, id = el.id;
    if (fixas.indexOf(id) < 0) {
      prova = true;
      for (var i = 0; i < fixas.length; i++) { var e = X.perguntas[fixas[i]]; if (e.prova && e.prova.id === id) { id = fixas[i]; break; } }
    }
    return { n: offset + fixas.indexOf(id) + 1, total: total, prova: prova };
  }
  function desenharProg(div, pos) {
    limpa(div);
    if (!pos) { div.className = 'prog vazio'; return; }
    div.className = 'prog';
    for (var i = 1; i <= pos.total; i++) {
      div.appendChild(h('span', pos.prova ? (i < pos.n ? 'f' : i === pos.n ? 'c' : '') : (i < pos.n ? 'f' : i === pos.n ? 'c' : '')));
    }
  }

  /* ---------- telas ---------- */
  function mostrar(id) {
    ['t-e0', 't-q', 't-m', 't-trans', 't-calc', 't-emp', 't-r', 't-retomar', 't-ja'].forEach(function (t) { $(t).classList.toggle('on', t === id); });
    tela = id; document.body.setAttribute('data-tela', id); window.scrollTo(0, 0);
    var f = document.querySelector('#' + id + ' h1, #' + id + ' h2'); if (f) try { f.focus({ preventScroll: true }); } catch (e) {}
  }
  function empurrar() { try { history.pushState({ quiz: 1 }, ''); } catch (e) {} }

  function irPara(el, push) {
    if (!el) return;
    ver = el;
    if (push) empurrar();
    tVer = agora();
    if (el.tipo === 'cargo' || el.tipo === 'desvio' || el.tipo === 'q') return telaPergunta(el);
    if (el.tipo === 'm') return (push && !S.respostas[el.id] && TL.transicaoMentalidade) ? telaTransicao(el) : telaMentalidade(el);
    if (el.tipo === 'emp') return telaEmpresario();
    if (el.tipo === 'fim') return finalizar();
  }

  function telaPergunta(el) {
    var q = el.id, def = P[q], pos = posicao(el);
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
      b.addEventListener('click', function () { escolher(el, a.id, b); });
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

  function escolher(el, id, botao) {
    if (agora() < bloqueio) return;
    bloqueio = agora() + 300;
    var efetivar = function () {
      if (el.tipo === 'cargo') {
        var antes = S.cargo ? Rg.cargoDe(S.cargo).destino : null, depois = Rg.cargoDe(id).destino;
        if (antes !== depois) { S.respostas = {}; S.desvio = null; }
        S.cargo = id;
      } else if (el.tipo === 'desvio') { if (S.desvio && S.desvio !== id) S.respostas = {}; S.desvio = id; }
      else { S.respostas[el.id] = id; S.tempos[el.id] = (S.tempos[el.id] || 0) + (agora() - tVer); }
      salvar(); progresso();
      document.querySelectorAll('#qAlts .alt').forEach(function (b) { var s = String(b.dataset.id) === String(id); b.classList.toggle('sel', s); b.setAttribute('aria-checked', s ? 'true' : 'false'); });
      setTimeout(function () { avancar(); }, 250);
    };
    if (el.tipo === 'cargo' && S.cargo && S.cargo !== id && Rg.cargoDe(S.cargo).destino !== Rg.cargoDe(id).destino && respostasExistem()) {
      bloqueio = 0; return confirmar(tt(TL.trocaCargo, 'Trocar o cargo muda as perguntas. Continuar?'), efetivar);
    }
    if (el.tipo === 'desvio' && S.desvio && S.desvio !== id && respostasExistem()) {
      bloqueio = 0; return confirmar('Trocar esta resposta muda as perguntas. Continuar?', efetivar);
    }
    efetivar();
  }

  function avancar() { irPara(proximo(ver), true); }

  function voltarDireto() {
    if (!ver) return;
    if (ver.tipo === 'emp') { S.fase = 'perguntas'; S.saida = null; S.enviado = {}; salvar(); }
    var a = anterior(ver);
    if (!a) { ver = null; mostrar('t-e0'); return; }
    irPara(a, false);
  }
  function botaoVoltar() {
    if (history.state && history.state.quiz) history.back(); else voltarDireto();
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
    $('mContinuar').onclick = function () {
      if (sel.length !== 3) return;
      S.respostas[m] = sel.slice(); S.tempos[m] = (S.tempos[m] || 0) + (agora() - tVer); salvar(); progresso(); avancar();
    };
    mostrar('t-m');
  }

  /* ---------- Empresário(a) ---------- */
  function telaEmpresario() {
    var em = R.empresario || {};
    $('eTitulo').textContent = Rg.subst(em.titulo || 'Obrigado!', { nome: S.captura ? Rg.primeiroNome(S.captura.nome) : S.primeiroNome });
    $('eCorpo').textContent = Rg.subst(em.corpo || '', {});
    var cta = $('eCta'); cta.textContent = (em.cta && em.cta.rotulo) || 'Falar no WhatsApp';
    cta.href = Rg.linkWhatsApp('EMPRESARIAL', 'EMP');
    cta.onclick = function () { ctaClique('EMPRESARIAL', 'EMPRESARIO'); };
    $('eEmail').textContent = '';
    S.saida = 'EMPRESARIO'; S.fase = 'fim'; salvar();
    mostrar('t-emp');
    emailTela = S.captura ? S.captura.email : '';
    enviarFim(0);
  }

  /* ---------- resultado ---------- */
  function finalizar() {
    var tr = trilha(), res;
    try { res = Rg.calcular(tr, S.respostas); }
    catch (e) { return irPara(primeiraPendente(), false); }
    S.primeiroNome = Rg.primeiroNome(S.captura ? S.captura.nome : S.primeiroNome);
    S.saida = res.saida; S.resultado = res; S.fase = 'fim'; S.concluidoEm = agora(); salvar();
    emailTela = S.captura ? S.captura.email : '';
    enviarFim(0);
    var cl = TL.calculando;
    if (!cl) return desenharResultado(res, true);
    telaCalculando(cl, res);
  }

  /* ---------- ícones (SVG à mão) ---------- */
  var ICONES = {
    entrega: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.6"/>',
    visibilidade: '<path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    influencia: '<circle cx="12" cy="5.5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.8 7.7L6.3 15.8M13.2 7.7l4.5 8.1M7.5 18h9"/>',
    proximo_nivel: '<path d="M3 20h5v-5h5v-5h5"/><path d="M15 4h5v5M20 4l-6 6"/>',
    conversa: '<path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5z"/><path d="M8.5 11.5h7"/>'
  };
  function icone(id, cls) {
    var e = h('span', cls); e.setAttribute('aria-hidden', 'true');
    e.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONES[id] || '') + '</svg>';
    return e;
  }
  function nomePilar(id) { return (R.pilaresNomes && R.pilaresNomes[id]) || (X.rotulosPilar && X.rotulosPilar[id]) || id; }
  /** medidor de 3 segmentos: consolidado acende 3, em construção 2, próximo passo 1 (sem número na tela) */
  var NIVEL_SEG = { consolidado: 3, construcao: 2, proximo_passo: 1 };
  function medidor(estado, forte) {
    var d = h('span', 'med' + (forte ? ' forte' : '')); d.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 3; i++) d.appendChild(h('i', i < (NIVEL_SEG[estado] || 0) ? 'on' : ''));
    return d;
  }

  /* ---------- calculando: análise dos 4 pilares ---------- */
  function telaCalculando(cl, res) {
    $('calcTitulo').textContent = cl.titulo;
    var msg = $('calcMsg'), ul = $('calcPil'), barra = $('calcBarra'), nos = document.querySelectorAll('#t-calc .radar .no');
    limpa(ul); msg.textContent = ''; barra.style.width = '0';
    nos.forEach(function (n) { n.classList.remove('on'); });
    var ids = (res.pilares || []).map(function (p) { return p.id; });
    if (!ids.length) ids = ['entrega', 'visibilidade', 'influencia', 'proximo_nivel'];
    var lis = ids.map(function (id) {
      var li = h('li'); li.appendChild(icone(id, 'ic')); li.appendChild(h('span', null, nomePilar(id))); li.appendChild(h('span', 'ok'));
      var tr = h('span', 'trilho'); tr.appendChild(h('i')); li.appendChild(tr); ul.appendChild(li); return li;
    });
    var linhas = cl.linhas || [], PASSO = 650, INI = 250, total = INI + ids.length * PASSO + 350;
    linhas.forEach(function (t, j) { setTimeout(function () { if (tela === 't-calc') msg.textContent = t; }, INI + j * ((ids.length * PASSO) / Math.max(1, linhas.length))); });
    lis.forEach(function (li, i) {
      setTimeout(function () { li.classList.add('lendo'); if (nos[i]) nos[i].classList.add('on'); }, INI + i * PASSO);
      setTimeout(function () { li.classList.remove('lendo'); li.classList.add('feito'); barra.style.width = ((i + 1) / lis.length * 100) + '%'; }, INI + (i + 1) * PASSO - 60);
    });
    mostrar('t-calc');
    setTimeout(function () { if (tela === 't-calc') desenharResultado(res, true); }, total);
  }

  function titulo(el, txt) {
    limpa(el); var partes = String(txt || '').split('**');
    partes.forEach(function (p, i) { if (!p) return; if (i % 2) el.appendChild(h('span', null, p)); else el.appendChild(document.createTextNode(p)); });
  }

  function desenharResultado(res, primeiraVez) {
    var m = Rg.montarResultado(res, S.primeiroNome);
    var c = $('rCorpo'); limpa(c);
    var rv = [];
    function r(el) { el.classList.add('rv'); rv.push(el); return el; }
    var col = null;
    function bloco(rotulo) { var b = r(h('div', 'bloco-r')); if (rotulo) b.appendChild(h('div', 'rotulo', rotulo)); (col || c).appendChild(b); return b; }
    var topo = h('div', 'res-top');
    topo.appendChild(r(h('div', 'kick', (S.primeiroNome ? S.primeiroNome + ', esta' : 'Esta') + ' é a sua escada')));
    var h1 = r(h('h1')); h1.tabIndex = -1; titulo(h1, m.titulo); topo.appendChild(h1); c.appendChild(topo);

    // painel-síntese: a escada com o nível de cada pilar
    var pn = r(h('div', 'painel')); pn.appendChild(h('div', 'varre'));
    var cab = h('div', 'painel-cab'); cab.appendChild(h('b', null, 'Seus 4 pilares')); cab.appendChild(h('span', 'vivo', 'Leitura concluída')); pn.appendChild(cab);
    var esc = h('div', 'escada'), tag = h('div', 'tag-teto'); tag.setAttribute('aria-hidden', 'true');
    tag.appendChild(h('span', null, 'Seu próximo degrau')); tag.appendChild(h('i')); tag.appendChild(h('b', 'pulso')); esc.appendChild(tag);
    var dgs = h('div', 'degraus'), segs = [], dgTeto = null;
    m.pilares.forEach(function (p) {
      var d = h('div', 'dg' + (p.estado === 'consolidado' ? ' cheio' : '') + (p.id === m.teto ? ' teto' : '')), pi = h('div', 'pilha');
      for (var k = 0; k < 3; k++) { var sg = h('i', 'seg'); pi.appendChild(sg); if (k < (NIVEL_SEG[p.estado] || 0)) segs.push(sg); }
      if (p.id === m.teto) dgTeto = d;
      var rt = h('div', 'rot'); rt.appendChild(h('div', 'nome', p.rotulo)); rt.appendChild(h('div', 'nivel', p.estadoRotulo));
      d.appendChild(pi); d.appendChild(rt); d.setAttribute('aria-label', p.rotulo + ': ' + p.estadoRotulo + (p.id === m.teto ? ' · seu próximo degrau' : ''));
      dgs.appendChild(d);
    });
    esc.appendChild(dgs); pn.appendChild(esc);
    var lg = h('div', 'legenda'); lg.setAttribute('aria-hidden', 'true');
    ['proximo_passo', 'construcao', 'consolidado'].forEach(function (e) { var it = h('span'); it.appendChild(medidor(e)); it.appendChild(document.createTextNode((R.niveis && R.niveis[e]) || e)); lg.appendChild(it); });
    pn.appendChild(lg); c.appendChild(pn);

    // um resultado por pilar: os 4 cartões
    var bp = r(h('div', 'bloco-r pilares-b')); bp.appendChild(h('div', 'rotulo', m.rotulos.pilares)); c.appendChild(bp);
    var grid = h('div', 'pilares-grid'), cards = [];
    m.pilares.forEach(function (p) {
      var teto = p.id === m.teto, pc = h('div', 'pc ' + p.estado + (teto ? ' teto' : ''));
      if (teto) pc.appendChild(h('span', 'selo', 'Seu próximo degrau'));
      pc.appendChild(icone(p.id, 'pc-ic')); pc.appendChild(h('h4', null, p.rotulo));
      var nv = h('div', 'pc-niv'); nv.appendChild(medidor(p.estado, teto)); nv.appendChild(h('em', null, p.estadoRotulo)); pc.appendChild(nv);
      if (p.texto) pc.appendChild(h('p', null, p.texto));
      grid.appendChild(pc); cards.push(pc);
    });
    bp.appendChild(grid);
    col = h('div', 'res-col'); c.appendChild(col);

    // onde a escada pede atenção
    var bt = bloco(m.teto ? m.rotulos.teto : ''); bt.appendChild(h('p', 'leitura', m.resumo));
    if (m.lacuna) bt.appendChild(h('p', 'leitura', m.lacuna));
    if (m.percepcao) bt.appendChild(h('p', 'leitura', m.percepcao));
    m.ajustes.forEach(function (t) { bt.appendChild(h('p', 'leitura', t)); });
    // o jeito de pensar
    if (m.crenca || m.destaque || m.reforco) {
      var bc = bloco(m.rotulos.crenca);
      if (m.crenca) {
        var cr = h('div', 'crenca'); cr.appendChild(h('p', null, m.crenca.texto)); cr.firstChild.style.marginTop = '0';
        if (m.crenca.releitura) cr.appendChild(h('p', null, m.crenca.releitura));
        bc.appendChild(cr);
        if (m.crenca.proxima) {
          var cp = h('div', 'crenca'); cp.style.marginTop = '12px'; cp.appendChild(h('p', null, m.crenca.proxima.texto)); cp.firstChild.style.marginTop = '0';
          if (m.crenca.proxima.releitura) cp.appendChild(h('p', null, m.crenca.proxima.releitura)); bc.appendChild(cp);
        }
      }
      if (m.reforco) bc.appendChild(h('p', 'leitura', m.reforco));
      if (m.destaque) {
        bc.appendChild(h('p', 'leitura', m.destaque));
        var lm = h('ul', 'marcadas');
        m.marcadas.forEach(function (x) { var li = h('li'); li.appendChild(h('b', null, '“' + x.frase + '”')); if (x.releitura) li.appendChild(document.createTextNode(x.releitura)); lm.appendChild(li); });
        if (m.marcadas.length) bc.appendChild(lm);
      }
    }
    // o que você ganha ao passar deste degrau
    if (m.corpo.length || m.padrao) {
      var bg = bloco(m.rotulos.ganho);
      m.corpo.forEach(function (t) { bg.appendChild(h('p', 'leitura', t)); });
      if (m.padrao) bg.appendChild(h('p', 'leitura', m.padrao));
    }
    if (m.acoes.length) {
      var b2 = bloco(m.rotulos.acoes), ol = h('ol', 'acoes');
      m.acoes.forEach(function (a, i) {
        var li = h('li'); li.appendChild(h('span', 'n', String(i + 1)));
        var d = h('div'); if (a.titulo) d.appendChild(h('b', null, a.titulo)); if (a.texto) d.appendChild(h('p', null, a.texto)); li.appendChild(d); ol.appendChild(li);
      });
      b2.appendChild(ol);
    }
    if (m.depois) { var bd = bloco(m.rotulos.depois); bd.classList.add('depois'); bd.appendChild(h('p', null, m.depois)); }
    var of = r(h('div', 'oferta')); of.appendChild(h('div', 'rotulo', 'O caminho para este degrau'));
    of.appendChild(h('h3', null, m.produto.nome));
    if (m.ponte) of.appendChild(h('p', null, m.ponte));
    if (m.produto.convite) of.appendChild(h('p', 'convite', m.produto.convite));
    var a = h('a', 'btn claro', m.produto.rotulo); a.href = m.whatsapp; a.target = '_blank'; a.rel = 'noopener'; a.id = 'rCta';
    a.addEventListener('click', function () { ctaClique(m.produto.codigo, m.saida); });
    a.insertBefore(icone('conversa'), a.firstChild);
    of.appendChild(a); col.appendChild(of);
    var le = h('div', 'linha-email'); le.id = 'rEmail'; le.setAttribute('aria-live', 'polite'); col.appendChild(le);
    var rf = h('button', 'link-sec', m.rotulos.refazer); rf.type = 'button'; rf.addEventListener('click', refazer); col.appendChild(rf);
    col.appendChild(h('div', 'assina', '@oyurygarcia'));
    estadoEmail(S.emailEstado || (primeiraVez ? 'enviando' : ''));
    mostrar('t-r');
    animar({ rv: rv, painel: pn, esc: esc, tag: tag, dgTeto: dgTeto, segs: segs, cards: cards }, !primeiraVez);
  }

  var ajustarTag = null;
  window.addEventListener('resize', function () { if (ajustarTag) ajustarTag(); });
  function animar(o, rapido) {
    var rv = o.rv;
    ajustarTag = function () {
      if (!o.dgTeto || tela !== 't-r') return;
      var pi = o.dgTeto.querySelector('.pilha'), eb = o.esc.getBoundingClientRect(), pb = pi.getBoundingClientRect();
      var w = o.tag.offsetWidth, hh = o.tag.offsetHeight, centro = pb.left - eb.left + pb.width / 2;
      o.tag.style.left = Math.max(0, Math.min(centro - w / 2, eb.width - w)) + 'px';
      o.tag.style.top = Math.max(0, pb.top - eb.top - hh - 2) + 'px';
      var pul = o.tag.querySelector('.pulso'); pul.style.marginLeft = '0';
      var tl = parseFloat(o.tag.style.left), off = centro - (tl + w / 2); pul.style.transform = 'translateX(' + off + 'px)'; o.tag.querySelector('i').style.transform = 'translateX(' + off + 'px)';
    };
    var ligarTeto = function () { if (!o.dgTeto) return; ajustarTag(); o.tag.classList.add('on'); o.dgTeto.classList.add('aceso'); };
    if (rapido || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      rv.forEach(function (e) { e.classList.add('on'); }); o.segs.forEach(function (s) { s.classList.add('on'); }); o.cards.forEach(function (e) { e.classList.add('on'); });
      setTimeout(ligarTeto, 50); return;
    }
    setTimeout(function () { rv[0].classList.add('on'); rv[1].classList.add('on'); }, 150);
    setTimeout(function () { rv[2].classList.add('on'); o.painel.classList.add('varrendo'); }, 450);
    // acende segmento a segmento, pilar a pilar (de baixo para cima)
    var t = 800, porPilar = {};
    o.segs.forEach(function (s) { var d = s.parentNode.parentNode; var i = Array.prototype.indexOf.call(d.parentNode.children, d); porPilar[i] = (porPilar[i] || 0) + 1;
      setTimeout(function () { s.classList.add('on'); }, t + i * 380 + (porPilar[i] - 1) * 140); });
    setTimeout(ligarTeto, 2400);
    setTimeout(function () { rv[3].classList.add('on'); }, 2500);
    o.cards.forEach(function (e, i) { setTimeout(function () { e.classList.add('on'); }, 2600 + i * 140); });
    for (var i = 4; i < rv.length; i++) (function (e, k) { setTimeout(function () { e.classList.add('on'); }, 3200 + k * 160); })(rv[i], i - 4);
  }

  function estadoEmail(est) {
    var em = TL.emailLinha || {};
    var t = { enviando: tt(em.enviando, 'Enviando uma cópia para o seu e-mail.'), enviado: tt(em.enviado, 'Enviamos uma cópia para o seu e-mail.') + ' Se não chegar, olhe Promoções e Spam.',
      'já recebeu': tt(em.jaEnviado, 'Você já recebeu um resultado por e-mail antes; este fica nesta tela.'), falhou: tt(em.falhou, 'Não conseguimos enviar o e-mail agora. O seu resultado está nesta tela.'), semapi: '' };
    var txt = t[est] !== undefined ? t[est] : '';
    var e = S && S.saida === 'EMPRESARIO' ? $('eEmail') : $('rEmail'); if (e) e.textContent = txt;
  }

  function refazer() {
    confirmar('Refazer o diagnóstico começa de novo. Continuar?', function () { reiniciar(); });
  }
  function reiniciar() {
    apagar(); S = novo(); S.fase = 'captura'; ver = null; emailTela = '';
    $('aceite').checked = false; $('erro').textContent = '';
    mostrar('t-e0');
  }

  /* ---------- rede ---------- */
  function post(corpo, keepalive) {
    return fetch(CONFIG.API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(corpo), keepalive: !!keepalive })
      .then(function (r) { return r.json(); });
  }
  function base(acao) { return { acao: acao, id: S.id, estruturaVersao: X.versao, teste: !!S.teste, site: '', ms: agora() - T0 }; }
  function dadosProgresso(c) {
    c.cargo = S.cargo; c.desvio = S.desvio; c.trilha = trilha(); c.respostas = S.respostas; c.ordemM = S.ordemM; c.tempos = S.tempos;
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
        $('erro').textContent = r.mensagem || er.texto || 'Não conseguimos começar agora. Confira a sua conexão e tente de novo.'; $('bComecar').textContent = er.botao || 'Começar';
      }
    }).catch(function () {});
  }
  function enviarFim(tent) {
    if (!API_OK) { estadoEmail('semapi'); return; }
    var c = dadosProgresso(base('fim')); c.captura = S.captura; c.origem = S.origem; c.saidaCliente = S.saida;
    post(c).then(function (r) {
      if (!r) throw new Error('vazio');
      if (r.ok) {
        S.enviado.fim = true; S.emailEstado = r.email || 'semapi'; S.fimPendente = false;
        if (r.resultado && r.saida && r.saida !== S.saida && S.resultado) { S.saida = r.saida; S.resultado = r.resultado; salvar(); if (tela === 't-r') desenharResultado(r.resultado, false); }
        S.captura = null; salvar(); estadoEmail(S.emailEstado);
      } else { falhaFim(tent); }
    }).catch(function () { falhaFim(tent); });
  }
  function falhaFim(tent) {
    var d = [2000, 8000, 30000];
    if (tent < 3) setTimeout(function () { enviarFim(tent + 1); }, d[tent]);
    else { S.fimPendente = true; salvar(); estadoEmail('falhou'); }
  }
  function ctaClique(produto, saida) {
    if (!API_OK) return;
    var c = base('cta'); c.destino = produto; c.saida = saida;
    var txt = JSON.stringify(c);
    try { if (navigator.sendBeacon && navigator.sendBeacon(CONFIG.API, new Blob([txt], { type: 'text/plain;charset=UTF-8' }))) return; } catch (e) {}
    try { post(c, true).catch(function () {}); } catch (e) {}
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'hidden' || !API_OK || !S || S.fase !== 'perguntas' || !S.cargo) return;
    try { navigator.sendBeacon(CONFIG.API, new Blob([JSON.stringify(dadosProgresso(base('progresso')))], { type: 'text/plain;charset=UTF-8' })); } catch (e) {}
  });

  /* ---------- captura ---------- */
  function iniciarCaptura() {
    var f = $('f'), erro = $('erro'), zap = $('whatsapp');
    zap.addEventListener('input', function () {
      var d = zap.value.replace(/\D/g, '').slice(0, 11), o = d;
      if (d.length > 2) o = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      if (d.length > 7) o = '(' + d.slice(0, 2) + ') ' + d.slice(2, d.length - 4) + '-' + d.slice(-4);
      zap.value = o;
    });
    f.addEventListener('submit', function (ev) {
      ev.preventDefault(); erro.textContent = '';
      var nome = $('nome').value.replace(/\s+/g, ' ').trim(), email = $('email').value.trim().toLowerCase(), d = zap.value.replace(/\D/g, '');
      if (d.length === 13 && d.indexOf('55') === 0) d = d.slice(2);
      if (nome.length < 2) return erro.textContent = 'Conte seu nome.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return erro.textContent = 'Confira o e-mail.';
      if (d.length < 10 || d.length > 11) return erro.textContent = 'Confira o WhatsApp, com DDD.';
      if (!$('aceite').checked) return erro.textContent = 'Para começar, marque a autorização para receber o resultado e o contato da equipe.';
      S.captura = { nome: nome, email: email, whatsapp: d, consentimento: { versao: X.consentimentoVersao, em: new Date().toISOString() } };
      S.site = $('site').value; S.msComecar = agora() - T0; S.fase = 'perguntas'; S.primeiroNome = Rg.primeiroNome(nome);
      salvar(); iniciar();
      irPara({ tipo: 'cargo', id: 'P0' }, true);
    });
  }
  function preencherCaptura() {
    if (S.captura) { $('nome').value = S.captura.nome; $('email').value = S.captura.email; $('whatsapp').value = S.captura.whatsapp; $('aceite').checked = true; $('whatsapp').dispatchEvent(new Event('input')); }
  }

  /* ---------- retomar / já fez ---------- */
  function dataBr(t) { var d = new Date(t); return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2); }
  function iniciarTela() {
    var guardado = ler();
    if (guardado && guardado.estruturaVersao === X.versao && agora() - guardado.atualizadoEm < VALIDADE) {
      S = guardado; if (TESTE) S.teste = true;
      if (S.fase === 'fim' && S.resultado) {
        var jf = TL.jaFez || {}; $('jaTexto').textContent = jf.texto || ('Você concluiu o diagnóstico em ' + dataBr(S.concluidoEm || S.atualizadoEm) + '. Quer ver o resultado de novo?'); $('jaVer').textContent = jf.ver || 'Ver meu resultado'; $('jaRefazer').textContent = jf.refazer || 'Refazer';
        $('jaVer').onclick = function () { emailTela = ''; desenharResultado(S.resultado, false); };
        $('jaRefazer').onclick = function () { reiniciar(); };
        mostrar('t-ja');
        if (S.fimPendente && S.captura) { emailTela = S.captura.email; enviarFim(0); }
        return;
      }
      if (S.fase === 'perguntas' && (S.cargo || respostasExistem()) && S.captura) {
        var p = primeiraPendente(), pos = posicao(p);
        var rt = TL.retomar || {}; $('retTexto').textContent = rt.texto || (pos ? 'Você parou na pergunta ' + pos.n + ' de ' + pos.total + '. Continuar ou recomeçar?' : 'Você parou no começo. Continuar ou recomeçar?'); $('retContinuar').textContent = rt.continuar || 'Continuar'; $('retRecomecar').textContent = rt.recomecar || 'Recomeçar';
        $('retContinuar').onclick = function () { irPara(p, true); };
        $('retRecomecar').onclick = function () { reiniciar(); };
        mostrar('t-retomar'); return;
      }
    }
    if (guardado) apagar();
    S = novo(); mostrar('t-e0');
  }

  /* ---------- ligações ---------- */
  $('qVoltar').addEventListener('click', botaoVoltar);
  $('mVoltar').addEventListener('click', botaoVoltar);
  $('eVoltar').addEventListener('click', botaoVoltar);
  $('transVoltar').addEventListener('click', botaoVoltar);
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
