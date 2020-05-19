import React from 'react';
import {
  Col,
  Row,
  Typography,
} from 'antd';

import Page from '../../../components/Page';

export default function AuthPage({title, children}) {
  return (
    <Page>
      <Row justify="center">
        <Col>
          <img src="orient-insurance/orient-logo.png" alt="Company logo"
            style={{
              margin: '0 auto',
              display: 'block',
              borderRadius: '10%',
              width: '75px',
              marginBottom: '1em',
            }} />
          <Typography.Title level={3}>{title}</Typography.Title>
        </Col>
      </Row>
      {children}
    </Page>
  );
}