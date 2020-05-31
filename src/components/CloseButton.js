import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";

export default function CloseButton({fallbackUrl="/app"}) {
  const history = useHistory();
  const location = useLocation();
  const onClose = () => history.push(location?.state?.prevPath || fallbackUrl);

  return (
    <Button
      danger
      size="small"
      shape="circle"
      icon={<CloseOutlined />}
      onClick={onClose}
    />
  );
}
