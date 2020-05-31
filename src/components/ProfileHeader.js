import React from 'react';
import { Row, Col, Typography } from 'antd';

import CloseButton from './CloseButton';

import './ProfileHeader.css';

const { Text, Title } = Typography;

export default function ProfileHeader({ label, title, fallbackUrl }) {
  return (
    <Row className="ProfileHeader">
      <Col flex="auto">
        <Text disabled>{label}:</Text>
        <Title level={3}>{title}</Title>
      </Col>
      <Col>
        <CloseButton fallbackUrl={fallbackUrl} />
      </Col>
    </Row>
  );
}