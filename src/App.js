import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

import './App.css';
import Fallback from './components/Fallback';
import Messages from './containers/common/Messages';
const Main = React.lazy(() => import('./containers/Main'));
const Login = React.lazy(() => import('./containers/admins/Login'));
const ChangePassword = React.lazy(() => import('./containers/admins/ChangePassword'));

const BASE_PATH = '/orient-insurance';

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
            <Redirect to="`/app`" />
          </Route>
        </Switch>
      </Suspense>
      <Messages />
    </Router>
  );
}

export default App;

/* 
xs	<576px and also default setting, could be a span value or an object containing above props	number|object	-	
sm	≥576px, could be a span value or an object containing above props	number|object	-	
md	≥768px, could be a span value or an object containing above props	number|object	-	
lg	≥992px, could be a span value or an object containing above props	number|object	-	
xl	≥1200px, could be a span value or an object containing above props	number|object	-	
xxl	≥1600px, could be a span value or an object containing above props	number|object	-
 */
