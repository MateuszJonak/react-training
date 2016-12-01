
import { combineReducers, createStore  } from 'redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

export default store;