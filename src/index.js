import '@coreui/coreui/dist/css/coreui.min.css';
import { HashRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { icons } from './asset/icon';
import store from './stores/store';
import ReactDOM from 'react-dom';
import App from './App.js';
import './i18n/i18n';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={loading}>
        <App />
      </Suspense>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
