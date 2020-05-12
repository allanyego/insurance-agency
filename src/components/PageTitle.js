import React from 'react';
import { Col, Row, Typography } from 'antd';

export default function PageTitle({ pageTitle }) {
  return(
    <Row justify="center">
        <Col>
          <Typography.Title
            level={3}>
              {pageTitle}
          </Typography.Title>
        </Col>
      </Row>
  );
}
