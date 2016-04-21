import configureStore from './lib/stores/configureStore';
import {loginUser, loginUserSuccess} from './lib/actions/authentication';

const target = document.getElementById('app');
const store = configureStore(window.__INITIAL_STATE__);

store.dispatch(loginUser('jwttest', 'jwttest'));
/*
let token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}
else {
  store.dispatch(loginUser('jwttest', 'jwttest'));
}
*/