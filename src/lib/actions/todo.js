import {
  GET_EVENT_DATA_REQUEST, 
  POST_EVENT_DATA_REQUEST,
  PUT_EVENT_DATA_REQUEST,
  DELETE_EVENT_DATA_REQUEST,
  RECEIVE_EVENT_DATA,
  EVENT_URL,
  GET_EVENT_CLASS_DATA_REQUEST, 
  POST_EVENT_CLASS_DATA_REQUEST,
  PUT_EVENT_CLASS_DATA_REQUEST,
  DELETE_EVENT_CLASS_DATA_REQUEST,
  RECEIVE_EVENT_CLASS_DATA,
  SELECT_EVENT_CLASS,
  EVENT_CLASS_URL
} from '../constants/todo'
import { loginUserFailure, logoutAndRedirect } from '../actions/authentication'
import {checkHttpStatus, parseJSON} from '../utils'


// ================= Event APIs ===================

export function receiveEventData(data) {
  return {
    type: RECEIVE_EVENT_DATA,
    payload: data
  }
}

export function getEventDataRequest() {
  return {
    type: GET_EVENT_DATA_REQUEST
  }
}

export function getEventData(token) {
  return (dispatch, state) => {
    dispatch(getEventDataRequest());
    return fetch(EVENT_URL, {
      credentials: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(receiveEventData(response));
    })
    .catch(error => {
      if(error.response.status === 401) {
        dispatch(loginUserFailure(error));
      }
      else if(error.response.status === 403) {
        dispatch(logoutAndRedirect());
      }
    })
  }
}

export function postEventDataRequest() {
  return {
    type: POST_EVENT_DATA_REQUEST,
  }
}

export function postEventData(token, data) {
  return (dispatch, state) => {
    dispatch(postEventDataRequest());
    return fetch(EVENT_URL, {
      method: 'POST',
      credentials: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      body: JSON.stringify(data)
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(receiveEventData(response));
    })
    .catch(error => {
      if(erros.response.status === 401) {
        dispatch(loginUserFailure(error));
      }
      else if(error.response.status === 403) {
        dispatch(logoutAndRedirect());
      }
    })
  }
}


// ================= Event Class APIs ===================


export function receiveEventClassData(data) {
  return {
    type: RECEIVE_EVENT_CLASS_DATA,
    payload: data
  }
}

export function getEventClassDataRequest() {
  return {
    type: GET_EVENT_CLASS_DATA_REQUEST
  }
}

export function getEventClassData(token) {
  return (dispatch, state) => {
    dispatch(getEventClassDataRequest());
    return fetch(EVENT_CLASS_URL, {
      credentials: 'cors',
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${token}`
      }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(receiveEventClassData(response));
    })
    .catch(error => {
      if(error.response.status === 401) {
        dispatch(loginUserFailure(error));
      }
      else if(error.response.status === 403) {
        dispatch(logoutAndRedirect());
      }
    })
  }
}

export function postEventClassDataRequest() {
  return {
    type: POST_EVENT_CLASS_DATA_REQUEST,
  }
}

export function postEventClassData(token, data) {
  return (dispatch, state) => {
    dispatch(postEventClassDataRequest());
    return fetch(EVENT_CLASS_URL, {
      method: 'POST',
      credentials: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      body: JSON.stringify(data)
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(receiveEventClassData(response));
    })
    .catch(error => {
      if(error.response.status === 401) {
        dispatch(loginUserFailure(error));
      }
      else if(error.response.status === 403) {
        dispatch(logoutAndRedirect());
      }
    })
  }
}

export function selectEventClass(id) {
  return {
    type: SELECT_EVENT_CLASS,
    payload: id
  }
}
