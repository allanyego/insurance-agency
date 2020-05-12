import { connect } from 'react-redux';

import { ClientList } from '../../pages/clients';
import { updateClients } from '../../redux/actions';

const mapStateToProps = (state) => ({
  clients: state.clients
});

const mapDispatchToProps = (dispatch) => ({
  updateClients: (clients) => dispatch(updateClients(clients))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);