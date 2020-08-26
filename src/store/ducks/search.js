export const Types = {
  FILTER_CARD: 'cards/FILTER_CARDS',
  SELECTED_TAGS: 'cards/SELECTED_TAGS',
  SEARCH_VALUE: 'cards/SEARCH_VALUE',
};

const INITIAL_STATE = {
  filtered: [],
  selectedTags: [],
  searchValue: ''
};

export default function cards(state = INITIAL_STATE, action) {
  switch (action.type) {
      case Types.FILTER_CARD:
      return {
        ...state,
        filtered: action.filtered
      };
      case Types.SELECTED_TAGS:
      return {
        ...state,
        filtered: action.tags
      };
      case Types.SEARCH_VALUE:
      return {
        ...state,
        filtered: action.query
      };
    default:
      return state;
  }
}

function filterCard(query,card,tags){
  let count = 0;
  let value = card.name;
  for(let t of tags){
      for(let c of card.tags){
        if(c.name == t){
          count++;
        }
      } 
  }
  if(count === tags.length) {
    if(value.indexOf(query) > -1) {
      return card;
    }
  } 
}

export const Creators = {
  filter: (query,cards,tags) => {
    let filtered = [];
    filtered = cards.filter(card => filterCard(query,card,tags))
    return {
      type: Types.FILTER_CARD,
      filtered
    }
  },
  setTags: (tags)=>(
    {
      type: Types.SEARCH_CARD,
      tags
  }),
  setQuery: (querys)=>(
    {
      type: Types.SEARCH_CARD,
      querys
  })
}
