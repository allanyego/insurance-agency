import React from "react";
import { Row, Col, Typography } from "antd";

import Premium from "./Premium";
import Liability from "./Liability";

import "./Invoice.css";
import Signatory from "./Signatory";
import InvoiceContainer from "./InvoiceContainer";
import Unapproved from "./Unapproved";
const { Text, Title } = Typography;

export default function PolicySchedule({
  policy,
  client,
  vehicle,
  insurer,
  auth,
}) {
  if (!policy.approved) {
    return (
      <Unapproved policy={policy} />
    );
  }
  
  return (
    <InvoiceContainer {...{ policy, client, vehicle, insurer }}>
      <Note {...{ policy, client, vehicle, insurer, auth }} />
    </InvoiceContainer>
  );
}

export function Note({ policy, client, vehicle, insurer, auth }) {
  return (
    <Row className="policy-schedule invoice-page">
      <Col flex="auto">
        <Row>
          <Col flex="auto" className="text-upper">
            <Title level={3}>motor private</Title>
            <div className="heading">
              <Row gutter={16}>
                <Col span={4}>
                  <Text className="text-title" strong>
                    policy no:
                  </Text>
                </Col>
                <Col>
                  <Text>{policy.policyNumber}</Text>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={4}>
                  <Text className="text-title" strong>
                    insurer:
                  </Text>
                </Col>
                <Col>
                  <Text>{insurer.name}</Text>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="logo">
            <img src="/orient-insurance/orient-logo.png" alt="orient logo" />
          </Col>
        </Row>
        <Row className="client-info">
          <Col flex="auto">
            <div>
              <Text strong>Name and address of Client</Text>
            </div>
            <div className="text-upper">
              <div>{`${client.firstName} ${client.lastName}`}</div>
              <div>p.o box {client.addressNumber}</div>
              <div>{client.addressTown}</div>
            </div>
          </Col>
          <Premium policy={policy} />
        </Row>
        <p>
          <Text strong>Occupation</Text>
          <br />
          <Text className="text-upper">{client.occupation}</Text>
        </p>
        <p>
          <Text strong>Period of insurance</Text>
          <br />
          <Text>
            From {formattedDate(policy.policyPeriodStart)} to{" "}
            {formattedDate(policy.policyPeriodEnd)}; both dates inclusive.
          </Text>
          <br />
          <Text>
            Any subsequent period for which the insured shall apply for renewal
            and the company shall agree to renew the policy.
          </Text>
        </p>
        <p>
          <Text strong>Motor Vehicle</Text>
          <br />
          <Text>
            Any of the following, and/or any other subsequent additional
            vehicle(s) are endorsed hereinafter.
          </Text>
        </p>
        <Row>
          <Col flex="auto">
            <table>
              <thead className="text-title">
                <tr>
                  <th>reg no</th>
                  <th>chassis no</th>
                  <th>make</th>
                  <th>type of body</th>
                  <th>C.C</th>
                  <th>year of manufacture</th>
                  <th>insured's estimate of value</th>
                  <th>cover type</th>
                </tr>
              </thead>
              <tbody className="text-upper">
                <tr>
                  <td>{vehicle.registrationNumber}</td>
                  <td></td>
                  <td>{vehicle.make}</td>
                  <td>{vehicle.bodyType}</td>
                  <td></td>
                  <td></td>
                  <td>{policy.sumInsured}</td>
                  <td>comp</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Liability />
        <Signatory {...auth} />
      </Col>
    </Row>
  );
}

export function formattedDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}
