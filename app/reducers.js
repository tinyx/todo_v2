import { combineReducers } from 'redux'
import { 
  GET_CLASSES, SELECT_CLASS, ADD_CLASS, REMOVE_CLASS,
  GET_TODOS, ADD_TODO, EDIT_TODO, COMPLETE_TODO, REMOVE_TODO,
  SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters
/*
store structure:
{
  visibilityFilter: 'SHOW_ALL',
  classes: {
    currentClass: 1,
    classesIdList: [1, 2],
    classesById: {
      1: {
        text: 'Class 1',
        todos: [1, 2]
      }
      2: {
        text: 'Class 2',
        todos: [3]
      }
    }
  },
  todos: {
    1: {
      text: 'I wanna finish this website',
      endDate: '2016-12-31',
      priority: 1,
      completed: false
    },
    2: {
      text: 'I wanna finish crabfactory v2 as well',
      endDate: '2016-12-31',
      priority: 2,
      completed: false
    },
    3: .....
  }
}
*/

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function classes(state = {classesIdList: [], classesById: {}, currentClass: null}, action) {
  switch (action.type) {
    case GET_CLASSES: {
      console.log(action);
      return state
    }
    case SELECT_CLASS: {
      var new_state = Object.assign({}, state);
      new_state.currentClass = action.id;
      return new_state;
    }
    case ADD_CLASS:
      return state
    case REMOVE_CLASS:
      return state
    default:
      return {
        classesIdList: [1, 2],
        classesById: {
          1: {
            text: 'Class 1',
          },
          2: {
            text: 'Class 2',
          }
        },
        currentClass: 1
      }
  }
}

function todos(state = {}, action) {
  switch (action.type) {
    case GET_TODOS:
      return state
    case ADD_TODO:
      return state
    case COMPLETE_TODO:
      return state
    case EDIT_TODO:
      return state
    case REMOVE_TODO:
      return state
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  classes,
  todos
})

export default todoApp
