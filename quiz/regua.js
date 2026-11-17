/* Quiz de carreira Liderium · RÉGUA (função pura, sem tela, sem rede).
 * Arquivo compartilhado: a página (resultado na tela) e o script (resultado oficial, e-mail e planilha) usam a mesma cópia.
 * Lê os dados de QUIZ_ESTRUTURA (e, em montarResultado, de QUIZ_RESULTADOS e QUIZ_PERGUNTAS) quando é chamada. */
(function (g) {
  function E() { return g.QUIZ_ESTRUTURA; }
  function base(trilha) { var t = E().trilhas[trilha]; return t.perguntasDe ? E().trilhas[t.perguntasDe] : t; }
  function cargoDe(id) { var c = E().cargos; for (var i = 0; i < c.length; i++) if (c[i].id === id) return c[i]; return null; }

  /** cargo (+ resposta da P0b) -> {trilha} | {pendente:'P0b'} | {erro} */
  function rotear(cargoId, desvioAltId) {
    var c = cargoDe(cargoId);
    if (!c) return { erro: 'cargo' };
    if (c.destino === 'EMPRESARIO') return { trilha: 'EMPRESARIO' };
    if (c.destino === 'DESVIO') {
      var d = E().desvio[desvioAltId];
      return d ? { trilha: d } : { pendente: 'P0b' };
    }
    return { trilha: c.destino };
  }

  /** Fila de perguntas da trilha, com a prova inserida logo depois da pergunta cujo gatilho foi atendido. */
  function montarFila(trilha, respostas) {
    var fila = [], b = base(trilha); respostas = respostas || {};
    b.fila.forEach(function (q) {
      fila.push(q);
      var e = E().perguntas[q];
      if (e.prova && respostas[q] !== undefined && respostas[q] !== null) {
        var nivel = e.niveis[respostas[q]];
        if (e.prova.gatilho.indexOf(nivel) >= 0) fila.push(e.prova.id);
      }
    });
    return fila;
  }

  /** Perguntas fixas (sem provas) da trilha. */
  function filaFixa(trilha) { return base(trilha).fila.slice(); }

  function pontuarPergunta(q, respostas) {
    var e = E().perguntas[q], nivel = e.niveis[respostas[q]];
    var pts = E().pontos[nivel], percepcao = 0, provaNao = false;
    if (e.prova && nivel === 'A' && e.prova.gatilho.indexOf('A') >= 0) {
      var ef = E().perguntas[e.prova.id].efeitos[respostas[e.prova.id]];
      if (ef === 'nao_confirma') { pts = E().pontos.B; provaNao = true; percepcao = e.prova.alerta === false ? 0 : 1; }
    }
    return { q: q, pts: pts, nivel: nivel, percepcao: percepcao, provaNao: provaNao, alt: respostas[q], provaAlt: e.prova ? respostas[e.prova.id] : null };
  }

  function mDaTrilha(trilha) {
    var b = base(trilha);
    for (var i = 0; i < b.fila.length; i++) if (E().perguntas[b.fila[i]].papel === 'mentalidade') return b.fila[i];
    return null;
  }

  function pilarDe(trilha, q) {
    var p = base(trilha).pilares;
    for (var k in p) if (p[k].indexOf(q) >= 0) return k;
    return null;
  }

  /** Valida e calcula. Lança Error('incompleto'|'invalido') se faltar resposta ou vier id desconhecido. */
  function calcular(trilha, respostas) {
    var Es = E(); respostas = respostas || {};
    if (!Es.trilhas[trilha]) throw new Error('invalido');
    var def = Es.trilhas[trilha], b = base(trilha);
    var fila = montarFila(trilha, respostas), i, q, e;
    for (i = 0; i < fila.length; i++) {
      q = fila[i]; e = Es.perguntas[q];
      var r = respostas[q];
      if (r === undefined || r === null) throw new Error('incompleto');
      if (e.papel === 'mentalidade') {
        if (!Array.isArray(r) || r.length !== e.escolher) throw new Error('invalido');
        var vistos = {};
        r.forEach(function (id) { if (!e.frases[id] || vistos[id]) throw new Error('invalido'); vistos[id] = 1; });
      } else {
        var mapa = e.niveis || e.efeitos || e.valores;
        if (!mapa[r]) throw new Error('invalido');
      }
    }
    var pilares = [], percepcao = 0, detalhe = {}, lacunaLeitura = false;
    Es.pilares.forEach(function (p) {
      var qs = b.pilares[p], soma = 0;
      qs.forEach(function (qq) {
        var pr = pontuarPergunta(qq, respostas);
        soma += pr.pts; percepcao += pr.percepcao; detalhe[qq] = pr;
        if (pr.nivel === 'D') lacunaLeitura = true;
      });
      var lim = Es.limiares[2 * qs.length];
      var estado = soma >= lim.consolidado ? 'consolidado' : soma >= lim.construcao ? 'construcao' : 'proximo_passo';
      pilares.push({ id: p, pts: soma, max: 2 * qs.length, estado: estado });
    });
    var teto = null, tetoIdx = -1;
    for (i = 0; i < pilares.length; i++) if (pilares[i].estado !== 'consolidado') { teto = pilares[i].id; tetoIdx = i; break; }
    var n = teto ? tetoIdx + 1 : 5;
    var saida = def.saidas + 'S' + n;
    var intensidade = !teto ? null : (pilares[tetoIdx].estado === 'proximo_passo' ? 'inicio' : 'refino');

    // mentalidade
    var mId = mDaTrilha(trilha), me = Es.perguntas[mId], sel = respostas[mId].slice().sort(function (a, c) { return a - c; });
    var Ls = sel.filter(function (id) { return me.frases[id].polo === 'L'; });
    var Esel = sel.filter(function (id) { return me.frases[id].polo === 'E'; });
    var sinalCrenca = Ls.length >= 2, crenca = null, reforcos = [];
    if (teto) {
      var lig = Ls.filter(function (id) { return pilarDe(trilha, me.frases[id].liga) === teto; });
      if (lig.length) crenca = { m: mId, frase: lig[0], tipo: 'ligada' };
      else {
        var dep = Ls.filter(function (id) { return Es.pilares.indexOf(pilarDe(trilha, me.frases[id].liga)) > tetoIdx; });
        if (dep.length) crenca = { m: mId, frase: dep[0], tipo: 'proximo_degrau' };
      }
      reforcos = Esel.filter(function (id) { return pilarDe(trilha, me.frases[id].liga) === teto; });
    }

    // perguntas do pilar do teto, da mais fraca para a mais forte (empate: ordem da trilha) e subtema mais fraco
    var fracas = [], subtema = null;
    if (teto) {
      fracas = b.pilares[teto].map(function (qq, ix) { var d = detalhe[qq]; return { q: qq, pts: d.pts, alt: d.alt, provaNao: d.provaNao, provaId: Es.perguntas[qq].prova ? Es.perguntas[qq].prova.id : null, provaAlt: d.provaAlt, ix: ix }; })
        .sort(function (a, c) { return a.pts - c.pts || a.ix - c.ix; });
      var qsT = b.pilares[teto];
      if (qsT.length === 2) subtema = { q: fracas[0].q, iguais: fracas[0].pts === fracas[1].pts, pts: [detalhe[qsT[0]].pts, detalhe[qsT[1]].pts] };
    }

    var provaNoTeto = teto ? fracas.some(function (f) { return f.provaNao; }) : false;

    // padrão (T3.5 e T3.7): padrão da alternativa marcada na pergunta mais fraca do pilar do teto, se tiver etiqueta
    var padrao = null;
    if (teto) {
      var cand = null;
      b.pilares[teto].forEach(function (qq) {
        var pr = detalhe[qq];
        if (cand === null || pr.pts < detalhe[cand].pts ||
            (pr.pts === detalhe[cand].pts && !(Es.perguntas[cand].padroes && Es.perguntas[cand].padroes[detalhe[cand].alt]) &&
             Es.perguntas[qq].padroes && Es.perguntas[qq].padroes[pr.alt])) cand = qq;
      });
      var pd = Es.perguntas[cand].padroes;
      if (pd && pd[respostas[cand]]) padrao = pd[respostas[cand]];
    }

    // contexto (não pontua)
    var contexto = {};
    fila.forEach(function (qq) {
      var ee = Es.perguntas[qq];
      if (ee.papel === 'contexto') contexto[ee.chave] = ee.valores ? ee.valores[respostas[qq]] : ee.niveis[respostas[qq]];
    });

    return {
      saida: saida, trilha: trilha, teto: teto, intensidade: intensidade, pilares: pilares, percepcao: percepcao,
      lacunaLeitura: lacunaLeitura, provaNoTeto: provaNoTeto, sinalCrenca: sinalCrenca, crenca: crenca, reforcos: reforcos, padrao: padrao,
      contexto: contexto, produto: Es.produtos[saida],
      marcadasL: Ls.map(function (id) { return { m: mId, frase: id }; }), fracas: fracas, subtema: subtema
    };
  }

  function primeiroNome(nome) {
    var n = String(nome || '').trim().split(/\s+/)[0] || '';
    return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
  }

  function subst(txt, mapa) {
    return String(txt || '').replace(/\{(nome|frase)\}/g, function (m, k) { return mapa[k] !== undefined ? mapa[k] : ''; });
  }

  function linkWhatsApp(produto, codigo) {
    var w = E().whatsapp;
    var msg = w.mensagem.replace('{codigo}', codigo).replace('{produto}', E().produtoFrase[produto] || produto);
    return 'https://wa.me/' + w.numero + '?text=' + encodeURIComponent(msg);
  }

  function textoFrase(P, m, id) {
    var al = (P[m] && P[m].alternativas) || [];
    for (var i = 0; i < al.length; i++) if (al[i].id === id) return al[i].texto;
    return '';
  }

  /** Resultado pronto para mostrar (tela e e-mail usam esta mesma montagem). Só texto puro, sem HTML. */
  function montarResultado(res, nome) {
    var R = g.QUIZ_RESULTADOS || {}, P = g.QUIZ_PERGUNTAS || {}, Es = E();
    var s = (R.saidas && R.saidas[res.saida]) || {};
    if (res.provaNoTeto && s.registro) { var s0 = s; s = {}; for (var k0 in s0) s[k0] = s0[k0]; for (var k1 in s0.registro) s[k1] = s0.registro[k1]; }
    var bl = R.blocos || {}, rot = R.rotulos || {}, cr = R.crencas || {};
    var mapa = { nome: primeiroNome(nome) };
    var acoesFonte = s.acoes || [];
    var acoes = Array.isArray(acoesFonte) ? acoesFonte : (acoesFonte[res.intensidade] || acoesFonte.inicio || acoesFonte.refino || []);
    acoes = acoes.map(function (a) { return typeof a === 'string' ? { titulo: '', texto: subst(a, mapa) } : { titulo: subst(a.titulo || '', mapa), texto: subst(a.texto || '', mapa) }; });

    // crença: ligada (frase marcada) > lida na resposta (pergunta mais fraca do teto) > próximo degrau (frase marcada de outro pilar)
    var crenca = null, releit = function (m, id) { return (cr.releitura && cr.releitura[m] && cr.releitura[m][id]) || ''; };
    if (res.crenca && res.crenca.tipo === 'ligada') {
      var f1 = textoFrase(P, res.crenca.m, res.crenca.frase);
      crenca = { tipo: 'ligada', frase: f1, texto: subst(bl.crencaLigada, { frase: f1 }), releitura: releit(res.crenca.m, res.crenca.frase) };
    } else if (res.teto) {
      for (var i = 0; i < res.fracas.length && !crenca; i++) {
        var fq = res.fracas[i], ql = fq.provaNao && cr.lidas && cr.lidas[fq.provaId] && cr.lidas[fq.provaId][fq.provaAlt] ? fq.provaId : fq.q;
        var alt = ql === fq.q ? fq.alt : fq.provaAlt;
        var lida = cr.lidas && cr.lidas[ql] && cr.lidas[ql][alt];
        if (lida) crenca = { tipo: 'lida', frase: lida, texto: subst(bl.crencaLida, { frase: lida }), releitura: '' };
      }
      if (crenca && res.crenca) {
        var f3 = textoFrase(P, res.crenca.m, res.crenca.frase);
        crenca.proxima = { frase: f3, texto: subst(bl.crencaProximoDegrau, { frase: f3 }), releitura: releit(res.crenca.m, res.crenca.frase) };
      }
      if (!crenca && res.crenca) {
        var f2 = textoFrase(P, res.crenca.m, res.crenca.frase);
        crenca = { tipo: 'proximo_degrau', frase: f2, texto: subst(bl.crencaProximoDegrau, { frase: f2 }), releitura: releit(res.crenca.m, res.crenca.frase) };
      }
    }
    var reforco = '';
    if (res.reforcos && res.reforcos.length) reforco = subst(bl.reforco, { frase: textoFrase(P, Regua_mDe(res), res.reforcos[0]) });
    var marcadas = [];
    if (res.sinalCrenca) res.marcadasL.forEach(function (x) { if (res.crenca && x.frase === res.crenca.frase && crenca) return; marcadas.push({ frase: textoFrase(P, x.m, x.frase), releitura: releit(x.m, x.frase) }); });

    var ajustes = [];
    (R.ajustes || []).forEach(function (a) {
      if (a.trilhas && a.trilhas.indexOf(res.trilha) < 0) return;
      if (a.tetos && a.tetos.indexOf(res.teto || 'nenhum') < 0) return;
      if (ajustes.length >= 2) return;
      var ok = true; for (var k in a.se) if (res.contexto[k] !== a.se[k]) ok = false;
      if (ok) ajustes.push(subst(a.texto, mapa));
    });
    var prod = (R.produtos && R.produtos[res.produto]) || {};
    var ptxt = (R.pilares && R.pilares[res.trilha]) || {};
    return {
      saida: res.saida, trilha: res.trilha, teto: res.teto, intensidade: res.intensidade,
      titulo: subst(s.titulo, mapa), resumo: subst(s.resumo, mapa), corpo: (s.corpo || []).map(function (x) { return subst(x, mapa); }),
      pilares: res.pilares.map(function (p) {
        return { id: p.id, rotulo: (R.pilaresNomes && R.pilaresNomes[p.id]) || Es.rotulosPilar[p.id], estado: p.estado,
          estadoRotulo: (R.niveis && R.niveis[p.estado]) || Es.rotulosEstado[p.estado], texto: (p.id === res.teto && s.pilarTexto) ? subst(s.pilarTexto, mapa) : ((ptxt[p.id] && ptxt[p.id][p.estado]) || '') };
      }),
      tetoRotulo: res.teto ? ((R.pilaresNomes && R.pilaresNomes[res.teto]) || Es.rotulosPilar[res.teto]) : null,
      crenca: crenca, reforco: reforco, marcadas: marcadas,
      destaque: res.sinalCrenca ? subst(bl.destaqueMentalidade, mapa) : '',
      percepcao: (res.provaNoTeto && s.percepcao) ? subst(s.percepcao, mapa) : (res.percepcao > 0 ? subst(bl.percepcao, mapa) : ''),
      lacuna: res.lacunaLeitura ? subst(bl.lacunaLeitura, mapa) : '',
      ajustes: ajustes,
      padrao: res.padrao && s.padroes && s.padroes[res.padrao] ? subst(s.padroes[res.padrao], mapa) : '',
      acoes: acoes,
      ponte: subst(s.ponte || prod.ponte || '', mapa), depois: subst(s.depois || '', mapa),
      rotulos: { pilares: rot.pilares || 'Onde você está nos 4 pilares', teto: rot.teto || 'Onde a escada pede atenção agora', crenca: rot.crenca || 'O que está por trás',
        ganho: rot.ganho || 'O que você ganha ao passar deste degrau', acoes: rot.acoes || 'Seus próximos 30 dias', depois: rot.depois || 'E depois disso', refazer: rot.refazer || 'Refazer o diagnóstico' },
      produto: { codigo: res.produto, nome: prod.nome || '', convite: subst(prod.convite || '', mapa), rotulo: (prod.cta && prod.cta.rotulo) || 'Falar no WhatsApp' },
      whatsapp: linkWhatsApp(res.produto, res.saida)
    };
  }
  function Regua_mDe(res) { return mDaTrilha(res.trilha); }

  var Regua = {
    rotear: rotear, montarFila: montarFila, filaFixa: filaFixa, pontuarPergunta: pontuarPergunta, calcular: calcular,
    montarResultado: montarResultado, linkWhatsApp: linkWhatsApp, primeiroNome: primeiroNome, subst: subst,
    mDaTrilha: mDaTrilha, pilarDe: pilarDe, cargoDe: cargoDe
  };
  if (typeof module !== 'undefined') module.exports = Regua;
  g.QUIZ_REGUA = Regua;
})(typeof globalThis !== 'undefined' ? globalThis : this);
