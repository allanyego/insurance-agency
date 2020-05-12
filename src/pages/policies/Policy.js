import React from 'react';
import { useParams } from 'react-router-dom';

import Profile from '../../components/Profile';
import PolicyProfile from '../../containers/policies/parts/PolicyProfile';

export default function Policy({ insurers }) {
  const { policyId } = useParams();

  return (
    <Profile>
      <PolicyProfile policyId={policyId} />
    </Profile>
  );
}