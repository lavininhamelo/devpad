import { getAll } from '../../services/tags';
import { Creators } from '../ducks/tags';
export const tagThunks = {
  getAll: (dispatch) => {
    getAll().then((tags) => {
      dispatch(Creators.getAll(tags));
    });
  },
};
