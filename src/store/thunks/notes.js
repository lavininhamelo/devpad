import { list } from '../../services/notes';
import { Creators } from '../ducks/cards';

export const noteThunks = {
  list: (dispatch) => {
    list().then((notes) => {
      dispatch(Creators.setCards(notes));
    });
  },
};
