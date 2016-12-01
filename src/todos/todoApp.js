import React  from 'react';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import Footer from './components/footer';

import store from './store';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};
let nextTodoId = 0;
const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo
      onAddClick={text =>
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text
        })
      }
    />
    <TodoList todos={
      getVisibleTodos(
        todos,
        visibilityFilter
      )}
      onTodoClick={id =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id: id
        })
      }
    />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={(filter) => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
    />

  </div>
);

export default TodoApp;
