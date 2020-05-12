import { ADD_CLIENT, UPDATE_CLIENTS } from '../actionTypes';
import initialState from './initialState';
import { nonDuplicates } from './insurers';

export default function (state = initialState.clients, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_CLIENTS:
      return [
        ...nonDuplicates(state, action.payload),
        ...action.payload,
      ];
    default:
      return state;
  }
};