import { watchAddTodo } from './addTodoSaga';
import { watchToggleTodo } from './toggleTodoSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    watchToggleTodo(),
    watchAddTodo()
  ]);
}