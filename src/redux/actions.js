import { ADD_TODO, TOGGLE_TODO, SET_FILTER, ADD_TODO_SUCCESS, ADD_TODO_FAIL } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const addTodoFail = (error) => ({
  type: ADD_TODO_FAIL,
  payload: {
      error
  }
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});


export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});
