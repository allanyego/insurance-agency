import React from "react";
import { Row, Typography, Col } from "antd";

import "./Invoice.css";
import { formattedDate } from "./PolicySchedule";
import RenewalBreakdown from "./RenewalBreakdown";
import Signatory from "./Signatory";
import InvoiceControls from "./InvoiceControls";

const { Text, Title } = Typography;

export default function InvoiceContainer(props) {
  return (
    <section className="invoice-container">
      <InvoiceControls {...props} />

      {props.children}
    </section>
  );
}
