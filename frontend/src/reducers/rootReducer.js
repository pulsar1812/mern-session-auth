import { combineReducers } from 'redux';
import errors from './errorsReducer';
import session from './sessionReducer';

export default combineReducers({
  session,
  errors
});
