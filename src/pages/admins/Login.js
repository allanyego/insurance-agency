import React, { useState } from 'react';
import {
  Col,
  Form,
  Button,
  Row,
} from 'antd';
import { useHistory, useLocation, Redirect } from 'react-router-dom';

import AuthPage from './parts/AuthPage';
import LoginDetails from './parts/LoginDetails';

import { login as adminLogin } from '../../util/http/admins';

import '../Form.css';

export default function Login({ login, addError, auth }) {
  const history = useHistory();
  const location = useLocation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const loginAdmin = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const resp = await adminLogin(values);
      if (resp && resp.error) {
        if (resp.error?.accState === 'NEEDS_RESET') {
          addError('You need to change your password');
          history.push({
            pathname: '/change-password',
            state: {
              adminId: resp.error.id
            }
          });
        } else {
          addError(resp.error);
        }
      } else if (resp && resp.data) {
        form.resetFields();
        login({
          rememberMe: values.rememberMe,
          ...resp.data
        });
        history.push(location?.state?.attemptedRoute || '/app');
      }
    } catch (error) {
      console.log('An error occurred', error);
    } finally {
      setLoading(false);
    }
  };

  if (!!auth?.token) {
    return <Redirect to="/app" />
  }

  return (
    <AuthPage title="Admin login">
      <Row justify="center">
        <Col span={6}>
          <Form className="OForm"
            form={form}>
            <LoginDetails />
            <Button
              type="primary"
              onClick={loginAdmin}
              loading={loading}>
              Log in
            </Button>
          </Form>
        </Col>
      </Row>
    </AuthPage>
  );
}