import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './todoList';
import { toggleTodo } from '../actions/index';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};
const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state.todos,
    params.filter || 'all'
  )
});
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  }
});
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;