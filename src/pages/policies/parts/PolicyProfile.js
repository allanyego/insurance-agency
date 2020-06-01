import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import PolicyDetails from "../../../containers/policies/parts/PolicyDetails";
import ClientDetails from "../../../containers/policies/parts/ClientDetails";
import ApprovalBtn from "../../../containers/policies/parts/ApprovalBtn";
import RenewalBtn from "../../../containers/policies/parts/RenewalBtn";
import ProfileContainer from "../../../components/ProfileContainer";
import ProfileSkeleton from "../../../components/ProfileSkeleton";
import Detail from "../../../components/Detail";
import { getById } from "../../../util/http/policies";
import { Typography } from "antd";
import titleCase from "../../../util/titleCase";
import isExpiredDate from "../../../util/dates/isDateExpired";

export default function PolicyProfile({ policy, addPolicy }) {
  const { policyId } = useParams();
  const history = useHistory();
  const isEpxired = isExpiredDate(policy.policyPeriodStart);

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
        <Detail title={"Class"} content={titleCase(policy.policyClass)} />
        <Detail title={"Type"}>
          <div>
            {titleCase(policy.type)} | <NoteLink {...policy} />
          </div>
        </Detail>

        {isEpxired && <RenewalBtn policy={policy} />}

        {!policy.approved && !isEpxired && <ApprovalBtn policy={policy} />}
      </div>
      <PolicyDetails
        policyId={policy.id}
        insurerId={policy.insurer}
        policyClass={policy.policyClass}
      />
    </ProfileContainer>
  );
}

function NoteLink({ id, type, approved }) {
  if (!approved) {
    return <Typography.Text disabled>View Note</Typography.Text>;
  }

  return <Link to={`/app/note/${id}/${type}`}>View Note</Link>;
}
