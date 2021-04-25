import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/home';
import Layout from '../Layout';
import UsersTableCompnent from '../UsersTable/UsersTableCompnent';

import {
  HOME,
  USERSTABLE,
} from './routes';

const LayoutRoutes = () => (
  <Layout>
    <Switch>
      <Route exact path={HOME.route} component={Home} />
      <Route exact path={USERSTABLE.route} component={UsersTableCompnent} />
      <Redirect to={HOME.route} />
    </Switch>
  </Layout>
);

export default LayoutRoutes;
