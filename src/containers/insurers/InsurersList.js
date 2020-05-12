import { connect } from 'react-redux';

import { InsurersList } from '../../pages/insurers';
import { updateInsurers } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    insurers: state.insurers
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateInsurers: (insurers) => dispatch(updateInsurers(insurers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsurersList);