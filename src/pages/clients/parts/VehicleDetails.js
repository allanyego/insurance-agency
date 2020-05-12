import React from 'react';
import {
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
} from 'antd';

export default function VehicleDetails() {
  return (
    <Card
      title="Vehicle details">
      <Row gutter={16}>
        <Col>
          <Form.Item
            label="Registration number"
            name="registrationNumber"
            rules={[
              { required: true, message: 'Vehicle registration no is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Make"
            name="make"
            rules={[
              { required: true, message: 'Vehicle make is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Body type"
            name="bodyType"
            rules={[
              { required: true, message: 'Vehicle body type is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item
            label="Body color"
            name="bodyColor"
            rules={[
              { required: true, message: 'Vehicle body color is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Chasis number"
            name="chasisNumber"
            rules={[
              { required: true, message: 'Vehicle chasis number is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Engine number"
            name="engineNumber"
            rules={[
              { required: true, message: 'Vehicle body type is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col>
          <Form.Item
            label="Rating (cc)"
            name="ratingCc"
            rules={[
              { required: true, message: 'Vehicle rating (cc) is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Tonnage"
            name="tonnage"
            rules={[
              { required: true, message: 'Vehicle tonnage is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Year of manufacture"
            name="manufactureYear"
            rules={[
              { required: true, message: 'Vehicle year of manufacture is required' }
            ]}
          >
            <DatePicker.YearPicker />
          </Form.Item>
        </Col>
      </Row>
    </Card>

  );
}