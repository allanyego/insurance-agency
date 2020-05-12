import React, { useState } from 'react';
import {
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  DatePicker,
  Checkbox,
  InputNumber,
  Typography,
  Radio
} from 'antd';

import VehicleDetails from './VehicleDetails';

const { Text } = Typography

export default function PolicyDetails() {
  const [isForVehicle, setIsForVehicle] = useState(false);
  const [startDate, setStartDate] = useState(null);

  const onClassChange = (event) => {
    const { value } = event.target;
    if (value === 'fire') {
      return setIsForVehicle(false);
    }
    setIsForVehicle(true);
  };

  const onPeriodStartChange = date => setStartDate(date);

  const restrictEndDate = (currentDate) => {
    if (startDate) {
      return currentDate.isSameOrBefore(startDate);
    } 
    return currentDate.isSameOrBefore();
  };

  return (
    <Card
      title="Policy details">
      <Row gutter={16}>
        <Col flex="auto">
          <Form.Item
            label="Policy number"
            name="policyNumber"
            rules={[
              { required: true, message: 'Policy number is required' }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col flex="auto">
          <Form.Item
            label="Policy Period"
          >
            <Input.Group>
              <Form.Item
                name={['policyPeriod', 'start']}
                help="Select start date"
                rules={[{ required: true, message: 'Start date required' }]}>
                <DatePicker
                  disabledDate={(currentDate) => currentDate.isBefore()}
                  onChange={onPeriodStartChange} />
              </Form.Item>
              <Form.Item
                name={['policyPeriod', 'end']}
                help="Select end date"
                rules={[{ required: true, message: 'End date required' }]}>
                <DatePicker
                  disabledDate={restrictEndDate} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Col>
        <Col flex="auto">
          <Form.Item
            label="Sum insured"
            name="sumInsured"
            rules={[
              { required: true, message: 'Sum is required' },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col flex="auto">
          <Form.Item
            label="PVT"
            name="pvt"
            rules={[
              { required: true, message: 'PVT is required' },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Col>
        <Col flex="auto">
          <Form.Item
            label="Premium rate"
            name="premiumRate"
            rules={[
              { required: true, message: 'Premium rate is required' },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item
          label="Select the insurance class"
          name="policyClass"
          rules={[
            { required: true, message: 'Please select policy class' }
          ]}>
          <Radio.Group onChange={onClassChange}>
            <Radio value={"fire"}>Fire</Radio>
            <Radio value={"vehicle"}>Vehicle</Radio>
          </Radio.Group>
        </Form.Item>
      </Row>
      {isForVehicle &&
        <div>
          <Divider />
          <VehicleDetails />
          <Text strong style={{ marginBottom: '0.7em' }}>Extension</Text>
          <Row className="OFormRow">
            <Col span={12}>
              <Form.Item
                help="5% with a min of Kshs30,000/="
                label="Add excess protection"
                name="excessProtection"
                valuePropName="checked"
              >
                <Checkbox defaultChecked={false} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                help="+ Kshs5000"
                label="Young/New drivers"
                name="rookie"
                valuePropName="checked"
              >
                <Checkbox defaultChecked={false} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Passengers (PLL)"
                name="passengersPllCoverage"
                valuePropName="checked"
              >
                <Checkbox defaultChecked={false} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                help="10% antitheft device, 20% no device"
                label="Theft"
                name="antiTheftCoverage"
                valuePropName="checked"
              >
                <Checkbox defaultChecked={false} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      }
      {/* <Divider />

      <section className="OExtContainer">
        <div>Windscreen</div>
        <div>
          <Text strong>0.00</Text>
        </div>
        <div>RADIO</div>
        <div>
          <Text strong>0.00</Text>
        </div>

      </section> */}
    </Card>

  );
}