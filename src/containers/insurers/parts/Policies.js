import { connect } from 'react-redux';

import Policies from '../../../pages/insurers/parts/Policies';

const mapStateToProps = (state, { insurerId }) => ({
  clientPolicies: state.policies.map(p => p.client === insurerId)
});

export default connect(
  mapStateToProps
)(Policies);