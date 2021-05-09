import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/home';
import Layout from '../Layout';
import UsersTableCompnent from '../UsersTable/UsersTableCompnent';
import Forum from "../Forum/forum";
import Annuaire from "../Annuaire/index";
import contactForm from "../Contact/contactForm";
import Profile from '../login/profile';
import Post from '../Forum/post';



import {
  HOME,
  USERSTABLE,
  FORUM,
  ATELIERTYPE,
  CONTACT,
  PROFILE,
  POST
} from './routes';

const LayoutRoutes = () => (
  <Layout>
    <Switch>
      <Route exact path={HOME.route} component={Home} />
      <Route exact path={USERSTABLE.route} component={UsersTableCompnent} />
      <Route exact path={FORUM.route} component={Forum} />
      <Route exact path={ATELIERTYPE.route} component={Annuaire} />
      <Route exact path={CONTACT.route} component={contactForm} />
      <Route exact path={PROFILE.route} component={Profile} />
      <Route exact path={POST.route} component={Post} />


      

      <Redirect to={HOME.route} />

    </Switch>
  </Layout>
);

export default LayoutRoutes;
