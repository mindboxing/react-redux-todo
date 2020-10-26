import React from  "react";
import Todo from "../Todo";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import mockStore from 'redux-mock-store';

// const wrapper = (ui, store = createStore(() => {})) => (
//   <Provider store={store}>{ui}</Provider>
// );

const wrapper = (ui, store = createStore(() => {})) => (
  <Provider store={store}>{ui}</Provider>
);

describe('Todo', () => {  
  test('should render as todo', () => {       
    const todo = { id: 1, content: "TEST", completed: false };
    const renderResult = render(wrapper(<Todo key={`todo-${todo.id}`} todo={todo}/>));
    expect(renderResult).toMatchSnapshot();
  });    

  test('should render as completed', () => {
    const todo = { id: 1, content: "TEST", completed: true };
    const tree = render(wrapper(<Todo key={`todo-${todo.id}`} todo={todo}/>));
    expect(tree).toMatchSnapshot();    
  })  

  test('should clicked on todo will toggle', () => {
    const todo = { id: 1, content: "TEST", completed: true };
    
    render(wrapper(<Todo key={`todo-${todo.id}`} todo={todo} />));
    fireEvent.click(screen.getByText("TEST"));
  })
});
