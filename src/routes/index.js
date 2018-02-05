import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

const context = require.context('./', true, /^\.\/((?!\/)[\s\S])+\/index\.js$/);
const keys = context.keys();

export default function () {
  return (
    <Router>
      <Switch>
        {keys.map(key => context(key).default || context(key))}
      </Switch>
    </Router>
  );
}
