import React from "react";
import { Col } from "antd";

export default function InputCol({ children }) {
  return (
    <Col xs={24} sm={12} lg={8}>
      {children}
    </Col>
  );
}
