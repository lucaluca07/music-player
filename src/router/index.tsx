import React from 'react';
import { Route, Switch } from 'react-router-dom';

const RouterMap = () => {
  return (
    <Switch>
      <Route path='/' component={() => <div>index</div>} />
    </Switch>
  );
};

export default RouterMap;
