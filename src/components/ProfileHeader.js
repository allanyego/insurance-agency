import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router-dom';

const { Text, Title } = Typography;

export default function ProfileHeader({ label, title, fallbackUrl }) {
  const history = useHistory();
  const location = useLocation();
  const onClose = () => history.push(location?.state?.prevPath || fallbackUrl);

  return (
    <Row>
      <Col flex="auto"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Text disabled
          style={{
            display: 'block',
            marginRight: '0.5em'
          }}>{label}:</Text>
        <Title level={3}
          style={{
            display: 'block'
          }}>{title}</Title>
      </Col>
      <Col
        style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Button
          danger
          size="small"
          shape="circle" icon={<CloseOutlined />}
          onClick={onClose} />
      </Col>
    </Row>
  );
}