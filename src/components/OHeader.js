import React, {useState, useEffect} from 'react';
import { 
  Layout,
  Popover,
  Button,
  Grid
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';

import titleCase from '../util/titleCase';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;
const { useBreakpoint } = Grid;

export default function OHeader({
  collapsed,
  toggle,
  logout,
  user,
  open,
  toggleOpen
}) {
  const screens = useBreakpoint();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    if (!screens.md) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [screens]);

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
      {isSmallScreen || React.createElement(collapsed ?
        MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      {isSmallScreen && React.createElement(open ?
        CloseOutlined : MenuOutlined, {
        className: 'trigger',
        onClick: toggleOpen,
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