import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import './styles/css/app.css';
import './styles/scss/style.scss';

const Login = React.lazy(() => import('@Page/login/Login'));
const Page404 = React.lazy(() => import('@Page/page404/Page404'));
const Page500 = React.lazy(() => import('@Page/page500/Page500'));
const TheLayout = React.lazy(() => import('@Layout/TheLayout'));

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route
          exact
          path="/login"
          name="Login Page"
          render={props => <Login {...props} />}
        />
        <Route
          path="/404"
          name="Page 404"
          render={props => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="Page 500"
          render={props => <Page500 {...props} />}
        />
        <Route
          path="/"
          name="Home"
          render={props => <TheLayout {...props} />}
        />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
