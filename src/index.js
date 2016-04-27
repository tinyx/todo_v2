import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './lib/stores/configureStore';
import Root from './views/Root';

import { browserHistory } from 'react-router'

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('app')
);


