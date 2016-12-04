import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import todoAppReducers from './todos/reducers/index';

const configureStore = () => {

  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    todoAppReducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;