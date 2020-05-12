import { connect } from 'react-redux';

import PolicyDetails from '../../../pages/policies/parts/PolicyDetails';
import { addVehicle, addInsurer } from '../../../redux/actions';

const mapStateToProps = (state, { policyId, insurerId }) => ({
  vehicle: state.vehicles.find(v => Number(v.policy) === Number(policyId)),
  insurer: state.insurers.find(i => Number(i.id) === Number(insurerId))
});

const mapDispatchToProps = (dispatch) => ({
  addVehicle: (vehicle) => dispatch(addVehicle(vehicle)),
  addInsurer: (insurer) => dispatch(addInsurer(insurer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolicyDetails);