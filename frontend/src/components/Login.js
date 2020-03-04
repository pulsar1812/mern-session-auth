import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions/session';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
      <Link to='/signup'>Signup</Link>
    </Fragment>
  );
};

// const mapStateToProps = ({ errors }) => ({
//   errors
// });

// const mapDispatchToProps = dispatch => ({
//   login: user => dispatch(login(user))
// });

export default connect(null, { login })(Login);
