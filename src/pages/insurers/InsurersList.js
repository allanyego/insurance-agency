import React, { useEffect, useState } from 'react';
import { Col, List, Row, Input, } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';

import Page from '../../components/Page';
import { loadInsurers, search } from '../../util/http/insurers';
import titleCase from '../../util/titleCase';

const { Search } = Input;

export default function InsurersList({ insurers, updateInsurers }) {
  const location = useLocation();
  const [term, setTerm] = useState('');
  const [innerInsurers, setInnerInsurers] = useState(insurers);

  useEffect(() => {
    if (insurers.length < 20) {
      try {
        (async () => {
          const res = await loadInsurers();
          if (!res) return;
          updateInsurers(res.data);
        })()
      } catch (error) {
        console.log('FETCH ERROR insurers', error);
      }
    }
  }, []);

  useEffect(() => {
    const match = term ? insurers.filter(i => i.name.match(term)) : insurers;
    setInnerInsurers(match);
  }, [insurers, term]);

  const onSearch = async (searchTerm) => {
    setTerm(searchTerm);
    if (!searchTerm) {
      return;
    }
    const resp = await search(searchTerm);
    if (resp && resp.data) {
      updateInsurers(resp.data);
    }
  };

  return (
    <Page pageTitle="Registered Insurers">
      <Row justify="center">
        <Col flex="auto">
          <Row justify="center">
            <Col span={14}>
              <Search placeholder="Insurer name" onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={20}>
              <List
                itemLayout="horizontal"
                dataSource={innerInsurers}
                renderItem={item => (
                  <Link to={{
                    pathname: `/app/insurers/${item.id}`,
                    state: {
                      prevPath: location.pathname
                    }
                  }}>
                    <List.Item>
                      <List.Item.Meta
                        title={titleCase(item.name)}
                        description={
                          "Registered " +
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
