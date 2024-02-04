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
            respostaCerta: 2
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
            respostaCerta: 2
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
            respostaCerta: 3
          },
          {
            pergunta: 'Qual é o número máximo de toques permitidos por equipe para retornar a bola à quadra adversária no voleibol indoor?',
            respostas: [
              '2 toques',
              '3 toques',
              '4 toques',
              '5 toques',
            ],
            respostaCerta: 1
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
    aprender: [],
    quiz: [],
    praticar: []
  },
  basquete: {
    nome: 'Basquete',
    descricao: "Basquete é um esporte frenético e emocionante, caracterizado por habilidades de arremesso, dribles e passes, onde duas equipes competem para marcar pontos ao arremessar a bola na cesta adversária.",
    id: 'basquete',
    aprender: [],
    quiz: [],
    praticar: []
  }
}
