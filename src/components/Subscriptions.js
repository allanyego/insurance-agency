import React, { useEffect } from 'react';
import { Card, List } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { CaretRightOutlined } from '@ant-design/icons';

export default function Subscriptions({ 
  subscriptions,
  fallback,
  extra = () => { },
  onMount,
}) {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      await onMount(subscriptions);
    })()
  }, []);

  if (!subscriptions.length && fallback) {
    return (
      <div>
        {extra()}
        {fallback()}
      </div>
    );
  }

  return (
    <div>
      {extra()}
      <Card title="Subscriptions">
        <List
          size="small"
          itemLayout="horizontal"
          dataSource={subscriptions}
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
                />
                <div>
                  <CaretRightOutlined />
                </div>
              </List.Item>
            </Link>
          )}
        />
      </Card>
    </div>
  );
}