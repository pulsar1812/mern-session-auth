import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup } from '../actions/session';

const Signup = ({ signup }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    signup({ username, email, password });
  };

  return (
    <Fragment>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={username}
          onChange={handleChange}
        />
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
      <Link to='/login'>Login</Link>
    </Fragment>
  );
};

// const mapStateToProps = ({ errors }) => ({
//   errors
// });

// const mapDispatchToProps = dispatch => ({
//   signup: user => dispatch(signup(user))
// });

export default connect(null, { signup })(Signup);
