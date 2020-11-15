import { watchAddTodo, addTodo } from '../addTodoSaga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_TODO } from '../../actionTypes';
import { add } from '../../../api/todoApi';
import { addTodoSuccess, addTodoFail } from '../../actions';

describe('addTodoSaga - watchAddTodo', () => {  
  test('should take ADD_TODO', () => {
    const gen = watchAddTodo();
    expect(gen.next().value).toEqual(takeEvery(ADD_TODO, addTodo));
  })  
})

describe('addTodoSaga - addTodo', () => {
  test('should put addTodoSuccess on success', async () => {
    const gen = addTodo({payload: {}});
    expect(gen.next().value)
      .toEqual(call(add, {}));
    expect(gen.next({}).value)
      .toEqual(put(addTodoSuccess({})));
  })
  
  test('should put addTodoFail on failure', async () => {        
    const gen = addTodo({payload: {}});
    const mockErr = new Error("test");
    expect(gen.next().value)
      .toEqual(call(add, {}));
    expect(gen.throw(mockErr).value)
      .toEqual(put(addTodoFail(mockErr)));
  })  
})

