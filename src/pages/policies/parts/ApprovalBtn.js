import React, { useState } from 'react';
import {
  Col,
  Row,
  Badge,
  Button,
  Typography
} from 'antd';
import { ExceptionOutlined } from '@ant-design/icons';

import { approvePolicy } from '../../../util/http/policies';

export default function ApprovalBtn({ policy, updatePolicy, addSuccess, token }) {
  const [loading, setLoading] = useState(false);

  const onApprove = async () => {
    setLoading(true);
    try {
      const resp = await approvePolicy({
        policyId: policy.id,
        token
      });
      if (resp && resp.data) {
        updatePolicy(resp.data);
        addSuccess('Policy has been approved');
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
          status="warning" >
          <ExceptionOutlined />
        </Badge>
        <Typography.Text
          style={{ marginLeft: '0.5em' }}>
          Not approved
        </Typography.Text>
      </Col>
      <Col flex>
        <Button type="primary"
          loading={loading}
          onClick={onApprove}>
          Approve
        </Button>
      </Col>
    </Row>
  );
}