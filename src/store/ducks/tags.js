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
      const { name, _id, color } = action.payload;
      const oldValues = { ...state };
      oldValues.tags.push({ name, _id, color, selected: false });
      console.log('reducer ', oldValues);
      return oldValues;
    case Types.GET_ALL:
      console.log(action);
      return { tags: [...action.payload] };
    case Types.DELETE:
      return state;
    default:
      return state;
  }
}

export const Creators = {
  add: ({ _id, name, color }) => ({
    type: Types.ADD,
    payload: { _id, name, color },
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
