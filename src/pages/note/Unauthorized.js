import React from "react";
import { Result, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <Result
      icon={<LockOutlined />}
      title="Uh oh, you're not authorized to be here!"
      extra={
        <Link to="/app">
          <Button type="primary">Take me somewhere else</Button>
        </Link>
      }
    />
  );
}
