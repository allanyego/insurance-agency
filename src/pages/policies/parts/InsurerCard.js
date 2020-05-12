import React, { useEffect } from 'react';
import { Col, Row, Typography } from 'antd';

import Item from './Item';
import { getById } from '../../../util/http/insurers';
import titleCase from '../../../util/titleCase';

export default function InsurerCard({ insurerId, insurer, addInsurer }) {
  useEffect(() => {
    (async () => {
      if (!insurer) {
        const resp = await getById({
          insurerId
        });
        if (resp && resp.data) {
          addInsurer(resp.data);
        }
      }
    })();
  }, [insurer]);

  if (!insurer) {
    return null;
  }

  return (
    <Item
      title="Insurer"
      routerTo={`/app/insurers/${insurer.id}`}>
      <Row>
        <Col span={6}>
          <Typography.Text>Name</Typography.Text>
        </Col>
        <Col>
          <Typography.Text strong>
            {titleCase(insurer.name)}
          </Typography.Text>
        </Col>
      </Row>
    </Item>
  );
}