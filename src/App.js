import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

import './App.css';
import Fallback from './components/Fallback';
import Messages from './containers/common/Messages';
// import Main from './containers/Main';
// import Login from './containers/admins/Login';
// import ChangePassword from './containers/admins/ChangePassword';
const Main = React.lazy(() => import('./containers/Main'));
const Login = React.lazy(() => import('./containers/admins/Login'));
const ChangePassword = React.lazy(() => import('./containers/admins/ChangePassword'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/change-password">
            <ChangePassword />
          </Route>
          <Route path="/app">
            <Main />
          </Route>
          <Route path="*">
            <Redirect to="/app" />
          </Route>
        </Switch>
      </Suspense>
      <Messages />
    </Router>
  );
}

export default App;
