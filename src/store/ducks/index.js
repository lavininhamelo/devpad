import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from './cards';
import tagsReducer from './tags';
import searchReducer from './search';

export default combineReducers(
  {
    cardsReducer,
    tagsReducer,
    searchReducer,
  },
  applyMiddleware(thunk),
);
