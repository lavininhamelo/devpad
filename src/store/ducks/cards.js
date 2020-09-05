export const Types = {
  SEARCH_CARD: 'cards/SEARCH_CARD',
  SET_CARDS: 'cards/SET_CARDS',
};

const INITIAL_STATE = {
  cards: [],
  filtered: [],
};

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_CARDS:
      return { cards: [...action.payload] };
    case Types.SEARCH_CARD:
      return {
        ...state,
        filtered: action.card,
      };

    default:
      return state;
  }
}

export const Creators = {
  filter: (card) => {
    return {
      type: Types.SEARCH_CARD,
      card,
    };
  },
  setCards: (cards) => {
    return {
      type: Types.SET_CARDS,
      payload: cards,
    };
  },
};
