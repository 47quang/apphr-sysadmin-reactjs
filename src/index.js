import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './stores/store';
import { icons } from './asset/icon';
import '@coreui/coreui/dist/css/coreui.min.css';
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import '@ui5/webcomponents-icons/dist/Assets.js';
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
