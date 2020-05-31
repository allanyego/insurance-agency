import {connect} from 'react-redux';

import Print from '../../pages/note/Print';

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps
)(Print);