import { combineReducers } from 'redux'
import { 
  ADD_CLASS, REMOVE_CLASS, ADD_TODO
  EDIT_TODO, COMPLETE_TODO, REMOVE_TODO,
  SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters
/*
store structure:
{
  visibilityFilter: 'SHOW_ALL',
  currentClass: 1,
  classes: [1, 2],
  classesById: {
    1: {
      text: 'Class 1',
      todos: [1, 2]
    }
    2: {
      text: 'Class 2',
      todos: [3]
    }
  },
  todosById: {
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

function classes(state = [], action) {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        classes: [],
        classesById: {}
      }
    case REMOVE_CLASS:
      return {
        ...state,
        classes: [],
        classById: {}
      }
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp