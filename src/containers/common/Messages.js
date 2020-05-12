import { connect } from 'react-redux';

import Messages from '../../components/Messages';
import { shiftError, shiftSuccess } from '../../redux/actions';

const mapStateToProps = (state) => ({
  errors: state.errors,
  success: state.success
});

const mapDispatchToProps = (dispatch) => ({
  removeError: () => dispatch(shiftError()),
  removeSuccess: () => dispatch(shiftSuccess())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);