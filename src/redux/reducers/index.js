import { combineReducers } from 'redux';

import clients from './clients';
import insurers from './insurers';
import policies from './policies';
import vehicles from './vehicles';
import errors from './errors';
import success from './success';
import auth from './auth';

export default combineReducers({
  clients,
  insurers,
  policies,
  vehicles,
  errors,
  success,
  auth,
});
