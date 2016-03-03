import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/top-bar.jsx';
import VisibleClassNav from './containers/visible-class-nav.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todoApp from './reducers';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
require("../css/main.css");


let store = createStore(todoApp);

ReactDOM.render(<Provider store={store}>
                  <div>
                      <TopBar/>
                      <div>
                          <VisibleClassNav/>
                      </div>
                  </div>
                </Provider>
                , document.getElementById('app'));
