import React from 'react';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';

import NewApplicationList from '../containers/reports/NewApplicationList';
import RenewalApplicationList from '../containers/reports/RenewalsApplicationList';
import { DebitNote } from './reports';

export default function Applications() {
  const { path } = useRouteMatch();
  
  return (
    <Switch>
      <Route path={`${path}/new`}>
        <NewApplicationList />
      </Route>
      <Route path={`${path}/renewals`}>
        <RenewalApplicationList />
      </Route>
      <Route path={`${path}/debit-note`}>
        <DebitNote />
      </Route>
      <Route path="*">
        <Redirect to={`${path}/new`} />
      </Route>
    </Switch>
  );
}
