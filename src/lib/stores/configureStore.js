import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';


export default function configureStore(initialState) {
  let createStoreWithMiddleware;
  const logger = createLogger();
  const router = routerMiddleware(browserHistory);
  createStoreWithMiddleware = compose(
    applyMiddleware(thunk, router, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  return store;
}
