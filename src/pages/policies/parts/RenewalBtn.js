import React, { useState } from 'react';
import {
  Col,
  Row,
  Badge,
  Button,
  Typography
} from 'antd';
import { HistoryOutlined } from '@ant-design/icons';

import { renewPolicy } from '../../../util/http/policies';

export default function RenewalBtn({ policy, updatePolicy, addSuccess, token }) {
  const [loading, setLoading] = useState(false);

  const onRenew = async () => {
    setLoading(true);
    try {
      const resp = await renewPolicy({
        policyId: policy.id,
        token
      });
      if (resp && resp.data) {
        updatePolicy(resp.data);
        addSuccess('Policy has been renewed.');
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <Row style={{
      margin: '2em auto 1em'
    }}>
      <Col xs={24} sm={8} span={5}
        style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Badge
          dot
          status="danger" >
          <HistoryOutlined />
        </Badge>
        <Typography.Text
          style={{ marginLeft: '0.5em' }}>
          Expired
        </Typography.Text>
      </Col>
      <Col flex>
        <Button type="primary"
          loading={loading}
          onClick={onRenew}>
          Renew
        </Button>
      </Col>
    </Row>
  );
}