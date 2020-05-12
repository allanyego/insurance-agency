import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Typography,
} from 'antd';
import { useParams, useHistory } from 'react-router-dom';


import PolicyDetails from '../../../containers/policies/parts/PolicyDetails';
import ClientDetails from '../../../containers/policies/parts/ClientDetails';
import ApprovalBtn from '../../../containers/policies/parts/ApprovalBtn';
import ProfileContainer from '../../../components/ProfileContainer';
import ProfileSkeleton from '../../../components/ProfileSkeleton';
import { getById } from '../../../util/http/policies';

const { Text } = Typography;

export default function PolicyProfile({ policy, addPolicy }) {
  const { policyId } = useParams();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      if (!policy) {
        const resp = await getById({
          policyId
        });
        if (resp && resp.data) {
          addPolicy(resp.data);
        } else {
          history.push("/reports/applications");
        }
      }
    })();
  }, [policy]);

  if (!policy) {
    return (
      <ProfileSkeleton />
    );
  }

  return (
    <ProfileContainer
      label="Policy no"
      title={String(policy.policyNumber).toUpperCase()}
      fallbackUrl="/app/reports/applications">
      <div style={{
        paddingLeft: '1em',
        marginBottom: '1.5em',
      }}>
        <Row>
          <Col span={5}>
            <Text>Applied</Text>
          </Col>
          <Col flex>
            <Text strong>
              {new Date(policy.createdAt).toLocaleDateString()}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Client</Text>
          </Col>
          <Col flex>
            <ClientDetails clientId={policy.client} />
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Text>Class</Text>
          </Col>
          <Col flex>
            <Text strong>{policy.policyClass}</Text>
          </Col>
        </Row>
        {!policy.approved &&
          <ApprovalBtn policy={policy} />
        }
      </div>
      <PolicyDetails
        policyId={policy.id}
        insurerId={policy.insurer}
        policyClass={policy.policyClass} />
    </ProfileContainer>
  );
}
