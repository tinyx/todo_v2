import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './lib/stores/configureStore';
import Root from './views/Root';
import { loginUserSuccess } from './lib/actions/authentication';
import { browserHistory } from 'react-router'


const store = configureStore(window.__INITIAL_STATE__);

let token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('app')
);


