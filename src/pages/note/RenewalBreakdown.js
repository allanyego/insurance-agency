import React from "react";
import { Col, Row, Typography } from "antd";

import co from "../../util/companyConstants";
import {calcPremium, levy} from './Premium';

const { Text } = Typography;

export default function RenewalBreakdown({ policy }) {
  const premium = calcPremium(policy.sumInsured, policy.premiumRate);
  const trainingLevy = levy(premium);
  const renewalPremium = premium + trainingLevy + co.policyHoldersFund;
  const commission = (co.commission/100) * renewalPremium;
  const netAmount = renewalPremium - commission + co.withholdingTax;

  return (
    <Row justify="end" className="text-title" style={{ margin: "2em 0 3em" }}>
      <Col span={10}>
        <Row>
          <Col span={10}>
            <Text strong>basic premium:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text>{premium.toFixed(2)}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Text strong>policyholders fund:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text>{co.policyHoldersFund.toFixed(2)}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Text strong>training levy:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text>{trainingLevy.toFixed(2)}</Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={10} className="text-upper">
            <Text strong>renewal premium:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text strong>{renewalPremium.toFixed(2)}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Text strong>commission:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text>-{commission.toFixed(2)}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Text strong>withholding tax:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text>{co.withholdingTax.toFixed(2)}</Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col span={10}>
            <Text strong>net amount due:</Text>
          </Col>
          <Col flex="auto" className="text-right">
            <Text strong>{netAmount.toFixed(2)}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
