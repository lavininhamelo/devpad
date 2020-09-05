import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from './cards';
import tagsReducer from './tags';
import searchReducer from './search';

export default combineReducers(
  {
    notesReducer,
    tagsReducer,
    searchReducer,
  },
  applyMiddleware(thunk),
);
