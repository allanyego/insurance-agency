import React, { useState, useEffect } from 'react';
import {
  Col,
  List,
  Row,
  Input,
} from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import Page from '../../components/Page';
import { search, loadClients } from '../../util/http/clients';
import titleCase from '../../util/titleCase';

const { Search } = Input;

export default function ClientList({ clients, updateClients }) {
  const location = useLocation();
  const [term, setTerm] = useState('');
  const [innnerClients, setInnerClients] = useState(clients);

  useEffect(() => {
    if (clients.length < 20) {
      try {
        (async () => {
          const res = await loadClients();
          if (!res) {
            return
          };
          
          updateClients(res.data);
        })()
      } catch (error) {
        console.log('FETCH ERROR clients', error);
      }
    }
  }, []);

  useEffect(() => {
    const match = term ?
      clients.filter(i => {
        return i.firstName.match(term) || i.lastName.match(term) ||
          i.middleName.match(term)
      }) :
      clients;
    setInnerClients(match);
  }, [term, clients]);

  const onSearch = async (searchTerm) => {
    setTerm(searchTerm);
    if (!searchTerm) {
      return;
    }

    const resp = await search(searchTerm);
    if (resp && resp.data) {
      updateClients(resp.data);
    }
  };
  return (
    <Page pageTitle="Clients">
      <Row justify="center">
        <Col flex="auto">
          <Row justify="center">
            <Col xs={24} sm={18} lg={12}>
              <Search placeholder="client name" onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={24} lg={20}>
              <List
                itemLayout="horizontal"
                dataSource={innnerClients}
                renderItem={item => {
                  const { firstName, lastName } = item;
                  return (
                    <Link to={{
                      pathname: `/app/clients/${item.id}`,
                      state: {
                        prevPath: location.pathname
                      }
                    }}>
                      <List.Item>
                        <List.Item.Meta
                          title={titleCase(`${firstName} ${lastName}`)}
                          description={
                            "Member since " +
                            new Date(item.createdAt).toLocaleDateString()
                          }
                        />
                        <div>
                          <CaretRightOutlined />
                        </div>
                      </List.Item>
                    </Link>
                  );
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
}
