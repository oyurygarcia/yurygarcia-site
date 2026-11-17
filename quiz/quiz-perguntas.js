/* Quiz de carreira Liderium · TEXTOS das perguntas e alternativas (sem etiqueta nenhuma).
 * A ordem do array é a ordem na tela. O id da alternativa (1, 2, 3...) é a posição ORIGINAL e liga ao quiz-estrutura.js:
 * para trocar a ordem, mude a ordem dos itens (mantendo cada id); para trocar o texto, mude só o texto.
 * Fonte: QUESTOES-T1/T2/T3.md vigentes em 17/11/2026. */
(function (g) {
  var TEMPO = [{ id: 1, texto: "Menos de 1 ano" }, { id: 2, texto: "1 a 2 anos" }, { id: 3, texto: "3 a 5 anos" }, { id: 4, texto: "Mais de 5 anos" }];
  var P = {
    'P0': { texto: "Qual é o seu cargo hoje?" },
    'P0b': { texto: "Você lidera pessoas hoje?", alternativas: [
      { id: 1, texto: "Não" }, { id: 2, texto: "Sim, uma equipe que executa" }, { id: 3, texto: "Sim, líderes ou uma área inteira" }] },

    'T1.0': { texto: "Há quanto tempo você está na cadeira atual?", alternativas: TEMPO },
    'T1.1': { texto: "Pensando nas suas entregas dos últimos 6 meses, qual frase descreve melhor você?", alternativas: [
      { id: 1, texto: "De maneira geral o prato está cheio e às vezes alguns pratos caem, mas entrego bons resultados e o meu trabalho é bem visto." },
      { id: 2, texto: "Tenho entregado com qualidade e consistência, e tenho atuado como referência em treinamentos, discussões e reuniões." },
      { id: 3, texto: "A demanda tem sido bastante intensa e tenho me dedicado, mas de maneira geral a minha performance varia um pouco." }] },
    'T1.1p': { texto: "No último ciclo de avaliação, o que aconteceu com você?", alternativas: [
      { id: 1, texto: "Recebi um feedback positivo, e o reconhecimento concreto ainda está por vir" },
      { id: 2, texto: "Ainda não passei por um ciclo de avaliação" },
      { id: 3, texto: "Recebi promoção, aumento ou bônus por mérito" }] },
    'T1.2': { texto: "Quando surge uma chance de aparecer, como apresentar para a diretoria ou entrar num projeto novo, o que costuma acontecer?", alternativas: [
      { id: 1, texto: "Essas oportunidades ainda têm passado mais por outras pessoas, e tenho focado em fazer bem o meu trabalho enquanto isso." },
      { id: 2, texto: "O meu gestor costuma lembrar de mim, e já tive algumas dessas oportunidades." },
      { id: 3, texto: "Às vezes lembram de mim, às vezes a oportunidade vai para alguém com mais tempo de casa; quando me ofereço, a recepção costuma ser boa." }] },
    'T1.2p': { texto: "Nos últimos 6 meses, o gestor do seu gestor conversou diretamente com você sobre algum trabalho seu?", alternativas: [
      { id: 1, texto: "Uma vez" }, { id: 2, texto: "Ainda não tivemos essa conversa" }, { id: 3, texto: "Sim, algumas vezes" }] },
    'T1.3': { texto: "Quando o time precisa decidir como resolver um problema, como você costuma participar?", alternativas: [
      { id: 1, texto: "Costumo conversar antes com algumas pessoas e chego à reunião com a ideia já bem encaminhada." },
      { id: 2, texto: "Gosto de ouvir as propostas primeiro, e onde eu mais contribuo é na execução." },
      { id: 3, texto: "Levo a minha ideia para a reunião e defendo ali; às vezes ela é a escolhida, às vezes não." }] },
    'M1': { texto: "Quais destas frases mais parecem com o seu jeito de pensar? Escolha 3.", alternativas: [
      { id: 1, texto: "Prefiro que o meu trabalho fale por mim." },
      { id: 2, texto: "Prefiro ficar longe da política da empresa e focar no meu trabalho." },
      { id: 3, texto: "Minha promoção depende principalmente do meu chefe." },
      { id: 4, texto: "Entregar bem é o ponto de partida; o próximo cargo pede mais." },
      { id: 5, texto: "Gosto de entender o que as outras áreas precisam de mim." },
      { id: 6, texto: "Já trabalho como se estivesse no próximo cargo." }] },
    'T1.4': { texto: "Quando outra área precisa de algo que envolve o seu trabalho, como isso costuma chegar até você?", alternativas: [
      { id: 1, texto: "O meu trabalho ainda é mais voltado para dentro do time, então tenho pouco contato com outras áreas." },
      { id: 2, texto: "Na maior parte das vezes chega pelo meu gestor; quando falo direto com as áreas, a conversa flui bem." },
      { id: 3, texto: "Muitas vezes me procuram direto, e já tenho boas relações em algumas áreas." }] },
    'T1.5': { texto: "Hoje você conduz alguma frente além das suas entregas, mesmo sem ter o cargo de liderança? Um projeto, a integração de alguém novo, um treinamento, um ritual do time.", alternativas: [
      { id: 1, texto: "Já conduzi em outros momentos, mas hoje não." },
      { id: 2, texto: "Ainda não surgiu essa oportunidade." },
      { id: 3, texto: "Sim, conduzo pelo menos uma frente assim." }] },
    'T1.5p': { texto: "Nos últimos 6 meses, essa frente gerou algum resultado que chegou a quem está acima do seu gestor?", alternativas: [
      { id: 1, texto: "Ainda não" }, { id: 2, texto: "Sim" }, { id: 3, texto: "Não sei dizer" }] },
    'T1.6': { texto: "Se o chefe do seu chefe e os pares do seu gestor falassem de você numa reunião, o que você imagina que diriam?", alternativas: [
      { id: 1, texto: "Ainda tenho pouco contato com eles, então talvez não me conheçam bem." },
      { id: 2, texto: "Provavelmente citariam algum resultado ou projeto meu." },
      { id: 3, texto: "Sabem quem eu sou e têm uma boa impressão, mas talvez não conheçam os detalhes do que entrego." },
      { id: 4, texto: "Sinceramente, não sei dizer." }] },

    'T2.1a': { texto: "Há quanto tempo você está na cadeira atual?", alternativas: TEMPO },
    'T2.1b': { texto: "De maneira geral, como estão os resultados da sua equipe nos últimos 6 meses?", alternativas: [
      { id: 1, texto: "Temos os nossos desafios, mas de maneira geral entregamos bons resultados." },
      { id: 2, texto: "Muitas mudanças estão impactando alguns pratinhos, e estamos trabalhando para colocar tudo de volta no eixo." },
      { id: 3, texto: "Modéstia à parte, a minha equipe é referência naquilo que fazemos em termos de entrega." }] },
    'T2.2a': { texto: "Como funciona o acompanhamento do trabalho da sua equipe no dia a dia?", alternativas: [
      { id: 1, texto: "A rotina é tão corrida que o acompanhamento acontece mais conforme as demandas aparecem." },
      { id: 2, texto: "Cada pessoa sabe o que precisa ser feito, e temos rituais de acompanhamento que rodam mesmo quando não estou." },
      { id: 3, texto: "Preciso estar por perto para manter o nível de entrega, mas de maneira geral roda bem." }] },
    'T2.2b': { texto: "Quando alguém da equipe não está rendendo o esperado, o que costuma acontecer?", alternativas: [
      { id: 1, texto: "Avalio bem o cenário daquela pessoa para não cometer uma injustiça e, quando chega o momento certo, dou o feedback." },
      { id: 2, texto: "Procuro apoiar mais de perto e, se for necessário, coloco alguém para treinar a pessoa." },
      { id: 3, texto: "Tomo ação rápido, mas primeiro entendo onde está a oportunidade: se é comportamento ou lacuna técnica, e se foi algo pontual ou já aconteceu antes." }] },
    'T2.2bp': { texto: "Quando foi a sua última conversa de feedback difícil com alguém da equipe?", alternativas: [
      { id: 1, texto: "Neste último mês" }, { id: 2, texto: "Entre 1 e 3 meses atrás" }, { id: 3, texto: "Faz mais de 3 meses" }] },
    'T2.3': { texto: "Quando a sua equipe bate um bom resultado, como a sua gerência costuma enxergar o seu papel nisso?", alternativas: [
      { id: 1, texto: "Enxerga como fruto da forma como eu conduzo a equipe; inclusive, já me disse isso." },
      { id: 2, texto: "Reconhece que temos uma boa equipe e que trabalhamos bem juntos." },
      { id: 3, texto: "Acredita que é uma mistura de fatores, mas não tenho certeza do quanto credita esse sucesso à minha gestão." }] },
    'T2.3p': { texto: "Nos últimos 6 meses, você recebeu algum reconhecimento concreto pela sua liderança, como aumento, bônus, um projeto maior ou ter o seu trabalho apresentado a outras áreas como referência?", alternativas: [
      { id: 1, texto: "Ainda não" }, { id: 2, texto: "Sim" }] },
    'M2': { texto: "Quais destas frases mais parecem com o seu jeito de pensar? Escolha 3.", alternativas: [
      { id: 1, texto: "Quando aperta, eu ponho a mão na massa junto e a gente resolve." },
      { id: 2, texto: "Feedback difícil pede o momento certo, e às vezes vale esperar." },
      { id: 3, texto: "O meu papel é proteger a equipe das pressões de cima." },
      { id: 4, texto: "O meu melhor resultado é o que a minha equipe faz mesmo sem mim." },
      { id: 5, texto: "Levo para cima a solução, não só o problema." },
      { id: 6, texto: "Quero que a gerência veja como eu lidero, não só o número." }] },
    'T2.4': { texto: "Se você tirasse 30 dias de férias amanhã, o que aconteceria com a equipe?", alternativas: [
      { id: 1, texto: "A equipe seguiria bem, mas algumas decisões ficariam esperando a minha volta." },
      { id: 2, texto: "Tem alguém pronto para segurar a operação, e eu preparei essa pessoa para isso." },
      { id: 3, texto: "Eu ficaria de olho no celular, porque muita coisa ainda passa por mim." }] },
    'T2.4p': { texto: "Nos últimos 12 meses, alguém da sua equipe foi promovido ou assumiu uma responsabilidade maior?", alternativas: [
      { id: 1, texto: "Sim, assumiu uma responsabilidade maior" }, { id: 2, texto: "Ainda não" }, { id: 3, texto: "Sim, alguém foi promovido" }] },
    'T2.5': { texto: "Quando você propõe uma mudança que envolve outros supervisores ou áreas vizinhas, como costuma ser?", alternativas: [
      { id: 1, texto: "Tenho preferido cuidar bem da minha equipe e mexer pouco no que é das outras áreas." },
      { id: 2, texto: "As pessoas costumam concordar na reunião, e a mudança às vezes perde força na hora de acontecer." },
      { id: 3, texto: "Converso antes com as pessoas envolvidas e, quando levo a proposta, ela costuma ser adotada." }] },
    'T2.6': { texto: "Quando o seu gestor precisa tomar uma decisão que afeta a sua equipe, como você participa?", alternativas: [
      { id: 1, texto: "Costuma me consultar antes, e muitas das minhas propostas viram a decisão." },
      { id: 2, texto: "Normalmente a decisão chega pronta, e o meu papel é fazer acontecer bem na equipe." },
      { id: 3, texto: "Às vezes me consulta; quando levo uma proposta, ela é ouvida, e algumas são aprovadas." }] },
    'T2.7': { texto: "Se o chefe do seu chefe e os pares do seu gestor falassem de você numa reunião, o que você imagina que diriam?", alternativas: [
      { id: 1, texto: "Conhecem os resultados da minha equipe, mas talvez não saibam o quanto disso vem de mim." },
      { id: 2, texto: "Ainda tenho pouco contato com eles, então talvez não me conheçam bem." },
      { id: 3, texto: "Provavelmente citariam os resultados da minha equipe e a forma como eu lidero." },
      { id: 4, texto: "Sinceramente, não sei dizer." }] },

    'T3.1a': { texto: "Há quanto tempo você está na cadeira atual?", alternativas: TEMPO },
    'T3.1b': { texto: "De maneira geral, como estão os resultados da sua área nos últimos 6 meses?", alternativas: [
      { id: 1, texto: "Muitas mudanças estão impactando alguns pratinhos, e estamos trabalhando para colocar tudo de volta no eixo." },
      { id: 2, texto: "Modéstia à parte, a minha área é referência naquilo que fazemos em termos de entrega." },
      { id: 3, texto: "Temos os nossos desafios, mas de maneira geral entregamos bons resultados." }] },
    'T3.1c': { texto: "Quanto da operação da sua área ainda passa por você?", alternativas: [
      { id: 1, texto: "A maior parte anda bem sem mim, e ainda entro nos momentos mais críticos para garantir a entrega." },
      { id: 2, texto: "Gosto de estar perto da operação e, nesta fase, ainda é ali que eu mais faço diferença." },
      { id: 3, texto: "A operação anda sozinha; o meu tempo é mais focado no diálogo com outras áreas e na gestão de stakeholders." }] },
    'T3.2': { texto: "Pensando nas responsabilidades sob o seu escopo, como elas se conectam com a estratégia e os objetivos da área maior da qual você faz parte?", alternativas: [
      { id: 1, texto: "Sei dizer como cada frente minha empurra um objetivo da área, e uso isso para decidir prioridades." },
      { id: 2, texto: "O dia a dia tem muita demanda que acaba ocupando a agenda; a conversa sobre os objetivos da área acontece uma ou duas vezes por ano, nas sessões de planejamento." },
      { id: 3, texto: "Conheço os objetivos da área, e a ligação com o meu trabalho fica mais clara em algumas iniciativas do que em outras." }] },
    'T3.3': { texto: "Se alguém da diretoria perguntasse como as suas responsabilidades ajudam a empresa a bater os objetivos do ano, o que aconteceria?", alternativas: [
      { id: 1, texto: "Eu falaria dos projetos-chave em que estou atuando; se são projetos-chave, é porque são importantes para a empresa." },
      { id: 2, texto: "Eu faria a conexão entre o meu escopo e o que estou tocando de estratégico com os objetivos da área e da empresa." },
      { id: 3, texto: "Eu falaria um pouco do meu KPI mais importante e de como estamos focados em entregar o nosso melhor." }] },
    'T3.4': { texto: "Quando você leva um resultado ou um problema para a diretoria, como costuma apresentar?", alternativas: [
      { id: 1, texto: "Levo todo o racional por trás, explico as premissas e esmiúço os detalhes, para não deixar ponta solta." },
      { id: 2, texto: "Apresento os fatos e foco principalmente nas variações, no contexto e no plano de ação." },
      { id: 3, texto: "Primeiro entendo quem é a audiência e o quanto ela sabe sobre o tema, e escolho a abordagem pelo que é relevante para ela." }] },
    'M3': { texto: "Quais destas frases mais parecem com o seu jeito de pensar? Escolha 3.", alternativas: [
      { id: 1, texto: "Busco ter alianças estratégicas dentro da empresa, porque elas ajudam a abrir portas e a resolver problemas." },
      { id: 2, texto: "Bons resultados trazem boas oportunidades." },
      { id: 3, texto: "Antes de propor algo grande, penso em quem ganha e quem perde com isso." },
      { id: 4, texto: "Não gosto de politicagem; prefiro me ater aos aspectos técnicos do negócio." },
      { id: 5, texto: "Tenho boas relações na empresa, mas o foco principal é o resultado." },
      { id: 6, texto: "Discordar da maneira correta e na hora certa pode construir credibilidade." }] },
    'T3.5': { texto: "Quando um par ou alguém de outra área pede um prazo ou uma entrega que você sabe que é muito difícil, o que costuma acontecer?", alternativas: [
      { id: 1, texto: "Explico por que aquele prazo tende a ser inviável, dou o contexto de tudo o que tenho no prato e conto com o bom senso da outra pessoa para ser mais flexível." },
      { id: 2, texto: "Se for um stakeholder relevante, eu aceito do jeito que vier; não posso correr o risco de me queimar com alguém relevante." },
      { id: 3, texto: "Busco entender o que está por trás do pedido e encontro um caminho de negociação sem prejudicar a dinâmica da relação." },
      { id: 4, texto: "Aceito para não gerar atrito, mas levo para o meu gestor ponderar e decidirmos juntos o melhor caminho." }] },
    'T3.6': { texto: "Quando a área passa por algo sensível, como reestruturação, comunicado oficial ou mudança de direção, em que momento você fica sabendo?", alternativas: [
      { id: 1, texto: "Fico sabendo antes do comunicado oficial, para preparar a minha equipe, mas a decisão já vem tomada." },
      { id: 2, texto: "Costumo participar da discussão antes e, muitas vezes, ajudo a desenhar como vai ser comunicado." },
      { id: 3, texto: "Fico sabendo junto com todo mundo, no comunicado oficial; aí o meu papel é cuidar da equipe." }] },
    'T3.7': { texto: "Se amanhã surgisse uma oportunidade grande na empresa e o seu nome estivesse entre os cotados, junto com outros pares, quem falaria a seu favor numa reunião em que você não está?", alternativas: [
      { id: 1, texto: "Tenho boas relações com muita gente; acho que alguém defenderia o meu case." },
      { id: 2, texto: "O meu gestor, com certeza." },
      { id: 3, texto: "No meu nível, sou a pessoa mais bem relacionada; acredito que a maioria defenderia o meu case." },
      { id: 4, texto: "Com certeza o meu nome estaria bem cotado, mas outros pares também estariam; difícil dizer quem defenderia a mim ou a eles." },
      { id: 5, texto: "Honestamente, nunca pensei sobre isso; não sei dizer." }] },
    'T3.7p': { texto: "Nos últimos 12 meses, alguém acima do seu gestor defendeu o seu nome para um projeto, uma vaga ou uma promoção?", alternativas: [
      { id: 1, texto: "Acho que sim" }, { id: 2, texto: "Sim, e sei quem foi" }, { id: 3, texto: "Não que eu saiba" }] }
  };
  if (typeof module !== 'undefined') module.exports = P;
  g.QUIZ_PERGUNTAS = P;
})(typeof globalThis !== 'undefined' ? globalThis : this);
