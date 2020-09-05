export const Types = {
  FILTER_CARD: 'search/FILTER_CARDS',
  SELECTED_TAGS: 'search/SELECTED_TAGS',
  SEARCH_VALUE: 'search/SEARCH_VALUE',
};

const INITIAL_STATE = {
  filtered: [],
  selectedTags: [],
  searchValue: ' ',
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FILTER_CARD:
      return {
        ...state,
        filtered: action.filtered,
      };
    case Types.SELECTED_TAGS:
      return {
        ...state,
        selectedTags: action.tags,
      };
    case Types.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
}

function filterCard(query, card, tags) {
  let count = 0;
  let value = card.title.toUpperCase();
  for (let t of tags) {
    for (let c of card.tags) {
      if (c.name === t.name) {
        count++;
      }
    }
  }
  if (count === tags.length) {
    if (value.indexOf(query.toUpperCase()) > -1) {
      return card;
    }
  }
}

export const Creators = {
  filterAll: ({ query, cards, tags }) => {
    const final = cards.filter((card) => filterCard(query, card, tags || []));
    return {
      type: Types.FILTER_CARD,
      filtered: final,
    };
  },

  setTags: (tags) => {
    return {
      type: Types.SELECTED_TAGS,
      tags,
    };
  },
  setQuery: (querys) => {
    return {
      type: Types.SEARCH_VALUE,
      payload: querys,
    };
  },
};
