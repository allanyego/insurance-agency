import React, { useState, useEffect } from 'react';
import {
  Divider,
  Col,
  Input,
  List,
  Row,
} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';

import Page from '../components/Page';
import { search, loadInsurers } from '../util/http/insurers';
import titleCase from '../util/titleCase';

const { Search } = Input;

export default function SelectIssuer({ insurers, updateInsurers }) {
  const location = useLocation();
  const [term, setTerm] = useState('');
  let [innerInsures, setInnerInsurers] = useState(insurers);

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
  }, [term, insurers]);

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
    <Page pageTitle="Select insurance provider.">
      <Row justify="center" style={{ marginTop: '1.5em' }}>
        <Col flex="auto" xs={24} lg={12}>
          <Row justify="center">
            <Col xs={24} sm={18}>
              <Search placeholder="insurer name" onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Divider />
          <Row justify="center">
            <Col flex="auto" xs ={24} lg={20}>
              <List
                dataSource={innerInsures}
                itemLayout="horizontal"
                renderItem={(item) => {
                  const link = {
                    pathname: `/app/clients/new/${item.id}`,
                    state: {
                      clientId: location?.state?.clientId
                    }
                  };
                  return (
                    <Link to={link}>
                      <List.Item>
                        <List.Item.Meta
                          title={<Link to={link}>{titleCase(item.name)}</Link>}
                        />
                        <CaretRightOutlined />
                      </List.Item>
                    </Link>
                  );
                }
                }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
}