import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/index';
import Layout from '../layouts/Default/index';

const AuthRoutes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <Layout name="Login" to="create">
          <Login />
        </Layout>
      )}
    />

    <Route
      path="*"
      component={() => (
        <Layout name="Login" to="create">
          <Login />
        </Layout>
      )}
    />
  </Switch>
);

export default AuthRoutes;
