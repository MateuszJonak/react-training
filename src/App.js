import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore  } from 'redux';

import TodoApp from './todos/todoApp';
import todoAppReducers from './todos/reducers';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={createStore(todoAppReducers)}>
          <TodoApp/>
        </Provider>
      </div>
    );
  }
}

export default App;
