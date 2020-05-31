import React, { useState, useEffect } from "react";
import { List, Row, Col, Space, Typography, Input } from "antd";
import {
  CaretRightOutlined,
  CheckCircleOutlined,
  InfoCircleFilled,
  CarOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import Page from "../../components/Page";
import { search } from "../../util/http/policies";
import titleCase from "../../util/titleCase";

const { Search } = Input;

export default function NewApplicationList({
  newApplications,
  updatePolicies,
}) {
  const [term, setTerm] = useState("");
  const [innerPolicies, setInnerPolicies] = useState(newApplications);

  useEffect(() => {
    if (newApplications.length < 20) {
      try {
        (async () => {
          const res = await search({
            type: "new",
          });
          if (!res) return;
          updatePolicies(res.data);
        })();
      } catch (error) {
        console.log("FETCH ERROR new policies", error);
      }
    }
  }, []);

  useEffect(() => {
    const match = term
      ? newApplications.filter((i) => i.policyNumber.match(term))
      : newApplications;
    setInnerPolicies(match);
  }, [newApplications, term]);

  const onSearch = async (searchTerm) => {
    setTerm(searchTerm);
    if (!searchTerm) {
      return;
    }

    const resp = await search(searchTerm);
    if (resp && resp.data) {
      updatePolicies(resp.data);
    }
  };

  return (
    <Page pageTitle="New Applications">
      <Row justify="center">
        <Col flex="auto">
          <Row justify="center">
            <Col xs={24} sm={18} lg={12}>
              <Search
                placeholder="Policy number"
                onSearch={onSearch}
                enterButton
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={24} lg={20}>
              <AList items={innerPolicies} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
}

function IconText({ icon, text, type }) {
  return (
    <Space>
      <Typography.Text type={type}>
        {React.createElement(icon)} {text}
      </Typography.Text>
    </Space>
  );
}

export function AList({items}) {
  const location = useLocation();

  return (
    <List
      itemLayout="vertical"
      dataSource={items}
      renderItem={(item) => (
        <Link
          to={{
            pathname: `/app/policies/${item.id}`,
            state: {
              prevPath: location.pathname,
            },
          }}
        >
          <List.Item
            actions={[
              <IconText
                icon={item.policyClass === "fire" ? FireOutlined : CarOutlined}
                text={titleCase(item.policyClass)}
                key="policyClass"
              />,
              ...(item.approved
                ? [
                    <IconText
                      icon={CheckCircleOutlined}
                      text="Approved"
                      type="success"
                      key="approvedIcon"
                    />,
                  ]
                : [
                    <IconText
                      icon={InfoCircleFilled}
                      text="Not approved"
                      type="warning"
                      key="notApprovedIcon"
                    />,
                  ]),
            ]}
            extra={<CaretRightOutlined />}
          >
            <List.Item.Meta
              title={String(item.policyNumber).toUpperCase()}
              description={
                "Applied " + new Date(item.createdAt).toLocaleDateString()
              }
            />
          </List.Item>
        </Link>
      )}
    />
  );
}
