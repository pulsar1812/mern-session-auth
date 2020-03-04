import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { AuthRoute, ProtectedRoute } from '../util/route';

export default () => (
  <BrowserRouter>
    <Route exact path='/' component={Landing} />
    <AuthRoute path='/login' component={Login} />
    <AuthRoute path='/signup' component={Signup} />
    <ProtectedRoute path='/dashboard' component={Dashboard} />
  </BrowserRouter>
);
