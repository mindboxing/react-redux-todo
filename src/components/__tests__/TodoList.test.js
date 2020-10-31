import React from  "react";
import TodoList from "../TodoList";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
function renderComponent(ui, state={}) {
  const store = mockStore(state);
  return [render((
      <Provider store={store}>
          {ui}
      </Provider>
  )), store];
}

describe('TodoList', () => {

  afterAll(cleanup);
  
  test('should render with no todos', () => {
    const state = {
      todos: {
        allIds: [], 
        byIds: {}
      },
      visibilityFilter: "all"
    };
    renderComponent(<TodoList />, state);
  })  

  test('should render with todos', () => {
    const state = {
      todos: {
        allIds: [1,2],
        byIds: {
          "1": {completed: false},
          "2": {completed: true}
        }
      },
      visibilityFilter: "completed"
    };
    renderComponent(<TodoList />, state);
  }) 
})
