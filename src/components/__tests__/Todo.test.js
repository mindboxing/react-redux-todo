import React from  "react";
import Todo from "../Todo";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { toggleTodo } from '../../redux/actions';

const mockStore = configureStore([]);
describe('Todo', () => {  
  function renderComponent(state, ui) {
    const store = mockStore(state);
    return [render((
        <Provider store={store}>
            {ui}
        </Provider>
    )), store];
  }

  afterAll(cleanup);

  test('should render as todo', () => {       
    const todo = { id: 1, content: "TEST", completed: false };
    renderComponent({todo}, <Todo key={`todo-${todo.id}`} todo={todo} />);    
    screen.getByText("👋");
    screen.getByText("TEST");
  });    

  test('should render as completed', () => {
    const todo = { id: 1, content: "TEST", completed: true };
    renderComponent({todo}, <Todo key={`todo-${todo.id}`} todo={todo} />);    
    screen.getByText("👌");
    screen.getByText("TEST");
  });

  test('should clicked on todo will toggle', () => {
    const todo = { id: 1, content: "TEST", completed: true };    
    const [, store] = renderComponent({todo}, <Todo key={`todo-${todo.id}`} todo={todo} />);
    fireEvent.click(screen.getByText("TEST"));
    expect(store.getActions()).toContainEqual(toggleTodo(todo.id));
  });
});
