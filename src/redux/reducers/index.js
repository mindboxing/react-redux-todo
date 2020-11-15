import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import error from './error';

export default combineReducers({ todos, visibilityFilter, error });