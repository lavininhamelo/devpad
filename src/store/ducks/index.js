import {combineReducers} from 'redux'

import cardsReducer from './cards'
import tagsReducer from './tags'

export default  combineReducers({
  cardsReducer, tagsReducer
})