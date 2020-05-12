import React from 'react';
import {
  Card,
  Col,
  Form,
  Input,
  Row,
} from 'antd';

const nameReg = {
  pattern: /^[a-zA-Z]{2,}$/,
  message: 'Invalid value'
};

export default function ClientDetails() {
  return (
    <Card
      title="Client details">
      <Row gutter={16}>
        <Col>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[
              {
                required: true,
                message: 'First name is required'
              },
              nameReg
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="middleName"
            label="Middle name"
            rules={[
              nameReg
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[
              {
                required: true,
                message: 'Last name is required'
              },
              nameReg
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item
            label="Address"
            name="addressNumber"
            rules={[
              { required: true, message: 'Address number is required' },
              {
                pattern: /^[a-zA-Z0-9]{1,}$/,
                message: 'Address number is invalid'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Postal code"
            name="addressCode"
            rules={[
              { required: true, message: 'Postal code is required' },
              {
                pattern: /^\d{1,}$/,
                message: 'Postal code should be a number'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Town"
            name="addressTown"
            rules={[
              { required: true, message: 'Address town is required' },
              {
                pattern: /^[a-zA-Z]{2,}$/,
                message: 'Town name is invalid'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item
            label="ID/Passport number"
            name="idNumber"
            rules={[
              { required: true, message: 'ID number is required' },
              {
                pattern: /^[0-9]{1,}$/,
                message: 'ID/Passport should be a number'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
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
        <Col>
          <Form.Item
            label="Phone number"
            name="phoneNumber"
            rules={[
              { required: true, message: 'Phone number is required' },
              {
                pattern: /^0(7\d{1}|20)\d{7}$/,
                message: 'Invalid phone number'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item
            label="Occupation"
            name="occupation"
            rules={[
              { required: true, message: 'Occupation is required' },
              {
                pattern: /^[a-zA-Z]{2,}$/,
                message: 'Occupation should be a string'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="KRA pin"
            name="kraPin"
            rules={[
              { required: true, message: 'KRA pin is required' },
              {
                pattern: /^[a-zA-Z0-9]{11}$/,
                message: 'KRA Pin should be 11 characters'
              }
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}