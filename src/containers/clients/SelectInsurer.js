import { connect } from 'react-redux';

import SelectInsurer from '../../pages/SelectInsurer';
import { updateInsurers } from '../../redux/actions';

const mapStateToProps = ({ insurers }) => ({
  insurers,
});

const mapDispatchToProps = (dispatch) => ({
  updateInsurers: (insurers) => dispatch(updateInsurers(insurers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectInsurer);