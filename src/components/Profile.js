import React from 'react';

import './Overlay.css';
import { Row, Card, Col } from 'antd';

export default function Profile({ children }) {
  return (
    <Row justify="center" style={{
      paddingTop: '2em'
    }}>
      <Col xs={24}>
        <Card>
          {children}
        </Card>
      </Col>
    </Row>
  );
}