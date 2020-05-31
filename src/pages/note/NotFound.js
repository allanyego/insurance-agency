import React, { useState, useEffect, useRef } from "react";
import { Result, Typography } from "antd";
import { ExceptionOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  return (
    <Result
      icon={<ExceptionOutlined />}
      status="error"
      title="Sorry, I couldn't find what you're looking for!"
      extra={
        <CountDown />
      }
    />
  );
}

function CountDown({seconds=5}) {
  const [count, setCount] = useState(seconds);
  const history = useHistory();
  let interval = useRef(null);

  const intervalCb = ((c) => {
    let init = c;
    return () => {
      if (init === 0) {
        clearInterval(interval.current);
        history.push("/app");
        return;
      }

      setCount(--init);
    }
  })(count);

  useEffect(() => {
    interval.current = setInterval(intervalCb, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography.Paragraph>Taking you back in:</Typography.Paragraph>
      <Typography.Title level={2}>{count}</Typography.Title>
    </div>
  );
}
