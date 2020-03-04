import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/types';

const _nullSession = { userId: null, username: null };

export default (state = _nullSession, action) => {
  const { type, payload } = action;
  Object.freeze(state);

  switch (type) {
    case RECEIVE_CURRENT_USER:
      return payload;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_ERRORS:
      return 'custom error message';
    default:
      return state;
  }
};
