import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './lib/stores/configureStore';
import Root from './views/Root';
import { loginUserSuccess } from './lib/actions/authentication';
import { browserHistory } from 'react-router'


const store = configureStore(window.__INITIAL_STATE__);

function get_cookie(name) {
    var value = "; " + document.cookie;
    var thecookie = null;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        thecookie = parts.pop().split(";").shift();
    }
    return thecookie;
}

let token = get_cookie('jwt_token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}
console.log(document.cookie);
console.log(token);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('app')
);


