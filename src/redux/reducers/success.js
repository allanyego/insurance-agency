import { ADD_SUCCESS, SHIFT_SUCCESS } from '../actionTypes';
import initialState from './initialState';

export default function success(state = initialState.success || [], action) {
  switch (action.type) {
    case ADD_SUCCESS:
      return [
        ...state,
        action.payload
      ];
    case SHIFT_SUCCESS:
      const [_first, ...rest] = state;
      return [
        ...rest
      ];
    default:
      return state;
  }
};