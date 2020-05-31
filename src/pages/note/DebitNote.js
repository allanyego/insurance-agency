import React from "react";
import { Row, Typography, Col, Button } from "antd";

import "./Invoice.css";
import { formattedDate } from "./PolicySchedule";
import RenewalBreakdown from "./RenewalBreakdown";
import Signatory from "./Signatory";
import InvoiceContainer from "./InvoiceContainer";
import Unapproved from "./Unapproved";

const { Text, Title } = Typography;

export default function DebitNote({
  policy,
  client,
  vehicle,
  insurer,
  auth,
}) {
  if (!policy.approved) {
    return (
      <Unapproved policy={policy} />
    );
  }

  return (
    <InvoiceContainer {...{ policy, client, vehicle, insurer }}>
      <Note {...{ policy, client, vehicle, insurer, auth }} />
    </InvoiceContainer>
  );
}

export function Note({ policy, client, vehicle, insurer, auth }) {
  return (
    <Row className="invoice-page debit-note">
      <Col flex="auto">
        <Row>
          <Col flex="auto" className="title">
            <Title level={3} className="text-upper">
              premium debit note
            </Title>
          </Col>
          <Col className="logo">
            <img src="/orient-insurance/orient-logo.png" alt="orient logo" />
          </Col>
        </Row>
        <Row style={{
          marginBottom: "1em"
        }}>
          <Col flex="auto" className="text-upper">
            <div className="text-title">
              <Text strong>Insurer</Text>
            </div>
            <div>{insurer.name}</div>
            <div>p.o box {insurer.addressNumber}</div>
            <div>{insurer.addressTown}</div>
          </Col>
          <Col flex="auto" className="text-upper">
            <div className="text-title">
              <Text strong>Client</Text>
            </div>
            <div>{`${client.firstName} ${client.lastName}`}</div>
            <div>p.o box {client.addressNumber}</div>
            <div>{client.addressTown}</div>
          </Col>
        </Row>
        <Row className="text-upper">
          <Col flex="auto">
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text className="text-title" strong>
                  policy number:
                </Text>
              </Col>
              <Col>
                <Text>{policy.policyNumber}</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text className="text-title" strong>
                  regarding:
                </Text>
              </Col>
              <Col>
                <Text>renewal premium</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text className="text-title" strong>
                  class:
                </Text>
              </Col>
              <Col>
                <Text>{policy.policyClass}</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text className="text-title" strong>
                  reg no:
                </Text>
              </Col>
              <Col>
                <Text>{vehicle.registrationNumber}</Text>
              </Col>
            </Row>
          </Col>
          <Col flex="auto">
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text className="text-title" strong>
                  cover from:
                </Text>
              </Col>
              <Col>
                <Text>{formattedDate(policy.policyPeriodStart)}</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text className="text-title" strong>
                  to:
                </Text>
              </Col>
              <Col>
                <Text>{formattedDate(policy.policyPeriodEnd)}</Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <RenewalBreakdown policy={policy} />

        <Signatory {...auth} />
      </Col>
    </Row>
  );
}
