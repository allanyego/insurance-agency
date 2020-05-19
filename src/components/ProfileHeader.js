import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router-dom';

import './ProfileHeader.css';

const { Text, Title } = Typography;

export default function ProfileHeader({ label, title, fallbackUrl }) {
  const history = useHistory();
  const location = useLocation();
  const onClose = () => history.push(location?.state?.prevPath || fallbackUrl);

  return (
    <Row className="ProfileHeader">
      <Col flex="auto">
        <Text disabled>{label}:</Text>
        <Title level={3}>{title}</Title>
      </Col>
      <Col>
        <Button
          danger
          size="small"
          shape="circle" icon={<CloseOutlined />}
          onClick={onClose} />
      </Col>
    </Row>
  );
}