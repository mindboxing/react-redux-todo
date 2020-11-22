import { toggleTodo, watchToggleTodo } from '../toggleTodoSaga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { toggle } from '../../../api/todoApi';
import { toggleSuccess, toggleFail } from '../../actions';

describe('toggleTodoSaga - watchToggleTodo', () => {
  test('should take TOGGLE_TODO', () => {
    const gen = watchToggleTodo();
    expect(gen.next().value).toEqual(takeEvery("TOGGLE_TODO", toggleTodo));    
  })
})

describe('toggleTodoSaga - toggleTodo', () => {
  test('should put toggleSuccess on success', () => {
    const gen = toggleTodo({payload: {id:1}});
    expect(gen.next().value).toEqual(call(toggle, 1));    
    expect(gen.next().value).toEqual(put(toggleSuccess(1)));    
  })

  test('should put toggleFail on failure', () => {
    const error = new Error("TEST");
    const gen = toggleTodo({payload: {id:1}});
    expect(gen.next().value).toEqual(call(toggle, 1));    
    expect(gen.throw(error).value).toEqual(put(toggleFail(error)));    
  })
})
