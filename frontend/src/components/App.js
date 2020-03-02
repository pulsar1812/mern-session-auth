import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

export default () => (
  <BrowserRouter>
    <Route exact path='/' component={Welcome} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/dashboard' component={Dashboard} />
  </BrowserRouter>
);
