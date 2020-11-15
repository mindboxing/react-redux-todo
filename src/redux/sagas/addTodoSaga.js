import { ADD_TODO } from '../actionTypes';
import { takeEvery, call, put } from 'redux-saga/effects'
import { add } from '../../api/todoApi'
import { addTodoSuccess, addTodoFail } from '../actions'

export function* addTodo(todo) {
  if (typeof todo === 'undefined') {
    // TODO why this happen on init?
    return;
  } 

  try {    
    yield call(add, todo.payload);
    yield put(addTodoSuccess(todo.payload));
  } catch (error) {
    yield put(addTodoFail(error));
  }
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo);
}
