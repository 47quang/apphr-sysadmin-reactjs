import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import store from './stores/store';
import { icons } from './asset/icon';
import '@coreui/coreui/dist/css/coreui.min.css';
import './i18n/i18n';

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
