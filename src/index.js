import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/styles.scss';

// redux
import { Provider } from 'react-redux';
import store from './reducers/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('index'));
