import { ADD_TODO_FAIL, TOGGLE_TODO_FAIL } from '../actionTypes';

export const initialState = {
    error: false,
    message: null
}

export const error = (state = initialState, action) => {
  const type = action?.type  
  switch (type) {
    case TOGGLE_TODO_FAIL:
    case ADD_TODO_FAIL: {
      const resp = action?.payload?.error?.response;
      return (resp) 
      ? { error: true, message: `${resp.status} : ${resp.statusText}`} 
      : state    
    }
    default: return {
      error: false,
      message: null
    }
  }  
}

export default error;