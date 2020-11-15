import { ADD_TODO } from '../actionTypes';
import { takeEvery, call, put } from 'redux-saga/effects'
import { add } from '../../api/todoApi'
import { addTodoSuccess, addTodoFail } from '../actions'

export function* addTodo(todo) {
  const result = yield call(add, todo.payload);
  if (result.httpStatus === 201) {
    yield put(addTodoSuccess(todo.payload));
  } else {
    yield put(addTodoFail(result));
  }
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo);
}
