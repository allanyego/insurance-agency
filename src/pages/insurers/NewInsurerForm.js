import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'antd';

import InsurerDetails from './parts/InsurerDetails';
import Page from '../../components/Page';

import { postInsurer } from '../../util/http/insurers';

import '../Form.css';

export default function NewInsurerForm({
  addInsurer, addSuccess, token, addError,
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const resp = await postInsurer({
        token,
        ...values
      });
      if (resp && resp.data) {
        addInsurer(resp.data);
        addSuccess('Data submitted successfully');
        form.resetFields();
      } else if (resp && resp.error) {
        addError(resp.error);
      }
    } catch (error) {
      addError(error.message);
    } finally {
      setLoading(false)
    }
  };

  const onFinishFailed = ({ values, errorFields }) => {
    console.log('Error', errorFields);
  };

  return (
    <Page pageTitle="Register new insurer">
      <Row justify="center">
        <Col>
          <Form className="OForm"
            form={form}
            colon={false}
            labelAlign="left"
            scrollToFirstError={true}
            onFinishFailed={onFinishFailed}>
            <InsurerDetails />
            <Button type="primary" onClick={onSubmit}
              loading={loading}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Page>
  );
}