import React, { useEffect } from "react";
import { Button, Col, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useParams, useHistory } from "react-router-dom";

import Subscriptions from "../../../containers/common/Subscriptions";
import ProfileContainer from "../../../components/ProfileContainer";
import ProfileSkeleton from "../../../components/ProfileSkeleton";
import Detail from "../../../components/Detail";
import { search } from "../../../util/http/policies";
import { getById } from "../../../util/http/insurers";
import titleCase from "../../../util/titleCase";

const { Text } = Typography;

export default function InsurerProfile({
  insurer,
  updatePolicies,
  addInsurer,
}) {
  const { insurerId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (!insurer) {
        const resp = await getById({
          insurerId,
        });
        if (resp && resp.data) {
          addInsurer(resp.data);
        } else {
          history.replace("/insurers");
        }
      }
    })();
  }, [insurer]);

  const loadPolicies = async (subs) => {
    if (subs.length <= 2) {
      const resp = await search({
        insurer: insurer.id,
      });
      if (resp && resp.data) {
        updatePolicies(resp.data);
      }
    }
  };

  if (!insurer) {
    return <ProfileSkeleton />;
  }

  return (
    <ProfileContainer
      label="Insurer name"
      title={titleCase(insurer.name)}
      fallbackUrl="/app/insurers"
    >
      <div
        style={{
          paddingLeft: "1em",
          marginBottom: "1.5em",
        }}
      >
        <Detail
          title={"Address"}
          content={titleCase(
            `${insurer.addressNumber} ` +
              `${insurer.addressTown}, ${insurer.addressCode}`
          )}
        />
        <Detail title={"Phone"} content={insurer.phoneNumber} />
      </div>
      <Subscriptions
        insurerId={insurer.id}
        fallback={() => <AddClient insurer={insurer} />}
        onMount={loadPolicies}
      />
    </ProfileContainer>
  );
}

function AddClient({ insurer }) {
  return (
    <Row
      justify="center"
      style={{
        marginTop: "4em",
      }}
    >
      <Col>
        <Text
          style={{
            marginRight: "1em",
          }}
          strong
        >
          This insurer has no clients yet.
        </Text>
        <Link
          to={{
            pathname: `/app/clients/new/${insurer.id}`,
          }}
        >
          <Button type="primary" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Col>
    </Row>
  );
}
