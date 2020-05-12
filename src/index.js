import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

window.addEventListener('beforeunload', () => {
  const storage = store.getState();
  const { auth } = storage;
  if (auth && auth.token && auth.rememberMe) {
    localStorage.setItem('OrientData', JSON.stringify(
      store.getState()
    ));
  } else {
    localStorage.clear();
  }
}, false);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
