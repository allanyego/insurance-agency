import React, { useState } from 'react';
import {
  Col,
  Form,
  Button,
  Row
} from 'antd';

import AdminDetails from './parts/AdminDetails';
import Page from '../../components/Page';

import { postAdmin } from '../../util/http/admins';

import '../Form.css';

export default function NewAdminForm({ addSuccess, addError }) {
  const pageTitle = "Register new admin";
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const submitAdmin = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const resp = await postAdmin(values);
      if (resp && resp.data) {
        addSuccess('Data submitted successfully');
        form.resetFields();
      } else if (resp && resp.error) {
        addError(resp.error);
      }
    } catch (error) {
      addError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page pageTitle={pageTitle}>
      <Row justify="center">
        <Col>
          <Form className="OForm"
            form={form}>
            <AdminDetails />
            <Button
              type="primary"
              onClick={submitAdmin}
              loading={loading}>
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Page>
  );
}