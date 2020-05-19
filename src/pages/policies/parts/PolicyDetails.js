import React from 'react';
import { Row } from 'antd';

import VehicleCard from './VehicleCard';
import InsurerCard from './InsurerCard';

export default function PolicyDetails(props) {
  return (
    <Row gutter={[32, 16]}>
      {(props.policyClass === 'vehicle') &&
        <VehicleCard {...props} />
      }
      <InsurerCard {...props} />
    </Row>
  );
}