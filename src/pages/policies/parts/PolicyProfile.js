import React, { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import { useParams, useHistory } from "react-router-dom";

import PolicyDetails from "../../../containers/policies/parts/PolicyDetails";
import ClientDetails from "../../../containers/policies/parts/ClientDetails";
import ApprovalBtn from "../../../containers/policies/parts/ApprovalBtn";
import ProfileContainer from "../../../components/ProfileContainer";
import ProfileSkeleton from "../../../components/ProfileSkeleton";
import Detail from "../../../components/Detail";
import { getById } from "../../../util/http/policies";

const { Text } = Typography;

export default function PolicyProfile({ policy, addPolicy }) {
  const { policyId } = useParams();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      if (!policy) {
        const resp = await getById({
          policyId,
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
    return <ProfileSkeleton />;
  }

  return (
    <ProfileContainer
      label="Policy no"
      title={String(policy.policyNumber).toUpperCase()}
      fallbackUrl="/app/reports/applications"
    >
      <div
        style={{
          paddingLeft: "1em",
          marginBottom: "1.5em",
        }}
      >
        <Detail
          title={"Applied"}
          content={new Date(policy.createdAt).toLocaleDateString()}
        />
        <Detail title={"Client"}>
          <ClientDetails clientId={policy.client} />
        </Detail>
        <Detail title={"Class"} content={policy.policyClass} />

        {!policy.approved && <ApprovalBtn policy={policy} />}
      </div>
      <PolicyDetails
        policyId={policy.id}
        insurerId={policy.insurer}
        policyClass={policy.policyClass}
      />
    </ProfileContainer>
  );
}
