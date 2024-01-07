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
              "1944",
              "1945"
            ],
            respostaCerta: 0
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
