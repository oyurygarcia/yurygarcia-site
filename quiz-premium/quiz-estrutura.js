/* Quiz de carreira Liderium · ESTRUTURA (etiquetas, fluxo, pilares, limiares).
 * Arquivo compartilhado: a página e o script usam a mesma cópia (sincronizar.sh).
 * Mudou id ou etiqueta? Suba "versao". Mudou só texto? Não precisa subir. */
(function (g) {
  var X = {
    versao: 1,
    pontos: { A: 2, B: 1, C: 0, D: 0 },            // D = "não sei" (lacuna de leitura do ambiente)
    pilares: ['entrega', 'visibilidade', 'influencia', 'proximo_nivel'],
    rotulosPilar: { entrega: 'Entrega', visibilidade: 'Visibilidade', influencia: 'Influência', proximo_nivel: 'Próximo nível' },
    rotulosEstado: { consolidado: 'consolidado', construcao: 'em construção', proximo_passo: 'próximo passo' },
    limiares: { 2: { consolidado: 2, construcao: 1 }, 4: { consolidado: 4, construcao: 2 } },
    consentimentoVersao: 'v1',
    whatsapp: { numero: '5511999106121', mensagem: 'Olá! Fiz o diagnóstico de carreira ({codigo}) e quero saber mais sobre {produto}.' },
    produtoFrase: { LAP: 'o LAP', POCKET: 'o Liderium Pocket', MENTORIA: 'a Mentoria Liderium', INDIVIDUAL: 'a Mentoria individual', EMPRESARIAL: 'a Mentoria Empresarial' },
    cargos: [
      { id: 'estagiario', rotulo: 'Estagiário(a)', destino: 'T1' },
      { id: 'analista', rotulo: 'Analista ou especialista', destino: 'T1' },
      { id: 'supervisor', rotulo: 'Supervisor(a)', destino: 'T2' },
      { id: 'coordenador', rotulo: 'Coordenador(a)', destino: 'T3' },
      { id: 'gerente', rotulo: 'Gerente', destino: 'T3' },
      { id: 'gerente_senior', rotulo: 'Gerente sênior', destino: 'T4' },
      { id: 'head', rotulo: 'Head', destino: 'T4' },
      { id: 'diretor', rotulo: 'Diretor(a) ou VP', destino: 'T4' },
      { id: 'empresario', rotulo: 'Empresário(a)', destino: 'EMPRESARIO' },
      { id: 'outro', rotulo: 'Outro', destino: 'DESVIO' }
    ],
    desvio: { 1: 'T1', 2: 'T2', 3: 'T3' },          // P0b: id da alternativa -> trilha (nunca T4)
    trilhas: {
      T1: { saidas: 'T1', fila: ['T1.0', 'T1.1', 'T1.2', 'T1.3', 'M1', 'T1.4', 'T1.5', 'T1.6'],
            pilares: { entrega: ['T1.1'], visibilidade: ['T1.2', 'T1.6'], influencia: ['T1.3', 'T1.4'], proximo_nivel: ['T1.5'] } },
      T2: { saidas: 'T2', fila: ['T2.1a', 'T2.1b', 'T2.2a', 'T2.2b', 'T2.3', 'M2', 'T2.4', 'T2.5', 'T2.6', 'T2.7'],
            pilares: { entrega: ['T2.2a', 'T2.2b'], visibilidade: ['T2.3', 'T2.7'], influencia: ['T2.5', 'T2.6'], proximo_nivel: ['T2.4'] } },
      T3: { saidas: 'T3', fila: ['T3.1a', 'T3.1b', 'T3.1c', 'T3.2', 'T3.4', 'M3', 'T3.5', 'T3.6', 'T3.7'],
            pilares: { entrega: ['T3.2'], visibilidade: ['T3.4'], influencia: ['T3.5'], proximo_nivel: ['T3.6', 'T3.7'] } },
      T4: { perguntasDe: 'T3', saidas: 'T4' }
    },
    // níveis na ORDEM DA TELA (id da alternativa = posição na tela, 1, 2, 3...)
    perguntas: {
      'T1.0': { papel: 'contexto', chave: 'tempo', valores: { 1: '<1', 2: '1-2', 3: '3-5', 4: '>5' } },
      'T1.1': { papel: 'pontua', niveis: { 1: 'B', 2: 'A', 3: 'C' }, prova: { id: 'T1.1p', gatilho: ['A'] } },
      'T1.1p': { papel: 'prova', efeitos: { 1: 'nao_confirma', 2: 'neutro', 3: 'confirma' } },
      'T1.2': { papel: 'pontua', niveis: { 1: 'C', 2: 'A', 3: 'B' }, prova: { id: 'T1.2p', gatilho: ['A'] } },
      'T1.2p': { papel: 'prova', efeitos: { 1: 'confirma', 2: 'nao_confirma', 3: 'confirma' } },
      'T1.3': { papel: 'pontua', niveis: { 1: 'A', 2: 'C', 3: 'B' } },
      'M1': { papel: 'mentalidade', escolher: 3, frases: {
        1: { polo: 'L', liga: 'T1.2' }, 2: { polo: 'L', liga: 'T1.4' }, 3: { polo: 'L', liga: 'T1.6' },
        4: { polo: 'E', liga: 'T1.1' }, 5: { polo: 'E', liga: 'T1.4' }, 6: { polo: 'E', liga: 'T1.5' } } },
      'T1.4': { papel: 'pontua', niveis: { 1: 'C', 2: 'B', 3: 'A' } },
      'T1.5': { papel: 'pontua', niveis: { 1: 'B', 2: 'C', 3: 'A' }, prova: { id: 'T1.5p', gatilho: ['A'] } },
      'T1.5p': { papel: 'prova', efeitos: { 1: 'nao_confirma', 2: 'confirma', 3: 'nao_confirma' } },
      'T1.6': { papel: 'pontua', niveis: { 1: 'C', 2: 'A', 3: 'B', 4: 'D' } },

      'T2.1a': { papel: 'contexto', chave: 'tempo', valores: { 1: '<1', 2: '1-2', 3: '3-5', 4: '>5' } },
      'T2.1b': { papel: 'contexto', chave: 'resultados', niveis: { 1: 'B', 2: 'C', 3: 'A' } },
      'T2.2a': { papel: 'pontua', niveis: { 1: 'C', 2: 'A', 3: 'B' } },
      'T2.2b': { papel: 'pontua', niveis: { 1: 'B', 2: 'C', 3: 'A' }, prova: { id: 'T2.2bp', gatilho: ['A'] } },
      'T2.2bp': { papel: 'prova', efeitos: { 1: 'confirma', 2: 'confirma', 3: 'nao_confirma' } },
      'T2.3': { papel: 'pontua', niveis: { 1: 'A', 2: 'C', 3: 'B' }, prova: { id: 'T2.3p', gatilho: ['A'] } },
      'T2.3p': { papel: 'prova', efeitos: { 1: 'nao_confirma', 2: 'confirma' } },
      'M2': { papel: 'mentalidade', escolher: 3, frases: {
        1: { polo: 'L', liga: 'T2.4' }, 2: { polo: 'L', liga: 'T2.2b' }, 3: { polo: 'L', liga: 'T2.6' },
        4: { polo: 'E', liga: 'T2.4' }, 5: { polo: 'E', liga: 'T2.6' }, 6: { polo: 'E', liga: 'T2.3' } } },
      'T2.4': { papel: 'pontua', niveis: { 1: 'B', 2: 'A', 3: 'C' }, prova: { id: 'T2.4p', gatilho: ['A'] } },
      'T2.4p': { papel: 'prova', efeitos: { 1: 'confirma', 2: 'nao_confirma', 3: 'confirma' } },
      'T2.5': { papel: 'pontua', niveis: { 1: 'C', 2: 'B', 3: 'A' } },
      'T2.6': { papel: 'pontua', niveis: { 1: 'A', 2: 'C', 3: 'B' } },
      'T2.7': { papel: 'pontua', niveis: { 1: 'B', 2: 'C', 3: 'A', 4: 'D' } },

      'T3.1a': { papel: 'contexto', chave: 'tempo', valores: { 1: '<1', 2: '1-2', 3: '3-5', 4: '>5' } },
      'T3.1b': { papel: 'contexto', chave: 'resultados', niveis: { 1: 'C', 2: 'A', 3: 'B' } },
      'T3.1c': { papel: 'contexto', chave: 'operacao', niveis: { 1: 'B', 2: 'C', 3: 'A' } },
      'T3.2': { papel: 'pontua', niveis: { 1: 'A', 2: 'C', 3: 'B' }, prova: { id: 'T3.3', gatilho: ['A'], alerta: false } },   // T3.3 é degrau (RESULTADO-v2 §1.4): rebaixa a B, mas NÃO acende "percepção acima da evidência"
      'T3.3': { papel: 'prova', efeitos: { 1: 'nao_confirma', 2: 'confirma', 3: 'nao_confirma' } },
      'T3.4': { papel: 'pontua', niveis: { 1: 'C', 2: 'B', 3: 'A' } },
      'M3': { papel: 'mentalidade', escolher: 3, frases: {
        1: { polo: 'E', liga: 'T3.7' }, 2: { polo: 'L', liga: 'T3.7' }, 3: { polo: 'E', liga: 'T3.5' },
        4: { polo: 'L', liga: 'T3.6' }, 5: { polo: 'L', liga: 'T3.7' }, 6: { polo: 'E', liga: 'T3.5' } } },
      'T3.5': { papel: 'pontua', niveis: { 1: 'C', 2: 'C', 3: 'A', 4: 'C' }, padroes: { 1: 'justifica', 2: 'cede', 4: 'escala' } },
      'T3.6': { papel: 'pontua', niveis: { 1: 'B', 2: 'A', 3: 'C' } },
      'T3.7': { papel: 'pontua', niveis: { 1: 'B', 2: 'B', 3: 'A', 4: 'B', 5: 'D' }, padroes: { 1: 'relacoes', 2: 'gestor', 4: 'disputa' },
                prova: { id: 'T3.7p', gatilho: ['A'] } },
      'T3.7p': { papel: 'prova', efeitos: { 1: 'nao_confirma', 2: 'confirma', 3: 'nao_confirma' } }
    },
    // produto de cada uma das 20 saídas (Yury, 17/11)
    produtos: {
      T1S1: 'LAP', T1S2: 'LAP', T1S3: 'LAP', T1S4: 'LAP', T1S5: 'LAP',
      T2S1: 'LAP', T2S2: 'POCKET', T2S3: 'POCKET', T2S4: 'POCKET', T2S5: 'POCKET',
      T3S1: 'MENTORIA', T3S2: 'MENTORIA', T3S3: 'MENTORIA', T3S4: 'MENTORIA', T3S5: 'MENTORIA',
      T4S1: 'INDIVIDUAL', T4S2: 'INDIVIDUAL', T4S3: 'INDIVIDUAL', T4S4: 'INDIVIDUAL', T4S5: 'INDIVIDUAL'
    }
  };
  if (typeof module !== 'undefined') module.exports = X;
  g.QUIZ_ESTRUTURA = X;
})(typeof globalThis !== 'undefined' ? globalThis : this);
