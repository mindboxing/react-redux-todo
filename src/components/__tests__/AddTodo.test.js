import React from  "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import AddTodo from '../AddTodo';

const mockStore = configureStore([]);
function renderComponent(ui, state={}) {
  const store = mockStore(state);
  return [render((
      <Provider store={store}>
          {ui}
      </Provider>
  )), store];
}

describe('AddTodo', () => {

  afterAll(cleanup);

  test('should render', () => {
    renderComponent(<AddTodo/>);
    screen.debug();
  })
  
  test('should dispatch addTodo by clicking Add Todo button ', () => {
    const [_, store] = renderComponent(<AddTodo/>);
    const inoutNode = screen.getByText('', { selector: 'input' });
    fireEvent.change(inoutNode, { target: { value: 'Test Task' } });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(store.getActions()).toContainEqual({payload: {content: "Test Task", id: 1}, type: "ADD_TODO"});
  })
})
