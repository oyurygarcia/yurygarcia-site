/* GERADO por gerar-conteudo.py a partir de ia/v4/conteudo/*.json. Não edite à mão: edite o JSON e rode de novo.
 * Arquivo compartilhado: a página premium e o script (Conteudo.gs) usam a mesma cópia. */
(function (g) {
  var C = {
 "versao": "v4",
 "fixo": {
  "T1": {
   "abertura_pilares": "",
   "pilares": {
    "entrega": {
     "nome": "Entrega",
     "linha_autoavaliacao": "Entrego com qualidade e constância, e as pessoas me procuram como referência no que eu faço.",
     "o_que_medimos": "Se as suas entregas têm qualidade e constância a ponto de você virar referência para quem trabalha perto, e se você enxerga essa entrega como o ponto de partida para o próximo passo.",
     "como_funciona": [
      "Pense em dois analistas da mesma área, com a mesma formação e a mesma carga de trabalho. No fechamento do mês, os dois entregam o relatório no prazo. A diferença aparece nos detalhes. O primeiro entrega e segue para a próxima demanda. O segundo também entrega, e é para ele que as pessoas ligam quando um número não bate, quando alguém novo precisa aprender a rotina ou quando a reunião pede alguém que conheça o assunto a fundo.",
      "Com o tempo, o gestor passa a contar com um deles de um jeito diferente. Quando surge uma demanda delicada, com prazo curto ou com gente de fora olhando, ele já sabe para quem entregar. Ninguém anunciou essa escolha. Ela foi construída mês a mês, pela soma de entregas que chegaram sem precisar de conferência.",
      "É assim que a entrega vira a base de tudo o que vem depois. Constância cria confiança, e confiança faz o seu nome aparecer quando o trabalho fica mais importante. Seis meses previsíveis costumam pesar mais do que um mês brilhante seguido de dois irregulares, porque quem distribui o trabalho precisa saber o que vai receber.",
      "Ser referência tem ainda um efeito que pouca gente nota no começo. Quando você treina alguém ou explica um tema numa discussão, o seu conhecimento passa a ser visto por pessoas que não acompanham o seu dia a dia. A entrega começa a sair da sua mesa e a circular pela área."
     ],
     "por_que_pesa": "Entrega é o primeiro degrau da escada. Visibilidade, influência e a próxima cadeira se apoiam nela, porque quem é lembrado precisa ter algo sólido pelo que ser lembrado. Quando a entrega ainda oscila, cada esforço nos outros pilares rende menos, e a conversa com o gestor tende a voltar para o básico.",
     "subcriterios": [
      {
       "id": "T1-E1",
       "nome": "entrega com qualidade e constância, como referência",
       "le_de": "T1.1, com a prova T1.1p",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T1.1",
        "valores": {
         "2": 100,
         "1": 50,
         "3": 0
        },
        "prova": "T1.1p",
        "prova_rebaixa_para_50": [
         1
        ],
        "prova_neutra": [
         2
        ]
       }
      },
      {
       "id": "T1-E2",
       "nome": "vê a entrega como ponto de partida para o próximo cargo",
       "le_de": "M1, frase 4 (a favor): \"Entregar bem é o ponto de partida; o próximo cargo pede mais.\"",
       "regra": {
        "tipo": "mentalidade",
        "pergunta": "M1",
        "alternativa": 4,
        "marcada": 100,
        "nao_marcada": 0
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram uma entrega que já se sustenta: qualidade, constância e pessoas que contam com você para além da sua mesa. Esse é o ativo que dá peso a todo o resto. O cuidado agora é proteger essa constância enquanto você amplia o alcance do que faz, porque é ela que dá credibilidade aos próximos passos.",
      "em_construcao": "As suas respostas mostram bons resultados e um trabalho bem visto, com meses em que a carga aperta e alguma coisa escapa. É uma fase comum para quem entrega muito. O próximo passo costuma estar em escolher o que precisa sair impecável, para que a imagem que fica seja a das entregas que chegam sempre no mesmo padrão.",
      "proximo_degrau": "As suas respostas mostram dedicação real num período de demanda intensa, com uma performance que ainda varia de um mês para o outro. Antes de pensar em aparecer mais, vale firmar a base: entender o que mais importa para quem recebe o seu trabalho e organizar a rotina para que isso saia sempre no mesmo padrão. Constância é o que transforma esforço em confiança."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Transforme o que você sabe em referência para o time",
        "como_fazer": "Escolha um tema que você domina e que costuma gerar dúvida na área. Prepare uma explicação curta, de 15 a 20 minutos, e ofereça ao seu gestor para apresentar numa reunião do time ou na integração de alguém novo.",
        "sinal": "Colegas passam a procurar você sobre esse tema sem passar pelo gestor."
       },
       {
        "titulo": "Registre o que a sua entrega gerou",
        "como_fazer": "Ao fim de cada mês, anote em três linhas o que você entregou de mais relevante e o efeito disso: um prazo que a área cumpriu, um erro evitado, horas economizadas. Leve esse registro para a próxima conversa individual com o seu gestor.",
        "sinal": "O seu gestor usa um desses exemplos quando fala de você, numa reunião ou na avaliação."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Descubra quais entregas não podem cair",
        "como_fazer": "Pergunte ao seu gestor, numa conversa individual: \"Das coisas que eu entrego, quais são as que mais pesam para você e para a área?\". Use a resposta para decidir o que recebe o seu melhor horário e o que pode ser renegociado quando o prato enche.",
        "sinal": "Nas semanas mais cheias, o que escapa deixa de ser o que mais importa."
       },
       {
        "titulo": "Avise antes de o prato cair",
        "como_fazer": "Quando perceber que uma entrega não vai caber no prazo, avise o seu gestor no mesmo dia, já com uma proposta: o que sai na data e o que sai depois. Antecipar preserva a confiança, mesmo quando o prazo muda.",
        "sinal": "O seu gestor passa a perguntar menos sobre o andamento, porque sabe que você avisa."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Combine como é uma entrega bem feita",
        "como_fazer": "Escolha as duas ou três entregas mais frequentes do seu trabalho e combine com o seu gestor como é o resultado esperado de cada uma: prazo, formato e nível de detalhe. Anote e use como referência antes de entregar.",
        "sinal": "Menos idas e voltas para ajuste nas quatro semanas seguintes."
       },
       {
        "titulo": "Proteja um bloco de tempo por dia",
        "como_fazer": "Reserve na agenda um bloco fixo, de uma a duas horas, para a entrega mais importante do dia, sem mensagens nem reuniões. Mantenha por duas semanas e observe o que muda.",
        "sinal": "As entregas principais saem no prazo sem depender de hora extra."
       }
      ]
     },
     "por_padrao": []
    },
    "visibilidade": {
     "nome": "Visibilidade",
     "linha_autoavaliacao": "O meu gestor e o gestor dele conhecem o que eu entrego.",
     "o_que_medimos": "Se o seu trabalho chega a quem distribui as oportunidades: se o seu gestor lembra de você quando surge uma chance de aparecer e se quem está acima dele sabe o que você entrega.",
     "como_funciona": [
      "Pense numa sexta-feira em que a diretoria pede a uma área alguém para apresentar um projeto na reunião do mês. O gestor tem cinco pessoas no time e uma hora para decidir. Ele não vai abrir a planilha de entregas de cada um. Vai pensar em quem lhe vem à cabeça primeiro, em quem ele confia para estar na frente de gente mais sênior e em quem já mostrou domínio daquele assunto.",
      "Essa escolha parece pequena, mas costuma se repetir. Quem apresenta uma vez fica na memória da diretoria, e na oportunidade seguinte o nome já vem pronto. Quem trabalhou bem no mesmo projeto, fora da conversa, segue com a entrega impecável e com menos gente sabendo dela.",
      "Do lado de cima, o mecanismo é parecido. O gestor do seu gestor e os pares dele formam opinião sobre as pessoas do time por pedaços: um comentário em reunião, um e-mail encaminhado, uma apresentação. Quando esses pedaços são raros, a imagem fica genérica, algo como \"uma pessoa boa do time de fulano\". Quando aparecem com frequência e trazem resultado, a imagem ganha nome e assunto.",
      "Visibilidade, aqui, quer dizer fazer o trabalho circular pelos caminhos certos, para que as pessoas que decidem conheçam o que ele gera. Quem faz isso bem raramente fala de si. Mostra o resultado, conta o que ele resolveu e dá crédito a quem participou."
     ],
     "por_que_pesa": "Quase toda oportunidade de crescimento passa por alguém que precisa lembrar de você na hora certa. Quando o seu trabalho é conhecido só por quem senta ao seu lado, a entrega sustenta a sua cadeira e pesa pouco nas escolhas sobre o próximo passo. A visibilidade é o que leva a sua entrega até essas escolhas.",
     "subcriterios": [
      {
       "id": "T1-V1",
       "nome": "o gestor lembra de você nas oportunidades",
       "le_de": "T1.2, com a prova T1.2p",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T1.2",
        "valores": {
         "2": 100,
         "3": 50,
         "1": 0
        },
        "prova": "T1.2p",
        "prova_rebaixa_para_50": [
         2
        ]
       }
      },
      {
       "id": "T1-V2",
       "nome": "quem está acima do gestor conhece o seu trabalho",
       "le_de": "T1.6",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T1.6",
        "valores": {
         "2": 100,
         "3": 50,
         "1": 0,
         "4": 0
        }
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram que o seu trabalho já circula: o seu gestor lembra de você quando surgem oportunidades, e quem está acima dele tem referências concretas do que você entrega. Isso é raro antes da primeira liderança. O passo seguinte é dar a essas pessoas assuntos novos para associar ao seu nome.",
      "em_construcao": "As suas respostas mostram um trabalho bem recebido, com oportunidades que às vezes chegam até você e às vezes vão para outras pessoas. Quem está acima do seu gestor conhece você, com menos detalhe do que você entrega. O próximo passo costuma estar em tornar essa lembrança menos dependente do acaso, levando o resultado a quem decide de forma regular.",
      "proximo_degrau": "As suas respostas mostram alguém focado em fazer bem o próprio trabalho, enquanto as oportunidades de aparecer ainda passam mais por outras pessoas. É um ponto de partida comum, com caminho claro. O primeiro movimento costuma ser com o seu gestor: dar a ele exemplos concretos do que você entrega, para que o seu nome tenha assunto quando surgir uma chance."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Leve um resultado seu a uma reunião acima",
        "como_fazer": "Na próxima entrega relevante, proponha ao seu gestor que você mesmo apresente o resultado, em cinco minutos, numa reunião em que o gestor dele esteja. Prepare três pontos: o que foi feito, o que mudou para a área e o próximo passo.",
        "sinal": "O gestor do seu gestor comenta o trabalho com você ou passa a pedir algo diretamente."
       },
       {
        "titulo": "Associe o seu nome a um assunto",
        "como_fazer": "Escolha um tema pelo qual você quer que lembrem de você nos próximos seis meses, ligado ao que a área precisa. Sempre que tiver algo relevante sobre ele, compartilhe com o seu gestor numa mensagem curta, com o efeito para a área.",
        "sinal": "Quando o tema aparece numa reunião, alguém lembra de você."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Combine uma atualização mensal com o seu gestor",
        "como_fazer": "Peça 15 minutos por mês para mostrar ao seu gestor, em três linhas, o que você entregou de mais relevante e o efeito disso. Termine com a pergunta: \"Alguma dessas valeria levar para cima?\".",
        "sinal": "O seu gestor passa a encaminhar ou citar o seu trabalho para o gestor dele."
       },
       {
        "titulo": "Ofereça-se para a próxima chance com um motivo",
        "como_fazer": "Quando surgir uma apresentação ou um projeto novo, diga ao seu gestor por que você é uma boa escolha naquele caso: o que você conhece do tema e o que já entregou de parecido.",
        "sinal": "Na chance seguinte, o seu gestor lembra de você antes de você se oferecer."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Dê ao seu gestor um exemplo pronto",
        "como_fazer": "Escolha a entrega dos últimos três meses de que você mais se orgulha. Escreva em poucas linhas o que foi feito e o que ela resolveu para a área, e leve para a próxima conversa individual com o seu gestor, pedindo a opinião dele.",
        "sinal": "O seu gestor usa esse exemplo numa conversa com outras pessoas."
       },
       {
        "titulo": "Peça para acompanhar uma reunião acima",
        "como_fazer": "Pergunte ao seu gestor se você pode acompanhá-lo numa reunião em que o seu trabalho seja tema, para apoiar com dados e contexto.",
        "sinal": "Pedem a sua contribuição com alguma informação durante a reunião."
       }
      ]
     },
     "por_padrao": [
      {
       "pergunta": "T1.6",
       "alternativas": [
        1
       ],
       "padrao": "pouco_contato",
       "paragrafo": "Quando o contato com quem está acima do seu gestor ainda é raro, o caminho mais natural passa pelo próprio gestor. É ele quem está nas reuniões em que o seu nome pode aparecer. Ajudá-lo a ter bons exemplos do seu trabalho, prontos para usar, costuma abrir a primeira porta, e o contato direto tende a vir depois, por convite.",
       "acao": {
        "titulo": "Prepare o seu gestor para falar de você",
        "como_fazer": "Antes da próxima reunião do seu gestor com o gestor dele, mande a ele duas linhas sobre uma entrega sua daquela semana e o efeito dela para a área.",
        "sinal": "Alguém acima do seu gestor menciona essa entrega com você ou com o time."
       }
      },
      {
       "pergunta": "T1.6",
       "alternativas": [
        4
       ],
       "padrao": "nao_sei",
       "paragrafo": "Não saber o que pensam de você lá em cima também é uma informação. Costuma significar que o retorno chega pouco até a sua mesa, o que é comum nessa fase. Vale construir uma forma de saber, porque sem essa leitura fica difícil escolher onde investir o seu esforço.",
       "acao": {
        "titulo": "Pergunte ao seu gestor como veem o seu trabalho",
        "como_fazer": "Na próxima conversa individual, pergunte: \"Quando o seu gestor ou os seus pares falam do time, o que você acha que eles sabem do meu trabalho?\". Ouça sem se defender e anote o que ouvir.",
        "sinal": "Você sai da conversa sabendo de uma coisa que já é conhecida lá em cima e de uma que ainda não é."
       }
      }
     ]
    },
    "influencia": {
     "nome": "Influência",
     "linha_autoavaliacao": "As minhas ideias são adotadas pelo time, e outras áreas me procuram direto.",
     "o_que_medimos": "Se você move as decisões do time sem ter um cargo que mande, e se outras áreas confiam no seu trabalho a ponto de procurar você direto.",
     "como_funciona": [
      "Pense numa reunião de terça-feira em que o time precisa decidir como resolver uma falha num processo. Três pessoas têm uma ideia. A primeira apresenta a dela ali, pela primeira vez, e passa os vinte minutos seguintes respondendo objeções. A segunda prefere ouvir e se oferece para executar o que for decidido. A terceira conversou na véspera com duas pessoas que seriam afetadas, ajustou a ideia com o que ouviu e chega com uma proposta que já carrega a contribuição delas.",
      "A ideia da terceira costuma passar, mesmo quando ela não é a melhor das três. As pessoas tendem a apoiar aquilo que ajudaram a construir. Quando uma proposta aparece pela primeira vez numa reunião, cada pessoa reage pensando no impacto para si. Quando ela chega já conversada, a reunião vira confirmação.",
      "Com outras áreas, o mecanismo é o mesmo, numa escala maior. Uma área que precisa de algo do seu trabalho pode ir pelo caminho formal, pelo seu gestor, ou procurar você direto. Ela procura direto quem já resolveu algo junto antes, quem entende o que ela precisa e quem responde de um jeito que facilita a vida dela. Cada pedido bem atendido vira uma relação, e cada relação vira alguém que fala do seu trabalho em lugares onde você não está."
     ],
     "por_que_pesa": "Liderar é conseguir que as coisas aconteçam por meio de outras pessoas. Antes do cargo, a única forma de fazer isso é pela influência: ideias que o time adota e áreas que confiam em você. É esse o sinal que muitas empresas procuram quando decidem quem está pronto para a primeira liderança, porque mostra que as pessoas já acompanham você sem que ninguém tenha mandado.",
     "subcriterios": [
      {
       "id": "T1-I1",
       "nome": "chega às decisões do time com a ideia já conversada",
       "le_de": "T1.3",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T1.3",
        "valores": {
         "1": 100,
         "3": 50,
         "2": 0
        }
       }
      },
      {
       "id": "T1-I2",
       "nome": "outras áreas procuram você direto",
       "le_de": "T1.4",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T1.4",
        "valores": {
         "3": 100,
         "2": 50,
         "1": 0
        }
       }
      },
      {
       "id": "T1-I3",
       "nome": "busca entender o que as outras áreas precisam",
       "le_de": "M1, frase 5 (a favor): \"Gosto de entender o que as outras áreas precisam de mim.\"",
       "regra": {
        "tipo": "mentalidade",
        "pergunta": "M1",
        "alternativa": 5,
        "marcada": 100,
        "nao_marcada": 0
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram alguém que já move decisões sem ter o cargo: você prepara as ideias antes da reunião, e outras áreas procuram você direto. Essa é a base da liderança. O passo seguinte é usar essas relações para conduzir algo maior do que as suas entregas.",
      "em_construcao": "As suas respostas mostram alguém que contribui com ideias e conversa bem com outras áreas, com decisões que às vezes vão para o seu lado e pedidos que ainda chegam muito pelo seu gestor. O próximo passo costuma estar no que acontece antes da reunião: conversar com quem será afetado e chegar com a ideia já ajustada.",
      "proximo_degrau": "As suas respostas mostram alguém que contribui muito na execução e cujo trabalho ainda é mais voltado para dentro do time. É uma base boa, porque quem executa bem conhece os problemas de perto. O primeiro movimento costuma ser levar uma ideia sua, pequena e bem pensada, para uma decisão do time, e abrir uma conversa com uma área que depende do seu trabalho."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Mapeie quem ganha com a sua próxima ideia",
        "como_fazer": "Antes de propor a próxima mudança, liste as pessoas e as áreas afetadas e o que cada uma ganha ou perde com ela. Converse com as duas mais importantes antes da reunião e ajuste a ideia com o que ouvir.",
        "sinal": "Na reunião, alguém além de você defende a proposta."
       },
       {
        "titulo": "Transforme uma boa relação em melhoria",
        "como_fazer": "Escolha a área com quem você tem a melhor relação e pergunte: \"O que mais atrapalha vocês no que depende do nosso time?\". A partir da resposta, proponha ao seu gestor uma melhoria pequena, que você mesmo conduziria.",
        "sinal": "A outra área comenta a melhoria com o seu gestor ou com outras pessoas."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Converse antes da próxima decisão",
        "como_fazer": "Na próxima vez que tiver uma ideia para uma decisão do time, mostre a uma ou duas pessoas na véspera e pergunte: \"O que você mudaria aqui?\". Leve a versão ajustada, citando a contribuição delas.",
        "sinal": "A ideia passa com menos objeção do que de costume."
       },
       {
        "titulo": "Abra um canal direto com uma área",
        "como_fazer": "Escolha uma área que recebe o seu trabalho com frequência. Combine com o seu gestor e marque 20 minutos com alguém de lá para entender o que eles mais precisam de você e como preferem receber.",
        "sinal": "Nas semanas seguintes, essa pessoa procura você direto."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Leve uma ideia pequena para o time",
        "como_fazer": "Escolha um problema do dia a dia que você conhece bem pela execução. Escreva uma proposta curta de solução, mostre ao seu gestor antes e leve para a próxima reunião do time.",
        "sinal": "A ideia entra na discussão, mesmo que ajustada."
       },
       {
        "titulo": "Entenda quem recebe o seu trabalho",
        "como_fazer": "Descubra para quais áreas vai o que você produz. Pergunte ao seu gestor se pode conversar com alguém de uma delas para entender como o seu trabalho é usado lá.",
        "sinal": "Você ajusta alguma entrega pelo que ouviu, e a outra área percebe a diferença."
       }
      ]
     },
     "por_padrao": []
    },
    "proximo_nivel": {
     "nome": "Próximo nível",
     "linha_autoavaliacao": "Já conduzo algo além das minhas entregas, e o resultado chega a quem está acima do meu gestor.",
     "o_que_medimos": "Se você já ocupa um espaço de liderança sem ter o cargo, conduzindo uma frente além das suas entregas, e se o resultado dela chega a quem decide sobre a próxima cadeira.",
     "como_funciona": [
      "Pense no momento em que abre a primeira vaga de liderança num time. O gestor e o gestor dele precisam apostar em alguém que nunca liderou formalmente. Para reduzir o risco, olham para quem já fez algo parecido: quem integrou a pessoa nova e fez ela render rápido, quem conduziu o projeto de melhoria que envolveu três colegas, quem organizou o treinamento que o time pedia havia meses.",
      "Essas frentes funcionam como um ensaio da cadeira. Nelas você combina prazos com quem não responde a você, resolve impasses e presta contas de um resultado que é de um grupo. Quem decide a vaga consegue imaginar você no papel porque já viu uma versão dele.",
      "O detalhe que costuma passar despercebido é o caminho do resultado. Uma frente que melhora a rotina do time, conhecida só dentro dele, ajuda muito você a aprender. Quando o resultado chega a quem está acima do seu gestor, ela passa a contar também na hora da escolha."
     ],
     "por_que_pesa": "Na primeira liderança, a pergunta de quem decide é direta: essa pessoa vai dar conta de conduzir outras? Uma frente conduzida por você, com resultado conhecido, responde a essa pergunta com fatos. Quando esses fatos existem, escolher você parece a continuação natural do que você já faz.",
     "subcriterios": [
      {
       "id": "T1-P1",
       "nome": "conduz uma frente além das próprias entregas",
       "le_de": "T1.5, com a prova T1.5p",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T1.5",
        "valores": {
         "3": 100,
         "1": 50,
         "2": 0
        },
        "prova": "T1.5p",
        "prova_rebaixa_para_50": [
         1,
         3
        ]
       }
      },
      {
       "id": "T1-P2",
       "nome": "o resultado da frente chegou acima do gestor",
       "le_de": "prova T1.5p; sem prova (T1.5 diferente da alternativa 3) vale 0",
       "regra": {
        "tipo": "prova",
        "pergunta": "T1.5p",
        "valores": {
         "2": 100,
         "1": 50,
         "3": 0
        },
        "sem_prova": 0
       }
      },
      {
       "id": "T1-P3",
       "nome": "já trabalha como se estivesse no próximo cargo",
       "le_de": "M1, frase 6 (a favor): \"Já trabalho como se estivesse no próximo cargo.\"",
       "regra": {
        "tipo": "mentalidade",
        "pergunta": "M1",
        "alternativa": 6,
        "marcada": 100,
        "nao_marcada": 0
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram alguém que já ensaia a próxima cadeira: você conduz uma frente além das suas entregas, e o resultado dela chegou a quem está acima do seu gestor. Quando a primeira vaga de liderança abrir, você terá fatos para mostrar. O passo seguinte é ampliar o tamanho dessa frente ou o número de pessoas envolvidas nela.",
      "em_construcao": "As suas respostas mostram alguém que já conduziu ou conduz algo além das próprias entregas, com um resultado que ainda não chegou a quem decide. A experiência está sendo construída. O próximo passo costuma ser escolher uma frente atual e cuidar para que o resultado dela seja conhecido acima do seu gestor.",
      "proximo_degrau": "As suas respostas mostram que a oportunidade de conduzir algo além das suas entregas ainda não apareceu. Ela raramente aparece pronta. Em muitos times, quem conduz a primeira frente foi quem percebeu uma necessidade que ninguém estava cuidando e se ofereceu para assumir, com o apoio do gestor."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Amplie a frente que você conduz",
        "como_fazer": "Converse com o seu gestor sobre o próximo passo da frente que você conduz: envolver mais pessoas, outra área ou um problema maior. Leve uma proposta concreta, com o que muda e do que você precisaria.",
        "sinal": "A frente ganha escopo ou passa a envolver gente de fora do time."
       },
       {
        "titulo": "Conte o resultado com números",
        "como_fazer": "Monte um resumo de uma página sobre a frente: como era antes, o que mudou e quem participou, com pelo menos um número. Peça ao seu gestor para levá-lo ao gestor dele, ou para você mesmo apresentar.",
        "sinal": "Alguém acima do seu gestor cita a frente numa conversa."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Combine o resultado esperado da frente",
        "como_fazer": "Se você conduz algo hoje, combine com o seu gestor qual resultado essa frente deve gerar nos próximos três meses e como ele vai ser medido. Se conduziu antes, retome a experiência e proponha uma frente parecida.",
        "sinal": "Você e o seu gestor têm o mesmo número em mente para a frente."
       },
       {
        "titulo": "Leve o primeiro resultado para cima",
        "como_fazer": "Quando a frente gerar o primeiro resultado, peça ao seu gestor um espaço curto numa reunião com o gestor dele, ou um e-mail de atualização com você em cópia.",
        "sinal": "O gestor do seu gestor sabe que a frente existe e que é você quem conduz."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Encontre uma necessidade sem dono",
        "como_fazer": "Durante duas semanas, anote o que o time comenta e ninguém resolve: um processo confuso, a integração de quem chega, um material que falta. Escolha uma e leve ao seu gestor com uma proposta de como você cuidaria dela.",
        "sinal": "O seu gestor topa que você conduza, mesmo que em pequena escala."
       },
       {
        "titulo": "Ofereça-se para integrar a próxima pessoa nova",
        "como_fazer": "Diga ao seu gestor que gostaria de cuidar da integração da próxima pessoa que entrar no time, com um roteiro simples da primeira semana.",
        "sinal": "A pessoa nova procura você como referência nas primeiras semanas."
       }
      ]
     },
     "por_padrao": []
    }
   }
  },
  "T2": {
   "abertura_pilares": "",
   "pilares": {
    "entrega": {
     "nome": "Entrega",
     "fora_do_territorio_do_produto": true,
     "linha_autoavaliacao": "A minha equipe sabe o que precisa ser feito e rende bem mesmo quando eu não estou por perto.",
     "o_que_medimos": "Se a sua equipe entrega com constância por causa da forma como o trabalho é acompanhado, e se você trata quem não está rendendo com rapidez e com critério.",
     "como_funciona": [
      "Pense em duas supervisoras de equipes parecidas, na mesma operação. Numa segunda-feira de muito volume, as duas batem a meta. A diferença aparece no caminho. A primeira passou o dia circulando entre as mesas, tirando dúvida, redistribuindo tarefa e conferindo o que saía. A segunda abriu o dia com dez minutos de alinhamento, cada pessoa sabia a sua parte, e ela passou a maior parte do tempo cuidando de dois problemas que ninguém mais conseguiria resolver.",
      "O resultado do dia foi o mesmo, e o que ficou construído em cada equipe foi bem diferente. Na primeira, o nível depende da presença dela. Na segunda, depende de uma forma de trabalhar que roda sozinha, e isso libera a supervisora para pensar no que vem depois.",
      "A outra metade da entrega de quem supervisiona aparece quando alguém não está rendendo. Esperar o momento certo parece cuidado, e muitas vezes é. Ao mesmo tempo, a equipe costuma perceber a situação antes de qualquer conversa, e cada semana de espera pesa no clima. Quem trata bem esses casos age rápido e com critério: entende primeiro se a questão é de comportamento ou de conhecimento técnico, se foi pontual ou se já se repetiu, e escolhe a conversa a partir disso."
     ],
     "por_que_pesa": "Na supervisão, a sua entrega passa a ser a entrega da equipe. Enquanto o nível depende da sua presença, o seu tempo fica preso na operação, e sobra pouco para os outros pilares: mostrar a sua forma de liderar, mover pares e o seu gestor, preparar quem possa ficar no seu lugar. Uma equipe que roda com constância é o que abre espaço para todo o resto.",
     "subcriterios": [
      {
       "id": "T2-E1",
       "nome": "o acompanhamento roda mesmo sem você",
       "le_de": "T2.2a",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.2a",
        "valores": {
         "2": 100,
         "3": 50,
         "1": 0
        }
       }
      },
      {
       "id": "T2-E2",
       "nome": "trata quem não está rendendo com rapidez e critério",
       "le_de": "T2.2b, com a prova T2.2bp",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.2b",
        "valores": {
         "3": 100,
         "1": 50,
         "2": 0
        },
        "prova": "T2.2bp",
        "prova_rebaixa_para_50": [
         3
        ]
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram uma equipe que sabe o que precisa ser feito, com um acompanhamento que roda mesmo quando você não está e casos difíceis tratados com rapidez e critério. Isso libera o seu tempo para o que vem depois. O passo seguinte é usar esse tempo para mostrar acima a forma como você lidera.",
      "em_construcao": "As suas respostas mostram uma equipe que entrega bem, com um acompanhamento que ainda pede a sua presença por perto ou com casos difíceis que esperam um pouco mais do que o ideal. É uma fase comum na supervisão. O próximo passo costuma estar em transformar o que você faz no dia a dia em combinados que a equipe segue sozinha.",
      "proximo_degrau": "As suas respostas mostram uma rotina corrida, em que o acompanhamento acontece conforme as demandas aparecem e o apoio a quem não está rendendo vem de perto, com muita dedicação. Antes de qualquer outro passo, vale criar uma base simples: cada pessoa sabendo o que precisa entregar na semana e um momento fixo para olhar isso junto."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Registre o jeito como a sua equipe funciona",
        "como_fazer": "Escreva em uma página os combinados que fazem a sua equipe render: os momentos de alinhamento, o que cada pessoa acompanha e como os problemas chegam até você. Mostre ao seu gestor como algo que pode servir de referência para outras equipes.",
        "sinal": "O seu gestor ou outro supervisor pede para usar o material."
       },
       {
        "titulo": "Use o tempo livre num problema maior",
        "como_fazer": "Escolha um problema que afeta a sua equipe, mas nasce fora dela, e dedique a ele as horas que a operação já não exige de você. Leve ao seu gestor uma proposta de solução.",
        "sinal": "O seu gestor leva a proposta adiante ou pede para você conduzir."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Tire uma conferência da sua mão",
        "como_fazer": "Escolha uma conferência que hoje só você faz. Combine com a equipe como cada pessoa vai acompanhar a própria parte e em que momento vocês olham isso juntos. Mantenha por duas semanas e veja o que se sustenta sem você.",
        "sinal": "A entrega se mantém nos dias em que você está em outra atividade."
       },
       {
        "titulo": "Marque a conversa que está esperando",
        "como_fazer": "Se há alguém que não está rendendo e a conversa está esperando o momento certo, marque para esta semana. Leve um fato concreto, pergunte a visão da pessoa e combine um próximo passo com data.",
        "sinal": "Em duas semanas, há uma mudança visível ou um novo combinado claro."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Comece a semana com um combinado",
        "como_fazer": "Toda segunda-feira, reserve 15 minutos com a equipe para dizer o que precisa sair na semana e quem cuida de quê. Na sexta, cinco minutos para olhar o que saiu.",
        "sinal": "Menos dúvidas chegando até você ao longo da semana."
       },
       {
        "titulo": "Entenda antes de apoiar",
        "como_fazer": "Antes de colocar alguém para treinar uma pessoa que não está rendendo, converse com ela e entenda se a questão é de conhecimento técnico ou de outra natureza, e se é a primeira vez que acontece.",
        "sinal": "O apoio escolhido resolve na primeira tentativa."
       }
      ]
     },
     "por_padrao": []
    },
    "visibilidade": {
     "nome": "Visibilidade",
     "linha_autoavaliacao": "A minha gerência e quem está acima dela enxergam a minha forma de liderar, além do resultado da equipe.",
     "o_que_medimos": "Se quem está acima de você enxerga o resultado da equipe como fruto da sua liderança, e se o seu nome aparece quando o gestor do seu gestor e os pares dele falam de resultado.",
     "como_funciona": [
      "Pense numa reunião de resultados do trimestre. O gerente mostra que a equipe de uma supervisora reduziu o tempo de atendimento em 20%. Alguém pergunta o que aconteceu, e ele responde: \"Ela tem uma equipe muito boa\". A frase é elogiosa, e todo mundo segue para o próximo slide. A diretoria guarda que aquela equipe é boa. A forma como a supervisora reorganizou a rotina, preparou duas pessoas novas e mudou a ordem do atendimento fica fora da sala.",
      "Agora imagine a mesma reunião com outra resposta: \"Ela mudou a forma de distribuir os casos e treinou a equipe nisso em três semanas\". Em uma frase, o resultado ganha uma autora e um jeito de fazer. Quem estava na sala passa a associar aquela supervisora a uma forma de liderar, e é esse tipo de associação que pesa quando se discute quem pode assumir algo maior.",
      "O gerente quase nunca escolhe uma resposta ou outra por intenção. Ele conta o que sabe. Se acompanhou só o número, conta o número. Se viu o caminho, porque a supervisora mostrou, conta o caminho. A visibilidade da sua liderança depende, em boa parte, do que você leva até o seu gestor além do resultado."
     ],
     "por_que_pesa": "Na supervisão, o resultado da equipe é visto por todos, e o crédito tende a ir para a equipe ou para o contexto. É natural, e em parte justo. A próxima cadeira, porém, é decidida olhando para a pessoa que lidera. Quando quem está acima conhece a sua forma de conduzir, o seu nome entra na conversa sobre o próximo passo com algo concreto para sustentá-lo.",
     "subcriterios": [
      {
       "id": "T2-V1",
       "nome": "a gerência credita o resultado à sua liderança",
       "le_de": "T2.3, com a prova T2.3p",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.3",
        "valores": {
         "1": 100,
         "3": 50,
         "2": 0
        },
        "prova": "T2.3p",
        "prova_rebaixa_para_50": [
         1
        ]
       }
      },
      {
       "id": "T2-V2",
       "nome": "quem está acima do gestor conhece a sua forma de liderar",
       "le_de": "T2.7",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.7",
        "valores": {
         "3": 100,
         "1": 50,
         "2": 0,
         "4": 0
        }
       }
      },
      {
       "id": "T2-V3",
       "nome": "quer que a gerência veja como você lidera",
       "le_de": "M2, frase 6 (a favor): \"Quero que a gerência veja como eu lidero, não só o número.\"",
       "regra": {
        "tipo": "mentalidade",
        "pergunta": "M2",
        "alternativa": 6,
        "marcada": 100,
        "nao_marcada": 0
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram que a sua gerência enxerga o resultado da equipe como fruto da sua forma de liderar, e que quem está acima dela tem referências do seu trabalho. Isso dá ao seu nome um assunto concreto. O passo seguinte é levar essa forma de liderar para além da sua equipe.",
      "em_construcao": "As suas respostas mostram uma equipe com bons resultados conhecidos, com dúvida sobre o quanto disso é creditado à sua liderança. É um ponto em que muitos supervisores bons ficam por bastante tempo. O próximo passo costuma estar em mostrar ao seu gestor o caminho por trás do número, para que ele possa contar essa história quando você não estiver na sala.",
      "proximo_degrau": "As suas respostas mostram uma liderança que dá o crédito à equipe e ainda tem pouco contato com quem está acima do seu gestor. Dar crédito à equipe é uma qualidade e merece ser mantido. O primeiro movimento costuma ser simples: contar ao seu gestor, com exemplos, o que você fez para a equipe chegar àquele resultado."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Apresente o caminho junto com o número",
        "como_fazer": "Na próxima reunião de resultados em que a sua equipe apareça, proponha ao seu gestor que você mesmo apresente, em cinco minutos, o que mudou na forma de trabalhar e o efeito disso.",
        "sinal": "Alguém acima do seu gestor pergunta sobre a sua forma de conduzir a equipe."
       },
       {
        "titulo": "Ofereça uma prática sua a outra equipe",
        "como_fazer": "Escolha uma prática da sua equipe que deu certo e ofereça ao seu gestor apresentá-la a outros supervisores.",
        "sinal": "Outra equipe adota a prática e cita você como origem."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Conte o caminho por trás do resultado",
        "como_fazer": "Na próxima conversa individual com o seu gestor, leve um resultado recente da equipe e conte em três frases o que você fez para ele acontecer: a decisão que tomou, o que mudou na rotina e quem você preparou.",
        "sinal": "O seu gestor repete essa explicação numa reunião com outras pessoas."
       },
       {
        "titulo": "Peça um retorno sobre a sua liderança",
        "como_fazer": "Pergunte ao seu gestor: \"Além do número, o que você enxerga da forma como eu conduzo a equipe? O que eu poderia mostrar melhor?\".",
        "sinal": "Você sai da conversa com um ponto concreto, e o seu gestor passa a observar esse ponto."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Faça um registro mensal da sua liderança",
        "como_fazer": "Ao fim de cada mês, anote uma decisão sua que mudou algo na equipe e o efeito dela. Leve esse registro para a conversa com o seu gestor.",
        "sinal": "O seu gestor passa a citar algo que você fez, além do que a equipe fez."
       },
       {
        "titulo": "Crie um primeiro contato acima",
        "como_fazer": "Pergunte ao seu gestor se você pode acompanhá-lo numa reunião em que o resultado da equipe seja tema, para apoiar com o contexto da operação.",
        "sinal": "Alguém acima do seu gestor passa a reconhecer você pelo nome."
       }
      ]
     },
     "por_padrao": [
      {
       "pergunta": "T2.7",
       "alternativas": [
        2
       ],
       "padrao": "pouco_contato",
       "paragrafo": "Quando o contato com quem está acima do seu gestor ainda é raro, o caminho mais natural passa pelo próprio gestor. É ele quem está nas reuniões em que a sua equipe aparece. Ajudá-lo a contar o que está por trás dos números costuma abrir a primeira porta, e o contato direto tende a vir depois, por convite.",
       "acao": {
        "titulo": "Prepare o seu gestor para falar da sua liderança",
        "como_fazer": "Antes da próxima reunião de resultados do seu gestor, mande a ele duas linhas sobre uma decisão sua que ajudou a equipe naquele período e o efeito dela.",
        "sinal": "Alguém acima do seu gestor menciona essa decisão com você ou com a equipe."
       }
      },
      {
       "pergunta": "T2.7",
       "alternativas": [
        4
       ],
       "padrao": "nao_sei",
       "paragrafo": "Não saber o que pensam de você lá em cima também é uma informação. Costuma significar que o retorno chega pouco até a supervisão, o que é comum. Vale construir uma forma de saber, porque sem essa leitura fica difícil escolher o que mostrar e para quem.",
       "acao": {
        "titulo": "Pergunte ao seu gestor como veem a sua liderança",
        "como_fazer": "Na próxima conversa individual, pergunte: \"Quando o seu gestor ou os seus pares falam da minha equipe, o que você acha que eles sabem da minha forma de liderar?\". Ouça sem se defender e anote o que ouvir.",
        "sinal": "Você sai da conversa sabendo de uma coisa que já é conhecida lá em cima e de uma que ainda não é."
       }
      }
     ]
    },
    "influencia": {
     "nome": "Influência",
     "linha_autoavaliacao": "Consigo mover outros supervisores, áreas vizinhas e o meu gestor nas decisões que afetam a minha equipe.",
     "o_que_medimos": "Se as mudanças que você propõe para além da sua equipe acontecem de fato, e se o seu gestor consulta você antes de decidir o que afeta a equipe.",
     "como_funciona": [
      "Pense numa reunião de supervisores em que você propõe mudar o horário da passagem de turno, porque a sua equipe perde meia hora todo dia esperando informação. Todo mundo concorda. Duas semanas depois, metade das equipes voltou ao horário antigo, sem aviso. Concordar na reunião custava pouco. Mudar a rotina da própria equipe custava bastante, e cada supervisor pesou isso sozinho, depois.",
      "Quem consegue que mudanças assim aconteçam costuma fazer o trabalho antes. Conversa com cada supervisor envolvido, pergunta o que a mudança complica para a equipe dele e ajusta a proposta com o que ouviu. Quando a reunião acontece, cada um já viu o próprio problema resolvido na ideia, e a concordância vira compromisso.",
      "Com o seu gestor, o raciocínio é parecido. Ele consulta antes de decidir quem já trouxe propostas que funcionaram, quem chega com a solução junto com o problema e quem enxerga o efeito da decisão além da própria equipe. Cada proposta bem pensada aumenta a chance de chamarem você na próxima, e com o tempo as decisões que afetam a sua equipe passam a ter a sua contribuição."
     ],
     "por_que_pesa": "Na supervisão, boa parte do que trava a sua equipe nasce fora dela: num processo de outra área, numa regra que veio de cima, num combinado entre equipes. Quem age só dentro da própria equipe fica limitado ao tamanho dela. A influência sobre pares e sobre o gestor é o que amplia o alcance do seu trabalho, e é o que mais se parece com o dia a dia da próxima cadeira.",
     "subcriterios": [
      {
       "id": "T2-I1",
       "nome": "mudanças com pares e áreas vizinhas acontecem de fato",
       "le_de": "T2.5",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.5",
        "valores": {
         "3": 100,
         "2": 50,
         "1": 0
        }
       }
      },
      {
       "id": "T2-I2",
       "nome": "o gestor consulta você antes de decidir",
       "le_de": "T2.6",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.6",
        "valores": {
         "1": 100,
         "3": 50,
         "2": 0
        }
       }
      },
      {
       "id": "T2-I3",
       "nome": "leva para cima a solução junto com o problema",
       "le_de": "M2, frase 5 (a favor): \"Levo para cima a solução, não só o problema.\"",
       "regra": {
        "tipo": "mentalidade",
        "pergunta": "M2",
        "alternativa": 5,
        "marcada": 100,
        "nao_marcada": 0
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram alguém cujas propostas acontecem fora da própria equipe e que o gestor consulta antes de decidir. Isso é o que mais se parece com o dia a dia da próxima cadeira. O passo seguinte é usar essa influência num tema que vá além da sua operação.",
      "em_construcao": "As suas respostas mostram alguém ouvido pelos pares e pelo gestor, com propostas que às vezes perdem força depois da reunião ou que só algumas vezes viram decisão. O próximo passo costuma estar no trabalho antes da reunião: entender o que a mudança custa para cada pessoa envolvida e trazer isso para dentro da proposta.",
      "proximo_degrau": "As suas respostas mostram alguém dedicado à própria equipe, que cuida bem do que é seu e recebe as decisões prontas para fazer acontecer. Fazer acontecer bem é o que dá credibilidade para o próximo passo. O primeiro movimento costuma ser levar ao seu gestor uma proposta pequena, já com solução, sobre algo que afeta a sua equipe."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Conduza uma mudança entre equipes",
        "como_fazer": "Escolha um problema que afeta mais de uma equipe. Converse com cada supervisor envolvido, monte a proposta com o que ouvir e ofereça ao seu gestor conduzir a implantação.",
        "sinal": "Um mês depois, a mudança segue de pé em todas as equipes."
       },
       {
        "titulo": "Antecipe uma decisão do seu gestor",
        "como_fazer": "Pergunte ao seu gestor quais decisões do próximo trimestre vão afetar a sua equipe. Escolha uma e leve uma proposta antes de ele pedir.",
        "sinal": "A sua proposta entra na decisão final."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Converse com cada envolvido antes da reunião",
        "como_fazer": "Antes de propor a próxima mudança a outros supervisores, converse com cada um em separado: \"O que isso complica para a sua equipe?\". Ajuste a proposta com o que ouvir.",
        "sinal": "Duas semanas depois da reunião, a mudança segue de pé."
       },
       {
        "titulo": "Leve a solução junto com o problema",
        "como_fazer": "Na próxima vez que levar um problema ao seu gestor, chegue com duas opções de solução e a sua recomendação.",
        "sinal": "O seu gestor decide na própria conversa, e com frequência pela sua recomendação."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Faça uma proposta pequena ao seu gestor",
        "como_fazer": "Escolha algo que vem de cima e dificulta o trabalho da sua equipe. Escreva em poucas linhas o efeito e uma solução possível, e leve ao seu gestor.",
        "sinal": "O seu gestor considera a proposta ou explica o que pesa na decisão."
       },
       {
        "titulo": "Conheça um par por semana",
        "como_fazer": "Durante um mês, tome um café por semana com outro supervisor ou com alguém de uma área vizinha. Pergunte o que mais trava o trabalho dele e o que depende da sua equipe.",
        "sinal": "Pelo menos um deles procura você para resolver algo junto."
       }
      ]
     },
     "por_padrao": []
    },
    "proximo_nivel": {
     "nome": "Próximo nível",
     "linha_autoavaliacao": "Tenho alguém preparado para ficar no meu lugar, e as pessoas da minha equipe crescem comigo.",
     "o_que_medimos": "Se a sua equipe seguiria bem sem você por um mês porque você preparou alguém para isso, e se você enxerga o seu resultado no que a equipe faz sem você.",
     "como_funciona": [
      "Pense numa coordenação que abre de repente na sua área. O gerente tem dois supervisores bons em mente. O primeiro tem a equipe com o melhor número, e quase tudo passa por ele. O segundo tem um número parecido e alguém na equipe pronto para assumir no dia seguinte. A pergunta que o gerente faz para si mesmo é: \"Se eu promover o primeiro, quem segura a equipe dele?\".",
      "Muitas vezes a escolha vai para o segundo. Promover o primeiro abre um buraco na operação, e promover o segundo resolve duas coisas de uma vez. É uma das situações mais comuns na supervisão: o supervisor que parece indispensável costuma ser também o mais difícil de mover.",
      "Preparar alguém leva meses. Começa por dividir decisões, deixar a pessoa conduzir uma reunião, explicar o porquê das suas escolhas e ajustar junto com ela, sem assumir no lugar. Quem faz isso acaba com uma equipe que cresce, e as responsabilidades novas e as promoções das pessoas da equipe viram a prova mais clara de que você sabe formar gente."
     ],
     "por_que_pesa": "A coordenação pede alguém que lidere por meio de outros líderes. A evidência mais forte de que você tem condições para isso é já ter formado alguém capaz de liderar no seu lugar. Esse pilar também protege o seu tempo, porque cada decisão que outra pessoa da equipe assume é uma hora que você ganha para pensar no próximo passo.",
     "subcriterios": [
      {
       "id": "T2-P1",
       "nome": "a equipe segue bem sem você, com alguém preparado",
       "le_de": "T2.4, com a prova T2.4p",
       "regra": {
        "tipo": "pergunta",
        "pergunta": "T2.4",
        "valores": {
         "2": 100,
         "1": 50,
         "3": 0
        },
        "prova": "T2.4p",
        "prova_rebaixa_para_50": [
         2
        ]
       }
      },
      {
       "id": "T2-P2",
       "nome": "vê o seu resultado no que a equipe faz sem você",
       "le_de": "M2, frase 4 (a favor): \"O meu melhor resultado é o que a minha equipe faz mesmo sem mim.\"",
       "regra": {
        "tipo": "mentalidade",
        "pergunta": "M2",
        "alternativa": 4,
        "marcada": 100,
        "nao_marcada": 0
       }
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram uma equipe que seguiria bem sem você por um mês, com alguém que você preparou para isso. Essa é a evidência mais forte de que você está pronto para liderar outros líderes. O passo seguinte é tornar isso conhecido por quem decide a próxima cadeira.",
      "em_construcao": "As suas respostas mostram uma equipe que seguiria bem sem você, com algumas decisões esperando a sua volta. Falta pouco. O próximo passo costuma estar em escolher quem pode assumir essas decisões e começar a passá-las para essa pessoa, uma de cada vez.",
      "proximo_degrau": "As suas respostas mostram uma equipe em que muita coisa ainda passa por você, sinal de alguém muito presente e comprometido. É também o que hoje mais ocupa o seu tempo. O primeiro movimento costuma ser identificar uma pessoa em condições de assumir mais e começar a dividir com ela uma parte das suas decisões."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Dê palco a quem você preparou",
        "como_fazer": "Proponha ao seu gestor que a pessoa que você preparou conduza uma reunião ou apresente um resultado da equipe, com você presente.",
        "sinal": "O seu gestor comenta a evolução da pessoa e liga isso ao seu trabalho."
       },
       {
        "titulo": "Prepare uma segunda pessoa",
        "como_fazer": "Escolha outra pessoa da equipe em condições de assumir mais e repita o caminho: uma decisão de cada vez, sempre com a conversa sobre o porquê.",
        "sinal": "Em três meses, duas pessoas conseguem segurar a operação."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Liste as decisões que esperam por você",
        "como_fazer": "Durante uma semana, anote cada decisão que a equipe deixou para você. Escolha duas que outra pessoa poderia tomar e combine com ela como ela passa a decidir.",
        "sinal": "Na semana seguinte, essas decisões saem sem você."
       },
       {
        "titulo": "Explique o porquê das suas escolhas",
        "como_fazer": "Nas próximas decisões difíceis, chame a pessoa que você quer preparar e explique em voz alta como você pensou antes de decidir.",
        "sinal": "A pessoa começa a trazer propostas antes de perguntar o que fazer."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Escolha quem vai crescer com você",
        "como_fazer": "Identifique na equipe a pessoa com mais condições de assumir mais. Converse com ela sobre isso e combine uma primeira responsabilidade nova.",
        "sinal": "Em um mês, ela resolve sozinha algo que antes vinha para você."
       },
       {
        "titulo": "Teste uma manhã longe da operação",
        "como_fazer": "Marque uma manhã sem atender a equipe, avisando antes quem decide o quê. Anote tudo o que chegou até você mesmo assim.",
        "sinal": "A lista do que chegou mostra o que precisa ser passado primeiro."
       }
      ]
     },
     "por_padrao": []
    }
   }
  },
  "T3": {
   "abertura_pilares": "O diagnóstico olhou quatro coisas, nesta ordem: se o seu trabalho está ligado ao que a empresa quer alcançar (Entrega), se isso chega a quem decide (Visibilidade), se você move pessoas que não respondem a você (Influência) e se o seu nome circula nas salas onde a próxima cadeira é decidida (Próximo nível). A ordem importa porque cada uma apoia a seguinte.",
   "pilares": {
    "entrega": {
     "nome": "Entrega",
     "linha_autoavaliacao": "O meu trabalho está ligado ao que a empresa quer alcançar.",
     "o_que_medimos": "Se o seu trabalho está ligado ao que a empresa quer alcançar: se você sabe qual objetivo cada frente sua empurra, se consegue contar isso na língua de quem decide e se a operação anda sem depender de você no dia a dia.",
     "como_funciona": [
      "Toda empresa fecha o planejamento do ano com poucos objetivos. Três, quatro, às vezes cinco. Ao longo dos meses, quase toda decisão relevante passa por eles: qual projeto recebe orçamento, qual área ganha gente. Em reunião de diretoria, a pergunta que ninguém faz em voz alta é \"isso move qual dos nossos objetivos?\". A área que responde a essa pergunta com clareza passa a ser lembrada quando o assunto é crescer. A área que responde com volume de entregas, por mais impecáveis que sejam, tende a ser lembrada quando o assunto é manter a casa funcionando.",
      "Repare numa situação que acontece em quase toda empresa no meio do ano. Chega um corte de orçamento e cada liderança precisa dizer o que segura e o que solta. Quem já sabe qual objetivo cada frente empurra decide em uma tarde e defende a escolha com tranquilidade. Quem organiza o trabalho pela lista de demandas passa a semana tentando salvar tudo, e a decisão acaba sendo tomada por outra pessoa.",
      "Essa leitura tem uma condição para acontecer: tempo. Pense na semana em que você sai de férias. Se a operação segue o ritmo e as decisões do dia a dia são tomadas sem você, o seu tempo já está livre para as conversas que pedem a sua cadeira: com outras áreas, com quem decide, sobre o que vem pela frente. Se o telefone toca todo dia, a agenda fica com a operação, e a leitura dos objetivos fica para as sessões de planejamento, uma ou duas vezes por ano."
     ],
     "por_que_pesa": "Entrega é a base da escada. É ela que dá conteúdo ao que você vai mostrar, negociar e defender nos outros três pilares. Quando o trabalho já está ligado ao que a empresa quer alcançar, a sua presença nas conversas maiores tem assunto próprio, e até uma apresentação simples encontra o que sustentar.",
     "subcriterios": [
      {
       "id": "entrega_area",
       "nome": "Liga o trabalho aos objetivos da área",
       "de_onde": "T3.2 · A=100, B=50, C=0"
      },
      {
       "id": "entrega_empresa",
       "nome": "Traduz para os objetivos da empresa",
       "de_onde": "T3.3 · A=100, B=50, C=0; se a T3.3 não apareceu porque a T3.2 não foi A, vale o valor da T3.2"
      },
      {
       "id": "entrega_operacao",
       "nome": "Operação que anda sem a pessoa",
       "de_onde": "T3.1c · A=100, B=50, C=0"
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram um trabalho ligado ao que a empresa quer alcançar. Você sabe qual objetivo cada frente empurra e consegue contar isso para quem decide. Esse traço tem nome: visão de negócio. Ele aparece cedo em quem vai para cadeiras maiores, porque boa parte do trabalho, daqui para cima, é decidir o que fica de fora em nome do que importa. O próximo passo é garantir que essa leitura chegue às pessoas certas, que é do que trata o pilar seguinte.",
      "em_construcao": "As suas respostas mostram uma boa parte do caminho feita. Você conhece os objetivos e enxerga a ligação com o seu trabalho em várias frentes. O que ainda pede atenção é tornar essa ligação clara em todas elas, a ponto de usá-la para decidir prioridades e de contá-la em uma frase quando alguém de cima perguntar. É um ajuste de leitura, e o trabalho que você já faz ganha outro peso quando chega acompanhado do objetivo que ele move.",
      "proximo_degrau": "As suas respostas mostram uma fase em que a demanda do dia a dia ocupa boa parte da agenda, e é natural que a conversa sobre os objetivos fique para os momentos de planejamento. Isso costuma acontecer em áreas que entregam muito, com pouca gente e muita mudança em volta. O primeiro passo é simples e tem efeito rápido: descobrir quais são os três ou quatro objetivos que a liderança acima de você está perseguindo este ano e olhar para as suas frentes a partir deles. Essa leitura muda o que você prioriza e a forma como o seu trabalho é contado."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Leve a sua leitura para uma decisão que ainda não chegou à mesa",
        "como_fazer": "Escolha um tema que vai ser decidido nos próximos meses, como orçamento, estrutura ou um projeto novo. Prepare, em uma página, qual objetivo da empresa ele move e o que você recomendaria. Leve para o seu gestor antes de o tema entrar em pauta.",
        "sinal": "O seu gestor leva a sua leitura para a reunião ou chama você para ela."
       },
       {
        "titulo": "Ensine a ligação para quem trabalha com você",
        "como_fazer": "Na próxima reunião com a equipe, abra cada frente pelo objetivo que ela move antes de entrar nos números. Peça que as pessoas façam o mesmo quando trouxerem um tema.",
        "sinal": "A equipe começa a priorizar sozinha pelos mesmos critérios que você usaria."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Faça o mapa das suas frentes",
        "como_fazer": "Liste as frentes que estão sob o seu escopo e, ao lado de cada uma, escreva qual objetivo da área e da empresa ela empurra. Onde a ligação não aparecer, pergunte ao seu gestor o que aquela frente sustenta.",
        "sinal": "Você consegue explicar cada frente em uma frase, começando pelo objetivo."
       },
       {
        "titulo": "Ensaie a resposta de um minuto",
        "como_fazer": "Prepare a resposta para a pergunta \"como a sua área ajuda a empresa a bater os objetivos do ano?\" em até um minuto, com um resultado concreto ligado a um objetivo. Use na próxima vez que alguém de cima puxar o assunto.",
        "sinal": "A pessoa faz uma pergunta sobre o objetivo, e a conversa segue por ali."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Descubra os objetivos do ano",
        "como_fazer": "Peça ao seu gestor 20 minutos com uma pergunta só: \"quais são os três objetivos que mais importam para a liderança acima de nós este ano?\". Anote com as palavras que ele usar.",
        "sinal": "Você sai da conversa com os objetivos escritos e com uma ideia do que mais preocupa quem está acima."
       },
       {
        "titulo": "Conecte a frente que mais ocupa a sua agenda",
        "como_fazer": "Escolha a frente que mais consome o seu tempo e escreva qual desses objetivos ela ajuda a mover. Na próxima reunião em que ela aparecer, abra por esse objetivo.",
        "sinal": "Alguém pergunta sobre o efeito no objetivo, além do andamento da tarefa."
       }
      ]
     }
    },
    "visibilidade": {
     "nome": "Visibilidade",
     "linha_autoavaliacao": "O que eu faço chega a quem decide.",
     "o_que_medimos": "Se o seu trabalho chega a quem decide: como você leva um resultado ou um problema para a liderança acima de você e por quais caminhos um bom resultado da sua área fica conhecido.",
     "como_funciona": [
      "Pense numa reunião de resultados numa terça de manhã. Quem decide tem oito assuntos na pauta, recebeu três relatórios na véspera e vai sair dali direto para outra reunião. Duas lideranças apresentam. A primeira mostra todo o racional, as premissas e os detalhes, com cuidado para não deixar ponta solta. A segunda começa pelo que aquela pessoa precisa decidir ou saber, e deixa o detalhe pronto para quando ele for pedido.",
      "As duas fizeram um bom trabalho. A diferença está no que fica na cabeça de quem ouviu. Três semanas depois, numa conversa sobre quem pode assumir um tema novo, quem decide lembra de uma ou duas frases daquela terça. Quase sempre são as frases que conversavam com a preocupação dela naquele momento. Por isso, a pergunta que vem antes de qualquer apresentação é sobre a audiência: quem vai ouvir, o quanto ela já sabe do tema e o que é relevante para ela.",
      "A outra metade da visibilidade acontece longe das apresentações. Um bom resultado costuma aparecer numa linha do relatório consolidado, junto com dezenas de outras. Quem decide raramente lê essa linha com atenção; lembra do que ouviu de alguém. Por isso importa saber por quais caminhos o resultado da sua área viaja: se ele chega só pelo indicador, se depende de uma pessoa para ser contado, ou se chega também pela voz de quem foi ajudado por ele."
     ],
     "por_que_pesa": "Visibilidade é o que transforma entrega em percepção. As decisões sobre quem assume um tema maior são tomadas por pessoas que veem uma parte pequena do seu trabalho, e elas decidem com o que chegou até elas. Quando o resultado chega bem contado, a sua entrega passa a trabalhar a seu favor também nas reuniões em que você não está.",
     "subcriterios": [
      {
       "id": "visibilidade_audiencia",
       "nome": "Adapta a apresentação a quem ouve",
       "de_onde": "T3.4 · A=100, B=50, C=0"
      },
      {
       "id": "visibilidade_caminho",
       "nome": "O resultado chega a quem decide",
       "de_onde": "T3.4b (pergunta nova) · A=100, B=50, C=0"
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram que você leva o trabalho para quem decide pensando em quem vai ouvir, e que o resultado da sua área encontra caminhos para chegar lá. Esse cuidado com a audiência é o que faz a sua entrega virar percepção. Daqui em diante, a mesma leitura que você usa para apresentar passa a servir para negociar com quem não responde a você, que é o pilar seguinte.",
      "em_construcao": "As suas respostas mostram uma apresentação cuidadosa e bem fundamentada, apoiada em fatos e num plano de ação. O que pede atenção é o ponto de partida: abrir pelo que a audiência precisa decidir ou saber, e deixar o detalhe pronto para quando for pedido. O mesmo vale para os caminhos do resultado. Quando ele chega só pelo relatório, ou só pela voz de uma pessoa, uma parte do que você entrega fica sem ser contada para quem decide.",
      "proximo_degrau": "As suas respostas mostram alguém que valoriza o rigor e prefere deixar o trabalho falar. É uma qualidade, e muita gente muito boa trabalha assim. Acontece que quem decide costuma ver uma fração pequena do que acontece na sua área, e decide com o que chega até ele. O primeiro passo é escolher um resultado recente e contá-lo para uma pessoa acima de você, começando pelo que ele muda para ela."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Monte a próxima apresentação pela pergunta de quem ouve",
        "como_fazer": "Antes da próxima reunião com a liderança acima de você, escreva no topo da primeira página a pergunta que aquela pessoa provavelmente tem sobre o tema. Construa a apresentação como resposta a ela.",
        "sinal": "A conversa vai direto para a decisão, e as perguntas de detalhe diminuem."
       },
       {
        "titulo": "Abra um caminho novo para o resultado",
        "como_fazer": "Escolha um resultado do último trimestre que ajudou outra área. Combine com a liderança dessa área de ela comentar o efeito numa reunião em que vocês dois estejam com quem decide.",
        "sinal": "Alguém acima de você menciona o resultado sem que você tenha trazido o assunto."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Abra pela conclusão",
        "como_fazer": "Na próxima apresentação, coloque três linhas no começo: o que aconteceu, o que isso significa para quem está ouvindo e o que você precisa da pessoa. O racional e as premissas ficam no anexo, prontos para quando forem pedidos.",
        "sinal": "Alguém pede o detalhe porque se interessou, e a reunião termina com uma decisão."
       },
       {
        "titulo": "Conte um resultado pela voz de quem foi ajudado",
        "como_fazer": "Escolha uma entrega recente que facilitou a vida de outra área. Mande para a liderança dessa área uma mensagem curta com o número e pergunte como aquilo impactou o lado dela.",
        "sinal": "A resposta traz uma frase que você pode citar quando falar do resultado, ou a própria pessoa passa a citá-lo."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Descubra quem precisa saber",
        "como_fazer": "Pegue o melhor resultado dos últimos três meses e responda por escrito: quem acima de você é impactado por ele e o que essa pessoa está tentando resolver agora.",
        "sinal": "Você tem duas ou três pessoas em mente e, ao lado de cada uma, o motivo pelo qual aquele resultado importa para ela."
       },
       {
        "titulo": "Conte em um minuto",
        "como_fazer": "Na próxima conversa com o seu gestor ou com alguém acima dele, conte esse resultado em até um minuto, começando pelo que ele muda para a área de quem está ouvindo.",
        "sinal": "A pessoa faz uma pergunta ou pede para você levar o tema a outra reunião."
       }
      ]
     }
    },
    "influencia": {
     "nome": "Influência",
     "linha_autoavaliacao": "Consigo mover pessoas que não respondem a mim.",
     "o_que_medimos": "Se você move pessoas que não respondem a você: como responde quando um par ou outra área pede algo muito difícil, se pensa em quem ganha e quem perde antes de propor algo grande e como enxerga a discordância.",
     "como_funciona": [
      "Pense numa cena comum. Um par de outra área chega numa terça e pede uma entrega para a sexta. Você sabe que não cabe. Ele também está sob pressão: provavelmente prometeu essa data ao diretor dele. Existem duas formas de responder. Na primeira, você mostra o que já está na sua mesa e explica por que a sexta não fecha. Na segunda, você pergunta de onde vem aquela data e o que acontece se uma parte sair depois, e volta com um caminho que resolve o problema dele sem atropelar o seu.",
      "As duas são honestas. A diferença está no que cada uma deixa na cabeça de quem pediu. A primeira deixa a imagem de uma área no limite da capacidade, e a decisão volta para o bom senso do outro. A segunda deixa a imagem de alguém que entendeu o problema dele e ajudou a resolver. Esse par vai falar da sua área em reuniões em que você não está, e vai contar a versão que viveu.",
      "O mesmo vale para propostas maiores. Imagine uma mudança de processo apresentada numa reunião com várias áreas. Todo mundo concorda na sala e, duas semanas depois, ela está parada. Quase sempre havia alguém que perdia uma etapa, um prazo ou um pedaço de controle com aquela mudança, e que não foi ouvido antes. Quem pensa em quem ganha e quem perde antes de propor chega à reunião com essas conversas feitas. E a discordância, quando aparece, vem no momento certo e de um jeito que soma credibilidade."
     ],
     "por_que_pesa": "Daqui para cima, boa parte do que você precisa entregar depende de pessoas que não respondem a você: pares, outras áreas, gente acima do seu gestor. A forma como você negocia com elas vira a reputação da sua área. E são essas mesmas pessoas que costumam ser ouvidas quando a próxima cadeira está em discussão.",
     "subcriterios": [
      {
       "id": "influencia_interesse",
       "nome": "Lê o interesse por trás do pedido",
       "de_onde": "T3.5 · A=100; qualquer C (justifica, cede, escala)=0"
      },
      {
       "id": "influencia_ganha_perde",
       "nome": "Pensa em quem ganha e quem perde antes de propor",
       "de_onde": "M3 · frase E \"Antes de propor algo grande, penso em quem ganha e quem perde com isso\" · marcada=100, não marcada=0"
      },
      {
       "id": "influencia_discorda",
       "nome": "Discorda com credibilidade",
       "de_onde": "M3 · frase E \"Discordar da maneira correta e na hora certa pode construir credibilidade\" · marcada=100, não marcada=0"
      }
     ],
     "regra_padrao": "Quando a T3.5 é uma das lacunas, use fallback e acoes_base de por_padrao[padrão] no lugar dos do nível. Os textos por nível abaixo valem só quando a T3.5 foi A (o nível então vem das duas frases da M3).",
     "fallback": {
      "firme": "As suas respostas mostram alguém que negocia pelo que está por trás do pedido, pensa em quem ganha e quem perde antes de propor e vê a discordância bem colocada como algo que soma. É o tipo de leitura que faz pares e outras áreas falarem bem de você em reuniões em que você não está. O pilar seguinte trata de transformar essa reputação em apoio nas salas onde a próxima cadeira é decidida.",
      "em_construcao": "As suas respostas mostram que, num pedido difícil, você busca entender o que está por trás dele e encontra um caminho sem desgastar a relação. É a base mais difícil de construir, e ela já está aí. O que ainda pede atenção vem antes da negociação: ouvir quem ganha e quem perde com uma proposta grande antes de levá-la para a sala, e usar a discordância, no momento certo, a favor da sua credibilidade.",
      "proximo_degrau": "As suas respostas mostram que, num pedido difícil, você procura entender o que está por trás dele, e isso já é muito. As frases que você escolheu falam pouco do que acontece antes de uma proposta grande e do papel da discordância. São os dois pontos em que a influência costuma crescer nesta fase: preparar as conversas com quem perde algo antes da reunião, e discordar no momento certo, de um jeito que some."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Prepare a próxima proposta grande com as conversas antes",
        "como_fazer": "Escolha a próxima proposta que envolve outras áreas. Antes de levá-la para a reunião, converse a sós com as duas pessoas que mais perdem com ela e pergunte o que precisaria estar no desenho para elas apoiarem.",
        "sinal": "Na reunião, essas pessoas defendem pontos da proposta, ou levantaram as objeções antes, a sós."
       },
       {
        "titulo": "Use uma discordância a favor da área",
        "como_fazer": "Na próxima decisão em que você discordar, leve a discordância primeiro para quem decide, a sós, com um dado e uma alternativa. Na reunião, apoie o caminho que sair dali.",
        "sinal": "Quem decide passa a pedir a sua opinião antes de fechar temas parecidos."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Ouça quem perde antes de propor",
        "como_fazer": "Antes da próxima proposta que mexe com outra área, marque 15 minutos com a pessoa que mais perde com ela. Pergunte o que a preocupa e ajuste o que for possível antes da reunião.",
        "sinal": "A proposta passa na reunião sem surpresa, ou a objeção aparece antes, a sós."
       },
       {
        "titulo": "Discorde com um caminho na mão",
        "como_fazer": "Da próxima vez que discordar de algo, traga junto uma alternativa concreta e o efeito dela no objetivo da área. Escolha o momento: antes da reunião, com quem decide.",
        "sinal": "A sua discordância vira parte da decisão, mesmo quando o caminho final é outro."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Faça o mapa de quem ganha e quem perde",
        "como_fazer": "Pegue uma mudança que você quer propor nos próximos meses. Numa folha, escreva quem ganha, quem perde algo (tempo, controle, uma etapa) e o que cada um precisaria para apoiar.",
        "sinal": "Você descobre pelo menos uma pessoa com quem precisa conversar antes de levar a proposta."
       },
       {
        "titulo": "Discorde com um caminho na mão",
        "como_fazer": "Da próxima vez que discordar de algo, traga junto uma alternativa concreta e o efeito dela no objetivo da área. Escolha o momento: antes da reunião, com quem decide.",
        "sinal": "A sua discordância vira parte da decisão, mesmo quando o caminho final é outro."
       }
      ]
     },
     "por_padrao": {
      "justifica": {
       "alternativa": "T3.5 · \"Explico por que aquele prazo tende a ser inviável, dou o contexto de tudo o que tenho no prato e conto com o bom senso da outra pessoa para ser mais flexível.\"",
       "fallback": "As suas respostas mostram uma forma de negociar transparente: diante de um pedido difícil, você explica por que o prazo tende a ser inviável, mostra tudo o que já está no prato e conta com o bom senso de quem pediu. Faz sentido, porque respeita a inteligência do outro. O que pede ajuste é o ponto de partida. Quando a conversa começa pela capacidade da sua área, a decisão volta para a outra pessoa, e o que fica na cabeça dela é a imagem de uma área no limite. Começar pelo problema dela, com perguntas, costuma mudar o rumo da conversa e a forma como a sua área é lembrada.",
       "acoes_base": [
        {
         "titulo": "Pergunte antes de explicar",
         "como_fazer": "Quando chegar o próximo pedido difícil, segure a explicação por alguns minutos e faça duas perguntas: \"De onde vem essa data?\" e \"O que acontece se uma parte sair depois?\". Escute com atenção. Em até um dia, volte com dois caminhos: a parte que resolve o compromisso da pessoa na data, ou a entrega inteira num prazo possível. Deixe a escolha com ela.",
         "sinal": "A conversa passa a girar em torno de qual caminho seguir, e a capacidade da sua área sai do centro dela."
        },
        {
         "titulo": "Leve o objetivo para a mesa",
         "como_fazer": "Na negociação seguinte, antes de falar do que está no seu prato, pergunte qual objetivo aquele pedido ajuda a mover. Proponha a ordem das entregas a partir dele.",
         "sinal": "A outra pessoa aceita mudar a data ou o escopo sem que você precise explicar a capacidade da sua área."
        }
       ]
      },
      "cede": {
       "alternativa": "T3.5 · \"Se for um stakeholder relevante, eu aceito do jeito que vier; não posso correr o risco de me queimar com alguém relevante.\"",
       "fallback": "As suas respostas mostram alguém que cuida das relações com quem é relevante, e isso tem valor: você não cria atrito à toa e as pessoas sabem que podem contar com você. O que pede atenção é o custo que fica escondido quando se aceita do jeito que vier. A agenda da sua área passa a ser definida por quem pede com mais força, a entrega aperta, e a relação que você queria proteger fica dependente de a resposta ser sempre sim. Quem é relevante costuma respeitar mais quem entende o pedido e volta com um caminho possível.",
       "acoes_base": [
        {
         "titulo": "Peça um dia antes de responder",
         "como_fazer": "No próximo pedido difícil de alguém relevante, agradeça, diga que quer entender bem para entregar do jeito certo e peça até o dia seguinte para responder. Nesse meio tempo, descubra de onde vem a data e o que é indispensável na entrega.",
         "sinal": "A pessoa aceita esperar a sua resposta, e você volta com uma proposta sua."
        },
        {
         "titulo": "Ofereça a parte que resolve",
         "como_fazer": "Ao responder, ofereça a parte da entrega que resolve o compromisso da pessoa na data pedida e um prazo possível para o resto. Fale pelo que ela ganha com isso.",
         "sinal": "O pedido segue com um escopo ou uma data diferente, e a relação continua boa."
        }
       ]
      },
      "escala": {
       "alternativa": "T3.5 · \"Aceito para não gerar atrito, mas levo para o meu gestor ponderar e decidirmos juntos o melhor caminho.\"",
       "fallback": "As suas respostas mostram alguém que evita atrito com pares e outras áreas e trabalha em parceria com o gestor nas decisões difíceis. É uma postura prudente, e o seu gestor provavelmente valoriza essa parceria. O que pede atenção é o efeito ao longo do tempo. Quando o pedido difícil sobe para o gestor, a negociação passa a acontecer entre ele e a outra área, e quem pediu aprende que, para resolver com a sua área, o caminho é falar com ele. Negociar direto, com o gestor informado, costuma fortalecer a sua cadeira e a dele.",
       "acoes_base": [
        {
         "titulo": "Negocie primeiro, leve ao gestor depois",
         "como_fazer": "No próximo pedido difícil, antes de levar ao seu gestor, pergunte à pessoa de onde vem a data e o que é indispensável. Monte uma proposta e só então leve ao gestor, já com a sua recomendação.",
         "sinal": "O seu gestor concorda com a proposta e pede que você mesmo(a) feche com a outra área."
        },
        {
         "titulo": "Combine com o gestor até onde você decide",
         "como_fazer": "Na próxima conversa individual, combine com o seu gestor que tipo de pedido você fecha direto com as outras áreas e quais ele quer acompanhar.",
         "sinal": "Na semana seguinte, pelo menos um pedido difícil é resolvido entre você e a outra área, sem subir."
        }
       ]
      }
     }
    },
    "proximo_nivel": {
     "nome": "Próximo nível",
     "linha_autoavaliacao": "O meu nome circula onde a próxima cadeira é decidida.",
     "o_que_medimos": "Se o seu nome circula nas salas onde a próxima cadeira é decidida: em que momento você entra nas decisões sensíveis da área e quem falaria a seu favor numa reunião em que você não está.",
     "como_funciona": [
      "Pense em como uma cadeira maior costuma ser decidida. Antes de qualquer anúncio, há uma reunião, um ou dois níveis acima de quem vai ocupar a vaga, em que se fala de estrutura, de orçamento e de nomes. Três ou quatro pessoas são cotadas. Nenhuma delas está na sala. O que se diz ali sobre cada uma vem do que as pessoas presentes viveram com ela: um projeto que andou, uma negociação que se resolveu, um problema que ela antecipou.",
      "Nessa reunião, o gestor de cada pessoa cotada é uma voz importante. Quando ele é a única, o nome depende do espaço que ele tem naquela sala naquele trimestre. Quando outras pessoas presentes também têm algo a dizer, de outras áreas e de níveis acima, o nome chega com mais de uma história a favor. Essa segunda e essa terceira voz são, muitas vezes, os pares e as áreas com quem a pessoa trabalha toda semana.",
      "Existe um sinal anterior de que um nome já circula por essas salas: o momento em que a pessoa fica sabendo das decisões sensíveis. Numa reestruturação, numa mudança de direção ou num comunicado importante, algumas lideranças ficam sabendo junto com todo mundo, outras ficam sabendo antes para preparar a equipe, e algumas participam da discussão e ajudam a desenhar como vai ser comunicado. Quem é chamado antes costuma ser quem já é visto como parte da decisão, e é desse grupo que costumam sair os nomes para a próxima cadeira."
     ],
     "por_que_pesa": "Próximo nível é o último degrau da escada e o que mais depende dos outros três. A próxima cadeira é decidida em conversas das quais você não participa, por pessoas que conhecem uma parte do seu trabalho. O que você entrega, o que chega a quem decide e a forma como você negocia viram, ali, as histórias que alguém conta sobre você.",
     "subcriterios": [
      {
       "id": "proximo_decisoes",
       "nome": "Participa das decisões sensíveis",
       "de_onde": "T3.6 · A=100, B=50, C=0"
      },
      {
       "id": "proximo_defensor",
       "nome": "Tem quem fale a favor",
       "de_onde": "T3.7 · A=100, qualquer B=50, D=0"
      },
      {
       "id": "proximo_prova",
       "nome": "Defesa comprovada acima do gestor",
       "de_onde": "Prova da T3.7 · confirma=100, não confirma=0; sem prova porque a T3.7 não foi A: D=0, B=50"
      }
     ],
     "regra_padrao": "Quando a T3.7 é B ou D, use fallback e acoes_base de por_padrao[padrão] no lugar dos do nível. T3.7 em A, com ou sem prova confirmada, usa o nível.",
     "fallback": {
      "firme": "As suas respostas mostram alguém que já participa das decisões sensíveis e tem quem fale a seu favor acima do seu gestor, com nome e exemplo. É a posição de quem já é visto como parte das conversas em que a próxima cadeira é decidida. Nessa fase, o trabalho passa a ser cuidar dessas relações com a mesma atenção que você dá aos resultados, e escolher bem as próximas frentes em que o seu nome aparece.",
      "em_construcao": "As suas respostas mostram uma presença que já vai além do seu escopo: em alguns momentos você entra antes nas decisões, e há pessoas que reconhecem o seu trabalho. O que pede atenção é a força desse apoio nas salas em que você não está. Ter quem fale a seu favor acima do seu gestor, com uma história concreta para contar, é o que costuma levar um nome da lista de cotados para a decisão.",
      "proximo_degrau": "As suas respostas mostram alguém com o foco no trabalho e na equipe, que cuida das pessoas quando uma mudança chega. É uma qualidade que as equipes reconhecem. O que pede atenção é a distância entre você e as conversas em que as decisões são tomadas. Quando a próxima cadeira for discutida, quem estiver na sala vai falar das pessoas que conhece. O primeiro passo é escolher uma ou duas pessoas acima do seu gestor e criar contato a partir de um tema de trabalho que importe para elas."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Cuide de quem já fala por você",
        "como_fazer": "Pense em quem defendeu o seu trabalho no último ano. Com cada uma dessas pessoas, marque uma conversa nos próximos 30 dias para contar o que mudou desde então e ouvir o que ela está tentando resolver.",
        "sinal": "Você sai de cada conversa sabendo em que pode ajudar, e a pessoa volta a falar de você por iniciativa dela."
       },
       {
        "titulo": "Ajude a desenhar a próxima decisão",
        "como_fazer": "Quando souber de uma mudança que vem pela frente, ofereça a quem decide uma leitura de como ela vai chegar às equipes e do que comunicar primeiro.",
        "sinal": "O convite para a discussão seguinte chega a você antes do comunicado."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Descubra quem estaria na sala",
        "como_fazer": "Pense na próxima cadeira que você gostaria de ocupar e responda por escrito: quem, acima do seu gestor, participaria dessa decisão e o que cada pessoa já viu do seu trabalho.",
        "sinal": "Você identifica uma ou duas pessoas que ainda não têm uma história sua para contar."
       },
       {
        "titulo": "Dê uma história para contar",
        "como_fazer": "Escolha uma dessas pessoas e um tema que importa para ela. Leve um dado, uma ideia ou uma ajuda concreta da sua área sobre esse tema, numa conversa curta.",
        "sinal": "A pessoa retoma o assunto com você ou cita o seu trabalho numa reunião."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Peça para entrar antes na próxima mudança",
        "como_fazer": "Na próxima mudança da área, peça ao seu gestor para participar da preparação do comunicado, oferecendo a sua leitura de como a equipe vai receber.",
        "sinal": "Você fica sabendo da mudança seguinte antes do comunicado oficial."
       },
       {
        "titulo": "Crie um contato acima do gestor",
        "como_fazer": "Com o conhecimento do seu gestor, escolha uma pessoa acima dele e proponha uma conversa de 20 minutos sobre um tema em que a sua área pode ajudar.",
        "sinal": "A conversa termina com um próximo passo combinado entre vocês."
       }
      ]
     },
     "por_padrao": {
      "sem_defensor_certo": {
       "alternativa": "T3.7 · B · \"Tenho boas relações com muita gente; acho que alguém defenderia o meu case.\"",
       "fallback": "As suas respostas mostram alguém bem relacionado, com boa circulação na empresa. É um ativo real, construído ao longo do tempo. O que pede atenção é a passagem de ter boas relações para ter quem fale por você numa sala específica. Quando a próxima cadeira é discutida, o apoio que pesa vem de alguém presente, com uma história concreta sobre o seu trabalho. Transformar algumas dessas boas relações em apoio desse tipo costuma pedir poucas conversas, bem escolhidas.",
       "acoes_base": [
        {
         "titulo": "Escolha três relações para aprofundar",
         "como_fazer": "Entre as pessoas com quem você se relaciona bem na empresa, escolha as três com mais chance de estar na sala quando a próxima cadeira for discutida. Para cada uma, escreva o que ela já viu do seu trabalho.",
         "sinal": "Você sabe, para cada uma, qual história ela contaria sobre você."
        },
        {
         "titulo": "Dê um motivo concreto para a conversa",
         "como_fazer": "Proponha a uma dessas pessoas uma conversa sobre um tema dela em que a sua área pode ajudar, e acompanhe o resultado até o fim.",
         "sinal": "A pessoa passa a procurar você para temas parecidos."
        }
       ]
      },
      "so_gestor": {
       "alternativa": "T3.7 · B · \"O meu gestor, com certeza.\"",
       "fallback": "As suas respostas mostram uma relação de confiança com o seu gestor, e isso pesa muito: ele é, quase sempre, a voz mais importante quando o seu nome é discutido. O que pede atenção é a dependência. A decisão sobre uma cadeira maior costuma acontecer um ou dois níveis acima dele, e, quando ele é a única voz a seu favor, o seu nome depende do espaço que ele tem ali naquele trimestre. Uma segunda e uma terceira voz, de outras áreas e de níveis acima, fortalecem você e também o argumento dele.",
       "acoes_base": [
        {
         "titulo": "Converse com o seu gestor sobre a próxima cadeira",
         "como_fazer": "Pergunte ao seu gestor quem, além dele, participa das decisões sobre a cadeira que você quer e o que essas pessoas precisariam ver do seu trabalho.",
         "sinal": "Você sai com uma ou duas pessoas em mente e uma ideia do que mostrar a cada uma."
        },
        {
         "titulo": "Crie a segunda voz",
         "como_fazer": "Escolha uma dessas pessoas e combine com o seu gestor uma forma de você apresentar a ela um resultado ou uma ideia, ao lado dele ou com o conhecimento dele.",
         "sinal": "Essa pessoa passa a citar o seu trabalho sem que o seu gestor esteja na conversa."
        }
       ]
      },
      "disputa_equilibrada": {
       "alternativa": "T3.7 · B · \"Com certeza o meu nome estaria bem cotado, mas outros pares também estariam; difícil dizer quem defenderia a mim ou a eles.\"",
       "fallback": "As suas respostas mostram alguém que conhece o próprio valor e lê o cenário com realismo: o seu nome estaria bem cotado, e o dos seus pares também. Essa leitura honesta é uma vantagem. Numa disputa equilibrada, o que costuma decidir é quem tem mais pessoas, na sala, com uma história concreta para contar. Essa diferença se constrói antes da reunião, com as áreas e as pessoas acima do seu gestor que ainda não têm uma história sua.",
       "acoes_base": [
        {
         "titulo": "Encontre o que diferencia o seu case",
         "como_fazer": "Escreva em três linhas o que você entrega que os pares cotados com você não entregam do mesmo jeito, pela ótica de quem decide.",
         "sinal": "Você consegue dizer, em uma frase, por que o seu nome seria a escolha natural para aquela cadeira."
        },
        {
         "titulo": "Leve essa diferença para quem decide",
         "como_fazer": "Escolha uma pessoa acima do seu gestor e uma ocasião de trabalho em que essa diferença apareça na prática, como um tema que você resolve ou uma leitura que você traz.",
         "sinal": "Essa pessoa passa a chamar você para temas em que a sua diferença aparece."
        }
       ]
      },
      "nao_sei": {
       "alternativa": "T3.7 · D · \"Honestamente, nunca pensei sobre isso; não sei dizer.\"",
       "fallback": "Você respondeu com honestidade que nunca tinha pensado em quem falaria a seu favor, e isso é muito comum entre quem tem o foco no trabalho e nos resultados. É uma pergunta que vale a pena começar a fazer. As decisões sobre a próxima cadeira são tomadas em reuniões em que você não está, por pessoas que conhecem uma parte do seu trabalho. Saber quem são essas pessoas e o que elas já viram de você é o primeiro passo para o seu nome chegar bem contado nessas conversas.",
       "acoes_base": [
        {
         "titulo": "Responda a pergunta por escrito",
         "como_fazer": "Numa folha, responda: se a próxima cadeira fosse discutida amanhã, quem estaria na sala? E o que cada pessoa sabe do seu trabalho?",
         "sinal": "Você chega a pelo menos duas pessoas e percebe onde ainda falta história."
        },
        {
         "titulo": "Pergunte ao seu gestor como funciona",
         "como_fazer": "Na próxima conversa individual, pergunte ao seu gestor como costumam ser decididas as cadeiras acima da sua e quem participa dessas decisões.",
         "sinal": "Você entende o caminho de uma decisão dessas e sabe quem precisa conhecer melhor o seu trabalho."
        }
       ]
      }
     }
    }
   }
  },
  "T4": {
   "abertura_pilares": "O diagnóstico olhou quatro coisas, nesta ordem: se o seu trabalho está ligado ao que a empresa quer alcançar (Entrega), se isso chega a quem decide (Visibilidade), se você move pessoas que não respondem a você (Influência) e se o seu nome circula nas salas onde a próxima cadeira é decidida (Próximo nível). A ordem importa porque cada uma apoia a seguinte.",
   "pilares": {
    "entrega": {
     "nome": "Entrega",
     "linha_autoavaliacao": "O meu trabalho está ligado ao que a empresa quer alcançar.",
     "o_que_medimos": "Se o seu trabalho está ligado ao que a empresa quer alcançar: se você sabe qual objetivo cada frente sua empurra, se consegue contar isso na língua de quem decide e se a operação anda sem depender de você no dia a dia.",
     "como_funciona": [
      "Toda empresa fecha o planejamento do ano com poucos objetivos. Três, quatro, às vezes cinco. Ao longo dos meses, quase toda decisão relevante passa por eles: qual projeto recebe orçamento, qual área ganha gente. Em reunião de diretoria, a pergunta que ninguém faz em voz alta é \"isso move qual dos nossos objetivos?\". A área que responde a essa pergunta com clareza passa a ser lembrada quando o assunto é crescer. A área que responde com volume de entregas, por mais impecáveis que sejam, tende a ser lembrada quando o assunto é manter a casa funcionando.",
      "Repare numa situação que acontece em quase toda empresa no meio do ano. Chega um corte de orçamento e cada liderança precisa dizer o que segura e o que solta. Quem já sabe qual objetivo cada frente empurra decide em uma tarde e defende a escolha com tranquilidade. Quem organiza o trabalho pela lista de demandas passa a semana tentando salvar tudo, e a decisão acaba sendo tomada por outra pessoa.",
      "Essa leitura tem uma condição para acontecer: tempo. Pense na semana em que você sai de férias. Se a operação segue o ritmo e as decisões do dia a dia são tomadas sem você, o seu tempo já está livre para as conversas que pedem a sua cadeira: com outras áreas, com quem decide, sobre o que vem pela frente. Se o telefone toca todo dia, a agenda fica com a operação, e a leitura dos objetivos fica para as sessões de planejamento, uma ou duas vezes por ano."
     ],
     "por_que_pesa": "Entrega é a base da escada. É ela que dá conteúdo ao que você vai mostrar, negociar e defender nos outros três pilares. Quando o trabalho já está ligado ao que a empresa quer alcançar, a sua presença nas conversas maiores tem assunto próprio, e até uma apresentação simples encontra o que sustentar.",
     "subcriterios": [
      {
       "id": "entrega_area",
       "nome": "Liga o trabalho aos objetivos da área",
       "de_onde": "T3.2 · A=100, B=50, C=0"
      },
      {
       "id": "entrega_empresa",
       "nome": "Traduz para os objetivos da empresa",
       "de_onde": "T3.3 · A=100, B=50, C=0; se a T3.3 não apareceu porque a T3.2 não foi A, vale o valor da T3.2"
      },
      {
       "id": "entrega_operacao",
       "nome": "Operação que anda sem a pessoa",
       "de_onde": "T3.1c · A=100, B=50, C=0"
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram um trabalho ligado ao que a empresa quer alcançar. Você sabe qual objetivo cada frente empurra e consegue contar isso para quem decide. Esse traço tem nome: visão de negócio. Ele aparece cedo em quem vai para cadeiras maiores, porque boa parte do trabalho, daqui para cima, é decidir o que fica de fora em nome do que importa. O próximo passo é garantir que essa leitura chegue às pessoas certas, que é do que trata o pilar seguinte.",
      "em_construcao": "As suas respostas mostram uma boa parte do caminho feita. Você conhece os objetivos e enxerga a ligação com o seu trabalho em várias frentes. O que ainda pede atenção é tornar essa ligação clara em todas elas, a ponto de usá-la para decidir prioridades e de contá-la em uma frase quando alguém de cima perguntar. É um ajuste de leitura, e o trabalho que você já faz ganha outro peso quando chega acompanhado do objetivo que ele move.",
      "proximo_degrau": "As suas respostas mostram uma fase em que a demanda do dia a dia ocupa boa parte da agenda, e é natural que a conversa sobre os objetivos fique para os momentos de planejamento. Isso costuma acontecer em áreas que entregam muito, com pouca gente e muita mudança em volta. O primeiro passo é simples e tem efeito rápido: descobrir quais são os três ou quatro objetivos que a liderança acima de você está perseguindo este ano e olhar para as suas frentes a partir deles. Essa leitura muda o que você prioriza e a forma como o seu trabalho é contado."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Leve a sua leitura para uma decisão que ainda não chegou à mesa",
        "como_fazer": "Escolha um tema que vai ser decidido nos próximos meses, como orçamento, estrutura ou um projeto novo. Prepare, em uma página, qual objetivo da empresa ele move e o que você recomendaria. Leve para o seu gestor antes de o tema entrar em pauta.",
        "sinal": "O seu gestor leva a sua leitura para a reunião ou chama você para ela."
       },
       {
        "titulo": "Ensine a ligação para quem trabalha com você",
        "como_fazer": "Na próxima reunião com a equipe, abra cada frente pelo objetivo que ela move antes de entrar nos números. Peça que as pessoas façam o mesmo quando trouxerem um tema.",
        "sinal": "A equipe começa a priorizar sozinha pelos mesmos critérios que você usaria."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Faça o mapa das suas frentes",
        "como_fazer": "Liste as frentes que estão sob o seu escopo e, ao lado de cada uma, escreva qual objetivo da área e da empresa ela empurra. Onde a ligação não aparecer, pergunte ao seu gestor o que aquela frente sustenta.",
        "sinal": "Você consegue explicar cada frente em uma frase, começando pelo objetivo."
       },
       {
        "titulo": "Ensaie a resposta de um minuto",
        "como_fazer": "Prepare a resposta para a pergunta \"como a sua área ajuda a empresa a bater os objetivos do ano?\" em até um minuto, com um resultado concreto ligado a um objetivo. Use na próxima vez que alguém de cima puxar o assunto.",
        "sinal": "A pessoa faz uma pergunta sobre o objetivo, e a conversa segue por ali."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Descubra os objetivos do ano",
        "como_fazer": "Peça ao seu gestor 20 minutos com uma pergunta só: \"quais são os três objetivos que mais importam para a liderança acima de nós este ano?\". Anote com as palavras que ele usar.",
        "sinal": "Você sai da conversa com os objetivos escritos e com uma ideia do que mais preocupa quem está acima."
       },
       {
        "titulo": "Conecte a frente que mais ocupa a sua agenda",
        "como_fazer": "Escolha a frente que mais consome o seu tempo e escreva qual desses objetivos ela ajuda a mover. Na próxima reunião em que ela aparecer, abra por esse objetivo.",
        "sinal": "Alguém pergunta sobre o efeito no objetivo, além do andamento da tarefa."
       }
      ]
     }
    },
    "visibilidade": {
     "nome": "Visibilidade",
     "linha_autoavaliacao": "O que eu faço chega a quem decide.",
     "o_que_medimos": "Se o seu trabalho chega a quem decide: como você leva um resultado ou um problema para a liderança acima de você e por quais caminhos um bom resultado da sua área fica conhecido.",
     "como_funciona": [
      "Pense numa reunião de resultados numa terça de manhã. Quem decide tem oito assuntos na pauta, recebeu três relatórios na véspera e vai sair dali direto para outra reunião. Duas lideranças apresentam. A primeira mostra todo o racional, as premissas e os detalhes, com cuidado para não deixar ponta solta. A segunda começa pelo que aquela pessoa precisa decidir ou saber, e deixa o detalhe pronto para quando ele for pedido.",
      "As duas fizeram um bom trabalho. A diferença está no que fica na cabeça de quem ouviu. Três semanas depois, numa conversa sobre quem pode assumir um tema novo, quem decide lembra de uma ou duas frases daquela terça. Quase sempre são as frases que conversavam com a preocupação dela naquele momento. Por isso, a pergunta que vem antes de qualquer apresentação é sobre a audiência: quem vai ouvir, o quanto ela já sabe do tema e o que é relevante para ela.",
      "A outra metade da visibilidade acontece longe das apresentações. Um bom resultado costuma aparecer numa linha do relatório consolidado, junto com dezenas de outras. Quem decide raramente lê essa linha com atenção; lembra do que ouviu de alguém. Por isso importa saber por quais caminhos o resultado da sua área viaja: se ele chega só pelo indicador, se depende de uma pessoa para ser contado, ou se chega também pela voz de quem foi ajudado por ele."
     ],
     "por_que_pesa": "Visibilidade é o que transforma entrega em percepção. As decisões sobre quem assume um tema maior são tomadas por pessoas que veem uma parte pequena do seu trabalho, e elas decidem com o que chegou até elas. Quando o resultado chega bem contado, a sua entrega passa a trabalhar a seu favor também nas reuniões em que você não está.",
     "subcriterios": [
      {
       "id": "visibilidade_audiencia",
       "nome": "Adapta a apresentação a quem ouve",
       "de_onde": "T3.4 · A=100, B=50, C=0"
      },
      {
       "id": "visibilidade_caminho",
       "nome": "O resultado chega a quem decide",
       "de_onde": "T3.4b (pergunta nova) · A=100, B=50, C=0"
      }
     ],
     "fallback": {
      "firme": "As suas respostas mostram que você leva o trabalho para quem decide pensando em quem vai ouvir, e que o resultado da sua área encontra caminhos para chegar lá. Esse cuidado com a audiência é o que faz a sua entrega virar percepção. Daqui em diante, a mesma leitura que você usa para apresentar passa a servir para negociar com quem não responde a você, que é o pilar seguinte.",
      "em_construcao": "As suas respostas mostram uma apresentação cuidadosa e bem fundamentada, apoiada em fatos e num plano de ação. O que pede atenção é o ponto de partida: abrir pelo que a audiência precisa decidir ou saber, e deixar o detalhe pronto para quando for pedido. O mesmo vale para os caminhos do resultado. Quando ele chega só pelo relatório, ou só pela voz de uma pessoa, uma parte do que você entrega fica sem ser contada para quem decide.",
      "proximo_degrau": "As suas respostas mostram alguém que valoriza o rigor e prefere deixar o trabalho falar. É uma qualidade, e muita gente muito boa trabalha assim. Acontece que quem decide costuma ver uma fração pequena do que acontece na sua área, e decide com o que chega até ele. O primeiro passo é escolher um resultado recente e contá-lo para uma pessoa acima de você, começando pelo que ele muda para ela."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Monte a próxima apresentação pela pergunta de quem ouve",
        "como_fazer": "Antes da próxima reunião com a liderança acima de você, escreva no topo da primeira página a pergunta que aquela pessoa provavelmente tem sobre o tema. Construa a apresentação como resposta a ela.",
        "sinal": "A conversa vai direto para a decisão, e as perguntas de detalhe diminuem."
       },
       {
        "titulo": "Abra um caminho novo para o resultado",
        "como_fazer": "Escolha um resultado do último trimestre que ajudou outra área. Combine com a liderança dessa área de ela comentar o efeito numa reunião em que vocês dois estejam com quem decide.",
        "sinal": "Alguém acima de você menciona o resultado sem que você tenha trazido o assunto."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Abra pela conclusão",
        "como_fazer": "Na próxima apresentação, coloque três linhas no começo: o que aconteceu, o que isso significa para quem está ouvindo e o que você precisa da pessoa. O racional e as premissas ficam no anexo, prontos para quando forem pedidos.",
        "sinal": "Alguém pede o detalhe porque se interessou, e a reunião termina com uma decisão."
       },
       {
        "titulo": "Conte um resultado pela voz de quem foi ajudado",
        "como_fazer": "Escolha uma entrega recente que facilitou a vida de outra área. Mande para a liderança dessa área uma mensagem curta com o número e pergunte como aquilo impactou o lado dela.",
        "sinal": "A resposta traz uma frase que você pode citar quando falar do resultado, ou a própria pessoa passa a citá-lo."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Descubra quem precisa saber",
        "como_fazer": "Pegue o melhor resultado dos últimos três meses e responda por escrito: quem acima de você é impactado por ele e o que essa pessoa está tentando resolver agora.",
        "sinal": "Você tem duas ou três pessoas em mente e, ao lado de cada uma, o motivo pelo qual aquele resultado importa para ela."
       },
       {
        "titulo": "Conte em um minuto",
        "como_fazer": "Na próxima conversa com o seu gestor ou com alguém acima dele, conte esse resultado em até um minuto, começando pelo que ele muda para a área de quem está ouvindo.",
        "sinal": "A pessoa faz uma pergunta ou pede para você levar o tema a outra reunião."
       }
      ]
     }
    },
    "influencia": {
     "nome": "Influência",
     "linha_autoavaliacao": "Consigo mover pessoas que não respondem a mim.",
     "o_que_medimos": "Se você move pessoas que não respondem a você: como responde quando um par ou outra área pede algo muito difícil, se pensa em quem ganha e quem perde antes de propor algo grande e como enxerga a discordância.",
     "como_funciona": [
      "Pense numa cena comum. Um par de outra área chega numa terça e pede uma entrega para a sexta. Você sabe que não cabe. Ele também está sob pressão: provavelmente prometeu essa data ao diretor dele. Existem duas formas de responder. Na primeira, você mostra o que já está na sua mesa e explica por que a sexta não fecha. Na segunda, você pergunta de onde vem aquela data e o que acontece se uma parte sair depois, e volta com um caminho que resolve o problema dele sem atropelar o seu.",
      "As duas são honestas. A diferença está no que cada uma deixa na cabeça de quem pediu. A primeira deixa a imagem de uma área no limite da capacidade, e a decisão volta para o bom senso do outro. A segunda deixa a imagem de alguém que entendeu o problema dele e ajudou a resolver. Esse par vai falar da sua área em reuniões em que você não está, e vai contar a versão que viveu.",
      "O mesmo vale para propostas maiores. Imagine uma mudança de processo apresentada numa reunião com várias áreas. Todo mundo concorda na sala e, duas semanas depois, ela está parada. Quase sempre havia alguém que perdia uma etapa, um prazo ou um pedaço de controle com aquela mudança, e que não foi ouvido antes. Quem pensa em quem ganha e quem perde antes de propor chega à reunião com essas conversas feitas. E a discordância, quando aparece, vem no momento certo e de um jeito que soma credibilidade."
     ],
     "por_que_pesa": "Daqui para cima, boa parte do que você precisa entregar depende de pessoas que não respondem a você: pares, outras áreas, gente acima do seu gestor. A forma como você negocia com elas vira a reputação da sua área. E são essas mesmas pessoas que costumam ser ouvidas quando a próxima cadeira está em discussão.",
     "subcriterios": [
      {
       "id": "influencia_interesse",
       "nome": "Lê o interesse por trás do pedido",
       "de_onde": "T3.5 · A=100; qualquer C (justifica, cede, escala)=0"
      },
      {
       "id": "influencia_ganha_perde",
       "nome": "Pensa em quem ganha e quem perde antes de propor",
       "de_onde": "M3 · frase E \"Antes de propor algo grande, penso em quem ganha e quem perde com isso\" · marcada=100, não marcada=0"
      },
      {
       "id": "influencia_discorda",
       "nome": "Discorda com credibilidade",
       "de_onde": "M3 · frase E \"Discordar da maneira correta e na hora certa pode construir credibilidade\" · marcada=100, não marcada=0"
      }
     ],
     "regra_padrao": "Quando a T3.5 é uma das lacunas, use fallback e acoes_base de por_padrao[padrão] no lugar dos do nível. Os textos por nível abaixo valem só quando a T3.5 foi A (o nível então vem das duas frases da M3).",
     "fallback": {
      "firme": "As suas respostas mostram alguém que negocia pelo que está por trás do pedido, pensa em quem ganha e quem perde antes de propor e vê a discordância bem colocada como algo que soma. É o tipo de leitura que faz pares e outras áreas falarem bem de você em reuniões em que você não está. O pilar seguinte trata de transformar essa reputação em apoio nas salas onde a próxima cadeira é decidida.",
      "em_construcao": "As suas respostas mostram que, num pedido difícil, você busca entender o que está por trás dele e encontra um caminho sem desgastar a relação. É a base mais difícil de construir, e ela já está aí. O que ainda pede atenção vem antes da negociação: ouvir quem ganha e quem perde com uma proposta grande antes de levá-la para a sala, e usar a discordância, no momento certo, a favor da sua credibilidade.",
      "proximo_degrau": "As suas respostas mostram que, num pedido difícil, você procura entender o que está por trás dele, e isso já é muito. As frases que você escolheu falam pouco do que acontece antes de uma proposta grande e do papel da discordância. São os dois pontos em que a influência costuma crescer nesta fase: preparar as conversas com quem perde algo antes da reunião, e discordar no momento certo, de um jeito que some."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Prepare a próxima proposta grande com as conversas antes",
        "como_fazer": "Escolha a próxima proposta que envolve outras áreas. Antes de levá-la para a reunião, converse a sós com as duas pessoas que mais perdem com ela e pergunte o que precisaria estar no desenho para elas apoiarem.",
        "sinal": "Na reunião, essas pessoas defendem pontos da proposta, ou levantaram as objeções antes, a sós."
       },
       {
        "titulo": "Use uma discordância a favor da área",
        "como_fazer": "Na próxima decisão em que você discordar, leve a discordância primeiro para quem decide, a sós, com um dado e uma alternativa. Na reunião, apoie o caminho que sair dali.",
        "sinal": "Quem decide passa a pedir a sua opinião antes de fechar temas parecidos."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Ouça quem perde antes de propor",
        "como_fazer": "Antes da próxima proposta que mexe com outra área, marque 15 minutos com a pessoa que mais perde com ela. Pergunte o que a preocupa e ajuste o que for possível antes da reunião.",
        "sinal": "A proposta passa na reunião sem surpresa, ou a objeção aparece antes, a sós."
       },
       {
        "titulo": "Discorde com um caminho na mão",
        "como_fazer": "Da próxima vez que discordar de algo, traga junto uma alternativa concreta e o efeito dela no objetivo da área. Escolha o momento: antes da reunião, com quem decide.",
        "sinal": "A sua discordância vira parte da decisão, mesmo quando o caminho final é outro."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Faça o mapa de quem ganha e quem perde",
        "como_fazer": "Pegue uma mudança que você quer propor nos próximos meses. Numa folha, escreva quem ganha, quem perde algo (tempo, controle, uma etapa) e o que cada um precisaria para apoiar.",
        "sinal": "Você descobre pelo menos uma pessoa com quem precisa conversar antes de levar a proposta."
       },
       {
        "titulo": "Discorde com um caminho na mão",
        "como_fazer": "Da próxima vez que discordar de algo, traga junto uma alternativa concreta e o efeito dela no objetivo da área. Escolha o momento: antes da reunião, com quem decide.",
        "sinal": "A sua discordância vira parte da decisão, mesmo quando o caminho final é outro."
       }
      ]
     },
     "por_padrao": {
      "justifica": {
       "alternativa": "T3.5 · \"Explico por que aquele prazo tende a ser inviável, dou o contexto de tudo o que tenho no prato e conto com o bom senso da outra pessoa para ser mais flexível.\"",
       "fallback": "As suas respostas mostram uma forma de negociar transparente: diante de um pedido difícil, você explica por que o prazo tende a ser inviável, mostra tudo o que já está no prato e conta com o bom senso de quem pediu. Faz sentido, porque respeita a inteligência do outro. O que pede ajuste é o ponto de partida. Quando a conversa começa pela capacidade da sua área, a decisão volta para a outra pessoa, e o que fica na cabeça dela é a imagem de uma área no limite. Começar pelo problema dela, com perguntas, costuma mudar o rumo da conversa e a forma como a sua área é lembrada.",
       "acoes_base": [
        {
         "titulo": "Pergunte antes de explicar",
         "como_fazer": "Quando chegar o próximo pedido difícil, segure a explicação por alguns minutos e faça duas perguntas: \"De onde vem essa data?\" e \"O que acontece se uma parte sair depois?\". Escute com atenção. Em até um dia, volte com dois caminhos: a parte que resolve o compromisso da pessoa na data, ou a entrega inteira num prazo possível. Deixe a escolha com ela.",
         "sinal": "A conversa passa a girar em torno de qual caminho seguir, e a capacidade da sua área sai do centro dela."
        },
        {
         "titulo": "Leve o objetivo para a mesa",
         "como_fazer": "Na negociação seguinte, antes de falar do que está no seu prato, pergunte qual objetivo aquele pedido ajuda a mover. Proponha a ordem das entregas a partir dele.",
         "sinal": "A outra pessoa aceita mudar a data ou o escopo sem que você precise explicar a capacidade da sua área."
        }
       ]
      },
      "cede": {
       "alternativa": "T3.5 · \"Se for um stakeholder relevante, eu aceito do jeito que vier; não posso correr o risco de me queimar com alguém relevante.\"",
       "fallback": "As suas respostas mostram alguém que cuida das relações com quem é relevante, e isso tem valor: você não cria atrito à toa e as pessoas sabem que podem contar com você. O que pede atenção é o custo que fica escondido quando se aceita do jeito que vier. A agenda da sua área passa a ser definida por quem pede com mais força, a entrega aperta, e a relação que você queria proteger fica dependente de a resposta ser sempre sim. Quem é relevante costuma respeitar mais quem entende o pedido e volta com um caminho possível.",
       "acoes_base": [
        {
         "titulo": "Peça um dia antes de responder",
         "como_fazer": "No próximo pedido difícil de alguém relevante, agradeça, diga que quer entender bem para entregar do jeito certo e peça até o dia seguinte para responder. Nesse meio tempo, descubra de onde vem a data e o que é indispensável na entrega.",
         "sinal": "A pessoa aceita esperar a sua resposta, e você volta com uma proposta sua."
        },
        {
         "titulo": "Ofereça a parte que resolve",
         "como_fazer": "Ao responder, ofereça a parte da entrega que resolve o compromisso da pessoa na data pedida e um prazo possível para o resto. Fale pelo que ela ganha com isso.",
         "sinal": "O pedido segue com um escopo ou uma data diferente, e a relação continua boa."
        }
       ]
      },
      "escala": {
       "alternativa": "T3.5 · \"Aceito para não gerar atrito, mas levo para o meu gestor ponderar e decidirmos juntos o melhor caminho.\"",
       "fallback": "As suas respostas mostram alguém que evita atrito com pares e outras áreas e trabalha em parceria com o gestor nas decisões difíceis. É uma postura prudente, e o seu gestor provavelmente valoriza essa parceria. O que pede atenção é o efeito ao longo do tempo. Quando o pedido difícil sobe para o gestor, a negociação passa a acontecer entre ele e a outra área, e quem pediu aprende que, para resolver com a sua área, o caminho é falar com ele. Negociar direto, com o gestor informado, costuma fortalecer a sua cadeira e a dele.",
       "acoes_base": [
        {
         "titulo": "Negocie primeiro, leve ao gestor depois",
         "como_fazer": "No próximo pedido difícil, antes de levar ao seu gestor, pergunte à pessoa de onde vem a data e o que é indispensável. Monte uma proposta e só então leve ao gestor, já com a sua recomendação.",
         "sinal": "O seu gestor concorda com a proposta e pede que você mesmo(a) feche com a outra área."
        },
        {
         "titulo": "Combine com o gestor até onde você decide",
         "como_fazer": "Na próxima conversa individual, combine com o seu gestor que tipo de pedido você fecha direto com as outras áreas e quais ele quer acompanhar.",
         "sinal": "Na semana seguinte, pelo menos um pedido difícil é resolvido entre você e a outra área, sem subir."
        }
       ]
      }
     }
    },
    "proximo_nivel": {
     "nome": "Próximo nível",
     "linha_autoavaliacao": "O meu nome circula onde a próxima cadeira é decidida.",
     "o_que_medimos": "Se o seu nome circula nas salas onde a próxima cadeira é decidida: em que momento você entra nas decisões sensíveis da área e quem falaria a seu favor numa reunião em que você não está.",
     "como_funciona": [
      "Pense em como uma cadeira maior costuma ser decidida. Antes de qualquer anúncio, há uma reunião, um ou dois níveis acima de quem vai ocupar a vaga, em que se fala de estrutura, de orçamento e de nomes. Três ou quatro pessoas são cotadas. Nenhuma delas está na sala. O que se diz ali sobre cada uma vem do que as pessoas presentes viveram com ela: um projeto que andou, uma negociação que se resolveu, um problema que ela antecipou.",
      "Nessa reunião, o gestor de cada pessoa cotada é uma voz importante. Quando ele é a única, o nome depende do espaço que ele tem naquela sala naquele trimestre. Quando outras pessoas presentes também têm algo a dizer, de outras áreas e de níveis acima, o nome chega com mais de uma história a favor. Essa segunda e essa terceira voz são, muitas vezes, os pares e as áreas com quem a pessoa trabalha toda semana.",
      "Existe um sinal anterior de que um nome já circula por essas salas: o momento em que a pessoa fica sabendo das decisões sensíveis. Numa reestruturação, numa mudança de direção ou num comunicado importante, algumas lideranças ficam sabendo junto com todo mundo, outras ficam sabendo antes para preparar a equipe, e algumas participam da discussão e ajudam a desenhar como vai ser comunicado. Quem é chamado antes costuma ser quem já é visto como parte da decisão, e é desse grupo que costumam sair os nomes para a próxima cadeira."
     ],
     "por_que_pesa": "Próximo nível é o último degrau da escada e o que mais depende dos outros três. A próxima cadeira é decidida em conversas das quais você não participa, por pessoas que conhecem uma parte do seu trabalho. O que você entrega, o que chega a quem decide e a forma como você negocia viram, ali, as histórias que alguém conta sobre você.",
     "subcriterios": [
      {
       "id": "proximo_decisoes",
       "nome": "Participa das decisões sensíveis",
       "de_onde": "T3.6 · A=100, B=50, C=0"
      },
      {
       "id": "proximo_defensor",
       "nome": "Tem quem fale a favor",
       "de_onde": "T3.7 · A=100, qualquer B=50, D=0"
      },
      {
       "id": "proximo_prova",
       "nome": "Defesa comprovada acima do gestor",
       "de_onde": "Prova da T3.7 · confirma=100, não confirma=0; sem prova porque a T3.7 não foi A: D=0, B=50"
      }
     ],
     "regra_padrao": "Quando a T3.7 é B ou D, use fallback e acoes_base de por_padrao[padrão] no lugar dos do nível. T3.7 em A, com ou sem prova confirmada, usa o nível.",
     "fallback": {
      "firme": "As suas respostas mostram alguém que já participa das decisões sensíveis e tem quem fale a seu favor acima do seu gestor, com nome e exemplo. É a posição de quem já é visto como parte das conversas em que a próxima cadeira é decidida. Nessa fase, o trabalho passa a ser cuidar dessas relações com a mesma atenção que você dá aos resultados, e escolher bem as próximas frentes em que o seu nome aparece.",
      "em_construcao": "As suas respostas mostram uma presença que já vai além do seu escopo: em alguns momentos você entra antes nas decisões, e há pessoas que reconhecem o seu trabalho. O que pede atenção é a força desse apoio nas salas em que você não está. Ter quem fale a seu favor acima do seu gestor, com uma história concreta para contar, é o que costuma levar um nome da lista de cotados para a decisão.",
      "proximo_degrau": "As suas respostas mostram alguém com o foco no trabalho e na equipe, que cuida das pessoas quando uma mudança chega. É uma qualidade que as equipes reconhecem. O que pede atenção é a distância entre você e as conversas em que as decisões são tomadas. Quando a próxima cadeira for discutida, quem estiver na sala vai falar das pessoas que conhece. O primeiro passo é escolher uma ou duas pessoas acima do seu gestor e criar contato a partir de um tema de trabalho que importe para elas."
     },
     "acoes_base": {
      "firme": [
       {
        "titulo": "Cuide de quem já fala por você",
        "como_fazer": "Pense em quem defendeu o seu trabalho no último ano. Com cada uma dessas pessoas, marque uma conversa nos próximos 30 dias para contar o que mudou desde então e ouvir o que ela está tentando resolver.",
        "sinal": "Você sai de cada conversa sabendo em que pode ajudar, e a pessoa volta a falar de você por iniciativa dela."
       },
       {
        "titulo": "Ajude a desenhar a próxima decisão",
        "como_fazer": "Quando souber de uma mudança que vem pela frente, ofereça a quem decide uma leitura de como ela vai chegar às equipes e do que comunicar primeiro.",
        "sinal": "O convite para a discussão seguinte chega a você antes do comunicado."
       }
      ],
      "em_construcao": [
       {
        "titulo": "Descubra quem estaria na sala",
        "como_fazer": "Pense na próxima cadeira que você gostaria de ocupar e responda por escrito: quem, acima do seu gestor, participaria dessa decisão e o que cada pessoa já viu do seu trabalho.",
        "sinal": "Você identifica uma ou duas pessoas que ainda não têm uma história sua para contar."
       },
       {
        "titulo": "Dê uma história para contar",
        "como_fazer": "Escolha uma dessas pessoas e um tema que importa para ela. Leve um dado, uma ideia ou uma ajuda concreta da sua área sobre esse tema, numa conversa curta.",
        "sinal": "A pessoa retoma o assunto com você ou cita o seu trabalho numa reunião."
       }
      ],
      "proximo_degrau": [
       {
        "titulo": "Peça para entrar antes na próxima mudança",
        "como_fazer": "Na próxima mudança da área, peça ao seu gestor para participar da preparação do comunicado, oferecendo a sua leitura de como a equipe vai receber.",
        "sinal": "Você fica sabendo da mudança seguinte antes do comunicado oficial."
       },
       {
        "titulo": "Crie um contato acima do gestor",
        "como_fazer": "Com o conhecimento do seu gestor, escolha uma pessoa acima dele e proponha uma conversa de 20 minutos sobre um tema em que a sua área pode ajudar.",
        "sinal": "A conversa termina com um próximo passo combinado entre vocês."
       }
      ]
     },
     "por_padrao": {
      "sem_defensor_certo": {
       "alternativa": "T3.7 · B · \"Tenho boas relações com muita gente; acho que alguém defenderia o meu case.\"",
       "fallback": "As suas respostas mostram alguém bem relacionado, com boa circulação na empresa. É um ativo real, construído ao longo do tempo. O que pede atenção é a passagem de ter boas relações para ter quem fale por você numa sala específica. Quando a próxima cadeira é discutida, o apoio que pesa vem de alguém presente, com uma história concreta sobre o seu trabalho. Transformar algumas dessas boas relações em apoio desse tipo costuma pedir poucas conversas, bem escolhidas.",
       "acoes_base": [
        {
         "titulo": "Escolha três relações para aprofundar",
         "como_fazer": "Entre as pessoas com quem você se relaciona bem na empresa, escolha as três com mais chance de estar na sala quando a próxima cadeira for discutida. Para cada uma, escreva o que ela já viu do seu trabalho.",
         "sinal": "Você sabe, para cada uma, qual história ela contaria sobre você."
        },
        {
         "titulo": "Dê um motivo concreto para a conversa",
         "como_fazer": "Proponha a uma dessas pessoas uma conversa sobre um tema dela em que a sua área pode ajudar, e acompanhe o resultado até o fim.",
         "sinal": "A pessoa passa a procurar você para temas parecidos."
        }
       ]
      },
      "so_gestor": {
       "alternativa": "T3.7 · B · \"O meu gestor, com certeza.\"",
       "fallback": "As suas respostas mostram uma relação de confiança com o seu gestor, e isso pesa muito: ele é, quase sempre, a voz mais importante quando o seu nome é discutido. O que pede atenção é a dependência. A decisão sobre uma cadeira maior costuma acontecer um ou dois níveis acima dele, e, quando ele é a única voz a seu favor, o seu nome depende do espaço que ele tem ali naquele trimestre. Uma segunda e uma terceira voz, de outras áreas e de níveis acima, fortalecem você e também o argumento dele.",
       "acoes_base": [
        {
         "titulo": "Converse com o seu gestor sobre a próxima cadeira",
         "como_fazer": "Pergunte ao seu gestor quem, além dele, participa das decisões sobre a cadeira que você quer e o que essas pessoas precisariam ver do seu trabalho.",
         "sinal": "Você sai com uma ou duas pessoas em mente e uma ideia do que mostrar a cada uma."
        },
        {
         "titulo": "Crie a segunda voz",
         "como_fazer": "Escolha uma dessas pessoas e combine com o seu gestor uma forma de você apresentar a ela um resultado ou uma ideia, ao lado dele ou com o conhecimento dele.",
         "sinal": "Essa pessoa passa a citar o seu trabalho sem que o seu gestor esteja na conversa."
        }
       ]
      },
      "disputa_equilibrada": {
       "alternativa": "T3.7 · B · \"Com certeza o meu nome estaria bem cotado, mas outros pares também estariam; difícil dizer quem defenderia a mim ou a eles.\"",
       "fallback": "As suas respostas mostram alguém que conhece o próprio valor e lê o cenário com realismo: o seu nome estaria bem cotado, e o dos seus pares também. Essa leitura honesta é uma vantagem. Numa disputa equilibrada, o que costuma decidir é quem tem mais pessoas, na sala, com uma história concreta para contar. Essa diferença se constrói antes da reunião, com as áreas e as pessoas acima do seu gestor que ainda não têm uma história sua.",
       "acoes_base": [
        {
         "titulo": "Encontre o que diferencia o seu case",
         "como_fazer": "Escreva em três linhas o que você entrega que os pares cotados com você não entregam do mesmo jeito, pela ótica de quem decide.",
         "sinal": "Você consegue dizer, em uma frase, por que o seu nome seria a escolha natural para aquela cadeira."
        },
        {
         "titulo": "Leve essa diferença para quem decide",
         "como_fazer": "Escolha uma pessoa acima do seu gestor e uma ocasião de trabalho em que essa diferença apareça na prática, como um tema que você resolve ou uma leitura que você traz.",
         "sinal": "Essa pessoa passa a chamar você para temas em que a sua diferença aparece."
        }
       ]
      },
      "nao_sei": {
       "alternativa": "T3.7 · D · \"Honestamente, nunca pensei sobre isso; não sei dizer.\"",
       "fallback": "Você respondeu com honestidade que nunca tinha pensado em quem falaria a seu favor, e isso é muito comum entre quem tem o foco no trabalho e nos resultados. É uma pergunta que vale a pena começar a fazer. As decisões sobre a próxima cadeira são tomadas em reuniões em que você não está, por pessoas que conhecem uma parte do seu trabalho. Saber quem são essas pessoas e o que elas já viram de você é o primeiro passo para o seu nome chegar bem contado nessas conversas.",
       "acoes_base": [
        {
         "titulo": "Responda a pergunta por escrito",
         "como_fazer": "Numa folha, responda: se a próxima cadeira fosse discutida amanhã, quem estaria na sala? E o que cada pessoa sabe do seu trabalho?",
         "sinal": "Você chega a pelo menos duas pessoas e percebe onde ainda falta história."
        },
        {
         "titulo": "Pergunte ao seu gestor como funciona",
         "como_fazer": "Na próxima conversa individual, pergunte ao seu gestor como costumam ser decididas as cadeiras acima da sua e quem participa dessas decisões.",
         "sinal": "Você entende o caminho de uma decisão dessas e sabe quem precisa conhecer melhor o seu trabalho."
        }
       ]
      }
     }
    }
   }
  }
 },
 "telas": {
  "autoavaliacao": {
   "titulo": "Antes de começar",
   "instrucao": "De 0 a 10, quanto você sente que domina cada um destes pontos hoje? Vale a primeira impressão. No final, a gente compara a sua leitura com o que as respostas mostram.",
   "linhas": {
    "entrega": "O meu trabalho está ligado ao que a empresa quer alcançar.",
    "visibilidade": "O que eu faço chega a quem decide.",
    "influencia": "Consigo mover pessoas que não respondem a mim.",
    "proximo": "O meu nome circula onde a próxima cadeira é decidida."
   },
   "rotulo_0": "Ainda não faz parte do meu dia a dia",
   "rotulo_10": "Faço isso com consistência",
   "botao": "Começar o diagnóstico"
  },
  "codigo_acesso": {
   "rotulo": "Tem um código de acesso?",
   "ajuda": "Se você recebeu um código da nossa equipe, digite aqui. Ele libera o relatório completo, escrito a partir das suas respostas. Sem código, você recebe o resultado do diagnóstico do mesmo jeito.",
   "placeholder": "Ex.: K7M4QX",
   "aceito": "Código confirmado. O seu relatório completo vai ser montado ao final.",
   "erro_invalido": "Não encontramos esse código. Vale conferir as letras e os números. Se preferir, siga sem ele: você recebe o resultado do diagnóstico normalmente.",
   "erro_usado": "Esse código já foi usado em outro diagnóstico, e cada código vale uma vez. Você pode seguir sem ele e receber o resultado normalmente. Se achar que houve um engano, fale com a nossa equipe."
  },
  "objetivo": {
   "pergunta": "Pensando nos próximos 12 meses, o que mais representa o que você quer para a sua carreira?",
   "alternativas": [
    {
     "id": "promocao",
     "texto": "Ser promovido(a)"
    },
    {
     "id": "reconhecimento",
     "texto": "Ser reconhecido(a) pelo que já entrego"
    },
    {
     "id": "escopo_maior",
     "texto": "Liderar algo maior"
    },
    {
     "id": "mudar_empresa",
     "texto": "Mudar de empresa"
    },
    {
     "id": "descobrindo",
     "texto": "Ainda estou descobrindo"
    }
   ]
  },
  "campo_aberto": {
   "pergunta": "Se quiser, conte em poucas linhas o seu momento e o maior desafio que você vive hoje no trabalho.",
   "aviso": "Não precisa citar nomes de pessoas ou empresas.",
   "opcional": "Opcional",
   "limite": 600,
   "contador": "{n} de 600 caracteres",
   "botao_pular": "Pular",
   "botao_seguir": "Ver o meu resultado"
  },
  "espera": {
   "frases": [
    "Lendo as suas respostas, uma a uma.",
    "Comparando a sua leitura com o que as respostas mostram.",
    "Procurando onde os quatro pilares se encontram no seu caso.",
    "Montando o seu plano para os próximos 30 dias.",
    "Falta pouco. Costuma levar por volta de um minuto."
   ],
   "intervalo_segundos": 6
  },
  "secoes_relatorio": {
   "resumo": "Resumo executivo",
   "forcas": "O que foi muito bom",
   "oportunidades": "O que pede atenção",
   "gaps": "Como você se vê × o que as respostas mostram",
   "plano": "Seu plano para os próximos 30 dias",
   "convite": "Um convite"
  },
  "niveis": {
   "firme": "Firme",
   "em_construcao": "Em construção",
   "proximo_degrau": "Próximo degrau"
  },
  "gaps": {
   "alinhado": "Leitura alinhada",
   "acima": "Percepção acima das respostas",
   "abaixo": "Você se subestima"
  },
  "como_lemos_isso": "Como lemos isso: no começo, você deu uma nota de 0 a 10 para cada pilar. Multiplicamos a nota por 10 e comparamos com o percentual que as suas respostas formaram. Até 15 pontos de diferença, as duas leituras estão alinhadas; acima disso, vale olhar com calma o que cada uma está vendo.",
  "pergunta_T3_4b": {
   "pergunta": "Quando a sua área entrega um bom resultado, como isso chega a quem decide acima de você?",
   "alternativas": [
    {
     "nivel": "B",
     "texto": "Aparece no relatório mensal e na reunião de resultados, onde apresento com cuidado tudo o que entregamos no período."
    },
    {
     "nivel": "A",
     "texto": "Penso em quem precisa saber e por quê, e conto pelo que o resultado muda para aquela pessoa; muitas vezes quem conta primeiro é a área que foi ajudada por ele."
    },
    {
     "nivel": "C",
     "texto": "Prefiro deixar os números falarem por si; quem acompanha os indicadores vê o resultado, e não gosto de ficar me promovendo."
    },
    {
     "nivel": "B",
     "texto": "Pelo meu gestor, que leva os resultados para as reuniões dele; ele conhece bem o nosso trabalho e defende a área."
    }
   ],
   "id": "T3.4b",
   "posicao": "logo depois da T3.4",
   "pilar": "visibilidade",
   "subcriterio": "visibilidade_caminho",
   "valores": {
    "A": 100,
    "B": 50,
    "C": 0
   }
  },
  "versao": "v4 · rascunho para aprovação do Yury · 18/11/2026"
 },
 "convites": {
  "saidas": {
   "T1S1": "lap",
   "T1S2": "lap",
   "T1S3": "lap",
   "T1S4": "lap",
   "T1S5": "lap",
   "T2S1": "lap",
   "T2S2": "conversa",
   "T2S3": "conversa",
   "T2S4": "conversa",
   "T2S5": "conversa",
   "T3S1": "mentoria_liderium",
   "T3S2": "mentoria_liderium",
   "T3S3": "mentoria_liderium",
   "T3S4": "mentoria_liderium",
   "T3S5": "mentoria_liderium",
   "T4S1": "mentoria_individual",
   "T4S2": "mentoria_individual",
   "T4S3": "mentoria_individual",
   "T4S4": "mentoria_individual",
   "T4S5": "mentoria_individual"
  },
  "produtos": {
   "lap": {
    "nome": "LAP",
    "abertura": "Você já tem ações específicas que pode implementar no seu dia a dia a partir do diagnóstico. Agora, caso queira ter apoio e direcionamento específico para o seu caso, quero te fazer um convite.",
    "match_frase": "Com base nas suas respostas, acredito que você pode ter um match alto com o LAP, por três motivos.",
    "match_frase_sem_ia": "Com base nas suas respostas, acredito que você pode ter um match alto com o LAP.",
    "acesso": "O LAP é o meu programa para quem está construindo a própria liderança, seja chegando à primeira equipe, seja firmando a equipe que já tem. Ele começa pelo jeito de pensar de quem lidera e pelas habilidades de relação, passa pela autoridade com a equipe e chega à rotina que faz o resultado acontecer.",
    "fecho": "Se fizer sentido para o seu momento, o botão abaixo abre uma conversa com a minha equipe no WhatsApp. Conta o seu resultado, e a gente te explica como o LAP funciona no seu caso.",
    "botao_texto": "Chama a equipe no WhatsApp",
    "botao_destino": {
     "tipo": "whatsapp_crm",
     "numero": "5511999106121",
     "mensagem": "Olá! Fiz o diagnóstico de carreira ({codigo}) e quero saber mais sobre o LAP."
    },
    "ganchos_metodo": [
     {
      "id": "lap_mentalidade",
      "pilar": "Mentalidade do líder",
      "liga_com": [
       "entrega",
       "proximo"
      ],
      "o_que_trabalha": "A virada de quem deixa de responder só pelo próprio trabalho e passa a responder pelo que acontece em volta dele."
     },
     {
      "id": "lap_principios",
      "pilar": "Mentalidade do líder · 7 princípios da liderança estratégica",
      "liga_com": [
       "entrega",
       "proximo"
      ],
      "o_que_trabalha": "Olhar o próprio trabalho a partir do valor que ele gera para a área."
     },
     {
      "id": "lap_comunicacao",
      "pilar": "Habilidades de relação · comunicação",
      "liga_com": [
       "visibilidade"
      ],
      "o_que_trabalha": "Contar o que você faz de um jeito que quem está acima entende rápido e lembra depois."
     },
     {
      "id": "lap_influencia",
      "pilar": "Habilidades de relação · influência e empatia",
      "liga_com": [
       "influencia"
      ],
      "o_que_trabalha": "Entender o que move a outra pessoa antes de pedir, para que o pedido chegue como ajuda."
     },
     {
      "id": "lap_adaptabilidade",
      "pilar": "Habilidades de relação · maturidade e adaptabilidade",
      "liga_com": [
       "influencia",
       "proximo"
      ],
      "o_que_trabalha": "Manter a calma e o critério quando o cenário muda e a pressão aumenta, que é justamente quando as pessoas observam quem tem condições de assumir mais."
     },
     {
      "id": "lap_autoridade_equipe",
      "pilar": "Posicionamento e autoridade com a equipe",
      "liga_com": [
       "proximo",
       "entrega"
      ],
      "o_que_trabalha": "Construir a autoridade que faz as pessoas seguirem você pelo que você conduz."
     },
     {
      "id": "lap_rotina_resultados",
      "pilar": "Operações e resultados",
      "liga_com": [
       "entrega"
      ],
      "o_que_trabalha": "Montar a rotina de conversas individuais e de reunião com a equipe que faz o resultado sair sem depender de você em cada detalhe."
     }
    ]
   },
   "conversa": {
    "nome": "Conversa com a equipe",
    "abertura": "Você já tem ações específicas que pode implementar no seu dia a dia a partir do diagnóstico. Agora, caso queira ter apoio e direcionamento específico para o seu caso, quero te fazer um convite.",
    "match_frase": "Com base nas suas respostas, acredito que vale uma conversa com a minha equipe sobre o seu próximo passo, por três motivos.",
    "match_frase_sem_ia": "Com base nas suas respostas, acredito que vale uma conversa com a minha equipe sobre o seu próximo passo.",
    "acesso": "Nessa conversa, a minha equipe olha o seu resultado com você, entende o momento da sua equipe e o que você quer construir nos próximos meses, e te diz qual é o próximo passo que faz sentido para o seu caso.",
    "fecho": "Se fizer sentido para você, clique no link abaixo e agende um horário com a minha equipe.",
    "botao_texto": "Agendar um horário",
    "botao_destino": "https://oyurygarcia.com.br/conversa/",
    "ganchos_metodo": [
     {
      "id": "conversa_leitura_resultado",
      "pilar": "Leitura do resultado",
      "liga_com": [
       "entrega",
       "visibilidade",
       "influencia",
       "proximo"
      ],
      "o_que_trabalha": "Olhar com você o pilar que mais pede atenção e o que ele tem a ver com o momento que você vive hoje."
     },
     {
      "id": "conversa_momento_equipe",
      "pilar": "O momento da sua equipe",
      "liga_com": [
       "entrega",
       "proximo"
      ],
      "o_que_trabalha": "Entender o quanto a sua equipe já anda sem você, porque isso define quanto espaço você tem para o próximo movimento."
     },
     {
      "id": "conversa_quem_decide",
      "pilar": "Quem olha para o seu trabalho",
      "liga_com": [
       "visibilidade",
       "influencia"
      ],
      "o_que_trabalha": "Entender quem, acima de você e nas áreas em volta, forma a opinião sobre a sua liderança."
     },
     {
      "id": "conversa_proximo_passo",
      "pilar": "O próximo passo",
      "liga_com": [
       "proximo"
      ],
      "o_que_trabalha": "Sair com clareza sobre qual movimento faz sentido agora para o que você quer construir."
     }
    ]
   },
   "mentoria_liderium": {
    "nome": "Mentoria Liderium",
    "abertura": "Você já tem ações específicas que pode implementar no seu dia a dia a partir do diagnóstico. Agora, caso queira ter apoio e direcionamento específico para o seu caso, quero te fazer um convite.",
    "match_frase": "Com base nas suas respostas, acredito que você pode ter um match alto com a Mentoria Liderium, por três motivos.",
    "match_frase_sem_ia": "Com base nas suas respostas, acredito que você pode ter um match alto com a Mentoria Liderium.",
    "acesso": "Na mentoria, a gente trabalha esses pontos a partir das suas situações reais, começando por uma sessão individual comigo para um diagnóstico mais profundo e um plano de ação específico.",
    "fecho": "Se fizer sentido para você, clique no link abaixo e agende um horário com a minha equipe.",
    "botao_texto": "Agendar um horário",
    "botao_destino": "https://oyurygarcia.com.br/conversa/",
    "ganchos_metodo": [
     {
      "id": "ml_visao_negocio",
      "pilar": "Mentalidade e visão de negócio",
      "liga_com": [
       "entrega"
      ],
      "o_que_trabalha": "Ligar cada frente sua ao que a empresa quer alcançar no ano, para que o seu trabalho seja lembrado quando o assunto é crescer."
     },
     {
      "id": "ml_mapa_ambiente",
      "pilar": "Posicionamento · leitura do ambiente",
      "liga_com": [
       "influencia",
       "proximo"
      ],
      "o_que_trabalha": "Entender quem está em volta da sua cadeira, o que cada pessoa precisa ver de você e em que pé está cada relação."
     },
     {
      "id": "ml_percepcao",
      "pilar": "Posicionamento · performance, percepção e credibilidade",
      "liga_com": [
       "visibilidade",
       "entrega"
      ],
      "o_que_trabalha": "Trabalhar, além do número, o que as pessoas sabem dele e o que elas entendem dele, porque é isso que vira credibilidade."
     },
     {
      "id": "ml_negociacao",
      "pilar": "Posicionamento · negociação",
      "liga_com": [
       "influencia"
      ],
      "o_que_trabalha": "Preparar as negociações reais com pares e outras áreas antes que elas aconteçam, pensando no que cada uma deixa na relação."
     },
     {
      "id": "ml_comunicacao_executiva",
      "pilar": "Comunicação executiva",
      "liga_com": [
       "visibilidade"
      ],
      "o_que_trabalha": "Levar um tema para a diretoria respondendo o que quem decide precisa saber: o contexto, o impacto, a proposta e o próximo passo."
     },
     {
      "id": "ml_cenario",
      "pilar": "Análise de cenário",
      "liga_com": [
       "proximo",
       "influencia"
      ],
      "o_que_trabalha": "Ler o que está em movimento na empresa, quem decide de fato e qual é o momento certo, para agir antes que o cenário decida por você."
     },
     {
      "id": "ml_narrativa",
      "pilar": "Construção de narrativa",
      "liga_com": [
       "visibilidade",
       "proximo"
      ],
      "o_que_trabalha": "Contar a história por trás dos seus números e cuidar da forma como falam de você nas salas em que você não está."
     },
     {
      "id": "ml_acompanhamento",
      "pilar": "Acesso · encontros quinzenais e WhatsApp",
      "liga_com": [
       "entrega",
       "visibilidade",
       "influencia",
       "proximo"
      ],
      "o_que_trabalha": "Levar a situação real da semana, ajustar comigo antes de ela acontecer e trazer de volta o que funcionou."
     }
    ]
   },
   "mentoria_individual": {
    "nome": "Mentoria individual",
    "abertura": "Você já tem ações específicas que pode implementar no seu dia a dia a partir do diagnóstico. Agora, caso queira ter apoio e direcionamento específico para o seu caso, quero te fazer um convite.",
    "match_frase": "Com base nas suas respostas, acredito que você pode ter um match alto com a minha mentoria individual, por três motivos.",
    "match_frase_sem_ia": "Com base nas suas respostas, acredito que você pode ter um match alto com a minha mentoria individual.",
    "acesso": "A mentoria individual são quatro meses de sessões quinzenais só entre nós dois, sobre o seu cenário específico. Entre uma sessão e outra, você tem ferramentas e tarefas para levar ao dia a dia e o meu WhatsApp para o que não pode esperar a próxima conversa.",
    "fecho": "Se fizer sentido para o seu momento, o botão abaixo abre uma conversa com a minha equipe. A gente olha o seu resultado junto e vê se a mentoria individual é o caminho certo para você.",
    "botao_texto": "Conversar com a equipe",
    "botao_destino": {
     "tipo": "whatsapp_crm",
     "numero": "5511999106121",
     "mensagem": "Olá! Fiz o diagnóstico de carreira ({codigo}) e quero saber mais sobre a Mentoria individual."
    },
    "ganchos_metodo": [
     {
      "id": "mi_sessoes_individuais",
      "pilar": "Acesso · sessões individuais quinzenais",
      "liga_com": [
       "entrega",
       "visibilidade",
       "influencia",
       "proximo"
      ],
      "o_que_trabalha": "Tratar a sua situação real, com as pessoas e as decisões que ela envolve, num espaço só seu."
     },
     {
      "id": "mi_whatsapp",
      "pilar": "Acesso · WhatsApp",
      "liga_com": [
       "influencia",
       "proximo"
      ],
      "o_que_trabalha": "Ajustar comigo a conversa difícil ou a decisão da semana antes que ela aconteça."
     },
     {
      "id": "mi_ferramentas_tarefas",
      "pilar": "Acesso · ferramentas e tarefas",
      "liga_com": [
       "entrega",
       "visibilidade"
      ],
      "o_que_trabalha": "Transformar cada sessão em um movimento concreto no seu dia a dia, e voltar na sessão seguinte com o que aconteceu."
     },
     {
      "id": "mi_mentalidade_relacao",
      "pilar": "Mentalidade e habilidades de relação",
      "liga_com": [
       "influencia",
       "visibilidade"
      ],
      "o_que_trabalha": "Afinar a forma como você se comunica e influencia quem não responde a você, que é o que mais pesa no seu nível."
     },
     {
      "id": "mi_autoridade",
      "pilar": "Posicionamento e autoridade",
      "liga_com": [
       "proximo",
       "visibilidade"
      ],
      "o_que_trabalha": "Firmar a autoridade que faz as pessoas seguirem a sua direção pelo que você conduz."
     },
     {
      "id": "mi_operacao_resultados",
      "pilar": "Operações e resultados",
      "liga_com": [
       "entrega"
      ],
      "o_que_trabalha": "Organizar a estrutura em volta de você para que o resultado se sustente sem a sua presença em cada decisão."
     }
    ]
   }
  }
 },
 "citacoes": [
  {
   "id": "c01",
   "texto": "Bem feito vale mais do que bem dito.",
   "autor": "Benjamin Franklin",
   "fonte": "Poor Richard's Almanack, 1737 (https://founders.archives.gov/documents/Franklin/01-02-02-0028)",
   "tema": "entrega"
  },
  {
   "id": "c02",
   "texto": "Se a empresa perder dinheiro, serei compreensivo; se perder um fiapo de reputação, serei implacável.",
   "autor": "Warren Buffett",
   "fonte": "Depoimento inicial ao subcomitê da Câmara dos EUA, 1991, caso Salomon Brothers (https://www.talkativeman.com/?p=1033; https://fortune.com/1997/10/27/warren-buffett-salomon/)",
   "tema": "entrega"
  },
  {
   "id": "c04",
   "texto": "O bom é inimigo do ótimo.",
   "autor": "Jim Collins",
   "fonte": "Good to Great, cap. 1 (https://www.litcharts.com/lit/good-to-great/chapter-1)",
   "tema": "entrega"
  },
  {
   "id": "c05",
   "texto": "Somos os CEOs das nossas próprias empresas.",
   "autor": "Tom Peters",
   "fonte": "The Brand Called You, Fast Company, 1997 (https://www.fastcompany.com/28905/brand-called-you; conferido por citação em https://dongiannatti.substack.com/p/the-brand-called-you-tom-peters-1997)",
   "tema": "visibilidade"
  },
  {
   "id": "c06",
   "texto": "Compartilhe algo pequeno todo dia.",
   "autor": "Austin Kleon",
   "fonte": "Show Your Work!, cap. 3 (https://austinkleon.com/show-your-work/)",
   "tema": "visibilidade"
  },
  {
   "id": "c07",
   "texto": "Ensine o que você sabe.",
   "autor": "Austin Kleon",
   "fonte": "Show Your Work!, cap. 6 (https://austinkleon.com/show-your-work/)",
   "tema": "visibilidade"
  },
  {
   "id": "c08",
   "texto": "Conte boas histórias.",
   "autor": "Austin Kleon",
   "fonte": "Show Your Work!, cap. 5 (https://austinkleon.com/show-your-work/)",
   "tema": "visibilidade"
  },
  {
   "id": "c09",
   "texto": "A única maneira de influenciar os outros é falar do que eles querem e mostrar como conseguir.",
   "autor": "Dale Carnegie",
   "fonte": "How to Win Friends and Influence People, 1936 (https://people.duke.edu/~tkb13/courses/ece458-2023sp/readings/How%20to%20Win%20Friends%20And%20Influence%20People.html)",
   "tema": "influencia"
  },
  {
   "id": "c10",
   "texto": "Clareza é gentileza. Falta de clareza é indelicadeza.",
   "autor": "Brené Brown",
   "fonte": "Dare to Lead, 2018 (https://brenebrown.com/blog/2018/10/15/clear-is-kind-unclear-is-unkind)",
   "tema": "influencia"
  },
  {
   "id": "c11",
   "texto": "Que nunca negociemos por medo. Mas que nunca tenhamos medo de negociar.",
   "autor": "John F. Kennedy",
   "fonte": "Discurso de posse, 20/01/1961 (https://www.archives.gov/milestone-documents/president-john-f-kennedys-inaugural-address)",
   "tema": "influencia"
  },
  {
   "id": "c12",
   "texto": "Continuem famintos. Continuem tolos.",
   "autor": "Steve Jobs",
   "fonte": "Discurso de formatura em Stanford, 12/06/2005 (https://www.entrepreneur.com/leadership/steve-jobs-commencement-speech-stanford-university-june/283250)",
   "tema": "proximo"
  },
  {
   "id": "c13",
   "texto": "O que trouxe você até aqui não vai levar você até lá.",
   "autor": "Marshall Goldsmith",
   "fonte": "Título do livro What Got You Here Won't Get You There, Hyperion, 2007 (https://www.getabstract.com/en/summary/what-got-you-here-wont-get-you-there/6634)",
   "tema": "proximo"
  },
  {
   "id": "c15",
   "texto": "A visão que você adota sobre si afeta profundamente a maneira como você conduz a vida.",
   "autor": "Carol Dweck",
   "fonte": "Mindset: The New Psychology of Success, 2006, introdução; redação varia entre edições (https://www.themarginalian.org/2014/01/29/carol-dweck-mindset/)",
   "tema": "mentalidade"
  },
  {
   "id": "c17",
   "texto": "Dor mais reflexão é igual a progresso.",
   "autor": "Ray Dalio",
   "fonte": "Principles, 2017 (https://principles.com/principles/8fb2c839-9d16-43f9-8fcd-3379868e903e)",
   "tema": "mentalidade"
  }
 ]
};
  if (typeof module !== 'undefined') module.exports = C;
  g.QUIZ_CONTEUDO = C;
})(typeof globalThis !== 'undefined' ? globalThis : this);
