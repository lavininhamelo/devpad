import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import CreateNote from './pages/CreateNote/index';

const Routes = () => (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/criar" component={CreateNote} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
 
);

export default Routes;
