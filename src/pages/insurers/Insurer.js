import React from 'react';
import { useParams } from 'react-router-dom';

import Profile from '../../components/Profile';
import InsurerProfile from '../../containers/insurers/parts/InsurerProfile';

export default function Insurer() {
  const { insurerId } = useParams();

  return (
    <Profile>
      <InsurerProfile insurerId={insurerId} />
    </Profile>
  );
}