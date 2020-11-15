import React from 'react';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilters from './components/VisibilityFilters'
import "./styles.css";
import ErrorMessage from './components/ErrorMessage'

export default function TodoApp() {  
  return (
      <div className="todo-app">
          <h1>Todo List</h1>
          <ErrorMessage />
          <AddTodo />
          <TodoList />
          <VisibilityFilters />            
      </div>
  );
}