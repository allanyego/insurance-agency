import React from 'react';
import { Row, Typography, Col } from 'antd';

import co from '../../util/companyConstants';

import './DebitNote.css';

const { Text, Title } = Typography;

const basicPremium = 16000.00;
const trainingLevy = co.trainingLevy.toFixed(2);
const policyHoldersFund = co.policyHoldersFund.toFixed(2);
const renewalPremium = basicPremium + co.policyHoldersFund + co.trainingLevy;

const commission = (basicPremium * 0.1);
const withHoldingTax = co.withholdingTax.toFixed(2);
const netDue = renewalPremium - commission + co.withholdingTax;

export default function DebitNote() {
  return (
    <Row>
      <Col flex="auto">
        <Title level={3}>PREMIUM DEBIT NOTE</Title>
        <Row className="AddressRow">
          <Col flex="auto">
            <p><Text strong>Insurer</Text></p>
            <p>CARE INSURANCE AGENCY</p>
            <p>P.O BOX 34</p>
            <p>KERUGOYA</p>
          </Col>
          <Col flex="auto">
            <p><Text strong>Client</Text></p>
            <p>Martin muthika</p>
            <p>p.o box 56</p>
            <p>KERUGOYA</p>
          </Col>
        </Row>
        <Row>
          <Col flex="auto">
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text strong>Policy Number:</Text>
              </Col>
              <Col>
                <Text>EMB/7878/2011</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text strong>Regarding:</Text>
              </Col>
              <Col>
                <Text>RENEWAL PREMIUM</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text strong>Class:</Text>
              </Col>
              <Col>
                <Text>Vehicle</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text strong>Reg No:</Text>
              </Col>
              <Col>
                <Text>KBA 457Y</Text>
              </Col>
            </Row>
          </Col>
          <Col flex="auto">
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text strong>Cover from:</Text>
              </Col>
              <Col>
                <Text>11/3/2019</Text>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8} className="text-right">
                <Text strong>To:</Text>
              </Col>
              <Col>
                <Text>11/3/2020</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="end" style={{marginTop: '2em'}}>
          <Col span={12}>
            <Row>
              <Col span={10}>
                <Text strong>Basic premium:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text>{basicPremium}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Text strong>Policyholders fund:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text>{policyHoldersFund}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Text strong>Training levy:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text>{trainingLevy}</Text>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col span={10}>
                <Text strong>RENEWAL PREMIUM:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text strong>{
                  renewalPremium.toFixed(2)
                }</Text>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Text strong>Commission:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text>-{commission}</Text>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Text strong>Withholding Tax:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text>{withHoldingTax}</Text>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col span={10}>
                <Text strong>Net Amount Due:</Text>
              </Col>
              <Col span={8} className="text-right">
                <Text strong>{netDue.toFixed(2)}</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: '3.5em' }}>
          <Col flex="auto">
            Prepared by: <Text strong>ESEDIEM</Text>
          </Col>
          <Col flex="auto">
            Signed By: <Text strong>For and on behalf of KENYA ORIENT INSURANCE LTD</Text>
          </Col>
          <Col flex="auto">
            <Text strong>13-Nov-2019</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}