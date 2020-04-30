import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import store from './store';

import './styles/index.css';
import './styles/semantic.min.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
