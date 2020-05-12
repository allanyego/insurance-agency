import React from 'react';
import { Layout, Popover, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import titleCase from '../util/titleCase';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

export default function OHeader({ collapsed, toggle, logout, user }) {
  const history = useHistory();
  const onLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <Header className="site-layout-background" style={{
      display: 'flex',
      padding: '0 3em 0 0',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      <Popover
        trigger="click"
        placement="bottomRight"
        title={titleCase(`${user.firstName} ${user.lastName}`)}
        content={
          <Button
            block={true}
            icon={<LogoutOutlined />}
            type="danger"
            onClick={onLogout}
          >Logout</Button>
        }
      >
        {React.createElement(UserOutlined)}
      </Popover>
    </Header>
  );
}