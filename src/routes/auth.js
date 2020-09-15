import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/index';
import Register from '../pages/Register/index';

const AuthRoutes = () => (
  <Switch>
    <Route exact path="/" component={() => <Login />} />
    <Route exact path="/register" component={() => <Register />} />
    <Route path="*" component={() => <Login />} />
  </Switch>
);

export default AuthRoutes;
