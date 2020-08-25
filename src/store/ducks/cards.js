export const Types = {
  SEARCH_CARD: 'cards/SEARCH_CARD',
};

const INITIAL_STATE = {
  cards: [
    {
      id: 1,
      title: 'Como criar um layout',
      tags: [{
        id: 1,
        name: "CSS",
        color: "blue",
        outlined:true,
        dense:true
      },
      {
        id: 2,
        name: "HTML",
        color: "orange",
        outlined:true,
        dense:true
      },
      {
        id: 3,
        name: "JAVASCRIPT",
        color: "yellow",
        outlined:true,
        dense:true
      },],
    },
    {
      id: 2,
      title: 'Como criar um servidor de minecraft para hackear os amigos',
      tags: [],
    },
    {
      id: 3,
      title:
        'Como trollar seu amigo colocando um cavalo de troia no computador dele',
      tags: [],
    },
  ],
  filtered: [],
};

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_CARD:
      console.log(1);
      return {
        ...state,
        filtered: action.card
      }
    default:
      return state;
  }
}

export const Creators = {
  filter: (card)=>(
    {
      type: Types.SEARCH_CARD,
      card
  })
}
