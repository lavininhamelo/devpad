import * as Note from '../../services/notes';
import { Creators } from '../ducks/cards';

export const noteThunks = {
  list: (dispatch) => {
    Note.list().then((notes) => {
      dispatch(Creators.setCards(notes));
    });
  },
  create: (dispatch, data) => {
    Note.create(data).then(() => {
      noteThunks.list(dispatch);
    });
  },
  update: (dispatch, id, data) => {
    Note.update(id, data).then(() => {
      noteThunks.list(dispatch);
    });
  },
  remove: (dispatch, id) => {
    Note.remove(id).then(() => {
      noteThunks.list(dispatch);
    });
  },
  show: (dispatch, id) => {
    Note.show(id).then((note) => {
      console.log(note);
    });
  },
};
