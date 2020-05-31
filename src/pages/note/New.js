import React from 'react';
import { useParams } from 'react-router-dom';

import PolicySchedule from '../../containers/note/PolicySchedule';

export default function New() {
  const {policyId} = useParams();

  return <PolicySchedule policyId={policyId} />;
}