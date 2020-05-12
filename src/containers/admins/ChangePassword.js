import { connect } from 'react-redux';

import ChangePassword from '../../pages/admins/ChangePassword';
import { addError } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  addError: error => dispatch(addError(error))
})

export default connect(
  null,
  mapDispatchToProps
)(ChangePassword);