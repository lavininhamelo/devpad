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
      console.log(1);
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

// cards.filter(function (card) {
//   let count = 0;
//   let value = card.title;
//   for (let t of tags) {
//     for (let c of card.tags) {
//       if (c.name === t.name) {
//         count++;
//       }
//     }
//   }
//   if (count === tags.length) {
//     console.log('value', value);
//     if (value.indexOf(query) > -1) {
//       console.log('value2', value);
//       return card;
//     }
//   }

//   return [];
// })

function filterCard(query, card, tags) {
  let count = 0;
  let value = card.title;
  for (let t of tags) {
    for (let c of card.tags) {
      if (c.name === t.name) {
        count++;
      }
    }
  }
  if (count === tags.length) {
    console.log('value', value);
    if (value.indexOf(query) > -1) {
      console.log('value2', value);
      return card;
    }
  }
}

export const Creators = {
  filter: (query, cards, tags) => ({
    type: Types.FILTER_CARD,
    filtered: cards,
  }),

  setTags: (tags) => ({
    type: Types.SELECTED_TAGS,
    tags,
  }),
  setQuery: (querys) => ({
    type: Types.SEARCH_VALUE,
    payload: querys,
  }),
};
