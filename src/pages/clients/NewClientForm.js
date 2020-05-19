import React, { useState } from "react";
import { Col, Form, Button, Row } from "antd";
import { useParams, useLocation } from "react-router-dom";

import ClientDetails from "./parts/ClientDetails";
import PolicyDetails from "./parts/PolicyDetails";

import Page from "../../components/Page";

import { postClient } from "../../util/http/clients";
import { postPolicy } from "../../util/http/policies";

import "../Form.css";

export default function NewClientForm({
  addClient,
  addPolicy,
  addVehicle,
  addSuccess,
  addError,
  token,
}) {
  const { insurerId } = useParams();
  const location = useLocation();
  const clientId = location?.state?.clientId;
  const pageTitle = clientId ? "Add policy for client" : "Register new client";
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const wrap = (fn) => {
    setLoading(true);
    try {
      fn().then(() => {
        addSuccess("Data submitted successfully");
        form.resetFields();
      });
    } catch (error) {
      addError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const submitClient = () => {
    wrap(async function wrapped() {
      const values = await form.validateFields();
      const resp = await postClient({
        insurer: insurerId,
        token,
        ...values,
      });
      if (resp && resp.data) {
        const { policy, ...client } = resp.data;
        addClient(client);
        const { vehicle, ...policyDetails } = policy;
        addPolicy(policyDetails);
        !!vehicle && addVehicle(vehicle);
      } else if (resp && resp.error) {
        throw Error(resp.error);
      }
    });
  };

  const submitPolicy = () => {
    wrap(async function wrapped() {
      const values = await form.validateFields();
      const resp = await postPolicy({
        insurer: insurerId,
        client: clientId,
        token,
        ...values,
      });
      if (resp && resp.data) {
        const { vehicle, ...policyDetails } = resp.data;
        addPolicy(policyDetails);
        !!vehicle && addVehicle(vehicle);
      } else if (resp && resp.error) {
        throw Error(resp.error);
      }
    });
  };

  return (
    <Page pageTitle={pageTitle}>
      <Row justify="center">
        <Col>
          <Form className="OForm" form={form}>
            {!clientId && <ClientDetails />}
            <PolicyDetails />
            <Row justify="end">
              <Button
                type="primary"
                onClick={clientId ? submitPolicy : submitClient}
                loading={loading}
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Page>
  );
}
