import React, { useEffect } from 'react';
import { Col, Row, Typography } from 'antd';

import Item from './Item';
import { getVehicle } from '../../../util/http/policies';
import titleCase from '../../../util/titleCase';

const { Text } = Typography;

export default function VehicleCard({ policyId, vehicle, addVehicle }) {
  useEffect(() => {
    (async () => {
      if (!vehicle) {
        const resp = await getVehicle({
          policyId
        });
        if (resp && resp.data) {
          addVehicle(resp.data);
        }
      }
    })();
  }, [vehicle]);

  if (!vehicle) {
    return null;
  }

  return (
    <Item
      title="Vehicle" >
      <Row>
        <Col span={10}>
          <Text>Reg No</Text>
        </Col>
        <Col>
          <Text strong>
            {String(vehicle.registrationNumber).toUpperCase()}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Text>Make</Text>
        </Col>
        <Col>
          <Text strong>
            {titleCase(vehicle.make)}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Text>Y.o.M</Text>
        </Col>
        <Col>
          <Text strong>
            {new Date(vehicle.manufactureYear).getFullYear()}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Text>Rating (cc)</Text>
        </Col>
        <Col>
          <Text strong>
            {vehicle.ratingCc}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Text>Body color</Text>
        </Col>
        <Col>
          {/* <Text strong>
            {vehicle.bodyColor}
          </Text> */}
          <ColorPad color={vehicle.bodyColor} />
        </Col>
      </Row>
    </Item>
  );
}

function ColorPad({ color }) {
  return (
    <div style={{
      display: 'inline-block',
      width: '1em',
      height: '1em',
      backgroundColor: color,
      borderRadius: 3
    }}></div>
  );
}