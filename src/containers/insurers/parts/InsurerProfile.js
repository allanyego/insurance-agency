import { connect } from 'react-redux';

import InsurerProfile from '../../../pages/insurers/parts/InsurerProfile';
import { updatePolicies, addInsurer } from '../../../redux/actions';

const mapStateToProps = (state, { insurerId }) => ({
  insurer: state.insurers.find(i => Number(i.id) === Number(insurerId))
});

const mapDispatchToProps = (dispatch) => ({
  updatePolicies: (policies) => dispatch(updatePolicies(policies)),
  addInsurer: (insurer) => dispatch(addInsurer(insurer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsurerProfile);