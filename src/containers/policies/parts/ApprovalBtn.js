import { connect } from 'react-redux';

import ApprovalBtn from '../../../pages/policies/parts/ApprovalBtn';
import { updatePolicy, addSuccess } from '../../../redux/actions';

const mapStateToProps = (state) => ({
  token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  updatePolicy: (policy) => dispatch(updatePolicy(policy)),
  addSuccess: (success) => dispatch(addSuccess(success))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApprovalBtn);