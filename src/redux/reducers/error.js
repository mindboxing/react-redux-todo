import { ADD_TODO_FAIL } from '../actionTypes';

export const initialState = {
    error: false,
    message: null
}

export const error = (state = initialState, action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ADD_TODO_FAIL: 
      const resp = action.payload.error.response;
      return (resp) 
      ? { error: true, message: `${resp.status} : ${resp.statusText}`} 
      : state
    default: return {
      error: false,
      message: null
    }
  }
}

export default error;