import React from 'react';
import {Row, Col, Typography} from 'antd';

const {Text} = Typography;

export default function Liability() {
  return (
    <div className="liability-list">
      <Text strong>Limits of the amount the company's liability is under:</Text>
      <Row>
        <Col flex="auto">
          <Text>Section I - 3 (Protection and Removal)</Text>
        </Col>
        <Col>
          <Text strong>Kshs.20000</Text>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Text>Section I - 4 (Repair Authority)</Text>
        </Col>
        <Col>
          <Text strong>Kshs.20000</Text>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Text>
            Section II, 1(a) and 2(b) (Death or Bodily Injury to Third Parties)
          </Text>
          <br />
          <Text>
            A. In respect of any person (other than a passenger being carried by
            a reason of or pursuance of a contract of employment) being in or
            upon or entering or getting onto or alighting from the vehicle.
          </Text>
          <Row>
            <Col flex="auto" offset={2}>
              <Text>a. any one person</Text>
            </Col>
            <Col>
              <Text strong>Kshs.200000</Text>
            </Col>
          </Row>
          <Row>
            <Col flex="auto" offset={2}>
              <Text>a. any one event</Text>
            </Col>
            <Col>
              <Text strong>Kshs.200000</Text>
            </Col>
          </Row>
          <Row>
            <Col flex="auto">
              <Text>B. Any other person</Text>
            </Col>
            <Col>
              <Text strong>Unlimited</Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <Text>Section II, 1(a) and 2(b) (Third Party Property Damage)</Text>
        </Col>
        <Col>
          <Text strong>Kshs.2000000</Text>
        </Col>
      </Row>

      <Row>
        <Col span={5}>
          <Text strong>Legislation</Text>
        </Col>
        <Col span={19}>
          <Text>
            Motor Vehicles Insurance (Third Party Risks) Act 1945 (Kenya)
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <Text strong>Limitations as to use</Text>
        </Col>
        <Col span={19}>
          <Text>
            As per the attached limitations as to use clause SOCIAL DOMESTIC AND
            PLEASURE PURPOSES
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <Text strong>Geographical limits</Text>
        </Col>
        <Col span={19}>
          <Text>KENYA BORDERS</Text>
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <Text strong>Authorized driver</Text>
        </Col>
        <Col span={19}>
          <Text>A. The insured or DULY AUTHORIZED BY THE INSURED</Text>
          <br />
          <Text>
            B. Any person driving on the insured's order or with his/her
            permission provided that person driving is permitted in accordance
            with the licensing or other laws or regulations to drive the motor
            vehicle or has been permitted and is not disqualified by order of
            court of law or by reason of any enactment in that behalf from
            driving the motor vehicle.
          </Text>
        </Col>
      </Row>
    </div>
  );
}