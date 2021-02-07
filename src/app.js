import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './styles/css/app.css';
import './styles/scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import('@Page/login/Login'));
const Register = React.lazy(() => import('@Page/register/Register'));
const Page404 = React.lazy(() => import('@Page/page404/Page404'));
const Page500 = React.lazy(() => import('@Page/page500/Page500'));
const TheLayout = React.lazy(() => import('@Layout/TheLayout'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login Page"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />
          <Route
            exact
            path="/404"
            name="Page 404"
            render={(props) => <Page404 {...props} />}
          />
          <Route
            exact
            path="/500"
            name="Page 500"
            render={(props) => <Page500 {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
