export type esporteId = 'volei' | 'futebol' | 'basquete';
export interface AprenderItem {
  nome: string;
  id: string;
  arquivo?: string;
}

interface Pergunta {
  pergunta: string;
  respostas: string[];
  respostaCerta: number;
  dica?: string;
}

export interface QuizItem {
  nome: string;
  id: string;
  perguntas: Pergunta[];
}

export interface PraticaItem {
  nome: string;
  descricao: string;
  id: string;
  video?: string;
}

export interface EsporteData {
  nome: string;
  descricao: string;
  id: 'volei' | 'futebol' | 'basquete';
  icon?: JSX.Element;
  aprender: AprenderItem[];
  quiz: QuizItem[];
  praticar: PraticaItem[];
}

export const data_all: Record<esporteId, EsporteData> = {
  volei: {
    nome: 'Voleibol',
    descricao: "Vôlei é um esporte vibrante que combina técnica, agilidade e trabalho em equipe, onde duas equipes buscam marcar pontos através de saques, bloqueios e ataques precisos.",
    id: 'volei',
    aprender: [
      {
        nome: 'História do Voleibol',
        id: 'historia',
        arquivo: 'historia',
      },
      {
        nome: 'O Papel Estratégico do Levantador no Voleibol',
        id: 'levantador',
        arquivo: 'levantador',
      },
      {
        nome: 'Técnicas Avançadas de Saque no Voleibol',
        id: 'saque',
        arquivo: 'saque',
      },
      {
        nome: 'A Importância da Comunicação na Quadra de Vôlei',
        id: 'comunicacao',
        arquivo: 'comunicacao',
      },
      {
        nome: 'A Arte do Bloqueio no Voleibol Profissional',
        id: 'bloqueio',
        arquivo: 'bloqueio',
      },
      {
        nome: 'Lesões Comuns no Vôlei e Como Preveni-las',
        id: 'lesoes',
        arquivo: 'lesoes',
      },
      {
        nome: 'A Importância da Estratégia em Equipes de Vôlei',
        id: 'estrategia',
        arquivo: 'estrategia',
      },
      {
        nome: 'Grandes Ícones do Vôlei Mundial',
        id: 'icones',
        arquivo: 'icones',
      },
      {
        nome: 'O Uso da Análise de Dados no Treinamento de Vôlei',
        id: 'analise',
        arquivo: 'analise',
      },
      {
        nome: 'Técnicas Avançadas de Recepção no Vôlei',
        id: 'recepcao',
        arquivo: 'recepcao',
      },
      {
        nome: 'Estratégias de Posicionamento no Vôlei',
        id: 'posicionamento',
        arquivo: 'posicionamento',
      },
    ],
    quiz: [
      {
        nome: 'Quiz sobre História do Vôlei',
        id: 'quiz1',
        perguntas: [
          {
            pergunta: "Em que ano foi disputado o primeiro jogo de voleibol?",
            respostas: [
              "1896",
              "1895",
              "1894",
              "1893"
            ],
            respostaCerta: 0
          },
          {
            pergunta: "Em que ano o voleibol foi oficializado como esporte olímpico?",
            respostas: [
              "1942",
              "1943",
              "1964",
              "1945"
            ],
            respostaCerta: 2,
            dica: 'Ano do início da ditadura militar no Brasil',
          },
          {
            pergunta: "Em que ano o Brasil conquistou a primeira medalha de ouro?",
            respostas: [
              "1992",
              "1993",
              "1994",
              "1995"
            ],
            respostaCerta: 0
          },
          {
            pergunta: "Qual país foi o berço do voleibol, onde o esporte foi criado pela primeira vez?",
            respostas: [
              "Brasil",
              "Rússia",
              "Estados Unidos",
              "Canadá"
            ],
            respostaCerta: 2,
            dica: 'País que também criou o Basquete'
          },
          {
            pergunta: "Quantas medalhas de ouro o Brasil tem no voleibol masculino?",
            respostas: [
              "3",
              "4",
              "5",
              "6"
            ],
            respostaCerta: 2
          },
        ]
      },
      {
        nome: 'Quiz sobre Conhecimentos Gerais',
        id: 'quiz2',
        perguntas: [
          {
            pergunta: "Qual é o objetivo do voleibol?",
            respostas: [
              "Fazer com que a bola toque o chão do próprio campo",
              "Fazer com que a bola toque a rede",
              "Fazer com que a bola toque o teto",
              "Fazer com que a bola toque o chão do campo adversário",
            ],
            respostaCerta: 3
          },
          {
            pergunta: "Quais são as dimensões da quadra?",
            respostas: [
              "16m x 8m",
              "20m x 10m",
              "18m x 9m",
              "15m x 7m"
            ],
            respostaCerta: 2
          },
          {
            pergunta: "Qual é a altura da rede no voleibol masculino?",
            respostas: [
              "2,43m",
              "2,33m",
              "2,53m",
              "2,63m"
            ],
            respostaCerta: 0
          },
          {
            pergunta: "Qual dessa não é uma posição do voleibol?",
            respostas: [
              "Levantador",
              "Líbero",
              "Ponteiro",
              "Zagueiro"
            ],
            respostaCerta: 3,
            dica: 'A opção que não é uma posição do voleibol é uma posição de futebol.'
          },
          {
            pergunta: 'Qual é o número máximo de toques permitidos por equipe para retornar a bola à quadra adversária no voleibol indoor?',
            respostas: [
              '2 toques',
              '3 toques',
              '4 toques',
              '5 toques',
            ],
            respostaCerta: 1,
            dica: 'A ordem padrão de ação no vôlei é Recepção, Levantamento e Corte.'
          }
        ]
      },
      {
        nome: 'Quiz sobre Posicionamento',
        id: 'quiz3',
        perguntas: [
          {
            pergunta: 'O que influencia a escolha das formações básicas no voleibol?',
            respostas: [
              'O número de pontos marcados',
              'As características dos jogadores, o estilo de jogo da equipe e situações específicas durante a partida',
              'A preferência do treinador',
              'A altura da rede',
            ],
            respostaCerta: 1,
          },
          {
            pergunta: 'Por que o posicionamento estratégico dos atacantes é essencial no voleibol?',
            respostas: [
              'Para distrair a equipe adversária',
              'Para criar oportunidades ofensivas, explorando diferentes ângulos de ataque',
              'Para economizar energia dos jogadores',
              'Para melhorar a defesa',
            ],
            respostaCerta: 1,
            dica: 'O posicionamento de ataque tem que se preocupar exclusivamente na ofensiva.'
          },
          {
            pergunta: 'O que as equipes de alto nível adotam em situações de contra-ataque?',
            respostas: [
              'Manter o mesmo posicionamento',
              'Estratégias lentas e previsíveis',
              'Posicionamento rápido e adaptativo',
              'Desconsiderar o contra-ataque',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'O que é crucial no posicionamento no voleibol de praia?',
            respostas: [
              'A cor da areia',
              'A presença de rede dupla',
              'A altura da quadra',
              'Equilibrar a defesa e o ataque em espaços reduzidos',
            ],
            respostaCerta: 3,
          },
          {
            pergunta: 'Qual é o papel do posicionamento no saque no voleibol?',
            respostas: [
              'Explorar as fraquezas do passe adversário',
              'Influenciar a cor da quadra',
              'Criar oportunidades ofensivas',
              'Determinar a temperatura ambiente',
            ],
            respostaCerta: 0,
            dica: 'Um dos objetivos do saque é dificultar as ações ofensivas do time adversário.'
          }
        ]
      },
      {
        nome: 'Quiz sobre Levantamento',
        id: 'quiz4',
        perguntas: [
          {
            pergunta: 'Qual é a função principal do levantador no voleibol?',
            respostas: [
              'Realizar bloqueios eficazes',
              'Executar ataques potentes',
              'Distribuir passes precisos para os atacantes',
              'Manter uma posição defensiva sólida',
            ],
            respostaCerta: 2,
            dica: 'O levantamento é a penúltima de um time durante o seu ataque.'
          },
          {
            pergunta: 'Quais são as áreas da quadra que um levantador deve priorizar ao escolher para distribuir os levantamentos?',
            respostas: [
              'A linha de ataque',
              'A linha de fundo',
              'Todas as áreas igualmente',
              'As extremidades da quadra',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'No levantamento, o que caracteriza um "levantamento rápido" no voleibol?',
            respostas: [
              'Um levantamento executado lentamente',
              'Um levantamento direcionado apenas para os atacantes',
              'Um levantamento rápido e preciso, próximo à rede',
              'Um levantamento alto para facilitar a defesa',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'Quais são as regras básicas relacionadas ao levantamento no voleibol?',
            respostas: [
              'Não há regras específicas para o levantamento',
              'É permitido segurar a bola por tempo indeterminado',
              'O levantamento deve ser realizado com os pés fixos no chão',
              'O levantamento deve ser limpo, sem rotação excessiva ou carregamento',
            ],
            respostaCerta: 3,
            dica: 'Condução é uma falta no vôlei.'
          },
          {
            pergunta: 'Qual é a importância da comunicação entre o levantador e os atacantes durante o jogo?',
            respostas: [
              'A comunicação é desnecessária no levantamento',
              'Facilitar a sincronização entre os jogadores',
              'Reduzir a velocidade do jogo',
              'Garantir que o levantador seja o único a decidir as jogadas',
            ],
            respostaCerta: 1,
          }
        ]
      },
      {
        nome: 'Quiz sobre Recepção',
        id: 'quiz5',
        perguntas: [
          {
            pergunta: 'Qual é o principal objetivo da recepção no voleibol?',
            respostas: [
              'Realizar bloqueios eficazes',
              'Executar ataques potentes',
              'Distribuir passes precisos para os atacantes',
              'Garantir a correta defesa da equipe',
            ],
            respostaCerta: 3,
          },
          {
            pergunta: 'O que caracteriza uma boa técnica de recepção no voleibol?',
            respostas: [
              'Deslocamento lento para a bola',
              'Posicionamento rígido dos pés',
              'Uso predominante das mãos',
              'Contato limpo com os antebraços',
            ],
            respostaCerta: 3,
          },
          {
            pergunta: 'Qual é a importância da posição do corpo na recepção?',
            respostas: [
              'A posição do corpo não influencia na recepção',
              'Favorece um melhor equilíbrio e controle sobre a bola',
              'Dificulta a visão do jogador',
              'Aumenta a chance de erros',
            ],
            respostaCerta: 1,
            dica: 'A recepção tem que facilitar o levantamento.'
          },
          {
            pergunta: 'Como a comunicação entre os passadores (receptores) pode impactar a recepção?',
            respostas: [
              'Facilita a sincronização entre os jogadores',
              'Não tem impacto na recepção',
              'Pode causar confusão e erros',
              'A comunicação é irrelevante na recepção',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'O que os jogadores devem evitar ao realizar a recepção no voleibol para garantir uma jogada eficiente?',
            respostas: [
              'Posicionar os pés flexionados',
              'Utilizar apenas uma mão para tocar na bola',
              'Contato simultâneo com os punhos',
              'Rotação excessiva dos ombros durante o contato',
            ],
            respostaCerta: 3,
            dica: 'Movimentos excessivos dificultam o controle da bola.'
          }
        ]
      },
    ],
    praticar: [
      {
        nome: 'Manchete',
        descricao: await import('../conteudo/volei/praticar/manchete.md?raw').then((module) => module.default),
        id: 'manchete',
        video: 'https://www.youtube.com/embed/mi4m0tUhM0w?si=wymdCVnfGSSHWgOa'
      },
      {
        nome: 'Corte',
        descricao: await import('../conteudo/volei/praticar/corte.md?raw').then((module) => module.default),
        id: 'corte',
        video: 'https://www.youtube.com/embed/qmAmwQIPO9s',
      },
      {
        nome: 'Levantamento',
        descricao: await import('../conteudo/volei/praticar/levantamento.md?raw').then((module) => module.default),
        id: 'levantamento',
        video: 'https://www.youtube.com/embed/3gsHw_RJdpw',
      },
      {
        nome: 'Saque',
        descricao: await import('../conteudo/volei/praticar/saque.md?raw').then((module) => module.default),
        id: 'saque',
        video: 'https://www.youtube.com/embed/QdcgOZyKQTU',
      },
      {
        nome: 'Deslocamento',
        descricao: await import('../conteudo/volei/praticar/deslocamento.md?raw').then((module) => module.default),
        id: 'deslocamento',
        video: 'https://www.youtube.com/embed/ySlo8V3wbx4',
      },
    ]
  },
  futebol: {
    nome: 'Futebol',
    descricao: "Futebol é um jogo dinâmico onde dois times competem para marcar gols, utilizando habilidades como dribles, passes e chutes, criando uma intensa atmosfera de competição e emoção.",
    id: 'futebol',
    aprender: [
      {
        nome: 'Controle de Bola',
        id: 'controle',
        arquivo: 'controle',
      },
      {
        nome: 'Técnica de Chute',
        id: 'chute',
        arquivo: 'chute',
      },
      {
        nome: 'Dribles Avançados',
        id: 'dribles',
        arquivo: 'dribles',
      },
      {
        nome: 'Posicionamento Tático',
        id: 'posicionamento',
        arquivo: 'posicionamento',
      },
      {
        nome: 'Cabeceio',
        id: 'cabeceio',
        arquivo: 'cabeceio',
      },
    ],
    quiz: [
      {
        nome: 'Quiz sobre Chutes',
        id: 'quiz1',
        perguntas: [
          {
            pergunta: 'Qual é a técnica correta para um chute de longa distância?',
            respostas: [
              'Chapa externa',
              'Bicicleta',
              'Chute de trivela',
              'Chute de calcanhar',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'Qual parte do pé é geralmente usada para chutar a bola de forma mais precisa?',
            respostas: [
              'Calcanhar',
              'Lateral do pé',
              'Ponta do pé',
              'Peito do pé',
            ],
            respostaCerta: 3,
          },
          {
            pergunta: 'O que é um "chute de efeito" no futebol?',
            respostas: [
              'Chute com muita força',
              'Chute colocado',
              'Chute com curva ou rotação',
              'Chute de bicicleta',
            ],
            respostaCerta: 2,
            dica: 'Esse chute é muito enfatizado em cobranças de falta.'
          },
          {
            pergunta: 'Qual é o nome do chute em que o jogador chuta a bola no ar antes que ela toque o solo?',
            respostas: [
              'Chute de voleio',
              'Chute de cobertura',
              'Chute de bicicleta',
              'Chute de trivela',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'Em um pênalti, a que distância o jogador deve ficar da bola antes de chutar?',
            respostas: [
              '5 metros',
              '10 metros',
              '11 metros',
              '12 metros',
            ],
            respostaCerta: 2,
            dica: 'A resposta é o mesmo número de camisa que o Neymar usava no Barcelona.'
          },
        ]
      },
      {
        nome: 'Quiz sobre Controle de Bola',
        id: 'quiz2',
        perguntas: [
          {
            pergunta: 'Qual é a parte do corpo mais comumente usada para um controle de bola eficaz?',
            respostas: [
              'Peito',
              'Cabeça',
              'Coxa',
              'Pé',
            ],
            respostaCerta: 3,
            dica: 'O nome do esporte em Inglês Britânico é Football'
          },
          {
            pergunta: 'O que é o "domínio aéreo" no contexto do controle de bola?',
            respostas: [
              'Controlar a bola no ar',
              'Controlar a bola com a mão',
              'Dominar a bola no chão',
              'Dar passes altos',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'Qual termo é usado quando um jogador controla a bola instantaneamente após recebê-la, mantendo-a próxima ao corpo?',
            respostas: [
              'Drible',
              'Cabeceio',
              'Domínio limpo',
              'Goleiro',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'O que significa o termo "embaixadinha" no futebol em relação ao controle de bola?',
            respostas: [
              'Driblar o goleiro',
              'Fazer embaixadas no campo',
              'Manter a bola no ar usando os pés',
              'Controlar a bola com a cabeça',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'Qual é a importância do controle de bola no futebol moderno?',
            respostas: [
              'Apenas para exibição de habilidades',
              'Facilitar a posse de bola e o jogo estratégico',
              'Aumentar o número de gols marcados',
              'Reduzir o tempo de jogo',
            ],
            respostaCerta: 1,
            dica: 'Dominando a bola rápido, você pode fazer outras ações mais rápido...'
          },
        ]
      },
      {
        nome: 'Quiz sobre Passes',
        id: 'quiz3',
        perguntas: [
          {
            pergunta: 'Qual é o nome do passe realizado com a parte interna do pé, mantendo o pé próximo ao solo?',
            respostas: [
              'Chute de longa distância',
              'Passe de calcanhar',
              'Passe rasteiro',
              'Chute de efeito',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'O que é um "passe de calcanhar" no futebol?',
            respostas: [
              'Um passe realizado com a cabeça',
              'Um passe realizado com a parte de trás do pé',
              'Um passe feito com a ponta do pé',
              'Um passe realizado de forma curva',
            ],
            respostaCerta: 1,
          },
          {
            pergunta: 'Quando um jogador realiza um "chapeuzinho" no adversário, que tipo de passe ele está executando?',
            respostas: [
              'Passe longo',
              'Passe de efeito',
              'Passe por cima da cabeça do adversário',
              'Passe de trivela',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'O que é um "passe em profundidade" no futebol?',
            respostas: [
              'Passe para trás',
              'Passe longo em direção ao gol adversário',
              'Passe de calcanhar',
              'Passe em curva',
            ],
            respostaCerta: 1,
            dica: 'Também conhecido como passe que "quebra linhas".'
          },
          {
            pergunta: 'Qual é a importância do passe na construção do jogo de uma equipe?',
            respostas: [
              'Apenas para aumentar as estatísticas individuais',
              'Facilitar a posse de bola e criar oportunidades de gol',
              'Reduzir a velocidade do jogo',
              'Minimizar a interação entre os jogadores',
            ],
            respostaCerta: 1,
            dica: 'A bola corre mais rápido que os jogadores.'
          },
        ]
      },
    ],
    praticar: [
      {
        nome: 'Chute',
        descricao: await import('../conteudo/futebol/praticar/chute.md?raw').then((module) => module.default),
        id: 'chute',
        video: 'https://www.youtube.com/embed/lJJTjhRK5HA'
      },
      {
        nome: 'Passe',
        descricao: await import('../conteudo/futebol/praticar/passe.md?raw').then((module) => module.default),
        id: 'passe',
        video: 'https://www.youtube.com/embed/9Iih993tRhk',
      },
      {
        nome: 'Controle',
        descricao: await import('../conteudo/futebol/praticar/controle.md?raw').then((module) => module.default),
        id: 'controle',
        video: 'https://www.youtube.com/embed/X-rTAcPE4zc',
      },
    ]
  },
  basquete: {
    nome: 'Basquete',
    descricao: "Basquete é um esporte frenético e emocionante, caracterizado por habilidades de arremesso, dribles e passes, onde duas equipes competem para marcar pontos ao arremessar a bola na cesta adversária.",
    id: 'basquete',
    aprender: [
      {
        nome: 'Mecânica de arremesso',
        id: 'arremesso',
        arquivo: 'arremesso',
      },
      {
        nome: 'Posicionamento defensivo',
        id: 'posicionamento',
        arquivo: 'posicionamento',
      },
      {
        nome: 'Uso do pivô',
        id: 'pivo',
        arquivo: 'pivo',
      },
      {
        nome: 'Dribles',
        id: 'dribles',
        arquivo: 'dribles',
      },
      {
        nome: 'Uso de screens',
        id: 'screens',
        arquivo: 'screens',
      },
    ],
    quiz: [
      {
        nome: 'Quiz sobre Arremesso',
        id: 'quiz1',
        perguntas: [
          {
            pergunta: 'Qual é a postura adequada para um arremesso em basquete?',
            respostas: [
              'Pés alinhados à cesta',
              'Pés cruzados',
              'Pés virados para fora',
              'Pés afastados ao máximo',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'O que influencia diretamente na precisão do arremesso?',
            respostas: [
              'Altura do jogador',
              'Cor do uniforme',
              'Equilíbrio',
              'Velocidade de corrida',
            ],
            respostaCerta: 2,
            dica: 'Arremessos são comumente feitos com o jogador parado, em concentração.'
          },
          {
            pergunta: 'Qual é uma técnica comum para aumentar a versatilidade do arremesso?',
            respostas: [
              'Manter sempre a mesma distância da cesta',
              'Utilizar apenas um tipo de arremesso',
              'Treinar em diferentes distâncias e ângulos',
              'Ignorar o treinamento físico',
            ],
            respostaCerta: 2,
            dica: 'Imitar cenários de jogo pode ser útil para aumentar a versatilidade do arremesso.'
          },
          {
            pergunta: 'O que é crucial para aprimorar as habilidades de arremesso?',
            respostas: [
              'Nunca cometer erros',
              'Prática regular',
              'Treinar apenas uma vez por semana',
              'Não receber feedback',
            ],
            respostaCerta: 1,
          },
          {
            pergunta: 'Por que é importante receber feedback de treinadores e colegas no arremesso?',
            respostas: [
              'Para ignorar sugestões',
              'Apenas para aumentar a confiança',
              'Porque é uma regra do jogo',
              'Identificar áreas de melhoria',
            ],
            respostaCerta: 3,
          },
        ]
      },
      {
        nome: 'Quiz sobre Dribles',
        id: 'quiz2',
        perguntas: [
          {
            pergunta: 'Qual é a finalidade principal dos dribles no basquete?',
            respostas: [
              'Impressionar os espectadores',
              'Atrasar o jogo',
              'Avançar com a bola e superar defensores',
              'Evitar arremessos',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'Por que é importante praticar dribles com ambas as mãos?',
            respostas: [
              'Apenas para equilibrar o treinamento',
              'Para ser imprevisível para os defensores',
              'Porque não há outra opção',
              'Apenas para canhotos',
            ],
            respostaCerta: 1,
            dica: 'Driblar só com uma mão faz com que o defensor possa se posicionar na direção da mão que você dribla.'
          },
          {
            pergunta: 'O que é recomendado durante dribles em situações de defesa intensa?',
            respostas: [
              'Manter a bola longe do corpo',
              'Utilizar apenas a mão dominante',
              'Parar de driblar e passar a bola rapidamente',
              'Não olhar para os defensores',
            ],
            respostaCerta: 0,
          },
          {
            pergunta: 'Qual é a principal vantagem de dribles crossover?',
            respostas: [
              'Aumentar a velocidade do jogo',
              'Imprimir um estilo único ao jogador',
              'Mudar rapidamente de direção',
              'Facilitar a interceptação da bola',
            ],
            respostaCerta: 2,
            dica: 'Em um crossover, o jogador troca a bola de mãos rapidamente.'
          },
          {
            pergunta: 'Por que é essencial praticar dribles em movimento?',
            respostas: [
              'Apenas para impressionar os treinadores',
              'Para evitar cansaço durante o jogo',
              'Para se deslocar eficientemente pelo campo',
              'Porque driblar parado é mais fácil',
            ],
            respostaCerta: 2,
          },
        ]
      },
      {
        nome: 'Quiz sobre Screens',
        id: 'quiz3',
        perguntas: [
          {
            pergunta: 'O que é uma "screen" no basquete?',
            respostas: [
              'Uma jogada proibida',
              'Um tipo de arremesso',
              'Um bloqueio feito por um jogador para libertar um companheiro de equipe',
              'Uma técnica defensiva',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'Qual é o objetivo principal de uma "screen"?',
            respostas: [
              'Marcar pontos',
              'Impedir o avanço do time adversário',
              'Criar espaço para um companheiro de equipe',
              'Forçar faltas',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'Quem geralmente executa uma "screen" em uma jogada ofensiva?',
            respostas: [
              'O jogador mais alto do time',
              'O armador',
              'O treinador',
              'O pivô',
            ],
            respostaCerta: 3,
            dica: 'Uma "screen" é uma "barreira", portanto, é útil que seja feita por um jogador pesado.'
          },
          {
            pergunta: 'O que um jogador deve fazer após realizar uma "screen" com sucesso?',
            respostas: [
              'Continuar bloqueando indefinidamente',
              'Tentar marcar um arremesso imediatamente',
              'Rolar em direção à cesta ou buscar uma posição aberta',
              'Trocar de posição com o armador',
            ],
            respostaCerta: 2,
          },
          {
            pergunta: 'Como a defesa pode neutralizar eficientemente uma "screen"?',
            respostas: [
              'Comunicar e alternar marcação',
              'Ignorar o jogador que está fazendo a tela',
              'Rolar junto com o jogador que está sendo bloqueado',
              'Utilizar uma zona defensiva',
            ],
            respostaCerta: 0,
            dica: 'Em inglês, a tática chama-se "pick-n\'-roll".'
          },
        ]
      },
    ],
    praticar: [
      {
        nome: 'Arremesso',
        descricao: await import('../conteudo/basquete/praticar/arremesso.md?raw').then((module) => module.default),
        id: 'arremesso',
        video: 'https://www.youtube.com/embed/hPUoi-bmUHI'
      },
      {
        nome: 'Drible',
        descricao: await import('../conteudo/basquete/praticar/drible.md?raw').then((module) => module.default),
        id: 'drible',
        video: 'https://www.youtube.com/embed/94RuZbZvxOE',
      },
      {
        nome: 'Bandeja',
        descricao: await import('../conteudo/basquete/praticar/bandeja.md?raw').then((module) => module.default),
        id: 'bandeja',
        video: 'https://www.youtube.com/embed/H1T8AbXSlZQ',
      },
    ]
  }
}
