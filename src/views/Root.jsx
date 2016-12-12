import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import LoginView from './LoginView';
import DashboardView from './DashboardView';
import HomeView from './HomeView';
import injectTapEventPlugin from 'react-tap-event-plugin';
import "babel-polyfill";


injectTapEventPlugin();

export default class Root extends React.Component {
  render () {
    const history = syncHistoryWithStore(browserHistory, this.props.store);
    let currentUrl = window.href;

    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            <Router history={history}>
              <Route path='/' component={HomeView}>
                <Route path='dashboard' component={DashboardView} />
              </Route>
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}
