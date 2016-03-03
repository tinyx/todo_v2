/*
 * action types
 */

export const GET_CLASSES = 'GET_CLASSES'
export const SELECT_CLASS = 'SELECT_CLASS'
export const ADD_CLASS = 'ADD_CLASS'
export const REMOVE_CLASS = 'REMOVE_CLASS'

export const GET_TODOS = 'GET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function getClasses() {
  return {
    type: GET_CLASSES,
  }
}

export function selectClass(id) {
  return {
    type: SELECT_CLASS,
    id: id
  }
}

export function addClass(text) {
  return {
    type: ADD_CLASS,
    text: text
  }
}

export function removeClass(id) {
  return {
    type: REMOVE_CLASS,
    id: id
  }
}

export function getTodos(id) {
  return {
    type: GET_TODOS,
    id: id
  }
}

export function addTodo(text, dueDate, priority) {
  return { 
    type: ADD_TODO, 
    payload: {
      text: text,
      dueDate: dueDate,
      priority: priority
    }
  }
}

export function editTodo(id, text, dueDate, priority) {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
      text: text,
      dueDate: dueDate,
      priority: priority
    }
  }
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO, 
    id: id
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id
  }
}

export function setVisibilityFilter(filter) {
  return { 
    type: SET_VISIBILITY_FILTER, 
    filter 
  }
}
