import {createReducer} from '../utils';
import {
  GET_EVENT_DATA_REQUEST,
  POST_EVENT_DATA_REQUEST,
  PUT_EVENT_DATA_REQUEST,
  DELETE_EVENT_DATA_REQUEST,
  RECEIVE_EVENT_DATA,

  GET_EVENT_CLASS_DATA_REQUEST,
  POST_EVENT_CLASS_DATA_REQUEST,
  PUT_EVENT_CLASS_DATA_REQUEST,
  DELETE_EVENT_CLASS_DATA_REQUEST,
  RECEIVE_EVENT_CLASS_DATA,
  SELECT_EVENT_CLASS
} from '../constants/todo';


const initialState = {
  'classes': [],
  'fetchingClassData': false,
  'currentClass': null,

  'events': [],
  'fetchingEventData': false,
};

export default createReducer(initialState, {
  [GET_EVENT_CLASS_DATA_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'fetchingClassData': true
    });
  },
  [RECEIVE_EVENT_CLASS_DATA]: (state, payload) => {
    let currentClass;
    if(state.currentClass === null && payload.length > 0) {
      currentClass = payload[0].id;
    }
    else {
      currentClass = state.currentClass;
    }
    return Object.assign({}, state, {
      'fetchingClassData': false,
      'classes': payload,
      'currentClass': currentClass
    });
  },
  [SELECT_EVENT_CLASS]: (state, payload) => {
    return Object.assign({}, state, {
      'currentClass': payload
    });
  },
  [POST_EVENT_CLASS_DATA_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'fetchingClassData': true
    });
  },
  [PUT_EVENT_CLASS_DATA_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'fetchingClassData': true
    });
  },
  [DELETE_EVENT_CLASS_DATA_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'fetchingClassData': true
    })
  },
  [GET_EVENT_DATA_REQUEST]: (state, payload) => {
    return Object.assign({}, state, {
      'fetchingEventData': true
    });
  },
  [RECEIVE_EVENT_DATA]: (state, payload) => {
    return Object.assign({}, state, {
      'fetchingEventData': false,
      'events': payload,
    });
  }
});

