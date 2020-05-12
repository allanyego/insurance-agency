import { LOGOUT, LOGIN } from '../actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};