import React from 'react';
import { useParams } from "react-router-dom";
import DebitNote from '../../containers/note/DebitNote';

export default function Renewal() {
  const {policyId} = useParams();

  return <DebitNote policyId={policyId} />
}