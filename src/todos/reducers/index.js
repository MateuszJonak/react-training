
import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todoAppReducers = combineReducers({
  todos,
});

export default todoAppReducers;

export const getVisibleTodos = (state, filter) => {
  return fromTodos.getVisibleTodos(state.todos, filter);
};