import { combineReducers } from 'redux';

import cardsReducer from './cards';
import tagsReducer from './tags';
import searchReducer from './search';

export default combineReducers({
  cardsReducer,
  tagsReducer,
  searchReducer,
});
