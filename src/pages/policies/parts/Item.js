import React, { useState } from 'react';
import { Col, Card, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { LinkOutlined } from '@ant-design/icons';

export default function Item(props) {
  const location = useLocation();

  const OCard = ({ title, children }) => {
    const [mouseOver, setMouseOver] = useState(false);
    const mouseEnter = () => {
      if (!props.routerTo) {
        return null;
      }
      setMouseOver(true);
    };
    const mouseLeave = () => {
      if (!props.routerTo) {
        return null;
      }
      setMouseOver(false);
    };

    return (
      <Card
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>
        <div>
          <Typography.Title level={4}
            style={{
              fontSize: 16
            }}>
            {title}
            {mouseOver && <LinkOutlined
              style={{
                marginLeft: '0.5em'
              }} />}
          </Typography.Title>
        </div>
        {children}
      </Card>
    );
  };
  return (
    <Col xs={24} sm={12}>
      {props.routerTo ?
        <Link to={{
          pathname: props.routerTo,
          state: {
            prevPath: location.pathname
          }
        }}>
          <OCard {...props}>
            {props.children}
          </OCard>
        </Link> :
        <OCard {...props}></OCard>}
    </Col>
  );
};