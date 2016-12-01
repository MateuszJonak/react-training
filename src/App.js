import React, { Component } from 'react';
import TodoApp from './todos/todoApp';
import store from './todos/store';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <TodoApp
          {...store.getState()}
        />
      </div>
    );
  }
}

export default App;
