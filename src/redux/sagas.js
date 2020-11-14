import { ADD_TODO } from './actionTypes';
import { takeEvery, all, delay } from 'redux-saga/effects'

export function* addTodo() {
  console.log("AddTodo");
  yield delay(1000);
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo);
}

export function* rootSaga() {
  yield all([
    addTodo,
    watchAddTodo
  ]);
}