import axios from 'axios';

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS
} from './types';

// Login
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/session', body, config);

    dispatch({
      type: RECEIVE_CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECEIVE_ERRORS
    });
  }
};

// Signup
export const signup = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: RECEIVE_CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RECEIVE_ERRORS
    });
  }
};

// Logout
export const logout = () => dispatch => {
  axios.delete('/api/session');
  dispatch({ type: LOGOUT_CURRENT_USER });
};
