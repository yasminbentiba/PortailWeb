import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import browserHistory from './browserHistory';

import SignUp from '../signup/signup';
import LogIn from '../login/login';
import LayoutRoutes from './LayoutRoutes';

import {
  LAYOUT_ROUTES,
} from './routes';

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
       <Switch>
         <Route path="/login" component={LogIn} />
        <Route path="/login" component={LogIn} />
       <Route path="/signup" component={SignUp} />
       <Route path={LAYOUT_ROUTES.map(({ route }) => route)} component={LayoutRoutes} />
      </Switch> 
       </Router>
    );
  }
}

export default AppRouter;
