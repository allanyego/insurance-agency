import { connect } from 'react-redux';

import { Client } from '../../pages/clients';

const mapStateToProp = (state) => ({
  clients: state.clients
});

export default connect(
  mapStateToProp,
  null
)(Client);