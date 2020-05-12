import React, { useEffect } from 'react';
import { Popover, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { getById } from '../../../util/http/clients';
import titleCase from '../../../util/titleCase';

export default function ClientDetails({ client, clientId, addClient }) {
  useEffect(() => {
    (async () => {
      if (!client) {
        const resp = await getById({
          clientId
        });
        if (resp && resp.data) {
          addClient(resp.data);
        }
      }
    })();
  }, [client]);

  if (!client) {
    return null;
  }

  return (
    <Popover
      placement="bottomLeft"
      title="ID Number"
      content={
        <Typography.Text>{client.idNumber}</Typography.Text>
      }
    >
      <Link to={{
        pathname: `/app/clients/${client.id}`
      }}>
        {titleCase(`${client.firstName} ${client.lastName[0]}`)}
      </Link>
    </Popover>
  );
}