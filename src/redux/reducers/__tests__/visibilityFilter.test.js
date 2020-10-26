import visibilityFilter from '../visibilityFilter';
import { setFilter, addTodo } from '../../actions';
import { VISIBILITY_FILTERS } from '../../../constants';

describe('visibilityFilter', () => {
  let state;

  beforeEach(() => {
    state = visibilityFilter();
  });

  test('should reduce action SET_FILTER', () => {
    state = visibilityFilter(state, setFilter(VISIBILITY_FILTERS.ALL));
  })
  
  test('should ignore action ADD_TODO', () => {
    let bef = state;
    state = visibilityFilter(state, addTodo("Task 1"));
    expect(bef).toEqual(state);
  });
})
