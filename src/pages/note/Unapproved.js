import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function Unapproved({ policy }) {
  return (
    <Result
      status="warning"
      title="This policy has not been approved yet."
      subTitle="Proceed to the policy page to complete approval"
      extra={
        <Link to={`/app/policies/${policy.id}`}>
          <Button type="primary" key="console">
            Go to policy page
          </Button>
        </Link>
      }
    />
  );
}
