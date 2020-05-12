import { connect } from 'react-redux';

import ClientDetails from '../../../pages/policies/parts/ClientDetails';
import { addClient } from '../../../redux/actions';

const mapStateToProps = (state, {clientId}) => ({
  client: state.clients.find(c => c.id === clientId)
});

const mapDispatchToProps = (dispatch) => ({
  addClient: (client) => dispatch(addClient(client))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientDetails);