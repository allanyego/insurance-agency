import React from "react";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { PrinterOutlined, PrinterFilled } from "@ant-design/icons";

import CloseButton from "../../components/CloseButton";
import { PRINT_DOC } from "./Print";

export default function InvoiceControls({policy, client, vehicle, insurer}) {
  const setPrintDoc = () => {
    localStorage.setItem(PRINT_DOC, JSON.stringify({
      policy, vehicle, client, insurer
    }));
  };

  return (
    <Col className="invoice-controls">
      <Row justify="center">
        <Col>
          <CloseButton fallbackUrl={`/app/policies/` + policy.id} />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Link
            to="/print"
            target="_blank"
          >
            <Button shape="circle" icon={<PrinterOutlined />} onClick={setPrintDoc} />
          </Link>
        </Col>
      </Row>
    </Col>
  );
}
