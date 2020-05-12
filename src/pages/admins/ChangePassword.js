import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Row,
} from 'antd';
import { Link, useLocation } from 'react-router-dom';

import AuthPage from './parts/AuthPage';
import PasswordDetails from './parts/PasswordDetails';
import { changePassword } from '../../util/http/admins';

import '../Form.css';

export default function ChangePassword({ addError }) {
  const location = useLocation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [changeSuccess, setChangeSuccess] = useState(false);
  const submitPassword = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const resp = await changePassword({
        ...location?.state,
        ...values,
      });
      if (resp && resp.data) {
        form.resetFields();
        setChangeSuccess(true);
      } else if (resp && resp.error) {
        addError(resp.error);
      }
    } catch (error) {
      console.log('An error occurred', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPage title="Change password">
      <Row justify="center">
        <Col span={6}>
          {changeSuccess ?
            <div>
              Password change successful. Proceed to <Link to="/login">login</Link>
            </div> :
            <Form className="OForm"
              form={form}>
              <PasswordDetails />
              <Row justify="space-between">
                <Link to="/login">
                  <Button type="link">Login</Button>
                </Link>
                <Button
                  type="primary"
                  onClick={submitPassword}
                  loading={loading}>
                  Submit
              </Button>
              </Row>
            </Form>
          }
        </Col>
      </Row>
    </AuthPage>
  );
}