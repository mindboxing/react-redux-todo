import React from  "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import TodoApp from '../TodoApp';

const mockStore = configureStore([]);
function renderComponent(ui, state={ 
  todos: {
    allIds: [], 
    byIds: {}
  },
  visibilityFilter: "all"
}) {
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
