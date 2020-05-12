import { connect } from 'react-redux'

import Main from '../pages/Main';
import { addError } from '../redux/actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  addError: (error) => dispatch(addError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);