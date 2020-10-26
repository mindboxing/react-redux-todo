import { getTodosByVisibilityFilter, getTodoById } from "../selectors";
import { VISIBILITY_FILTERS } from "../../constants";

describe('selectors getTodosByVisibilityFilter', () => {
  const store = {
    todos: {
      allIds: [1,2],
      byIds: {
        "1": {completed: false},
        "2": {completed: true}
      }
    }
  };

  test('should return COMPLETED', () => {
    const result = getTodosByVisibilityFilter(store, VISIBILITY_FILTERS.COMPLETED);
    expect(result).toEqual([{"completed":true,"id":2}]);
  });  

  test('should return ALL', () => {
    const result = getTodosByVisibilityFilter(store, VISIBILITY_FILTERS.ALL);    
    expect(result).toEqual([{"completed":false,"id":1},{"completed":true,"id":2}]);
  });  

  test('should return INCOMPLETE', () => {
    const result = getTodosByVisibilityFilter(store, VISIBILITY_FILTERS.INCOMPLETE);    
    expect(result).toEqual([{"completed":false,"id":1}]);
  });  

  test('should not return anything with empty store', () => {
    const result = getTodosByVisibilityFilter({}, VISIBILITY_FILTERS.COMPLETED);
    expect(result).toEqual([]);
  });  

  test('should not return anything for non-existent ID', () => {
    store.todos = null;
    const result = getTodoById(store, 1);
    expect(result).toEqual({});
  });  

});
