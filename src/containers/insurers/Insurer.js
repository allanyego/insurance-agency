import { connect } from 'react-redux';

import { Insurer } from '../../pages/insurers'

const mapStateToProps = (state) => ({
  insurers: state.insurers
});

export default connect(
  mapStateToProps
)(Insurer);