import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import todoAppReducers from './todos/reducers/index';

const configureStore = () => {

  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    todoAppReducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;