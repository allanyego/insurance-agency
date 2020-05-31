import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import New from './New';
import Renewal from './Renewal';

export default function Note() {
  const { path } = useRouteMatch();
  console.log("Getting into note!!");

  return (
    <Switch>
      <Route path={`${path}/:policyId/new`}>
        <New />
      </Route>
      <Route path={`${path}/:policyId/renewal`}>
        <Renewal />
      </Route>
    </Switch>
  );
}
