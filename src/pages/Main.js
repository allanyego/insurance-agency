import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { Layout, Grid } from 'antd';

import OSider from '../components/OSider';

import OHeader from '../containers/common/Oheader';
import ClientList from '../containers/clients/ClientList';
import NewClientForm from '../containers/clients/NewClientForm';
import NewInsurerForm from '../containers/insurers/NewInsurer';
import InsurersList from '../containers/insurers/InsurersList';
import SelectInsurer from "../containers/clients/SelectInsurer";
import NewAdminForm from "../containers/admins/NewAdminForm";
import Applications from './Applications';
import { Insurer } from "./insurers";
import { Client } from './clients';
import { Policy } from './policies';

const { Content } = Layout;
const {useBreakpoint} = Grid;

export default function Main({ auth, addError }) {
  const location = useLocation();
  const { path } = useRouteMatch();
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(true);
  const screens = useBreakpoint();

  useEffect(() => {
    if (!screens.md) {
      setCollapsed(false);
      setOpen(false);
    }
    
    !auth?.token && addError('You need to login first');
  }, [screens]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  if (!auth?.token) {
    return <Redirect to={{
      pathname: "/orient-insurance/login",
      state: {
        attemptedRoute: location.pathname
      }
    }} />
  }

  return (
    <Layout>
      <OSider 
        collapsed={collapsed}
        open={open} />
      <Layout className="site-layout">
        <OHeader
          collapsed={collapsed}
          toggle={toggle}
          open={open}
          toggleOpen={toggleOpen} />
        <Content
          className="site-layout-background"
          style={{
            margin: '8px 0 0',
            padding: '0 24px 24px',
            minHeight: 280,
            position: 'relative',
          }}
        >
          <Switch>
            <Route exact path={`${path}/clients/new`}>
              <SelectInsurer />
            </Route>
            <Route exact path={`${path}/clients/new/:insurerId`}>
              <NewClientForm />
            </Route>
            <Route exact path={`${path}/clients/:clientId`}>
              <Client />
            </Route>
            <Route path={`${path}/clients`}>
              <ClientList />
            </Route>
            <Route exact path={`${path}/insurers/new`}>
              <NewInsurerForm />
            </Route>
            <Route exact path={`${path}/insurers/:insurerId`}>
              <Insurer />
            </Route>
            <Route path={`${path}/insurers`}>
              <InsurersList />
            </Route>
            <Route path={`${path}/reports/applications`}>
              <Applications />
            </Route>
            <Route path={`${path}/policies/:policyId`}>
              <Policy />
            </Route>
            <Route path={`${path}/admins/new`}>
              <NewAdminForm />
            </Route>
            <Route path="*">
              <Redirect to={`${path}/clients`} />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}