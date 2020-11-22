import todos, { initialState } from '../todos';
import { addTodo, toggleTodo, setFilter, addTodoSuccess, toggleSuccess } from '../../actions';
import { VISIBILITY_FILTERS } from '../../../constants';

describe('todos Reducer Test', () => {
  let state;

  beforeEach(() => {
    state = todos();
    const {payload} = addTodo("Test");
    state = todos(initialState, addTodoSuccess(payload));
  });

  it('should reduce action ADD_TODO_SUCCESS', () => {          
    expect(state).toEqual({allIds:[1], byIds:{"1": { "content":"Test","completed":false }}});
  });

  it('should reduce action TOGGLE_TODO_SUCESS', () => {  
    state = todos(state, toggleSuccess(2));
    expect(state).toEqual({"allIds":[2],"byIds":{"2":{"content":"Test","completed":true }}})
  });
  
  test('should ignore action SET_FILTER', () => {
    let bef = state;
    state = todos(state, setFilter(VISIBILITY_FILTERS.ALL));
    expect(bef).toEqual(state);
  });
    
});
