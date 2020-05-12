import React, { useState, useEffect } from 'react';
import { Col, List, Row, Input } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import Page from '../../components/Page';
import { search } from '../../util/http/policies';

const { Search } = Input;

export default function RenewalApplicationsList({
  renewalApplications,
  updatePolicies
}) {
  const location = useLocation();
  const [term, setTerm] = useState('');
  const [innerPolicies, setInnerPolicies] = useState(renewalApplications);

  useEffect(() => {
    if (renewalApplications.length < 20) {
      try {
        (async () => {
          const res = await search({
            type: 'renewal'
          });
          if (!res) return;
          updatePolicies(res.data);
        })()
      } catch (error) {
        console.log('FETCH ERROR renewal policies', error);
      }
    }
  }, []);

  useEffect(() => {
    const match = term ?
      renewalApplications.filter(i => i.policyNumber.match(term)) :
      renewalApplications;
    setInnerPolicies(match);
  }, [renewalApplications, term]);

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
    <Page pageTitle="Renewal Applications">
      <Row justify="center">
        <Col flex="auto">
          <Row justify="center">
            <Col span={14}>
              <Search placeholder="Policy number" onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={20}>
              <List
                itemLayout="horizontal"
                dataSource={innerPolicies}
                renderItem={item => (
                  <Link to={{
                    pathname: `/app/policies/${item.id}`,
                    state: {
                      prevPath: location.pathname
                    }
                  }}>
                    <List.Item>
                      <List.Item.Meta
                        title={String(item.policyNumber).toUpperCase()}
                        description={
                          "Applied " +
                          new Date(item.createdAt).toLocaleDateString()
                        }
                      />
                      <div>
                        <CaretRightOutlined />
                      </div>
                    </List.Item>
                  </Link>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
}
