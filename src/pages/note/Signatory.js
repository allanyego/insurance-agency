import React from "react";
import { Card, Typography, Row, Col } from "antd";

const { Text } = Typography;

export default function Signatory({ firstName }) {
  return (
    <Card
      style={{
        paddingTop: "2.5em",
      }}
    >
      <Text>{"Stamp:".padEnd(150, ".")}</Text>
      <Text>{" Date: "}</Text>
      <Text strong>{new Date().toDateString()}</Text>
      <Row>
        <Col span={5}>
          Prepared by:{" "}
          <Text strong className="text-upper">
            {firstName}
          </Text>
        </Col>
        <Col>
          <Text>For and on behalf of</Text>
          <Text className="text-upper" strong>
            {" "}
            kenya orient insurance limited
          </Text>
        </Col>
      </Row>
    </Card>
  );
}
