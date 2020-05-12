import { ADD_POLICY, UPDATE_POLICY, UPDATE_POLICIES } from '../actionTypes';
import initialState from './initialState';
import { nonDuplicates } from './insurers';

export default function (state = initialState.policies, action) {
  switch (action.type) {
    case ADD_POLICY:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_POLICY:
      return [
        action.payload,
        ...nonDuplicates(state, [action.payload]),
      ];
    case UPDATE_POLICIES:
      return [
        ...nonDuplicates(state, action.payload),
        ...action.payload
      ];
    default:
      return state;
  }
};