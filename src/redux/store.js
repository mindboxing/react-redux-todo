import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { initialState as todos } from "./reducers/todos";
import { initialState as visibilityFilter } from "./reducers/visibilityFilter";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  { todos, visibilityFilter },
  composeEnhancers(applyMiddleware(sagaMiddleware))  
);
sagaMiddleware.run(rootSaga);

export default store;