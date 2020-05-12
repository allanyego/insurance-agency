import React, { useEffect, useState } from 'react';
import {
  Col,
  Row,
  Typography,
  Button
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Subscriptions from '../../../containers/common/Subscriptions';
import ProfileContainer from '../../../components/ProfileContainer';
import { Link, useParams, useHistory } from 'react-router-dom';
import { search } from '../../../util/http/policies';
import { getById } from '../../../util/http/clients';
import ProfileSkeleton from '../../../components/ProfileSkeleton';
import titleCase from '../../../util/titleCase';

const { Text } = Typography;

export default function ClientProfile({ client, updatePolicies, addClient }) {
  const { clientId } = useParams();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      if (!client) {
        const resp = await getById({
          clientId
        });
        
        if (resp && resp.data) {
          addClient(resp.data);
        } else {
          history.replace('/clients');
        }
      }
    })();
  }, [client]);

  const loadPolicies = async (subs) => {
    if (subs.length <= 2) {
      const resp = await search({
        client: client.id
      });

      if (resp && resp.data) {
        updatePolicies(resp.data);
      }
    }
  };

  if (!client) {
    return (
      <ProfileSkeleton />
    );
  }

  return (
    <ProfileContainer
      label="Client name"
      title={titleCase(`${client.firstName} ${client.lastName}`)}>
      <div style={{
        paddingLeft: '1em',
        marginBottom: '1.5em',
      }}>
        <Row>
          <Col span={5}>
            <Text>ID No</Text>
          </Col>
          <Col flex>
            <Text strong>{client.idNumber}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Address</Text>
          </Col>
          <Col flex>
            <Text strong>
              {titleCase(`${client.addressNumber} ` +
                `${client.addressTown}, ${client.addressCode}`)}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Occupation</Text>
          </Col>
          <Col flex>
            <Text strong>{titleCase(client.occupation)}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Phone</Text>
          </Col>
          <Col flex>
            <Text strong>{client.phoneNumber}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Email</Text>
          </Col>
          <Col flex>
            <Text strong>{client.email}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Member since</Text>
          </Col>
          <Col flex>
            <Text strong>
              {client.createdAt}
            </Text>
          </Col>
        </Row>
      </div>
      <Subscriptions clientId={client.id}
        extra={() => <AddPolicy client={client} />}
        onMount={loadPolicies}
      />
    </ProfileContainer>
  );
}

function AddPolicy({ client }) {
  return (
    <Row justify="center"
      style={{
        margin: '2em auto 2em'
      }}>
      <Col>
        <Text
          style={{
            marginRight: '1em'
          }}
          strong>
          Add new policy for client
          </Text>
        <Link to={{
          pathname: "/clients/new",
          state: {
            clientId: client.id
          }
        }}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />} />
        </Link>
      </Col>
    </Row>
  );
}