import { addTodo, watchAddTodo } from './addTodoSaga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    addTodo(),
    watchAddTodo()
  ]);
}