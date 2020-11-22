import error, { initialState } from '../error';
import { addTodo, addTodoFail, toggleFail } from '../../actions';

describe('Reducers for errors failure action', () => {  
  it('should reduce action ADD_TODO_FAIL with axios error', () => {
    const state = error(initialState, addTodoFail({response: {statusText: "Error", status: 500}}));
    expect(state).toEqual({error: true, message: "500 : Error"});
  });

  it('should reduce action TOGGLE_TODO_FAILURE with axios error', () => {
    const state = error(initialState, toggleFail({response: {statusText: "Error", status: 500}}));
    expect(state).toEqual({error: true, message: "500 : Error"});
  });
});

describe('Handling reducing for any other incoming action', () => {  
  it('should reset error for other ADD_TODO', () => {   
    const state = error(initialState, addTodo({}));   
    expect(state).toEqual({error: false, message: null});
  });

  it('should not throw error with invalid input', () => {   
    const state = error();
    expect(state).toEqual({error: false, message: null});
  });

  it('should not throw error with invalid error', () => {   
    const action = toggleFail();
    const state = error(initialState, action);
    expect(state).toEqual({error: false, message: null});
  });
});
