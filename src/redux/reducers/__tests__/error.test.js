import error, { initialState } from '../error';
import { addTodo, toggleTodo, setFilter, addTodoFail } from '../../actions';
import { VISIBILITY_FILTERS } from '../../../constants';

describe('todos Reducer Test', () => {  
  it('should reduce action ADD_TODO_FAIL with axios error', () => {
    const state = error(initialState, addTodoFail({response: {statusText: "Error", status: 500}}));
    expect(state).toEqual({error: true, message: "500 : Error"});
  });
  
  it('should reduce action ADD_TODO_FAIL with js error', () => {   
    const state = error(initialState, addTodoFail({}));   
    expect(state).toEqual({error: false, message: null});
  });

  it('should reduce action ADD_TODO_FAIL with undefined', () => {   
    const state = error();   
    expect(state).toEqual({error: false, message: null});
  });

  it('should reduce action ADD_TODO', () => {   
    const state = error(initialState, addTodo({}));   
    expect(state).toEqual({error: false, message: null});
  });

});
