import { TOGGLE_TODO } from '../actionTypes';
import { takeEvery, call, put } from 'redux-saga/effects'
import { toggle } from '../../api/todoApi'
import { toggleSuccess, toggleFail } from '../actions'

export function* toggleTodo(action) {
  try {    
    const id = action.payload.id;
    yield call(toggle, id);
    yield put(toggleSuccess(id));
  } catch (error) {
    yield put(toggleFail(error));
  }
}

export function* watchToggleTodo() {
  yield takeEvery(TOGGLE_TODO, toggleTodo);
}
