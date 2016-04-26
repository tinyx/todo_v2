import {combineReducers} from 'redux';
import authentication from './authentication';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  auth: authentication,
  routing: routerReducer
});
