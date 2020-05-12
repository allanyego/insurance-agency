import { connect } from 'react-redux';

import ClientProfile from '../../../pages/clients/parts/ClientProfile';
import { updatePolicies, addClient } from '../../../redux/actions';

const mapStateToProp = (state, {clientId}) => ({
  client: state.clients.find(c => Number(c.id) === Number(clientId))
});

const mapDispatchToProps = (dispatch) => ({
  updatePolicies: (policies) => dispatch(updatePolicies(policies)),
  addClient: (client) => dispatch(addClient(client))
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ClientProfile);