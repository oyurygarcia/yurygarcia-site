/* quiz-resultados.js · textos do resultado do quiz de carreira (v1, 17/11/2026)
   Copy na voz do Yury Garcia, a partir de RESULTADO-v2.md. Proposta: depende da aprovação do Yury.
   Formato: ESPEC-TECNICA.md §2.7. Chaves além da §2.7 (todas opcionais para quem renderiza):
   versao · niveis · pilaresNomes · rotulos · telas · pilares (texto por pilar × nível; T4 usa o da T3) ·
   crencas (releitura das frases L e crença lida na resposta) · saidas[*].ponte · saidas[*].depois ·
   saidas[*].percepcao (só aparece se a prova do próprio pilar do teto não confirmou) · saidas[*].registro (variante dessa situação) · ajustes[*].tetos · produtos[*].convite ·
   blocos.reforco · blocos.crencaLida · blocos.ressalva · email.intro.
   Marcadores permitidos: {nome} e {frase}. */
(function (g) {
  // ordem(lista, [2,1,3]) devolve as 3 ações na ordem pedida (1 = primeira da lista).
  function ordem(lista, idx) { return idx.map(function (i) { return lista[i - 1]; }); }

  var RESSALVA = 'Uma ressalva honesta: o diagnóstico mostra como você vê o seu momento. A próxima cadeira depende também de como os outros veem, e as ações abaixo servem para trazer essa leitura para a mesa.';

  // ---------- Ações por saída (lista base; a ordem muda pela intensidade) ----------
  var A = {
    T1S1: [
      'Na próxima 1:1, pergunte ao seu gestor quais são as 2 entregas que mais importam para ele neste trimestre. Trate essas duas como as que não caem, aconteça o que acontecer no resto do prato.',
      'Toda sexta, separe 10 minutos para anotar o que saiu, o que ficou para trás e por quê. Em 4 semanas aparece o padrão: prazo, escopo ou interrupção.',
      'No prato que mais cai, combine antes de começar: um prazo realista ou o que sai do escopo. Combinar antes pesa muito mais do que explicar depois.'
    ],
    T1S2: [
      'Escolha uma entrega recente e escreva em 3 linhas: o problema, o que você fez e o que mudou (um número, um prazo, um cliente). Leve na 1:1 e pergunte ao seu gestor se faz sentido isso chegar a mais alguém.',
      'Na próxima apresentação ou projeto novo, ofereça-se por escrito antes de alguém ser escolhido: “se fizer sentido, posso apresentar essa parte”.',
      'Liste 3 pessoas acima ou ao lado do seu gestor que dependem do seu trabalho. Marque 15 minutos com uma delas para entender o que ela precisa de você.'
    ],
    T1S3: [
      'Antes da próxima reunião de decisão, converse com 2 pessoas sobre a sua ideia e ajuste com o que elas disserem. Você chega com uma ideia que já é de mais gente.',
      'Na próxima demanda de outra área, ofereça ao seu gestor cuidar direto e devolva a ele um resumo do que você combinou.',
      'Pergunte a alguém de uma área vizinha o que do seu trabalho mais ajuda ou mais atrapalha o dia dela, e mude uma coisa a partir da resposta.'
    ],
    T1S4: [
      'Escolha uma frente pequena sem dono (integrar a próxima pessoa nova, um treinamento, um processo que ninguém escreveu) e proponha ao seu gestor com começo, meio e fim em 30 dias.',
      'Antes de começar, defina o resultado visível dela. Por exemplo: a pessoa nova andando sozinha em 2 semanas, ou o processo levando metade do tempo.',
      'Ao terminar, mande ao seu gestor um resumo de 5 linhas e pergunte se faz sentido levar ao chefe dele.'
    ],
    T1S5: [
      'Peça ao seu gestor uma conversa de carreira, separada da 1:1 de rotina, com uma pergunta: “o que você precisaria ver de mim para me considerar para uma liderança?”',
      'Transforme a resposta em 2 evidências para os próximos 90 dias e combine com ele como elas vão ser vistas.',
      'Converse com alguém que fez a transição de par para líder e pergunte o que foi mais difícil nos 3 primeiros meses.'
    ],
    T2S1: [
      'Escreva em uma página o que cada pessoa precisa entregar neste mês. Compartilhe com a equipe e mostre ao seu gestor: é a sua condução no papel.',
      'Marque um único momento fixo de 20 minutos por semana para olhar o andamento com a equipe. Mantenha por 4 semanas, e numa delas deixe outra pessoa conduzir.',
      'Se tem uma conversa esperando o momento certo, marque para esta semana. Antes, separe se o ponto é de comportamento ou de técnica, e se é pontual ou repetido.'
    ],
    T2S2: [
      'No próximo relatório de resultado, acrescente uma linha sobre a decisão sua que levou àquilo: “mudamos X porque Y, e isso trouxe Z”.',
      'Na 1:1, pergunte ao seu gestor o que ele faria diferente na condução da equipe. A pergunta mostra que você pensa como líder, e a resposta mostra o que ele enxerga.',
      'Peça ao seu gestor para você apresentar um resultado da equipe numa reunião em que o chefe dele esteja, nos próximos 30 dias.'
    ],
    T2S3: [
      'Na próxima mudança que envolve outro supervisor, converse com cada pessoa antes da reunião e pergunte o que precisaria ser verdade para ela apoiar.',
      'Quando levar um problema ao seu gestor, leve 2 caminhos e a sua recomendação.',
      'Pergunte ao seu gestor quais decisões dos próximos 60 dias vão mexer na sua equipe, e peça para contribuir em uma antes de ela fechar.'
    ],
    T2S4: [
      'Escolha a pessoa da equipe mais perto de assumir mais. Liste as 3 decisões que hoje só você toma e passe uma para ela neste mês, com você por perto.',
      'Deixe essa pessoa conduzir um encontro da equipe ou uma reunião com outra área, e converse depois sobre como foi.',
      'Conte ao seu gestor que está preparando essa pessoa, e para quê.'
    ],
    T2S5: [
      'Peça ao seu gestor uma conversa de carreira com uma pergunta: “o que você precisaria ver de mim para me considerar para a coordenação?”',
      'Pegue os objetivos do ano da área e escreva como cada resultado da sua equipe ajuda um deles. Use isso no próximo relatório.',
      'Peça para participar de uma reunião de planejamento ou de uma decisão da área, levando uma contribuição pronta.'
    ],
    T3S1: [
      'Monte uma página com três colunas: cada frente sua, o objetivo da área e da empresa que ela move, e com que número.',
      'Use essa página para adiar uma frente que não move nenhum objetivo, e conte ao seu gestor por quê.',
      'Na próxima reunião com a diretoria, abra pelo objetivo da empresa e só depois mostre o seu número.'
    ],
    T3S2: [
      'Antes da próxima apresentação, responda por escrito: quem está na sala, o que essas pessoas já sabem e o que precisam decidir. Corte o que não serve a isso.',
      'Abra com 3 frases: a conclusão, o que ela significa para o objetivo de quem ouve e o que você recomenda. O detalhe vai para o anexo.',
      'Depois da reunião, peça a um par ou ao seu gestor uma frase: “o que ficou para eles?”'
    ],
    T3S3: [
      'No próximo pedido difícil, segure a resposta na hora. Pergunte o que está por trás do prazo e o que acontece se a entrega sair em outra data.',
      'Leve 2 alternativas, prazo com escopo menor ou escopo com prazo maior, e deixe a outra pessoa escolher.',
      'Depois de cada negociação do mês, anote o que a outra pessoa queria de verdade. Em 30 dias você tem o mapa do que cada stakeholder costuma precisar.'
    ],
    T3S4: [
      'Liste as 5 pessoas que mais pesam nas decisões da sua área e marque o quanto cada uma conhece o seu trabalho. Marque uma conversa 1:1, sem pauta operacional, com duas delas.',
      'Pergunte a alguém acima do seu gestor o que a área deveria estar fazendo diferente, e volte com uma proposta.',
      'Peça ao seu gestor para entrar na próxima discussão antes do comunicado, como um planejamento ou uma mudança de estrutura, com uma contribuição pronta.'
    ],
    T3S5: [
      'Escreva em uma página a sua tese para a próxima cadeira: que problema da empresa você resolveria lá.',
      'Teste essa tese com uma pessoa acima do seu gestor e ajuste com o que ouvir.',
      'Tenha a conversa de carreira com o seu gestor, com uma pergunta: “o que falta para o meu nome ser a escolha natural?”'
    ],
    T4S1: [
      'Monte uma página: cada frente do seu escopo, o objetivo da empresa e do conselho que ela move, e com que número.',
      'Use essa página para tirar da lista uma frente que não move nenhum objetivo, e conte a quem você responde por quê.',
      'Na próxima reunião executiva, abra pela tese: o objetivo da empresa, o que o seu escopo faz por ele e o que você recomenda.'
    ],
    T4S2: [
      'Antes da reunião executiva mais importante do mês, responda por escrito: quem está na sala, o que já sabe, o que precisa decidir e o que cada pessoa vai cobrar.',
      'Abra com 3 frases: a conclusão, o que ela significa para a estratégia da empresa e o que você recomenda. O detalhe fica para quem pedir.',
      'Depois, peça a um par de diretoria de confiança uma frase sincera: “o que ficou para o CEO?”'
    ],
    T4S3: [
      'Na próxima disputa de orçamento, prioridade ou gente com um par de diretoria, pergunte primeiro o que está em jogo para a área dele e o que ele precisa mostrar.',
      'Leve 2 alternativas que atendam parte do objetivo de cada lado, e deixe a escolha na mesa.',
      'Antes de levar qualquer impasse ao CEO, tente fechar no seu nível. Se subir, suba com uma recomendação conjunta.'
    ],
    T4S4: [
      'Liste as 5 pessoas que mais pesam na próxima cadeira que você quer, dentro e fora da empresa, e marque o quanto cada uma conhece o seu trabalho. Marque uma conversa sem pauta operacional com duas delas.',
      'Pergunte a alguém do C-level ou do conselho o que a empresa deveria estar fazendo diferente nos próximos 2 anos, e volte com uma proposta.',
      'Peça para entrar na próxima discussão de estratégia antes de ela fechar, com uma contribuição pronta.'
    ],
    T4S5: [
      'Escreva em uma página a sua tese para a cadeira seguinte, seja C-level, conselho ou outra empresa: que problema você resolveria lá.',
      'Teste essa tese com duas pessoas que já ocupam uma cadeira parecida, uma dentro e uma fora da empresa.',
      'Tenha a conversa explícita com quem decide a sua próxima cadeira: “o que falta para o meu nome ser a escolha natural?”'
    ]
  };

  var PONTE_T4 = 'Nesse nível, o cenário envolve nomes, disputas e decisões sensíveis que não cabem num grupo. A Mentoria individual é o caminho guiado 1:1 comigo, em sigilo, sobre o seu cenário específico.';

  var R = {
    versao: 1,

    niveis: { consolidado: 'consolidado', construcao: 'em construção', proximo_passo: 'próximo passo' },
    pilaresNomes: { entrega: 'Entrega', visibilidade: 'Visibilidade', influencia: 'Influência', proximo_nivel: 'Próximo nível' },

    rotulos: {
      pilares: 'Onde você está nos 4 pilares',
      teto: 'Onde a escada pede atenção agora',
      crenca: 'O que está por trás',
      ganho: 'O que você ganha ao passar deste degrau',
      acoes: '3 ações para os próximos 30 dias',
      depois: 'E depois disso',
      refazer: 'Refazer o diagnóstico'
    },

    telas: {
      abertura: {
        titulo: 'Veja o que a sua carreira já consolidou e qual é o próximo degrau.',
        subtitulo: 'No final, você recebe o seu resultado com 3 ações para os próximos 30 dias.',
        tempo: 'Leva uns 5 minutos.',
        campos: { nome: 'Seu nome', whatsapp: 'WhatsApp com DDD', email: 'Seu e-mail' },
        botao: 'Começar'
      },
      consentimento: {
        texto: 'Quero receber o meu resultado por e-mail e conversar com a equipe Liderium pelo WhatsApp sobre a minha carreira. Os meus dados ficam só com a equipe Liderium.',
        link: 'Política de privacidade'
      },
      provaRotulo: 'Só mais uma sobre essa',
      trocaCargo: 'Trocar o cargo muda as perguntas. Continuar?',
      transicaoMentalidade: {
        titulo: 'Agora, o seu jeito de pensar',
        texto: 'As próximas frases não têm certo ou errado. Escolha as 3 que mais parecem com você no dia a dia.',
        botao: 'Vamos lá'
      },
      mentalidadeLimite: 'Você já escolheu 3. Desmarque uma para trocar.',
      calculando: {
        titulo: 'Montando o seu resultado',
        linhas: ['Lendo as suas respostas', 'Olhando os 4 pilares', 'Separando as 3 ações para os seus 30 dias']
      },
      retomar: { texto: 'Você parou no meio do diagnóstico. Quer continuar de onde parou?', continuar: 'Continuar', recomecar: 'Recomeçar' },
      jaFez: { texto: 'Você já fez o diagnóstico. Quer ver o seu resultado de novo?', ver: 'Ver meu resultado', refazer: 'Refazer' },
      erro: { texto: 'Não conseguimos começar agora. Confira a sua conexão e tente de novo.', botao: 'Tentar de novo' },
      emailLinha: {
        enviando: 'Enviando uma cópia para o seu e-mail.',
        enviado: 'Enviamos uma cópia para o seu e-mail.',
        jaEnviado: 'Você já recebeu um resultado por e-mail antes; este fica nesta tela.',
        falhou: 'Não conseguimos enviar o e-mail agora. O seu resultado está nesta tela.'
      }
    },

    // ---------- Texto por pilar × nível (seção 3 da RESULTADO-v2). T4 usa o da T3. ----------
    pilares: {
      T1: {
        entrega: {
          consolidado: 'Você entrega com consistência e já é referência para o time.',
          construcao: 'Você entrega bons resultados, e o prato cheio às vezes cobra a conta.',
          proximo_passo: 'A dedicação está aí. O primeiro passo é a entrega ficar previsível.'
        },
        visibilidade: {
          consolidado: 'Quem está acima do seu gestor já conhece você e o que você entrega.',
          construcao: 'Às vezes lembram de você. O que você entrega ainda não chega inteiro a quem decide.',
          proximo_passo: 'O seu trabalho ainda circula perto de você. O primeiro passo é contar uma entrega para além do seu gestor.'
        },
        influencia: {
          consolidado: 'As suas ideias chegam à decisão já com apoio, e outras áreas procuram você.',
          construcao: 'Você defende bem as suas ideias. O próximo passo é elas chegarem à reunião já conversadas.',
          proximo_passo: 'Hoje a sua força está na execução. O primeiro passo é uma relação direta com outra área.'
        },
        proximo_nivel: {
          consolidado: 'Você já conduz uma frente além das suas entregas, e quem decide viu o resultado.',
          construcao: 'Você já conduziu frentes, ou conduz uma cujo resultado ainda não chegou acima do seu gestor.',
          proximo_passo: 'O primeiro passo é escolher uma frente pequena para conduzir.'
        }
      },
      T2: {
        entrega: {
          consolidado: 'A equipe sabe o que precisa ser feito e roda mesmo sem você. As conversas difíceis acontecem na hora certa.',
          construcao: 'A equipe entrega bem, e ainda precisa de você por perto, ou alguma conversa difícil às vezes espera.',
          proximo_passo: 'A rotina da equipe ainda segue a demanda. O primeiro passo é um momento fixo na semana.'
        },
        visibilidade: {
          consolidado: 'A gerência e quem está acima ligam o resultado da equipe à forma como você lidera.',
          construcao: 'O resultado da equipe é conhecido. O quanto dele vem de você ainda não está claro lá em cima.',
          proximo_passo: 'O crédito ainda vai para a equipe. O primeiro passo é contar uma decisão sua.'
        },
        influencia: {
          consolidado: 'Os seus pares adotam as suas propostas, e o seu gestor consulta você antes de decidir.',
          construcao: 'As suas propostas são ouvidas. Algumas viram decisão, outras perdem força no caminho.',
          proximo_passo: 'As decisões ainda chegam prontas. O primeiro passo é levar uma recomendação antes.'
        },
        proximo_nivel: {
          consolidado: 'Há alguém pronto para segurar a operação, e foi você que preparou essa pessoa.',
          construcao: 'A equipe segue bem sem você. Falta alguém visivelmente pronto para assumir, ou algumas decisões ainda esperam a sua volta.',
          proximo_passo: 'Muita coisa ainda passa por você. O primeiro passo é passar uma decisão adiante.'
        }
      },
      T3: {
        entrega: {
          consolidado: 'Você liga cada frente aos objetivos da área e da empresa, e usa isso para decidir prioridades.',
          construcao: 'Você liga o seu trabalho aos objetivos da área, ou a ligação está clara em parte das frentes. O degrau seguinte é ligar tudo aos objetivos da empresa.',
          proximo_passo: 'O dia a dia ainda ocupa a agenda. O primeiro passo é uma página ligando as suas frentes aos objetivos.'
        },
        visibilidade: {
          consolidado: 'Você lê a audiência antes de apresentar, e a diretoria entende o seu resultado do jeito que decide.',
          construcao: 'Você apresenta bem os fatos e o plano. O próximo passo é partir do que a audiência precisa decidir.',
          proximo_passo: 'O seu cuidado com o detalhe é real. O primeiro passo é abrir pela conclusão.'
        },
        influencia: {
          consolidado: 'Você entende o que está por trás do pedido e negocia sem desgastar a relação.',
          construcao: 'Você negocia com cuidado pela relação. O próximo passo é partir do que está por trás do pedido.',
          proximo_passo: 'O jeito como você negocia hoje protege algo importante. O primeiro passo é perguntar o que está por trás do pedido.'
        },
        proximo_nivel: {
          consolidado: 'Você participa antes das decisões, e há quem fale do seu nome quando você não está na sala.',
          construcao: 'Você fica sabendo antes, ou tem quem fale por você. O próximo passo é ter as duas coisas por inteiro.',
          proximo_passo: 'As decisões ainda chegam prontas, e o seu nome depende do resultado falar sozinho. O primeiro passo é mapear quem pesa.'
        }
      }
    },

    // ---------- Crenças ----------
    crencas: {
      // Releitura de cada frase L (id = posição da frase na M do QUESTOES). Aparece depois de blocos.crencaLigada.
      releitura: {
        M1: {
          1: 'O trabalho fala para quem está perto. Para quem decide, alguém precisa contar, e quem melhor conta é você.',
          2: 'Conversar antes da reunião é preparar a decisão. Dá para fazer isso do seu jeito, com critério e sem jogo.',
          3: 'O seu chefe leva o seu nome para a mesa. O que os outros já sabem de você é o que sustenta o nome que ele leva.'
        },
        M2: {
          1: 'A equipe precisa ver alguém resolvendo quando aperta. Pode ser alguém que você preparou.',
          2: 'O cuidado com a pessoa é justo. O momento certo costuma chegar mais cedo do que parece.',
          3: 'Proteger a equipe também passa por estar na sala quando a decisão se forma.'
        },
        M3: {
          2: 'O resultado coloca o seu nome na lista. Quem fala por ele é o que pesa na escolha.',
          4: 'Estar na conversa antes da decisão é leitura de cenário, e ela pode ser feita com o mesmo critério técnico que você já usa.',
          5: 'As relações já existem. O próximo passo é elas saberem o que você quer construir.'
        }
      },
      // Crença lida na resposta (regra 1.1, prioridade 2): pergunta → id da alternativa → texto. Entra em blocos.crencaLida no lugar de {frase}.
      lidas: {
        'T1.1': {
          1: 'dar conta de tudo é o que sustenta a sua imagem. Para quem decide, pesa mais saber quais entregas nunca caem.',
          3: 'a dedicação compensa a variação. A dedicação é real, e o que fica na memória de quem decide é a entrega.'
        },
        'T1.3': {
          2: 'o seu lugar é fazer a decisão acontecer. A execução é uma força real, e a sua leitura também merece entrar antes da decisão.',
          3: 'a melhor ideia ganha na reunião. Na prática, a reunião costuma confirmar o que já foi conversado antes.'
        },
        'T1.5': {
          1: 'conduzir acontece quando alguém chama você. Frentes sem dono existem em todo time, e quem se oferece costuma ficar com elas.',
          2: 'a oportunidade de conduzir precisa surgir. Muitas vezes ela já existe, só ainda não tem nome nem dono.'
        },
        'T2.2a': {
          1: 'a rotina corrida decide a agenda. Um momento fixo por semana devolve a agenda para você.',
          3: 'o nível da equipe depende da sua presença. Ele pode depender de uma rotina que você montou.'
        },
        'T2.2b': {
          2: 'apoiar de perto resolve sem precisar de conversa difícil. O apoio ajuda, e a conversa clara costuma ajudar a pessoa mais rápido.'
        },
        'T2.3': {
          2: 'o mérito é da equipe. É justo, e a forma como você conduz também merece entrar na conta.',
          3: 'a gerência tira as conclusões sozinha. Ela tira, e com o que chega até ela.'
        },
        'T2.5': {
          1: 'cuidar bem da sua equipe já é contribuição suficiente. É uma contribuição grande, e a próxima cadeira pede também mexer no que fica entre as equipes.',
          2: 'concordância na reunião é apoio. O apoio de verdade aparece na hora de fazer, e costuma ser combinado antes, um a um.'
        },
        'T2.7': {
          2: 'quem está acima do seu gestor fica fora do seu papel. Em supervisão, essas pessoas já começam a formar opinião sobre a próxima cadeira.'
        },
        'T3.2': {
          2: 'o dia a dia é o trabalho, e a estratégia é o evento do planejamento. Para a diretoria, a estratégia aparece justamente no dia a dia.',
          3: 'a ligação com os objetivos fica evidente para quem olha. Para quem decide, ela fica evidente quando alguém conta.'
        },
        'T3.3': {
          1: 'se é projeto-chave, a importância já está dita. A diretoria quer ouvir o que o projeto move no objetivo do ano.',
          3: 'o KPI fala pela área. Ele fala para quem conhece a área; para a diretoria, ele precisa vir ligado ao objetivo da empresa.'
        },
        'T3.4': {
          1: 'detalhe gera confiança. Ele gera, depois que a conclusão está clara.',
          2: 'fato e plano bem apresentados bastam. É uma boa prática, e o degrau seguinte é partir do que a audiência precisa decidir.'
        },
        'T3.5': {
          1: 'o contexto bem explicado convence. Ele convence quem já está do seu lado; a outra pessoa decide pelo objetivo dela.',
          2: 'relação importante se preserva cedendo. A relação se preserva também quando os dois lados saem da conversa com algo.',
          4: 'decisão difícil é do seu gestor. Muitas delas cabem no seu nível, e é ali que a sua reputação de negociação se forma.'
        }
      }
    },

    // ---------- As 20 saídas ----------
    saidas: {
      // ===== Trilha 1 · sem liderança · LAP =====
      T1S1: {
        titulo: 'Entrega que vira certeza',
        resumo: 'Você se dedica e entrega bons resultados. O próximo degrau é a sua entrega ficar previsível, a ponto de quem decide saber exatamente o que esperar de você.',
        corpo: [
          'Na escada da carreira, a entrega vem primeiro porque é ela que sustenta o resto. Quando o prato está cheio, alguns pratos caem, e isso é normal em quem pega muita coisa. O que muda a leitura do seu gestor é ele saber quais pratos nunca caem.',
          'Quem vira certeza é o primeiro nome que vem à cabeça quando algo importante precisa sair bem. Com a entrega firme, as conversas sobre o seu próximo passo passam a começar pelo que vem depois dela.'
        ],
        acoes: { inicio: ordem(A.T1S1, [2, 1, 3]), refino: ordem(A.T1S1, [1, 2, 3]) },
        // Variante usada quando a prova do pilar do teto não confirma (a pessoa disse "referência", e o ciclo de avaliação ainda não mostra isso).
        registro: {
          titulo: 'Entrega que vira registro',
          resumo: 'Você entrega com qualidade e já é referência para o time. O próximo degrau é essa entrega virar registro para quem decide.',
          pilarTexto: 'Você entrega com consistência e já é referência. Isso ainda não apareceu no ciclo de avaliação.',
          corpo: [
            'Na escada da carreira, a entrega vem primeiro porque é ela que sustenta o resto, e a sua já está firme. O que falta é ela aparecer onde as decisões são tomadas: no ciclo de avaliação e na conversa do seu gestor com quem está acima.',
            'Quando o que você entrega está registrado, as conversas sobre o seu próximo passo passam a começar por fatos.'
          ],
          acoes: [
            'Liste as 5 entregas dos últimos 6 meses e, em cada uma, o que mudou por causa dela: um número, um prazo, um cliente.',
            'Leve a lista na próxima 1:1 e pergunte ao seu gestor quais delas ele levaria para o ciclo de avaliação.',
            'Combine com ele o que precisa estar registrado até o próximo ciclo, e onde.'
          ]
        },
        percepcao: 'Você já entrega como referência, e isso ainda não virou registro no ciclo de avaliação. Antes do próximo ciclo, leve ao seu gestor a lista do que você entregou e do que mudou por causa disso.',
        ponte: 'As 3 ações você faz por conta própria e já mudam o seu mês. O que elas não fazem é transformar a entrega consistente em reputação. O LAP é o caminho guiado para isso, para que o degrau seguinte venha junto: as pessoas certas saberem o que você entrega.',
        depois: 'Depois deste degrau vem a Visibilidade: o que você entrega chegar a mais gente além do seu gestor.'
      },
      T1S2: {
        titulo: 'O seu trabalho chegar a mais gente',
        resumo: 'Você entrega bem, e o seu gestor sabe disso. O próximo degrau é o que você entrega chegar a mais pessoas além dele.',
        corpo: [
          'Hoje a leitura do seu trabalho fica nas mãos de uma pessoa só. O seu gestor fala bem de você quando tem a chance, e ele tem a própria agenda. O trabalho fala para quem está perto. Para quem decide, alguém precisa contar.',
          'As chances de aparecer, como apresentar para a diretoria ou entrar num projeto novo, costumam ir para quem vem à cabeça primeiro. Quando o seu trabalho circula, o seu nome passa a vir à cabeça junto com ele.'
        ],
        acoes: { inicio: ordem(A.T1S2, [1, 2, 3]), refino: ordem(A.T1S2, [2, 3, 1]) },
        ponte: 'As 3 ações você faz por conta própria e abrem a primeira conversa. O que elas não fazem é virar hábito. O LAP é o caminho guiado para contar o seu trabalho do jeito que quem decide lê, sem soar como autopromoção.',
        depois: 'Depois deste degrau vem a Influência: a sua ideia chegar à reunião já com apoio.'
      },
      T1S3: {
        titulo: 'A sua ideia chegar com apoio',
        resumo: 'As pessoas já sabem quem você é e o que você entrega. O próximo degrau é a sua ideia chegar à reunião já com apoio, além de bem argumentada.',
        corpo: [
          'Nas empresas, a decisão costuma começar antes da reunião, nas conversas de corredor. Uma ideia boa que chega crua disputa com ideias que já foram conversadas. E quando o contato com outras áreas passa sempre pelo seu gestor, a ponte fica no nome dele.',
          'Quando as suas ideias chegam conversadas, elas viram decisão com mais frequência, e outras áreas começam a procurar você direto. É aí que o seu trabalho passa a mexer em coisas maiores do que a sua mesa.'
        ],
        acoes: { inicio: ordem(A.T1S3, [3, 1, 2]), refino: ordem(A.T1S3, [1, 2, 3]) },
        ponte: 'As 3 ações você faz por conta própria e testam um jeito novo de influenciar. O que elas não dão é a leitura de cenário por trás: quem decide, quem pesa e quando conversar. O LAP é o caminho guiado para isso, para que vire hábito e deixe de ser tentativa.',
        depois: 'Depois deste degrau vem o Próximo nível: conduzir uma frente que seja sua.'
      },
      T1S4: {
        titulo: 'Uma frente que seja sua',
        resumo: 'Você já entrega, aparece e move pessoas. O próximo degrau é conduzir alguma coisa que seja sua, além das suas entregas.',
        corpo: [
          'O próximo cargo costuma ser decidido olhando o que a pessoa já faz do cargo seguinte. Conduzir uma frente, mesmo pequena, é a forma mais concreta de mostrar isso: integrar alguém novo, organizar um treinamento, escrever o processo que ninguém escreveu.',
          'Com uma frente sua e um resultado visível, a conversa sobre o seu próximo passo ganha um fato para se apoiar. Quem decide passa a ver você fazendo o trabalho de cima antes do cargo.'
        ],
        acoes: { inicio: ordem(A.T1S4, [1, 2, 3]), refino: ordem(A.T1S4, [1, 2, 3]) },
        registro: { acoes: { inicio: ordem(A.T1S4, [2, 3, 1]), refino: ordem(A.T1S4, [2, 3, 1]) } },
        percepcao: 'Você já conduz uma frente. O que falta é o resultado dela chegar a quem decide, e por isso as ações de definir o resultado e mandar o resumo vêm primeiro.',
        ponte: 'As 3 ações você faz por conta própria e criam a sua primeira frente. O que vem com ela é mais difícil de fazer sem apoio: conduzir pessoas sem ter o cargo e mostrar isso para quem decide. O LAP é o caminho guiado para essa fase.',
        depois: 'Depois deste degrau, a conversa passa a ser sobre a primeira liderança.'
      },
      T1S5: {
        titulo: 'A conversa da primeira liderança',
        resumo: 'Você entrega como referência, aparece para quem decide, move pessoas e conduz frentes. Você já faz o trabalho do degrau de cima. O próximo passo é a empresa tratar isso numa conversa explícita.',
        corpo: [
          'Quem chega a esse ponto e não conversa sobre isso tende a seguir como a pessoa que resolve, por mais tempo do que precisaria. A conversa explícita encurta esse caminho, porque dá ao seu gestor algo concreto para defender.',
          RESSALVA
        ],
        acoes: A.T1S5,
        ponte: 'As 3 ações você faz por conta própria e abrem a porta. O LAP é o caminho guiado para a primeira cadeira de liderança, para você chegar a ela sabendo o que ela pede.'
      },

      // ===== Trilha 2 · supervisão · LAP (S1) e Liderium Pocket (S2 a S5) =====
      T2S1: {
        titulo: 'A sua liderança à vista na rotina da equipe',
        resumo: 'A sua equipe entrega, e boa parte desse nível passa pela sua presença. O próximo degrau é a rotina e as conversas da equipe ficarem claras a ponto de quem decide enxergar a sua liderança nelas.',
        corpo: [
          'Quando a equipe roda porque você está perto, quem está acima vê uma equipe que funciona e uma liderança sempre ocupada. Quando ela roda com uma rotina que você montou, a gerência enxerga a sua forma de conduzir. O que muda é quanto da sua condução fica visível no jeito da equipe trabalhar.',
          'Com a rotina de pé, o tempo que hoje vai para segurar o nível volta para você. É esse tempo que vai para aparecer, influenciar e preparar o próximo passo.'
        ],
        acoes: { inicio: ordem(A.T2S1, [2, 1, 3]), refino: ordem(A.T2S1, [1, 2, 3]) },
        percepcao: 'A última conversa difícil com a equipe faz um tempo. Vale conferir se foi porque não precisou ou porque ela ficou esperando o momento certo.',
        ponte: 'As 3 ações você faz por conta própria e dão estrutura ao seu mês. O que elas não fazem é virar uma base que se sustenta. O LAP é o caminho guiado para isso: a equipe render sem depender da sua presença o tempo todo, o que libera a sua agenda para os degraus seguintes.',
        depois: 'Depois deste degrau vem a Visibilidade: a gerência ligar o resultado da equipe à forma como você lidera.'
      },
      T2S2: {
        titulo: 'A sua liderança aparecer no resultado',
        resumo: 'A sua equipe vai bem, e a gerência já sabe disso. O próximo degrau é ela ligar esse resultado à forma como você conduz.',
        corpo: [
          'Quando a equipe bate um bom resultado, o mais comum é o crédito ir para a equipe. Isso é justo, e diz pouco sobre você. A escolha para a coordenação olha para a forma de liderar, e essa parte só chega lá em cima se alguém contar.',
          'Quando a sua condução está contada, cada bom resultado da equipe passa a somar também na leitura que fazem de você. É o tipo de registro que pesa quando se discute quem coordena.'
        ],
        acoes: { inicio: ordem(A.T2S2, [1, 2, 3]), refino: ordem(A.T2S2, [3, 1, 2]) },
        ponte: 'As 3 ações você faz por conta própria e colocam a sua liderança na conversa. O que elas não dão é o roteiro para fazer isso toda semana. O Liderium Pocket é o caminho guiado para contar a condução da equipe além do número.',
        depois: 'Depois deste degrau vem a Influência: mudar coisas que vão além da sua equipe.'
      },
      T2S3: {
        titulo: 'Mudar o que vai além da sua equipe',
        resumo: 'A gerência já enxerga em você uma boa liderança de equipe. O próximo degrau é mudar coisas que vão além dela, com os seus pares e com o seu gestor.',
        corpo: [
          'Em supervisão, muitas decisões que mexem na sua equipe chegam prontas. E mudanças boas costumam perder força entre a concordância na reunião e a hora de acontecer. Isso acontece porque a decisão se forma antes, nas conversas um a um.',
          'Quando você entra antes, as decisões passam a chegar com a sua contribuição dentro. É assim que o seu peso cresce além da sua equipe.'
        ],
        acoes: { inicio: ordem(A.T2S3, [1, 2, 3]), refino: ordem(A.T2S3, [3, 1, 2]) },
        ponte: 'As 3 ações você faz por conta própria e abrem espaço nas decisões. O que elas não dão é um jeito de repetir isso sem depender de inspiração. O Liderium Pocket é o caminho guiado para preparar a conversa com par e com gestor e levar a recomendação.',
        depois: 'Depois deste degrau vem o Próximo nível: ter quem fique no seu lugar.'
      },
      T2S4: {
        titulo: 'Quem fica no seu lugar',
        resumo: 'Você entrega, aparece e influencia. O que segura o próximo passo agora é ter alguém para segurar a sua cadeira.',
        corpo: [
          'A empresa fica confortável para levar alguém para a próxima cadeira quando sabe que a atual continua de pé. Enquanto muita coisa passa por você, tirar você dali custa caro para a área.',
          'Quando há alguém preparado por você, a sua saída vira uma boa notícia para a área. E preparar gente já é parte do trabalho que a coordenação pede.'
        ],
        acoes: { inicio: ordem(A.T2S4, [1, 2, 3]), refino: ordem(A.T2S4, [2, 3, 1]) },
        percepcao: 'A equipe anda bem, e isso ainda não virou alguém visivelmente pronto para assumir. Comece por contar ao seu gestor quem você está preparando.',
        ponte: 'As 3 ações você faz por conta própria e começam a preparação. O que elas não dão é o plano inteiro. O Liderium Pocket é o caminho guiado para preparar quem fica e mostrar isso à gerência como parte da sua liderança.',
        depois: 'Depois deste degrau, a conversa passa a ser sobre a coordenação.'
      },
      T2S5: {
        titulo: 'A conversa da coordenação',
        resumo: 'Você já supervisiona como quem coordena: a equipe roda, a sua liderança aparece, você influencia e já tem quem fique no seu lugar. A próxima cadeira pede ligar o trabalho da equipe aos objetivos da área.',
        corpo: [
          'Sem uma conversa explícita, a empresa tende a manter a boa supervisão onde ela está rendendo. É uma escolha racional para a área, e é por isso que o movimento precisa partir de você.',
          RESSALVA
        ],
        acoes: A.T2S5,
        ponte: 'As 3 ações você faz por conta própria e abrem a conversa. O Liderium Pocket é o caminho guiado para apresentar a sua prontidão para a coordenação com evidência, no tom certo.'
      },

      // ===== Trilha 3 · Coordenador(a) e Gerente · Mentoria Liderium =====
      T3S1: {
        titulo: 'O seu trabalho na língua da estratégia',
        resumo: 'A sua área entrega. O próximo degrau é a diretoria enxergar como cada frente sua move um objetivo da empresa.',
        corpo: [
          'Trabalho que não aparece ligado a um objetivo do ano tende a ser lido como operação. E quando é lido como operação, a prioridade dele é decidida por outras pessoas. Quem fala a língua dos objetivos da empresa recebe espaço maior, porque facilita a vida de quem decide.',
          'Quando cada frente sua aparece ligada a um objetivo, você passa a participar da conversa sobre prioridades. É a leitura que a diretoria espera de quem vai ocupar uma cadeira maior.'
        ],
        acoes: { inicio: ordem(A.T3S1, [1, 2, 3]), refino: ordem(A.T3S1, [1, 3, 2]) },
        percepcao: 'Você já liga o seu trabalho aos objetivos da área. O próximo degrau é ligar aos objetivos da empresa, do jeito que a diretoria pergunta.',
        ponte: 'As 3 ações você faz por conta própria e fazem a primeira tradução. O que elas não fazem é ler o seu cenário: quem decide, o que a diretoria cobra, onde a sua área pesa. Na Mentoria Liderium, eu faço essa leitura com você no diagnóstico inicial e na sessão individual, reviso a sua tradução e acompanho por 6 meses, com encontros quinzenais em grupo e o WhatsApp, até isso virar a forma natural de você falar do seu trabalho.',
        depois: 'Depois deste degrau vem a Visibilidade: a diretoria entender o seu resultado do jeito que ela decide.'
      },
      T3S2: {
        titulo: 'O seu resultado contado do jeito que a diretoria decide',
        resumo: 'O resultado existe, e você cuida dele com rigor. O próximo degrau é a diretoria entender esse resultado do jeito que ela decide.',
        corpo: [
          'A diretoria forma opinião nos primeiros minutos de uma apresentação. Ela quer saber o que aquilo significa para o objetivo dela e o que você recomenda. Quando o detalhe vem antes da conclusão, a interpretação do seu trabalho fica com outra pessoa.',
          'Quando você abre pelo que a sala precisa decidir, a reunião anda mais rápido e a sua leitura passa a ser a referência. É assim que se constrói a credibilidade que leva a mesas maiores.'
        ],
        acoes: { inicio: ordem(A.T3S2, [2, 1, 3]), refino: ordem(A.T3S2, [1, 2, 3]) },
        ponte: 'As 3 ações você faz por conta própria e mudam a sua próxima reunião. O que elas não dão é alguém olhando a sua narrativa antes de ela chegar à sala. Na Mentoria Liderium, a sua narrativa é preparada e revisada comigo antes das apresentações que importam, e o grupo de pares em fase parecida ajuda você a ouvir como ela chega. São 6 meses, com sessão individual, encontros quinzenais e WhatsApp.',
        depois: 'Depois deste degrau vem a Influência: negociar com pares e outras áreas sem perder terreno.'
      },
      T3S3: {
        titulo: 'Negociar sem perder terreno',
        resumo: 'Você cuida das relações e do que tem no prato. O próximo degrau é negociar os pedidos difíceis a partir do que está por trás deles.',
        corpo: [
          'Cada pedido aceito sem negociação vira o que os outros passam a esperar da sua área. E a reputação de quem negocia bem se constrói justamente nessas conversas, com pares e com outras áreas.',
          'Quando você entende o objetivo de quem pede, aparecem caminhos que ninguém tinha colocado na mesa. A relação sai preservada, e o escopo da sua área também.'
        ],
        acoes: { inicio: ordem(A.T3S3, [1, 2, 3]), refino: ordem(A.T3S3, [1, 2, 3]) },
        padroes: {
          justifica: 'Na sua resposta, o caminho foi explicar o prato cheio e contar com o bom senso da outra pessoa. É um caminho respeitoso, e nele você negocia pelo seu lado enquanto a outra pessoa decide pelo dela. Na próxima, fale primeiro do objetivo dela e só depois do seu prato.',
          cede: 'Na sua resposta, o caminho foi aceitar para preservar uma relação importante. Isso protege o clima, e quem paga é o escopo da sua área. Na próxima, escolha o stakeholder com quem você mais cede e converse com ele, fora da urgência, sobre como vocês trabalham juntos.',
          escala: 'Na sua resposta, o caminho foi aceitar e levar ao seu gestor para decidirem juntos. É prudente, e o crédito da solução sobe junto com o problema. Na próxima, resolva no seu nível e conte ao seu gestor depois.'
        },
        ponte: 'As 3 ações você faz por conta própria e mudam a sua próxima negociação. O que elas não dão é a leitura de cada stakeholder. Na Mentoria Liderium, eu ajudo você a ler cada pessoa envolvida e a ensaiar a conversa antes de ela acontecer, e os encontros quinzenais mostram o que funcionou com outros líderes em situações parecidas.',
        depois: 'Depois deste degrau vem o Próximo nível: estar na conversa antes da decisão e ter quem fale do seu nome.'
      },
      T3S4: {
        titulo: 'Estar na conversa antes da decisão',
        resumo: 'Você entrega, comunica e negocia bem. O próximo degrau é estar na conversa antes da decisão e ter quem fale do seu nome quando você não está na sala.',
        corpo: [
          'As decisões que mexem na sua área se formam antes do comunicado. E quando se escolhe quem assume o próximo desafio, a conversa acontece numa sala onde você não está. O que pesa ali é quem conhece o seu trabalho de perto e fala por ele.',
          'Quando você participa antes, as decisões chegam com a sua leitura dentro. E quando as pessoas certas sabem o que você quer construir, o seu nome entra na conversa com alguém para defender.'
        ],
        acoes: { inicio: ordem(A.T3S4, [1, 2, 3]), refino: ordem(A.T3S4, [3, 1, 2]) },
        padroes: {
          relacoes: 'Na sua resposta, você tem boas relações com muita gente. Essa base já existe. O passo agora é algumas dessas pessoas saberem o que você quer construir, para saberem o que defender.',
          gestor: 'Na sua resposta, o seu gestor defende você com certeza. É uma base forte. A próxima cadeira costuma pedir mais de uma voz, de áreas e níveis diferentes.',
          disputa: 'Na sua resposta, o seu nome estaria bem cotado, junto com outros pares. Numa disputa equilibrada, o que costuma separar é quem fala por você na sala.'
        },
        ponte: 'As 3 ações você faz por conta própria e abrem portas. O que elas não dão é o mapa do seu cenário. Na Mentoria Liderium, eu ajudo você a mapear quem é quem e a construir capital político com método ao longo de 6 meses, trocando com quem já fez esse caminho no grupo.',
        depois: 'Depois deste degrau, a conversa passa a ser sobre a próxima cadeira.'
      },
      T3S5: {
        titulo: 'Da prontidão ao movimento',
        resumo: 'Você já joga como a cadeira de cima: liga o trabalho à estratégia, fala a língua da diretoria, negocia bem e está na conversa antes da decisão. O próximo passo é transformar essa prontidão em movimento, com uma tese e uma conversa explícita.',
        corpo: [
          'Quem chega a esse ponto e espera ser chamado deixa a escolha do momento para os outros. Uma tese clara para a próxima cadeira dá a quem defende você algo concreto para levar à mesa.',
          RESSALVA
        ],
        acoes: A.T3S5,
        ponte: 'As 3 ações você faz por conta própria e montam a tese. Na Mentoria Liderium, ela é afinada comigo e vira um plano de 6 meses para a próxima cadeira, com sessão individual, encontros quinzenais e WhatsApp.'
      },

      // ===== Trilha 4 · Gerente sênior, Head, Diretor(a) ou VP · Mentoria individual =====
      T4S1: {
        titulo: 'O seu escopo como tese de negócio',
        resumo: 'O seu escopo entrega. O próximo degrau é ele aparecer para o C-level como uma tese de negócio, ligada aos objetivos da empresa e do conselho.',
        corpo: [
          'Nesse nível, o CEO e o conselho olham para cada área perguntando o que ela move na estratégia da empresa. Quando a ligação não está contada, o seu escopo é lido pela operação, e orçamento e prioridade passam a ser decididos por outras pessoas.',
          'Quando o seu escopo aparece como tese, você passa a participar da conversa sobre para onde a empresa vai. É isso que sustenta o espaço de quem está na mesa executiva.'
        ],
        acoes: { inicio: ordem(A.T4S1, [1, 2, 3]), refino: ordem(A.T4S1, [1, 3, 2]) },
        percepcao: 'Você já liga o seu escopo aos objetivos da área. O próximo degrau é ligar aos objetivos da empresa, no nível em que o C-level conversa.',
        ponte: 'As 3 ações você faz por conta própria e fazem a primeira tradução. ' + PONTE_T4,
        depois: 'Depois deste degrau vem a Visibilidade: a sua narrativa chegar ao CEO e ao conselho do jeito que eles decidem.'
      },
      T4S2: {
        titulo: 'A sua narrativa para o CEO e o conselho',
        resumo: 'O resultado do seu escopo existe e é bem cuidado. O próximo degrau é ele chegar ao CEO e ao conselho do jeito que eles decidem.',
        corpo: [
          'Na mesa executiva, a atenção é curta e cada pessoa chega com a própria agenda. Quem abre pela conclusão e pelo que ela significa para a estratégia define a leitura do assunto. Quem abre pelo detalhe deixa essa leitura para outra pessoa.',
          'Quando a sua narrativa parte do que o CEO e o conselho precisam decidir, a sua leitura passa a ser a referência daquele tema. É assim que o seu escopo ganha peso na estratégia.'
        ],
        acoes: { inicio: ordem(A.T4S2, [2, 1, 3]), refino: ordem(A.T4S2, [1, 2, 3]) },
        ponte: 'As 3 ações você faz por conta própria e mudam a sua próxima reunião executiva. ' + PONTE_T4,
        depois: 'Depois deste degrau vem a Influência: negociar com os pares de diretoria sem perder terreno.'
      },
      T4S3: {
        titulo: 'Negociar entre pares de diretoria',
        resumo: 'Você cuida das relações e do seu escopo. O próximo degrau é negociar orçamento, prioridade e gente com os pares de diretoria a partir do que está em jogo para cada lado.',
        corpo: [
          'Nesse nível, cada concessão vira referência para a próxima disputa. E cada impasse levado ao CEO diz algo sobre quem consegue fechar acordos sozinho.',
          'Quando você entende o que está em jogo para o par do outro lado, aparecem acordos que preservam a relação e o seu escopo. É essa reputação que sustenta uma cadeira executiva.'
        ],
        acoes: { inicio: ordem(A.T4S3, [1, 2, 3]), refino: ordem(A.T4S3, [1, 2, 3]) },
        padroes: {
          justifica: 'Na sua resposta, o caminho foi explicar o contexto e contar com o bom senso do outro lado. É um caminho respeitoso, e nele você negocia pelo seu lado enquanto o par decide pelo dele. Na próxima, abra pelo objetivo da área dele.',
          cede: 'Na sua resposta, o caminho foi aceitar para preservar uma relação importante. Isso protege o clima, e quem paga é o seu escopo. Na próxima, converse com o par com quem você mais cede, fora da urgência, sobre como as duas áreas trabalham juntas.',
          escala: 'Na sua resposta, o caminho foi aceitar e levar para cima. Nesse nível, levar para cima é levar ao CEO, e o crédito da solução sobe junto. Na próxima, feche no seu nível e conte depois.'
        },
        ponte: 'As 3 ações você faz por conta própria e mudam a sua próxima negociação. ' + PONTE_T4,
        depois: 'Depois deste degrau vem o Próximo nível: estar na mesa onde a estratégia se forma.'
      },
      T4S4: {
        titulo: 'Na mesa onde a estratégia se forma',
        resumo: 'Você entrega, comunica e negocia no nível executivo. O próximo degrau é estar na mesa onde a estratégia se forma e ter quem fale do seu nome no C-level e fora da empresa.',
        corpo: [
          'A estratégia se forma antes da reunião em que é apresentada. E a próxima cadeira executiva costuma ser discutida numa sala onde você não está, às vezes com gente de fora da empresa. O que pesa ali é quem conhece o seu trabalho e fala por ele.',
          'Quando você está na conversa antes, a estratégia chega com a sua leitura dentro. E quando as pessoas certas, dentro e fora da empresa, sabem o que você quer construir, o seu nome entra na conversa com quem defenda.'
        ],
        acoes: { inicio: ordem(A.T4S4, [1, 2, 3]), refino: ordem(A.T4S4, [3, 1, 2]) },
        padroes: {
          relacoes: 'Na sua resposta, você tem boas relações com muita gente. Essa base já existe. O passo agora é algumas dessas pessoas saberem qual cadeira você quer, para saberem o que defender.',
          gestor: 'Na sua resposta, quem está acima de você defende o seu nome com certeza. É uma base forte. A cadeira executiva seguinte costuma pedir mais de uma voz, inclusive de fora da empresa.',
          disputa: 'Na sua resposta, o seu nome estaria bem cotado, junto com outros pares. Numa disputa equilibrada, o que costuma separar é quem fala por você na sala.'
        },
        ponte: 'As 3 ações você faz por conta própria e abrem portas. ' + PONTE_T4,
        depois: 'Depois deste degrau, a conversa passa a ser sobre a cadeira executiva seguinte.'
      },
      T4S5: {
        titulo: 'A cadeira executiva seguinte',
        resumo: 'Você já atua como a cadeira de cima: o seu escopo aparece como tese, a sua narrativa chega ao C-level, você negocia bem entre pares e está na mesa onde a estratégia se forma. O próximo passo é definir a cadeira seguinte, seja C-level, conselho ou outra empresa, e transformar a prontidão em movimento.',
        corpo: [
          'Quem chega a esse ponto e espera o convite deixa a escolha do momento e da cadeira para os outros. Uma tese clara dá a quem defende você algo concreto para levar à mesa, dentro e fora da empresa.',
          RESSALVA
        ],
        acoes: A.T4S5,
        ponte: 'As 3 ações você faz por conta própria e montam a tese. ' + PONTE_T4
      }
    },

    // ---------- Produtos e CTA (url: o construtor preenche; LAP, Pocket e Empresarial abrem o WhatsApp do CRM) ----------
    produtos: {
      LAP: {
        nome: 'LAP',
        convite: 'Para saber como o LAP funciona no seu caso, chama a equipe no WhatsApp e conta o seu resultado.',
        cta: { rotulo: 'Chama a equipe no WhatsApp', url: '' }
      },
      POCKET: {
        nome: 'Liderium Pocket',
        convite: 'Para saber como o Liderium Pocket funciona no seu caso, chama a equipe no WhatsApp e conta o seu resultado.',
        cta: { rotulo: 'Chama a equipe no WhatsApp', url: '' }
      },
      MENTORIA: {
        nome: 'Mentoria Liderium',
        convite: 'Se fizer sentido para o seu momento, agenda uma conversa com a equipe. A gente olha o seu resultado junto e vê se a Mentoria Liderium é o caminho.',
        cta: { rotulo: 'Agenda a conversa com a equipe', url: '' }
      },
      INDIVIDUAL: {
        nome: 'Mentoria individual',
        convite: 'Se fizer sentido para o seu momento, agenda uma conversa com a equipe. A gente olha o seu resultado junto, com sigilo, e vê se a Mentoria individual é o caminho.',
        cta: { rotulo: 'Agenda a conversa com a equipe', url: '' }
      },
      EMPRESARIAL: {
        nome: 'Mentoria Empresarial',
        convite: 'Chama a equipe no WhatsApp e conta o que você está construindo.',
        cta: { rotulo: 'Chama a equipe no WhatsApp', url: '' }
      }
    },

    // ---------- Blocos que se encaixam no resultado ----------
    blocos: {
      crencaLigada: 'Entre as frases que você escolheu, uma conversa direto com este degrau: “{frase}”',
      crencaProximoDegrau: 'Quando este degrau andar, o próximo tende a passar por uma das frases que você escolheu: “{frase}”',
      crencaLida: 'O jeito de pensar que aparece na sua resposta: {frase}',
      reforco: 'Você já pensa assim: “{frase}” As ações abaixo colocam isso em prática no seu mês.',
      destaqueMentalidade: 'Você escolheu mais de uma frase que pesa no passo seguinte. Nesta fase, o jeito de pensar conta tanto quanto a técnica, e é a parte que mais rende quando muda.',
      percepcao: 'O que você faz ainda não virou registro para quem decide. Você se vê num nível, e o fato que perguntamos ainda não mostrou isso. Isso costuma falar de como o seu trabalho circula na empresa, e o trabalho em si continua de pé.',
      lacunaLeitura: 'Numa das respostas você disse que não sabe como as pessoas acima enxergam você. Isso já é um dado útil. Vale começar por descobrir: pergunte ao seu gestor ou a um par de confiança como o seu trabalho chega lá em cima.',
      ressalva: RESSALVA
    },

    // ---------- Ajustes por contexto (não pontuam; entram como uma linha no topo do resultado) ----------
    ajustes: [
      { se: { resultados: 'C' }, trilhas: ['T2', 'T3', 'T4'], texto: 'Você contou que a fase é de muitas mudanças, com alguns pratinhos fora do lugar. Isso pesa na leitura de tudo o que vem abaixo. Nesta fase, o movimento que mais conta é levar para cima o plano antes do número: o que está sendo feito para voltar ao eixo.' },
      { se: { resultados: 'A' }, trilhas: ['T2', 'T3', 'T4'], tetos: ['entrega', 'visibilidade'], texto: 'Modéstia à parte, você disse que a sua equipe ou área é referência no que faz. Então o resultado já existe. O degrau agora é ele chegar a quem decide do jeito que decide.' },
      { se: { operacao: 'C' }, trilhas: ['T3', 'T4'], texto: 'Você ainda está perto da operação, e é ali que faz diferença hoje. Isso torna a agenda o primeiro obstáculo de qualquer ação abaixo. Uma sugestão: tire você de uma reunião operacional por semana e use essas horas para a primeira ação.' },
      { se: { operacao: 'B' }, trilhas: ['T3', 'T4'], texto: 'Você entra nos momentos críticos da operação. São justamente os momentos em que a diretoria mais olha. Use um deles para mostrar a sua leitura da situação, além da execução.' },
      { se: { tempo: '<1' }, trilhas: ['T1', 'T2', 'T3', 'T4'], tetos: ['entrega', 'visibilidade', 'influencia', 'proximo_nivel'], texto: 'Você está há menos de um ano na cadeira. Boa parte do que aparece aqui é natural da chegada, e o primeiro capital de uma cadeira nova se constrói justamente nestes meses.' },
      { se: { tempo: '3-5' }, trilhas: ['T1', 'T2', 'T3', 'T4'], tetos: ['influencia', 'proximo_nivel', 'nenhum'], texto: 'Você já tem de 3 a 5 anos nesta cadeira. Ela está consolidada, e o próximo movimento pede intenção: a conversa de carreira com o seu gestor sobe de prioridade.' },
      { se: { tempo: '>5' }, trilhas: ['T1', 'T2', 'T3', 'T4'], tetos: ['visibilidade', 'influencia', 'proximo_nivel', 'nenhum'], texto: 'Você tem mais de 5 anos nesta cadeira. Esse tempo de casa já é crédito. O passo agora é usar esse crédito para pedir espaço.' }
    ],

    // ---------- Empresário(a) ----------
    empresario: {
      titulo: 'O seu jogo é outro',
      corpo: 'Quem tem o próprio negócio decide sobre a empresa, sobre as pessoas que lideram junto e sobre para onde tudo vai. As perguntas deste diagnóstico foram feitas para quem constrói carreira dentro de uma empresa, então diriam pouco sobre o seu momento. Para quem está no seu lugar, eu tenho a Mentoria Empresarial. Chama a equipe no WhatsApp e conta o que você está construindo.',
      cta: { rotulo: 'Chama a equipe no WhatsApp', url: '' }
    },

    // ---------- E-mail (o corpo do resultado vem de Resultado.montar, igual à tela) ----------
    email: {
      assunto: 'O seu resultado do diagnóstico de carreira',
      abertura: 'Oi, {nome}!',
      intro: 'Aqui está o seu resultado, do jeito que apareceu na tela, para você ter à mão nos próximos 30 dias.',
      rodape: 'Se quiser conversar sobre o seu resultado, é só responder este e-mail.\n\nYury Garcia',
      empresario: {
        assunto: 'Sobre o diagnóstico de carreira',
        corpo: 'Oi, {nome}!\n\nObrigado por começar o diagnóstico de carreira. As perguntas dele foram feitas para quem constrói carreira dentro de uma empresa, e quem tem o próprio negócio vive outro jogo: decide sobre a empresa, sobre as pessoas que lideram junto e sobre para onde tudo vai.\n\nPara quem está no seu lugar, eu tenho a Mentoria Empresarial. Se fizer sentido, chama a equipe no WhatsApp e conta o que você está construindo.\n\nYury Garcia'
      }
    }
  };

  R.pilares.T4 = R.pilares.T3; // T4 usa as mesmas perguntas e o mesmo texto por pilar da T3

  if (typeof module !== 'undefined') module.exports = R;
  g.QUIZ_RESULTADOS = R;
})(typeof globalThis !== 'undefined' ? globalThis : this);
