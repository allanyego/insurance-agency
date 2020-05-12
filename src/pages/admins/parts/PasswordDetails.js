import React from 'react';
import {
  Card,
  Col,
  Form,
  Input,
  Row,
} from 'antd';

export default function PasswordDetails() {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Old password"
            name="oldPassword"
            rules={[
              { required: true, message: 'Password is required' },
            ]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="New password"
            name="newPassword"
            rules={[
              { required: true, message: 'Password is required' },
              { 
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=^.{8,45}$)/,
                message: `Password should contain numbers, letters and 
                at least 8 characters`
              }
            ]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Confirm new password"
            dependencies={['newPassword']}
            hasFeedback
            name="newPasswordConfirm"
            rules={[
              { required: true, message: 'Password is required' },
              ({getFieldValue}) => ({
                validator(rule, value) {
                  if (getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Passwords do not match.');
                }
              })
            ]}>
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}