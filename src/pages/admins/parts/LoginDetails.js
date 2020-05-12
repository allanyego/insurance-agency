import React from 'react';
import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Checkbox,
} from 'antd';

export default function LoginDetails() {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Email is required' },
              { type: 'email', message: 'Invalid email' }
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Password is required' },
              // { pattern: /^$/, message: 'Password should contain numbers and letters' }
            ]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="rememberMe"
        valuePropName="checked"
        extra={<span>Remember me</span>}
        className="RememberMeInput"
      >
        <Checkbox defaultChecked={false} />
      </Form.Item>
    </Card>
  );
}