import React from 'react';
import { useParams } from 'react-router-dom';

import Profile from '../../components/Profile';
import ClientProfile from '../../containers/clients/parts/ClientProfile';

export default function Client({ clients }) {
  const { clientId } = useParams();

  return (
    <Profile>
      <ClientProfile clientId={clientId} />
    </Profile>
  );
}