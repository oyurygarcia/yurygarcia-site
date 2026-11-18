/* Quiz de carreira Liderium · RÉGUA PREMIUM v4 (função pura, sem tela, sem rede).
 * Arquivo compartilhado: a página premium e o script usam a mesma cópia (sincronizar-premium.sh -> script-quiz/src/ReguaPremium.gs).
 * NÃO muda o teto nem a saída: chama QUIZ_REGUA.calcular() da régua atual e só acrescenta por cima:
 *   percentual por subcritério (D8), gap da autoavaliação (D7), a pergunta nova T3.4b (só subcritério),
 *   a entrada da IA (sem nome, e-mail, WhatsApp), a conferência da saída da IA e o relatório montado (com ou sem IA).
 * Lê QUIZ_ESTRUTURA, QUIZ_PERGUNTAS, QUIZ_REGUA e QUIZ_CONTEUDO (conteudo.js, gerado por gerar-conteudo.py) quando é chamada. */
(function (g) {
  function E() { return g.QUIZ_ESTRUTURA; }
  function Rg() { return g.QUIZ_REGUA; }
  function P() { return g.QUIZ_PERGUNTAS || {}; }
  function C() { return g.QUIZ_CONTEUDO || {}; }
  function M() { return g.QUIZ_MAPA_LEITURA || {}; }   // só no script (Mapa.gs): a página não precisa dele

  var PILARES = ['entrega', 'visibilidade', 'influencia', 'proximo_nivel'];
  var CURTO = { entrega: 'entrega', visibilidade: 'visibilidade', influencia: 'influencia', proximo_nivel: 'proximo' };
  var LONGO = { entrega: 'entrega', visibilidade: 'visibilidade', influencia: 'influencia', proximo: 'proximo_nivel', proximo_nivel: 'proximo_nivel' };
  var NIVEL_CONTEUDO = { consolidado: 'firme', construcao: 'em_construcao', proximo_passo: 'proximo_degrau' };
  var VALOR = { A: 100, B: 50, C: 0, D: 0 };
  /* produto da estrutura -> chave do convite (convites.json) e código que a IA recebe (PROMPT-SISTEMA-v4 §1) */
  var CONVITE_DE = { LAP: 'lap', POCKET: 'conversa', MENTORIA: 'mentoria_liderium', INDIVIDUAL: 'mentoria_individual' };
  var PRODUTO_IA = CONVITE_DE; // ids do prompt: lap | mentoria_liderium | mentoria_individual | conversa (Pocket não existe: T2S2–T2S5 são convidados a falar com a equipe, Yury 18/11/2026)
  /* Palavras e marcas proibidas (PROMPT-SISTEMA-v4 §10). Achou uma -> fallback. Minúsculas; comparação sem caixa.
   * "garantir" sozinho não é promessa ("entra para garantir a entrega"): só bloqueia promessa de resultado. */
  var PROIBIDAS = ['r$', 'pocket', 'posicionamento 360', 'liderium essential', 'pilar do método', 'capital político',
    'mindset', 'alta performance', 'destravar', 'desbloque', 'zona de conforto', 'empoderar', 'networking', 'hack',
    'patrocinador', 'sponsor', 'comitê', 'tabuleiro', 'xadrez', 'ponto fraco', 'você ainda não', 'falta a você', 'você erra',
    'o problema é', 'invisível', 'ninguém vê', 'tipo de pessoa', 'subcritério', 'régua', 'lacuna', 'consolidado',
    'vai ser promovid', 'garantimos', 'garanto', 'a gente garante', 'garante que você', 'garante a promo', 'garante a sua promo', 'garante o resultado',
    'garantia de', 'garantid', 'desconto', 'parcela', 'http', 'www.', 'inteligência artificial', 'prompt', '[contato]', '[nome]', '—', '!', '…', '...'];

  var OBJETIVOS = [
    { id: 'promocao', texto: 'Ser promovido(a)' },
    { id: 'reconhecimento', texto: 'Ser reconhecido(a) pelo que já entrego' },
    { id: 'escopo_maior', texto: 'Liderar algo maior' },
    { id: 'mudar_empresa', texto: 'Mudar de empresa' },
    { id: 'descobrindo', texto: 'Ainda estou descobrindo' }
  ];

  /* Pergunta nova (Visibilidade da T3/T4). Entra só nos subcritérios: não está na fila da régua atual, então não muda teto nem saída.
   * Texto e alternativas vêm de QUIZ_CONTEUDO.telas.pergunta_T3_4b; o nível de cada alternativa vem de "nivel" (A/B/C/D) de cada uma. */
  var EXTRAS = { 'T3.4b': { trilhas: ['T3', 'T4'], depoisDe: 'T3.4', papel: 'premium' } };
  var NIVEIS_T34B_PADRAO = { 1: 'C', 2: 'B', 3: 'A' }; // só enquanto telas.json não chega (placeholder)

  /* Subcritérios por trilha (D8). Regras:
   *  nivel        : alternativa A=100, B=50, C/D=0; se a pergunta tem prova, A com prova que não confirma vira 50 (D8),
   *                 a não ser que a prova seja subcritério próprio (semProva:true), para não contar a mesma prova duas vezes.
   *  prova_ou_nivel: prova apareceu -> confirma=100, não confirma=50; não apareceu -> vale o nível da pergunta de origem.
   *  defesa       : prova apareceu -> confirma=100, não confirma=0; não apareceu -> pelo nível da origem (B=50, D=0, C=0).
   *  prova_valores: valor por alternativa da prova; sem prova, vale semProva.
   *  frase        : frase de mentalidade "a favor" marcada=100, não marcada=0.
   * T3 e T4: aprovados pelo Yury (CONTRATO-v4). T1 e T2: proposta em ia/v4/conteudo/SUBCRITERIOS-T1-T2.md (TODO: aprovação do Yury). */
  var SUB = {
    T3: {
      entrega: [
        { id: 'entrega_area', nome: 'Liga o trabalho aos objetivos da área', regra: { tipo: 'nivel', q: 'T3.2', semProva: true } },
        { id: 'entrega_empresa', nome: 'Traduz para os objetivos da empresa', regra: { tipo: 'prova_ou_nivel', prova: 'T3.3', de: 'T3.2' } },
        { id: 'entrega_operacao', nome: 'Operação que anda sem a pessoa', regra: { tipo: 'nivel', q: 'T3.1c' } }
      ],
      visibilidade: [
        { id: 'visibilidade_audiencia', nome: 'Adapta a apresentação a quem ouve', regra: { tipo: 'nivel', q: 'T3.4' } },
        { id: 'visibilidade_caminho', nome: 'O resultado chega a quem decide', regra: { tipo: 'nivel', q: 'T3.4b' } }
      ],
      influencia: [
        { id: 'influencia_interesse', nome: 'Lê o interesse por trás do pedido', regra: { tipo: 'nivel', q: 'T3.5' } },
        { id: 'influencia_ganha_perde', nome: 'Pensa em quem ganha e quem perde antes de propor', regra: { tipo: 'frase', m: 'M3', frase: 3 } },
        { id: 'influencia_discorda', nome: 'Discorda com credibilidade', regra: { tipo: 'frase', m: 'M3', frase: 6 } }
      ],
      proximo_nivel: [
        { id: 'proximo_decisoes', nome: 'Participa das decisões sensíveis', regra: { tipo: 'nivel', q: 'T3.6' } },
        { id: 'proximo_defensor', nome: 'Tem quem fale a favor', regra: { tipo: 'nivel', q: 'T3.7', semProva: true } },
        { id: 'proximo_prova', nome: 'Defesa comprovada acima do gestor', regra: { tipo: 'defesa', prova: 'T3.7p', de: 'T3.7' } }
      ]
    },
    // T1 e T2: ia/v4/conteudo/SUBCRITERIOS-T1-T2.md (proposta da frente de conteúdo, versão C; Opções A/B aguardam o Chief of Staff)
    T1: {
      entrega: [
        { id: 'T1-E1', nome: 'Entrega com qualidade e constância, como referência', regra: { tipo: 'nivel', q: 'T1.1' } },
        { id: 'T1-E2', nome: 'Vê a entrega como ponto de partida para o próximo cargo', regra: { tipo: 'frase', m: 'M1', frase: 4 } }
      ],
      visibilidade: [
        { id: 'T1-V1', nome: 'O gestor lembra de você nas oportunidades', regra: { tipo: 'nivel', q: 'T1.2' } },
        { id: 'T1-V2', nome: 'Quem está acima do gestor conhece o seu trabalho', regra: { tipo: 'nivel', q: 'T1.6' } }
      ],
      influencia: [
        { id: 'T1-I1', nome: 'Chega às decisões do time com a ideia já conversada', regra: { tipo: 'nivel', q: 'T1.3' } },
        { id: 'T1-I2', nome: 'Outras áreas procuram você direto', regra: { tipo: 'nivel', q: 'T1.4' } },
        { id: 'T1-I3', nome: 'Busca entender o que as outras áreas precisam', regra: { tipo: 'frase', m: 'M1', frase: 5 } }
      ],
      proximo_nivel: [
        { id: 'T1-P1', nome: 'Conduz uma frente além das próprias entregas', regra: { tipo: 'nivel', q: 'T1.5' } },
        { id: 'T1-P2', nome: 'O resultado da frente chegou acima do gestor', regra: { tipo: 'prova_valores', prova: 'T1.5p', valores: { 2: 100, 1: 50, 3: 0 }, semProva: 0 } },
        { id: 'T1-P3', nome: 'Já trabalha como se estivesse no próximo cargo', regra: { tipo: 'frase', m: 'M1', frase: 6 } }
      ]
    },
    T2: {
      entrega: [
        { id: 'T2-E1', nome: 'O acompanhamento roda mesmo sem você', regra: { tipo: 'nivel', q: 'T2.2a' } },
        { id: 'T2-E2', nome: 'Trata quem não está rendendo com rapidez e critério', regra: { tipo: 'nivel', q: 'T2.2b' } }
      ],
      visibilidade: [
        { id: 'T2-V1', nome: 'A gerência credita o resultado à sua liderança', regra: { tipo: 'nivel', q: 'T2.3' } },
        { id: 'T2-V2', nome: 'Quem está acima do gestor conhece a sua forma de liderar', regra: { tipo: 'nivel', q: 'T2.7' } },
        { id: 'T2-V3', nome: 'Quer que a gerência veja como você lidera', regra: { tipo: 'frase', m: 'M2', frase: 6 } }
      ],
      influencia: [
        { id: 'T2-I1', nome: 'Mudanças com pares e áreas vizinhas acontecem de fato', regra: { tipo: 'nivel', q: 'T2.5' } },
        { id: 'T2-I2', nome: 'O gestor consulta você antes de decidir', regra: { tipo: 'nivel', q: 'T2.6' } },
        { id: 'T2-I3', nome: 'Leva para cima a solução', regra: { tipo: 'frase', m: 'M2', frase: 5 } }
      ],
      proximo_nivel: [
        { id: 'T2-P1', nome: 'A equipe segue bem sem você, com alguém preparado', regra: { tipo: 'nivel', q: 'T2.4' } },
        { id: 'T2-P2', nome: 'Vê o seu resultado no que a equipe faz sem você', regra: { tipo: 'frase', m: 'M2', frase: 4 } }
      ]
    }
  };
  SUB.T4 = SUB.T3;

  function respondida(r, q) { return r[q] !== undefined && r[q] !== null && r[q] !== ''; }
  function baseTrilha(trilha) { var t = E().trilhas[trilha]; return t && t.perguntasDe ? t.perguntasDe : trilha; }
  function extrasDaTrilha(trilha) { var o = []; for (var q in EXTRAS) if (EXTRAS[q].trilhas.indexOf(trilha) >= 0) o.push(q); return o; }

  /** Texto e níveis da pergunta nova (do conteúdo; placeholder se ainda não veio). */
  function perguntaExtra(q) {
    var tl = (C().telas || {}), d = tl['pergunta_' + q.replace('.', '_')] || {};
    var alts = (d.alternativas || []).map(function (a, i) { return { id: Number(a.id || i + 1), texto: a.texto, nivel: a.nivel }; });
    var niveis = {};
    alts.forEach(function (a) { if (a.nivel) niveis[a.id] = a.nivel; });
    if (!alts.length || Object.keys(niveis).length !== alts.length) niveis = NIVEIS_T34B_PADRAO;
    return { texto: d.pergunta || d.texto || '', alternativas: alts, niveis: niveis };
  }
  function nivelDe(q, alt) {
    if (EXTRAS[q]) return perguntaExtra(q).niveis[alt] || null;
    var e = E().perguntas[q]; if (!e || !e.niveis) return null;
    return e.niveis[alt] || null;
  }

  /** Fila da página premium: a da régua atual + a pergunta nova logo depois da T3.4 (T3/T4). */
  function montarFila(trilha, respostas) {
    var f = Rg().montarFila(trilha, respostas || {});
    extrasDaTrilha(trilha).forEach(function (q) { var i = f.indexOf(EXTRAS[q].depoisDe); if (i >= 0) f.splice(i + 1, 0, q); });
    return f;
  }
  function filaFixa(trilha) {
    var f = Rg().filaFixa(trilha);
    extrasDaTrilha(trilha).forEach(function (q) { var i = f.indexOf(EXTRAS[q].depoisDe); if (i >= 0) f.splice(i + 1, 0, q); });
    return f;
  }
  function ehExtra(q) { return !!EXTRAS[q]; }

  /** Respostas sem as perguntas premium (é o que a régua atual recebe). */
  function respostasBase(r) { var o = {}; for (var q in (r || {})) if (!EXTRAS[q]) o[q] = r[q]; return o; }

  /* Formato de regra do conteúdo (fixo-T{n}.json, subcriterios[].regra): pergunta | mentalidade | prova. */
  function valorRegraConteudo(rg, r) {
    if (rg.tipo === 'mentalidade') { var sel = r[rg.pergunta]; return Array.isArray(sel) && sel.map(Number).indexOf(Number(rg.alternativa)) >= 0 ? rg.marcada : rg.nao_marcada; }
    if (rg.tipo === 'prova') return respondida(r, rg.pergunta) && rg.valores[r[rg.pergunta]] !== undefined ? rg.valores[r[rg.pergunta]] : rg.sem_prova;
    if (rg.tipo === 'pergunta') {
      if (!respondida(r, rg.pergunta) || rg.valores[r[rg.pergunta]] === undefined) return null;
      var v = rg.valores[r[rg.pergunta]];
      if (rg.prova && respondida(r, rg.prova) && (rg.prova_rebaixa_para_50 || []).map(Number).indexOf(Number(r[rg.prova])) >= 0) v = Math.min(v, 50);
      return v;
    }
    return null;
  }
  /** Definições do pilar: as do conteúdo quando todas trazem "regra" (motor genérico); senão, as do código (SUB). */
  function defsPilar(trilha, p) {
    var f = fixoPilar(trilha, p), cs = f.subcriterios || [];
    if (cs.length && cs.every(function (x) { return x.regra && x.regra.tipo; })) return cs.map(function (x) { return { id: x.id, nome: x.nome, regra: x.regra, conteudo: true }; });
    var defs = SUB[trilha] || SUB[baseTrilha(trilha)];
    return (defs[p] || []).map(function (d) {
      for (var i = 0; i < cs.length; i++) if (cs[i].id === d.id && cs[i].nome) return { id: d.id, nome: cs[i].nome, regra: d.regra };
      return d;
    });
  }
  function valorSub(regra, r, doConteudo) {
    if (doConteudo) return valorRegraConteudo(regra, r);
    var Es = E();
    if (regra.tipo === 'frase') { var sel = r[regra.m]; return Array.isArray(sel) && sel.map(Number).indexOf(regra.frase) >= 0 ? 100 : 0; }
    if (regra.tipo === 'nivel') {
      if (!respondida(r, regra.q)) return null;
      var nv = nivelDe(regra.q, r[regra.q]); if (!nv) return null;
      var v = VALOR[nv], e = Es.perguntas[regra.q];
      if (!regra.semProva && e && e.prova && nv === 'A' && respondida(r, e.prova.id)) {
        if (Es.perguntas[e.prova.id].efeitos[r[e.prova.id]] === 'nao_confirma') v = 50;
      }
      return v;
    }
    if (regra.tipo === 'prova_valores') { return respondida(r, regra.prova) && regra.valores[r[regra.prova]] !== undefined ? regra.valores[r[regra.prova]] : regra.semProva; }
    if (regra.tipo === 'prova_ou_nivel' || regra.tipo === 'defesa') {
      var nivelOrigem = respondida(r, regra.de) ? nivelDe(regra.de, r[regra.de]) : null;
      var provaVale = nivelOrigem === 'A' && respondida(r, regra.prova);
      if (provaVale) {
        var ef = Es.perguntas[regra.prova].efeitos[r[regra.prova]];
        if (ef === 'confirma' || ef === 'neutro') return 100;
        return regra.tipo === 'defesa' ? 0 : 50;
      }
      if (!nivelOrigem) return null;
      return nivelOrigem === 'A' ? (regra.tipo === 'defesa' ? 0 : 50) : VALOR[nivelOrigem]; // A sem prova não acontece na régua; por segurança, conservador
    }
    return null;
  }

  /** Percentual por pilar (D8): média dos subcritérios, arredondada. */
  function percentuais(trilha, respostas) {
    var r = respostas || {}, out = {};
    PILARES.forEach(function (p) {
      var subs = defsPilar(trilha, p).map(function (s) { return { id: s.id, nome: s.nome, valor: valorSub(s.regra, r, s.conteudo) }; });
      var vs = subs.filter(function (s) { return s.valor !== null; });
      out[p] = { pct: vs.length ? Math.round(vs.reduce(function (a, s) { return a + s.valor; }, 0) / vs.length) : 0, subcriterios: subs };
    });
    return out;
  }

  /** Autoavaliação limpa: {pilar: inteiro 0..10} só com o que veio válido. */
  function limparAuto(a) {
    var o = {}; a = a || {};
    PILARES.forEach(function (p) { var v = a[p] !== undefined ? a[p] : a[CURTO[p]]; v = Number(v); if (v === v && v >= 0 && v <= 10 && Math.round(v) === v && a[p] !== null && a[p] !== '') o[p] = v; });
    return o;
  }

  /** Gap (D7): nota×10 − percentual; |gap| ≤ 15 alinhado; > 15 acima; < −15 abaixo. */
  function gaps(auto, pct) {
    var o = [];
    PILARES.forEach(function (p) {
      if (auto[p] === undefined) return;
      var gp = auto[p] * 10 - pct[p].pct;
      o.push({ pilar: p, nota: auto[p], pct: pct[p].pct, gap: gp, tipo: Math.abs(gp) <= 15 ? 'alinhado' : (gp > 0 ? 'acima' : 'abaixo') });
    });
    return o;
  }

  /** Cálculo premium completo. Lança Error('incompleto'|'invalido') como a régua atual. */
  function calcular(trilha, respostas, auto) {
    respostas = respostas || {};
    var res = Rg().calcular(trilha, respostasBase(respostas)); // teto e saída: régua atual, sem mudança
    extrasDaTrilha(trilha).forEach(function (q) {
      if (!respondida(respostas, q)) throw new Error('incompleto');
      if (!perguntaExtra(q).niveis[respostas[q]]) throw new Error('invalido');
    });
    var pct = percentuais(trilha, respostas), a = limparAuto(auto), gp = gaps(a, pct);
    var pilares = res.pilares.map(function (p) { return { id: p.id, estado: p.estado, nivel: NIVEL_CONTEUDO[p.estado], pct: pct[p.id].pct, subcriterios: pct[p.id].subcriterios, teto: p.id === res.teto }; });
    // forças (DECISOES §3, sem o critério do campo aberto, que é da IA): pilares firmes, maior percentual, depois a ordem da escada
    var forcas = pilares.filter(function (p) { return p.estado === 'consolidado'; })
      .map(function (p, i) { return { id: p.id, pct: p.pct, i: PILARES.indexOf(p.id) }; })
      .sort(function (x, y) { return y.pct - x.pct || x.i - y.i; }).slice(0, 2).map(function (x) { return x.id; });
    // oportunidades: o teto e o próximo pilar não firme na ordem; sem teto, só o Próximo nível
    var nao = pilares.filter(function (p) { return p.estado !== 'consolidado'; }).map(function (p) { return p.id; });
    var oportunidades = res.teto ? nao.slice(0, 2) : ['proximo_nivel'];
    if (!res.teto) forcas = forcas.filter(function (f) { return f !== 'proximo_nivel'; });
    return { res: res, respostas: respostas, saida: res.saida, trilha: trilha, teto: res.teto, produto: res.produto, pilares: pilares, auto: a, gaps: gp, forcas: forcas, oportunidades: oportunidades };
  }

  /* ---------- campo aberto ---------- */
  var RE_EMAIL = /[A-Za-z0-9._%+\-]+\s*@\s*[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/g;
  var RE_FONE = /(\+?\d[\d\s().\-]{6,}\d)/g;
  /** Cópia para a IA: e-mail e telefone viram [contato]; o nome de quem respondeu vira [nome] (nunca vai para a IA). */
  function limparCampoAberto(txt, nomes) {
    var t = String(txt || '').replace(/\r/g, '').slice(0, 600);
    t = t.replace(RE_EMAIL, '[contato]');
    t = t.replace(RE_FONE, function (m) { return m.replace(/\D/g, '').length >= 8 ? '[contato]' : m; });
    (nomes || []).forEach(function (n) {
      String(n || '').split(/\s+/).forEach(function (pal) {
        pal = pal.replace(/[^\wÀ-ÿ'-]/g, '');
        if (pal.length < 3) return;
        var esc = pal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        t = t.replace(new RegExp('(^|[^\\wÀ-ÿ])' + esc + '(?=$|[^\\wÀ-ÿ])', 'gi'), '$1[nome]');
      });
    });
    return t.trim();
  }

  /* ---------- conteúdo fixo ---------- */
  function fixoPilar(trilha, p) {
    var f = (C().fixo || {}), t = f[trilha] || f[baseTrilha(trilha)] || {};
    return (t.pilares || {})[p] || {};
  }
  function fixoTrilha(trilha) { var f = (C().fixo || {}); return f[trilha] || f[baseTrilha(trilha)] || {}; }
  /* Padrão que vence o nível (fixo-T3.json: regra_padrao; fixo-T1/T2: por_padrao em lista). */
  var PADRAO_T37 = { 1: 'sem_defensor_certo', 2: 'so_gestor', 4: 'disputa_equilibrada', 5: 'nao_sei' };
  /** Texto fixo do "seu caso" sem IA e as 2 ações-base do pilar, já com o padrão aplicado. */
  function textoFixo(calc, id) {
    var p = calc.pilares.filter(function (x) { return x.id === id; })[0], f = fixoPilar(calc.trilha, id), r = calc.respostas || {};
    var fb = (f.fallback || {})[p.nivel], par = fb ? [fb] : [], acoes = ((f.acoes_base || {})[p.nivel] || []).slice(0, 2), pp = f.por_padrao;
    if (pp && !Array.isArray(pp)) {
      var chave = null, tb = baseTrilha(calc.trilha);
      if (tb === 'T3' && id === 'influencia' && nivelDe('T3.5', r['T3.5']) !== 'A') chave = (E().perguntas['T3.5'].padroes || {})[r['T3.5']];
      if (tb === 'T3' && id === 'proximo_nivel' && /^[BD]$/.test(nivelDe('T3.7', r['T3.7']) || '')) chave = PADRAO_T37[r['T3.7']];
      if (chave && pp[chave]) { par = [pp[chave].fallback]; acoes = (pp[chave].acoes_base || acoes).slice(0, 2); }
    } else if (Array.isArray(pp)) {
      pp.forEach(function (x) {
        if (x.alternativas && x.alternativas.map(Number).indexOf(Number(r[x.pergunta])) >= 0) {
          if (x.paragrafo) par.push(x.paragrafo);
          if (x.acao) acoes = [acoes[0], x.acao].filter(Boolean);
        }
      });
    }
    return { paragrafos: par.filter(Boolean), acoes: acoes };
  }
  function convite(produto) { var cv = (C().convites || {}).produtos || {}; return cv[CONVITE_DE[produto]] || {}; }
  function textoAlt(q, alt) {
    var def = EXTRAS[q] ? perguntaExtra(q) : P()[q];
    var al = (def && def.alternativas) || [];
    for (var i = 0; i < al.length; i++) if (Number(al[i].id) === Number(alt)) return al[i].texto;
    return '';
  }
  function textoPergunta(q) { return EXTRAS[q] ? perguntaExtra(q).texto : ((P()[q] || {}).texto || ''); }
  function rotuloObjetivo(id) {
    var tl = (C().telas || {}).objetivo || {}, al = tl.alternativas || OBJETIVOS;
    for (var i = 0; i < al.length; i++) if (al[i].id === id) return al[i].texto;
    for (var j = 0; j < OBJETIVOS.length; j++) if (OBJETIVOS[j].id === id) return OBJETIVOS[j].texto;
    return '';
  }

  /** Entrada da IA no formato oficial de ia/v4/simulados/entradas/S01–S20.json (INDICE.md): sem ids de pergunta nem de subcritério.
   *  Recebe só o que precisa; nome, e-mail e WhatsApp NUNCA são argumentos. */
  function montarEntradaIA(o) {
    var calc = o.calc, tr = calc.trilha, r = o.respostas || {}, Es = E(), cargo = Rg().cargoDe(o.cargo);
    var fila = montarFila(tr, r), perguntas = [], provas = [], mentalidade = null, contexto = {}, mapa = [];
    function leitura(q, alt, base) { var d = (M()[q] || {})[String(alt)]; if (!d) return; var it = {}; for (var k in base) it[k] = base[k]; for (var c in d) it[c] = d[c]; mapa.push(it); }
    fila.forEach(function (q) {
      var e = Es.perguntas[q] || { papel: 'pontua' };
      if (!respondida(r, q)) return;
      if (e.papel === 'mentalidade') {
        (r[q] || []).forEach(function (id) { leitura(q, id, { frase: textoAlt(q, id) }); });
        var marcadas = (r[q] || []).map(function (id) { var fr = e.frases[id]; return { frase: textoAlt(q, id), tipo: fr.polo === 'E' ? 'a_favor' : 'contra', pilar: CURTO[Rg().pilarDe(tr, fr.liga)] || null }; });
        if (!mentalidade) mentalidade = { pergunta: textoPergunta(q), marcadas: [] };
        mentalidade.marcadas = mentalidade.marcadas.concat(marcadas);
        return;
      }
      leitura(q, r[q], { pergunta: textoPergunta(q), resposta: textoAlt(q, r[q]) });
      if (e.papel === 'contexto') {
        contexto[{ tempo: 'tempo_na_cadeira', resultados: 'resultados', operacao: 'operacao' }[e.chave] || e.chave] = { pergunta: textoPergunta(q), resposta: textoAlt(q, r[q]) };
        return;
      }
      var pl = EXTRAS[q] ? 'visibilidade' : Rg().pilarDe(tr, q);
      if (e.papel === 'prova') {
        var origem = null; for (var k in Es.perguntas) { var x = Es.perguntas[k]; if (x.prova && x.prova.id === q) origem = k; }
        provas.push({ pilar: CURTO[(origem && Rg().pilarDe(tr, origem)) || pl] || null, pergunta: textoPergunta(q), alternativa: textoAlt(q, r[q]),
          resultado: { confirma: 'confirma', nao_confirma: 'nao_confirma', neutro: 'neutro' }[(e.efeitos || {})[r[q]]] || 'neutro' });
        return;
      }
      perguntas.push({ pilar: CURTO[pl] || null, pergunta: textoPergunta(q), alternativa: textoAlt(q, r[q]) });
    });
    var cv = convite(calc.produto);
    if (o.objetivo) leitura('objetivo', o.objetivo, { objetivo: rotuloObjetivo(o.objetivo) });
    var pilares = {}, autoav = {}, gp = {};
    calc.pilares.forEach(function (p) {
      var f = fixoPilar(tr, p.id);
      pilares[CURTO[p.id]] = { nome: f.nome || E().rotulosPilar[p.id], percentual: p.pct, nivel: p.nivel, subcriterios: p.subcriterios.filter(function (s) { return s.valor !== null; }).map(function (s) { return { nome: s.nome, valor: s.valor }; }) };
      if (f.fora_do_territorio_do_produto) pilares[CURTO[p.id]].fora_do_territorio_do_produto = true;
    });
    for (var a in calc.auto) autoav[CURTO[a]] = calc.auto[a];
    calc.gaps.forEach(function (x) { gp[CURTO[x.pilar]] = { valor: x.gap, leitura: x.tipo }; });
    return {
      trilha: tr,
      cargo: cargo ? cargo.rotulo : '',
      saida: calc.saida,
      produto: PRODUTO_IA[calc.produto] || '',
      pilares: pilares,
      autoavaliacao: autoav,
      gaps: gp,
      respostas: { perguntas: perguntas, provas: provas, mentalidade: mentalidade || { pergunta: '', marcadas: [] } },
      contexto: contexto,
      objetivo: rotuloObjetivo(o.objetivo),
      campo_aberto: o.campoAbertoLimpo || '',
      mapa_leitura: mapa,
      ganchos_metodo: (cv.ganchos_metodo || []).map(function (gm) { return { id: gm.id, liga_com: gm.liga_com || [], o_que_trabalha: gm.o_que_trabalha }; }),
      banco_citacoes: (C().citacoes || []).map(function (c) { return { id: c.id, tema: c.tema }; })
    };
  }

  /* ---------- conferência da saída da IA (estrutura mínima + trilho) ---------- */
  var PIL_OK = { entrega: 1, visibilidade: 1, influencia: 1, proximo: 1 };
  var MARC_OK = { ok: 1, vazio: 1, fora_escopo: 1, sensivel: 1, risco: 1 };
  function ehTexto(s) { return typeof s === 'string' && s.trim().length > 0; }
  function ehLista(a, min, max) { return Array.isArray(a) && a.length >= min && a.length <= max; }
  function textosDe(o, out) {
    if (typeof o === 'string') out.push(o);
    else if (Array.isArray(o)) o.forEach(function (x) { textosDe(x, out); });
    else if (o && typeof o === 'object') for (var k in o) textosDe(o[k], out);
    return out;
  }
  /** ctx: {calc}. Devolve {ok, erros:[...]} */
  function validarSaidaIA(s, ctx) {
    var er = [], calc = ctx && ctx.calc;
    function f(c, m) { if (!c) er.push(m); }
    if (!s || typeof s !== 'object') return { ok: false, erros: ['nao_objeto'] };
    var bloco = function (x, max) { return x && PIL_OK[x.pilar] && ehTexto(x.titulo) && ehLista(x.texto, 1, max) && x.texto.every(ehTexto); };
    f(ehLista(s.resumo, 2, 2) && s.resumo.every(ehTexto), 'resumo');
    f(ehLista(s.forcas, 1, 2) && s.forcas.every(function (x) { return bloco(x, 2); }), 'forcas');
    f(ehLista(s.melhorias, 1, 2) && s.melhorias.every(function (x) { return bloco(x, 3); }), 'melhorias');
    f(Array.isArray(s.gaps) && s.gaps.every(function (x) { return x && PIL_OK[x.pilar] && ehTexto(x.texto); }), 'gaps');
    f(ehLista(s.plano, 3, 3) && s.plano.every(function (x) { return x && ehTexto(x.titulo) && ehTexto(x.texto); }), 'plano');
    f(ehTexto(s.convite_motivo) && /^Pelas suas respostas, acredito que /.test(s.convite_motivo), 'convite');
    var ids = {}; (C().citacoes || []).forEach(function (c) { ids[c.id] = 1; });
    f(ehLista(s.citacoes, 3, 3) && s.citacoes.every(function (c) { return ids[c]; }) && s.citacoes[0] !== s.citacoes[1] && s.citacoes[1] !== s.citacoes[2] && s.citacoes[0] !== s.citacoes[2], 'citacoes');
    f(s.campo_aberto && typeof s.campo_aberto.usado === 'boolean' && MARC_OK[s.campo_aberto.marcacao], 'campo_aberto');
    if (calc && Array.isArray(s.gaps)) {
      var grandes = {}; calc.gaps.forEach(function (x) { if (x.tipo !== 'alinhado') grandes[CURTO[x.pilar]] = 1; });
      f(s.gaps.every(function (x) { return grandes[x.pilar]; }), 'gaps_fora_do_limite');
    }
    // forças: de pilar firme quando há algum firme (sem nenhum, a força sai do que está mais de pé); nunca um pilar que é melhoria
    if (calc && Array.isArray(s.forcas) && Array.isArray(s.melhorias)) {
      var firmes = {}, temFirme = false; calc.pilares.forEach(function (p) { if (p.estado === 'consolidado') { firmes[CURTO[p.id]] = 1; temFirme = true; } });
      var ops = calc.oportunidades.map(function (id) { return CURTO[id]; });
      f(!temFirme || s.forcas.every(function (x) { return firmes[x.pilar]; }), 'forca_nao_firme');
      var mel = s.melhorias.map(function (x) { return x && x.pilar; });
      f(s.forcas.every(function (x) { return mel.indexOf(x.pilar) < 0 && (!temFirme || ops.indexOf(x.pilar) < 0); }), 'forca_e_melhoria');
      f(s.forcas.length < 2 || s.forcas[0].pilar !== s.forcas[1].pilar, 'forca_repetida');
      // melhorias: a primeira é a da régua (o pilar da saída) e nenhuma cai fora das que a régua aponta
      if (s.melhorias.length) {
        f(s.melhorias[0].pilar === ops[0], 'oportunidade_principal');
        f(s.melhorias.every(function (x) { return ops.indexOf(x.pilar) >= 0; }) && (s.melhorias.length < 2 || s.melhorias[0].pilar !== s.melhorias[1].pilar), 'oportunidade_fora_da_regra');
      }
    }
    // trilho: palavras proibidas e listas dentro de string
    var tx = textosDe(s, []).join('\n'), low = tx.toLowerCase();
    PROIBIDAS.forEach(function (w) { if (low.indexOf(w) >= 0) er.push('trilho:' + w); });
    f(!/(^|\n)\s*([-•*–·]|\d+[.)])\s/.test(tx), 'trilho_bullet');
    f(!/\bvocê (respondeu|marcou|escolheu)\b/i.test(tx), 'trilho_cita_resposta');
    f((tx.match(/\{primeiro_nome\}/g) || []).length <= 2 && !/\{(?!primeiro_nome\})[a-z_]+\}/.test(tx), 'trilho_marca_nome');
    f(!/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(tx), 'trilho_emoji');
    return { ok: er.length === 0, erros: er };
  }

  /* ---------- relatório montado (a página desenha isto) ---------- */
  function citacaoPorId(id) { var l = C().citacoes || []; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function citacoesFallback(calc) {
    var l = C().citacoes || [], usados = {}, out = [];
    var temas = [CURTO[calc.oportunidades[0]], calc.forcas.length ? CURTO[calc.forcas[0]] : CURTO[calc.oportunidades[1] || calc.oportunidades[0]], 'mentalidade'];
    temas.forEach(function (t) {
      for (var i = 0; i < l.length; i++) if (l[i].tema === t && !usados[l[i].id]) { usados[l[i].id] = 1; out.push(l[i]); return; }
      for (var j = 0; j < l.length; j++) if (!usados[l[j].id]) { usados[l[j].id] = 1; out.push(l[j]); return; }
    });
    return out;
  }
  function subst(t, m) { return String(t || '').replace(/\{(\w+)\}/g, function (x, k) { return m[k] !== undefined ? m[k] : x; }); }

  /** Troca a marca {primeiro_nome} da IA pelo primeiro nome (posto pela página; a IA nunca recebe o nome). Sem nome, tira a marca e a vírgula. */
  function porNome(o, nome) {
    if (typeof o === 'string') return o.replace(/\{primeiro_nome\}(,\s*)?(.)?/g, function (m, vg, prox) {
      if (nome) return nome + (vg || '') + (prox || '');
      return prox ? prox.toUpperCase() : '';
    });
    if (Array.isArray(o)) return o.map(function (x) { return porNome(x, nome); });
    if (o && typeof o === 'object') { var r = {}; for (var k in o) r[k] = porNome(o[k], nome); return r; }
    return o;
  }
  /** Junta régua + conteúdo fixo + (opcional) a saída da IA já conferida. ia=null -> só o texto fixo (D2/D3), completo. opts.primeiroNome personaliza. */
  function montarRelatorio(calc, ia, opts) {
    opts = opts || {};
    if (ia) ia = porNome(ia, String(opts.primeiroNome || '').trim().split(/\s+/)[0] || '');
    var tl = C().telas || {}, com = !!ia, nomes = (C().telas || {}).pilares_nomes || {};
    var porPilar = {};
    if (com) {
      (ia.forcas || []).concat(ia.melhorias || []).forEach(function (x) { porPilar[LONGO[x.pilar]] = { titulo: x.titulo, seu_caso: x.texto }; });
    }
    // forças mostradas: com IA, as que ela escolheu (pilares firmes; sem nenhum firme, o mais de pé que não é melhoria) (DECISOES §3: a ligação com a oportunidade e com o campo aberto
    // é leitura dela), na ordem dela; sem IA, ou se ela não trouxe nenhuma, as da régua (maior percentual, depois a ordem da escada)
    var forcas = calc.forcas;
    if (com) {
      var daIa = (ia.forcas || []).map(function (x) { return LONGO[x.pilar]; }).filter(function (id, i, a) {
        var mel = (ia.melhorias || []).map(function (x) { return LONGO[x.pilar]; }), temFirme = calc.pilares.some(function (p) { return p.estado === 'consolidado'; });
        return a.indexOf(id) === i && mel.indexOf(id) < 0 && (!temFirme || (calc.oportunidades.indexOf(id) < 0 && calc.pilares.some(function (p) { return p.id === id && p.estado === 'consolidado'; })));
      });
      if (daIa.length) forcas = daIa;
    }
    var grupo = function (id) { return forcas.indexOf(id) >= 0 ? 'forca' : (calc.oportunidades.indexOf(id) >= 0 ? 'oportunidade' : 'outro'); };
    var pilares = calc.pilares.map(function (p) {
      var f = fixoPilar(calc.trilha, p.id), viaIa = porPilar[p.id], tf = textoFixo(calc, p.id);
      return {
        id: p.id, curto: CURTO[p.id], nome: f.nome || nomes[p.id] || E().rotulosPilar[p.id], pct: p.pct, estado: p.estado, nivel: p.nivel, teto: p.teto, grupo: grupo(p.id),
        o_que_medimos: f.o_que_medimos || '', como_funciona: f.como_funciona || [], por_que_pesa: f.por_que_pesa || '',
        titulo: viaIa ? viaIa.titulo : null, seu_caso: viaIa ? viaIa.seu_caso : tf.paragrafos, cruzamento: null, ponte: null,
        ponteAlvo: null, fonte: viaIa ? 'ia' : 'fixo', subcriterios: p.subcriterios
      };
    });
    pilares.forEach(function (p) { if (p.ponte) { var i = calc.oportunidades.indexOf(p.id); p.ponteAlvo = calc.oportunidades[i + 1] || (calc.oportunidades[0] !== p.id ? calc.oportunidades[0] : null); } });
    var gtx = {}; if (com) (ia.gaps || []).forEach(function (x) { gtx[LONGO[x.pilar]] = [x.texto]; });
    var gs = (tl.gap_sem_ia || {});
    var gaps = calc.gaps.map(function (x) {
      var nm = pilares.filter(function (p) { return p.id === x.pilar; })[0].nome;
      var t = x.tipo === 'alinhado' ? [] : (gtx[x.pilar] || (gs[x.tipo] ? [subst(gs[x.tipo], { pilar: nm, nota: x.nota, pct: x.pct })] : []));
      return { pilar: x.pilar, nome: nm, nota: x.nota, pct: x.pct, gap: x.gap, tipo: x.tipo, texto: t, fonte: gtx[x.pilar] ? 'ia' : 'fixo' };
    });
    // plano: IA, ou as ações-base das oportunidades (2 da principal + 1 da segunda)
    var plano;
    if (com) plano = ia.plano.map(function (a) { return { quando: null, titulo: a.titulo, como_fazer: a.texto, frase_pronta: null, sinal: null }; });
    else {
      plano = []; var quando = tl.plano_quando || ['Semana 1', 'Semana 2', 'Semanas 3 e 4'];
      calc.oportunidades.forEach(function (id, k) {
        var ab = textoFixo(calc, id).acoes;
        ab.slice(0, k === 0 ? 2 : 1).forEach(function (a) { plano.push({ titulo: a.titulo, como_fazer: a.como_fazer, frase_pronta: null, sinal: a.sinal, pilar: id }); });
      });
      plano = plano.slice(0, 3).map(function (a, i) { a.quando = quando[i] || ''; return a; });
    }
    var cv = convite(calc.produto);
    var conv = {
      chave: CONVITE_DE[calc.produto], nome: cv.nome || '', abertura: cv.abertura || '', match: com ? ia.convite_motivo : (cv.match_frase_sem_ia || cv.match_frase || ''),
      motivos: [], dores: [], acesso: cv.acesso || '', fecho: cv.fecho || '',
      botao: cv.botao_texto || 'Chama a equipe no WhatsApp', link: linkConvite(calc.produto, calc.saida)
    };
    var cits = com ? ia.citacoes.map(citacaoPorId).filter(Boolean) : citacoesFallback(calc);
    return {
      ia: com, abertura_pilares: fixoTrilha(calc.trilha).abertura_pilares || '', saida: calc.saida, trilha: calc.trilha, teto: calc.teto, produto: calc.produto,
      resumo: com ? { abertura: ia.resumo[0], fecho: ia.resumo[1], traco: null } : { abertura: '', fecho: '', traco: null },
      pilares: pilares, forcas: forcas, oportunidades: calc.oportunidades, gaps: gaps, plano: plano, convite: conv, citacoes: cits
    };
  }

  /** Link do botão do convite: página do produto (https) ou WhatsApp do CRM, conforme convites.json. */
  function linkConvite(produto, saida) {
    var bd = convite(produto).botao_destino;
    if (bd && typeof bd === 'object' && bd.numero && bd.mensagem) return 'https://wa.me/' + bd.numero + '?text=' + encodeURIComponent(bd.mensagem.replace('{codigo}', saida));
    if (typeof bd === 'string' && /^https:\/\//.test(bd)) return bd;
    var w = E().whatsapp, frase = produto === 'POCKET' ? 'o meu próximo passo' : (E().produtoFrase[produto] || '');
    var msg = produto === 'POCKET' ? 'Olá! Fiz o diagnóstico de carreira ({codigo}) e quero conversar sobre o meu próximo passo.' : w.mensagem.replace('{produto}', frase);
    return 'https://wa.me/' + w.numero + '?text=' + encodeURIComponent(msg.replace('{codigo}', saida));
  }

  var RP = {
    versao: 1, PILARES: PILARES, PROIBIDAS: PROIBIDAS, CURTO: CURTO, LONGO: LONGO, OBJETIVOS: OBJETIVOS, SUBCRITERIOS: SUB, EXTRAS: EXTRAS,
    montarFila: montarFila, filaFixa: filaFixa, ehExtra: ehExtra, perguntaExtra: perguntaExtra, respostasBase: respostasBase,
    defsPilar: defsPilar, percentuais: percentuais, limparAuto: limparAuto, gaps: gaps, calcular: calcular,
    limparCampoAberto: limparCampoAberto, montarEntradaIA: montarEntradaIA, validarSaidaIA: validarSaidaIA,
    montarRelatorio: montarRelatorio, linkConvite: linkConvite, rotuloObjetivo: rotuloObjetivo, fixoPilar: fixoPilar, textoFixo: textoFixo, subst: subst
  };
  if (typeof module !== 'undefined') module.exports = RP;
  g.QUIZ_REGUA_PREMIUM = RP;
})(typeof globalThis !== 'undefined' ? globalThis : this);
