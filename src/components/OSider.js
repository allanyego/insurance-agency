import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import {
  AuditOutlined,
  BankOutlined,
  CopyOutlined,
  DatabaseOutlined,
  DiffOutlined,
  FileAddOutlined,
  PlusCircleOutlined,
  RedoOutlined,
  UserOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons';

import './Osider.css';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function OSider({ collapsed }) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src="/orient-logo.png" alt="Company logo" />
      </div>
      <Menu theme="dark" mode="inline"
        // defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              <span>Clients</span>
            </span>
          }>
          <Menu.Item key="1">
            <Link to="/app/clients/new">
              <PlusCircleOutlined />
              <span>New client</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/app/clients">
              <DatabaseOutlined />
              <span>List clients</span>
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={
            <span>
              <BankOutlined />
              <span>Issuers</span>
            </span>
          }>
          <Menu.Item key="3">
            <Link to="/app/insurers/new">
              <FileAddOutlined />
              <span>New issuer</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/app/insurers">
              <AuditOutlined />
              <span>List issuers</span>
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub3"
          title={
            <span>
              <CopyOutlined />
              <span>Reports</span>
            </span>
          }>
          <Menu.Item key="5">
            <Link to="/app/reports/applications/new">
              <DiffOutlined />
              <span>New applications</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/app/reports/applications/renewals">
              <RedoOutlined />
              <span>Renewal applications</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Divider />
        <Menu.Item key="7">
          <Link to="/app/admins/new">
            <UsergroupAddOutlined />
            <span>Add admin</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}