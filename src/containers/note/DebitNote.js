import {connect} from 'react-redux';

import DebitNote from '../../pages/note/DebitNote';

const mapStateToProps = (state, {policyId}) => {
  const policy = state.policies.find(p => Number(p.id) === Number(policyId));

  return {
    client: state.clients.find(c =>
      Number(c.id) === Number(policy.client)),

    vehicle: state.vehicles.find(v => v =>
      Number(v.policy) === Number(policyId)),

    insurer: state.insurers.find(i =>
      Number(i.id) === Number(policy.insurer)),

    auth: state.auth,

    policy,
  }
};

export default connect(
  mapStateToProps
)(DebitNote);