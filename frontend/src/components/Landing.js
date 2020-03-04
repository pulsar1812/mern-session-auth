import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <Fragment>
    <h1>Welcome!</h1>
    <Link to='/login'>Login</Link>
    <br />
    <Link to='/signup'>Signup</Link>
    <br />
    <Link to='/dashboard'>Dashboard</Link>
  </Fragment>
);

export default Landing;
