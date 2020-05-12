import { connect } from 'react-redux';

import { Login } from '../../pages/admins';
import { login, addError } from '../../redux/actions';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  addError: (error) => dispatch(addError(error)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);