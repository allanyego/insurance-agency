import { connect } from 'react-redux';

import OHeader from '../../components/OHeader';
import { logout } from '../../redux/actions';

const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OHeader);