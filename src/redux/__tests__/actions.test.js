import { addTodo, toggleTodo, setFilter } from "../actions";
import { VISIBILITY_FILTERS } from "../../constants";

describe("actions", () => {
  it("should build addTodo action", () => {
    const action = addTodo("item 1");
    expect(action).toEqual({"type":"ADD_TODO","payload":{"id":1,"content":"item 1"}});
  });

  test("should build toggleTodo action", () => {
    const action = toggleTodo(1);
    expect(action).toEqual({"type":"TOGGLE_TODO","payload":{"id":1}});
  });
  
  test("should build setFilter action", () => {
    const action = setFilter(VISIBILITY_FILTERS.ALL);
    expect(action).toEqual({"type":"SET_FILTER","payload":{"filter":"all"}});
  });  
});





