import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import authentication from './authentication';
import todo from './todo';


export default combineReducers({
  auth: authentication,
  todo: todo,
  routing: routerReducer
});
