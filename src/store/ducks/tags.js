export const Types = {
  ADD: 'tags/ADD',
  DELETE: 'tags/DELETE',
};

const INITIAL_STATE = {
  tags: [
    {
      id: 1,
      name: "CSS",
      color: "blue"
    },
    {
      id: 2,
      name: "HTML",
      color: "orange"
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      color: "yellow"
    },
    {
      id: 4,
      name: "VUE",
      color: "green"
    },
    {
      id: 5,
      name: "REACT",
      color: "lightblue"
    }
  ],
};

export default function tags(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      const {name,id,color} = action.payload
      let oldValues = {...state}
      oldValues.tags.push({id,name,color})
      return oldValues;
    case Types.DELETE:
      return state;
    default:
      return state;
  }
}

export const Creators = {
  add: ({id,name,color}) => ({
    type: Types.ADD,
    payload: {id,name,color},
  }),
  remove: (id) => ({
    type: Types.DELETE,
    id,
  }),

};
