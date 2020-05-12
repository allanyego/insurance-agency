import { connect } from 'react-redux';

import { NewInsurerForm } from '../../pages/insurers';
import { addInsurer, addSuccess, addError } from '../../redux/actions';

const mapStateToProps = (state) => ({
  token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  addInsurer(issuer) {
    dispatch(addInsurer(issuer));
  },
  addSuccess(success) {
    dispatch(addSuccess(success));
  },
  addError: error => dispatch(addError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewInsurerForm);
