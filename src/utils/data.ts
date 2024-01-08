export type esporteId = 'volei' | 'futebol' | 'basquete';
export interface AprenderItem {
  nome: string;
  descricao: string;
  id: string;
  icon?: string;
  texto: string;
  arquivo?: string;
}

interface Pergunta {
  pergunta: string;
  respostas: string[];
  respostaCerta: number;
}

export interface QuizItem {
  nome: string;
  descricao: string;
  id: string;
  icon?: string;
  perguntas: Pergunta[];
}

export interface EsporteData {
  nome: string;
  descricao: string;
  id: 'volei' | 'futebol' | 'basquete';
  icon?: JSX.Element;
  aprender: AprenderItem[];
  quiz: QuizItem[];
}

export const data_all: Record<esporteId, EsporteData> = {
  volei: {
    nome: 'Volêibol',
    descricao: "O volêi é um esporte muito legal",
    id: 'volei',
    aprender: [
      {
        nome: 'História',
        descricao: "",
        id: 'historia',
        icon: 'newspaper',
        arquivo: 'historia',
        texto: "A _história_ do voleibol começou em 1895, nos Estados Unidos. O criador foi William George Morgan, " +
          "diretor de educação física da Associação Cristã de Moços (ACM) na cidade de Holyoke, em Massachusetts. " +
          "Ele tinha o objetivo de criar um esporte sem contato físico entre os adversários, minimizando os choques" +
          " e as lesões. Por isso, o voleibol foi inicialmente chamado de mintonette. O primeiro jogo de voleibol" +
          " foi **disputado** em 7 de julho de 1896, no Springfield College, no mesmo Estado norte-americano. Em 1942," +
          " o voleibol foi oficializado como esporte olímpico. O Brasil conquistou a primeira medalha de ouro em 1992," +
          " nos Jogos de Barcelona, na Espanha. O voleibol é um esporte praticado em uma quadra dividida por uma rede." +
          " O objetivo é fazer com que a bola toque o chão do campo adversário. Cada equipe é formada por seis " +
          "jogadores."
      }
    ],
    quiz: [
      {
        nome: 'Quiz 1',
        descricao: "",
        id: 'quiz1',
        icon: 'newspaper',
        perguntas: [
          {
            pergunta: "Qual é o nome do criador do voleibol?",
            respostas: [
              "Wallace",
              "William",
              "Walter",
              "Wesley"
            ],
            respostaCerta: 1
          },
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
            pergunta: "Quantos jogadores tem em cada equipe?",
            respostas: [
              "6",
              "5",
              "4",
              "7"
            ],
            respostaCerta: 0
          },
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
            pergunta: "Quantas medalhas de ouro o Brasil tem no voleibol masculino?",
            respostas: [
              "3",
              "4",
              "5",
              "6"
            ],
            respostaCerta: 2
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
            pergunta: "Qual desses não é um fundamento do voleibol?",
            respostas: [
              "Saque",
              "Recepção",
              "Levantamento",
              "Passe"
            ],
            respostaCerta: 3
          },
          {
            pergunta: "Qual é o número da posição à esquerda do sacador?",
            respostas: [
              "1",
              "2",
              "6",
              "4",
            ],
            respostaCerta: 2
          }
        ]
      }
    ]
  },
  futebol: {
    nome: 'Futebol',
    descricao: "",
    id: 'futebol',
    aprender: [],
    quiz: []
  },
  basquete: {
    nome: 'Basquete',
    descricao: "",
    id: 'basquete',
    aprender: [],
    quiz: []
  }
}
