import React from "react";
import { Col, Row, Typography } from "antd";

const { Text } = Typography;

export default function Detail({ title, content, children }) {
  return (
    <Row>
      <Col xs={9} sm={6} md={5}>
        <Text>{title}</Text>
      </Col>
      <Col flex>
        {!!content && <Text strong>{content}</Text>}
        {children}
      </Col>
    </Row>
  );
}
