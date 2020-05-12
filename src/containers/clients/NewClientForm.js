import { connect } from 'react-redux'

import { NewClientForm } from "../../pages/clients";
import {
  addClient, addVehicle, addPolicy, addSuccess, addError
} from '../../redux/actions';

const mapStateToProps = (state) => ({
  token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  addClient(client) {
    dispatch(addClient(client));
  },
  addVehicle(vehicle) {
    dispatch(addVehicle(vehicle));
  },
  addPolicy(policy) {
    dispatch(addPolicy(policy));
  },
  addSuccess(success) {
    dispatch(addSuccess(success));
  },
  addError: error => dispatch(addError(error))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewClientForm);