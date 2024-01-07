export type esporteId = 'volei' | 'futebol' | 'basquete';
export interface AprenderItem {
  nome: string;
  descricao: string;
  id: string;
  icon?: string;
  texto: string;
}

export interface EsporteData {
  nome: string;
  descricao: string;
  id: 'volei' | 'futebol' | 'basquete';
  icon?: JSX.Element;
  aprender: AprenderItem[];
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
        texto: "A história do voleibol começou em 1895, nos Estados Unidos. O criador foi William George Morgan, " +
          "diretor de educação física da Associação Cristã de Moços (ACM) na cidade de Holyoke, em Massachusetts. " +
          "Ele tinha o objetivo de criar um esporte sem contato físico entre os adversários, minimizando os choques" +
          " e as lesões. Por isso, o voleibol foi inicialmente chamado de mintonette. O primeiro jogo de voleibol" +
          " foi disputado em 7 de julho de 1896, no Springfield College, no mesmo Estado norte-americano. Em 1942," +
          " o voleibol foi oficializado como esporte olímpico. O Brasil conquistou a primeira medalha de ouro em 1992," +
          " nos Jogos de Barcelona, na Espanha. O voleibol é um esporte praticado em uma quadra dividida por uma rede." +
          " O objetivo é fazer com que a bola toque o chão do campo adversário. Cada equipe é formada por seis " +
          "jogadores."
      }
    ]
  },
  futebol: {
    nome: 'Futebol',
    descricao: "",
    id: 'futebol',
    aprender: []
  },
  basquete: {
    nome: 'Basquete',
    descricao: "",
    id: 'basquete',
    aprender: []
  }
}
