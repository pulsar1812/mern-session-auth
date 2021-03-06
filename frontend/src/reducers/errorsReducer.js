import {
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
  RECEIVE_ERRORS
} from '../actions/types';

export default (state = '', action) => {
  const { type, payload } = action;

  Object.freeze(state);
  switch (type) {
    case RECEIVE_ERRORS:
      return message;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return '';
    default:
      return state;
  }
};
