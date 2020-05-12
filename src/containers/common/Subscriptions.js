import { connect } from 'react-redux';

import Subscriptions from '../../components/Subscriptions';

const mapStateToProps = (state, { clientId, insurerId }) => {
  if (clientId != null) {
    return {
      subscriptions: state.policies.filter(p => p.client === clientId)
    }
  }
  return {
    subscriptions: state.policies.filter(p => p.insurer === insurerId)
  }
};

export default connect(
  mapStateToProps
)(Subscriptions);