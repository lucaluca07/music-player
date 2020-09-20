import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const RouterMap = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={() => <div>index</div>} />
      </Switch>
    </Router>
  );
};

export default RouterMap;
