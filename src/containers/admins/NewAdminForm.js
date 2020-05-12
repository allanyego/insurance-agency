import { connect } from 'react-redux';

import { NewAdminForm } from '../../pages/admins';
import { addSuccess, addError } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  addSuccess: (success) => dispatch(addSuccess(success)),
  addError: (error) => dispatch(addError(error))
});

export default connect(
  null,
  mapDispatchToProps
)(NewAdminForm);