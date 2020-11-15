import React from  "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import TodoApp from '../TodoApp';
import { initialState as todos } from "../redux/reducers/todos";
import { initialState as visibilityFilter } from "../redux/reducers/visibilityFilter";
import { initialState as error } from "../redux/reducers/error";

const mockStore = configureStore([]);
function renderComponent(ui, state={todos, visibilityFilter, error}) {
  const store = mockStore(state);
  return [render((
      <Provider store={store}>
          {ui}
      </Provider>
  )), store];
}

describe('TodoApp', () => {
  test('should render', () => {
    const [element, _] = renderComponent(<TodoApp />);
    expect(element).toMatchSnapshot();
  })  
})
