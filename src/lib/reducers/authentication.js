import {createReducer} from '../utils';
import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER} from '../constants/authentication';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  emailError: null,
  passwordError: null,
  nonFieldError: null
};

export default createReducer(initialState, {
  [LOGIN_USER_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'isAuthenticating': true,
      'statusText': null,
      'emailError': null,
      'passwordError': null,
      'nonFieldError': null
    });
  },
  [LOGIN_USER_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      'isAuthenticating': false,
      'isAuthenticated': true,
      'token': payload.token,
      'userName': jwtDecode(payload.token).userName,
      'statusText': 'You have been successfully logged in.',
      'emailError': null,
      'passwordError': null,
      'nonFieldError': null
    });

  },
  [LOGIN_USER_FAILURE]: (state, payload) => {
    return Object.assign({}, state, {
      'isAuthenticating': false,
      'isAuthenticated': false,
      'token': null,
      'userName': null,
      'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`,
      'emailError': payload.emailError,
      'passwordError': payload.passwordError,
      'nonFieldError': payload.nonFieldError
    });
  },
  [LOGOUT_USER]: (state, payload) => {
    return Object.assign({}, state, {
      'isAuthenticated': false,
      'token': null,
      'userName': null,
      'statusText': 'You have been successfully logged out.',
      'emailError': null,
      'passwordError': null,
      'nonFieldError': null
    });
  }
});
