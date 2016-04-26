import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './lib/stores/configureStore';
import LoginView from './views';
import { loginUser, loginUserSuccess, logout } from './lib/actions/authentication';
import { getEventData, postEventData, getEventClassData, postEventClassData } from './lib/actions/todo';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const target = document.getElementById('app');
const store = configureStore(window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={LoginView}>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
)
