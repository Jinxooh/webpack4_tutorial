import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
);

export default App;
