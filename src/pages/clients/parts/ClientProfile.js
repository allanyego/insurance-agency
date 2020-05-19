import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Subscriptions from "../../../containers/common/Subscriptions";
import ProfileContainer from "../../../components/ProfileContainer";
import Detail from "../../../components/Detail";
import { Link, useParams, useHistory } from "react-router-dom";
import { search } from "../../../util/http/policies";
import { getById } from "../../../util/http/clients";
import ProfileSkeleton from "../../../components/ProfileSkeleton";
import titleCase from "../../../util/titleCase";

const { Text } = Typography;

export default function ClientProfile({ client, updatePolicies, addClient }) {
  const { clientId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (!client) {
        const resp = await getById({
          clientId,
        });

        if (resp && resp.data) {
          addClient(resp.data);
        } else {
          history.replace("/clients");
        }
      }
    })();
  }, [client]);

  const loadPolicies = async (subs) => {
    if (subs.length <= 2) {
      const resp = await search({
        client: client.id,
      });

      if (resp && resp.data) {
        updatePolicies(resp.data);
      }
    }
  };

  if (!client) {
    return <ProfileSkeleton />;
  }

  return (
    <ProfileContainer
      label="Client name"
      title={titleCase(`${client.firstName} ${client.lastName}`)}
      fallbackUrl="/app/clients"
    >
      <div
        style={{
          paddingLeft: "1em",
          marginBottom: "1.5em",
        }}
      >
        <Detail title={"ID No"} content={client.idNumber} />
        <Detail
          title={"Address"}
          content={titleCase(
            `${client.addressNumber} ` +
              `${client.addressTown}, ${client.addressCode}`
          )}
        />
        <Detail title={"Occupation"} content={titleCase(client.occupation)} />
        <Detail title={"Phone"} content={client.phoneNumber} />
        <Detail title={"Email"} content={client.email} />
        <Detail
          title={"Member since"}
          content={new Date(client.createdAt).toLocaleDateString()}
        />
      </div>
      <Subscriptions
        clientId={client.id}
        extra={() => <AddPolicy client={client} />}
        onMount={loadPolicies}
      />
    </ProfileContainer>
  );
}

function AddPolicy({ client }) {
  return (
    <Row
      justify="center"
      style={{
        margin: "2em auto 2em",
      }}
    >
      <Col>
        <Text
          style={{
            marginRight: "1em",
          }}
          strong
        >
          Add new policy for client
        </Text>
        <Link
          to={{
            pathname: "/app/clients/new",
            state: {
              clientId: client.id,
            },
          }}
        >
          <Button type="primary" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Col>
    </Row>
  );
}
