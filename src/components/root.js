import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from '../todos/index';

const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
);

export default Root;
