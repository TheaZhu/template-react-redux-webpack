import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';
import createRouter from './routes';
import './assets/css/common.css';

if (process.env.NODE_ENV !== 'production') {
  require('./mock');
}

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <Provider store={store}>
        {createRouter()}
      </Provider>
    );
  }
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('app-root')
);
