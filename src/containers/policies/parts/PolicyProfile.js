import { connect } from 'react-redux';

import PolicyProfile from '../../../pages/policies/parts/PolicyProfile';
import { addPolicy } from '../../../redux/actions';

const mapStateToProps = (state, { policyId }) => ({
  policy: state.policies.find(p => Number(p.id) === Number(policyId))
});

const mapDispatchToProps = (dispatch) => ({
  addPolicy: (policy) => dispatch(addPolicy(policy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolicyProfile);