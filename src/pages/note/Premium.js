import React from "react";
import { Col, Row, Typography } from "antd";

import co from "../../util/companyConstants";

const { Text } = Typography;
const { stampDuty, trainingLevy } = co;

export const calcPremium = (sumInsured, rate) => (rate / 100) * sumInsured;
export const levy = (amount) => (trainingLevy / 100) * amount;

export default function Premium({ policy }) {
  const premium = calcPremium(policy.sumInsured, policy.premiumRate);
  const tl = levy(premium);

  return (
    <Col span={8} className="text-right text-title">
      <Row gutter={24}>
        <Col span={12}>
          <Text strong>premium:</Text>
        </Col>
        <Col flex="auto">
          <Text>{premium.toFixed(2)}</Text>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Text strong>stamp duty:</Text>
        </Col>
        <Col flex="auto">
          <Text>{stampDuty.toFixed(2)}</Text>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Text strong>training levies:</Text>
        </Col>
        <Col flex="auto">
          <Text>{tl.toFixed(2)}</Text>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Text strong>first premium:</Text>
        </Col>
        <Col flex="auto">
          <Text strong>{(premium + stampDuty + tl).toFixed(2)}</Text>
        </Col>
      </Row>
    </Col>
  );
}
