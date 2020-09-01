export const Types = {
  ADD: 'tags/ADD',
  DELETE: 'tags/DELETE',
  GET_ALL: 'tags/GET_ALL',
};

const INITIAL_STATE = {
  tags: [],
};

export default function tags(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      const { name, id, color } = action.payload;
      let oldValues = { ...state };
      oldValues.tags.push({ id, name, color });
      return oldValues;
    case Types.GET_ALL:
      return { ...state, tags: action.payload };
    case Types.DELETE:
      return state;
    default:
      return state;
  }
}

export const Creators = {
  add: ({ id, name, color }) => ({
    type: Types.ADD,
    payload: { id, name, color },
  }),
  remove: (id) => ({
    type: Types.DELETE,
    id,
  }),
  getAll: (tags) => ({
    type: Types.GET_ALL,
    payload: tags,
  }),
};
