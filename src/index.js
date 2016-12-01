import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './todos/store';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};
store.subscribe(render);
render();