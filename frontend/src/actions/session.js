import * as apiUtil from '../util/session';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from './types';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = ({ message }) => ({
  type: RECEIVE_ERRORS,
  message
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => async dispatch => {
  const res = await apiUtil.login(user);
  const data = await res.json();

  if (res.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const signup = user => async dispatch => {
  const res = await apiUtil.signup(user);

  const data = await res.json();

  if (res.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const logout = () => async dispatch => {
  const res = await apiUtil.logout();
  const data = await res.json();

  if (res.ok) {
    return dispatch(logoutCurrentUser());
  }
  return dispatch(receiveErrors(data));
};
