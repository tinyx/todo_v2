import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, AUTH_URL} from '../constants/authentication';
import {checkHttpStatus, parseJSON} from '../utils';
import jwtDecode from 'jwt-decode';


export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: error.response
  }
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: LOGOUT_USER
  }
}

export function logoutAndRedirect() {
  return (dispatch, state) => {
    dispatch(logout());
  }
}

export function loginUser(username, password, redirect="/") {
  return function(dispatch) {
    dispatch(loginUserRequest());
    return fetch(AUTH_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      try {
        let decoded = jwtDecode(response.token);
        dispatch(loginUserSuccess(response.token));
      } catch (e) {
        let responseDict = {
          status: 400,
          statusText: 'Invalid login credentials'
        };
        if('username' in response) {
          responseDict.emailError = response['username'][0];
        }
        if('password' in response) {
          responseDict.passwordError = response['password'][0];
        }
        if('non_field_errors' in response) {
          responseDict.nonFieldError = response['non_field_errors'][0];
        }
        dispatch(loginUserFailure({
          response: responseDict
        }));
      }
    })
    .catch(error => {
        dispatch(loginUserFailure(error));
    })
  }
}
