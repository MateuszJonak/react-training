
import { combineReducers } from 'redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

const todoAppReducers = combineReducers({
  todos,
  visibilityFilter
});

export default todoAppReducers;