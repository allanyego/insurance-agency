import { ADD_VEHICLE } from '../actionTypes';
import initialState from './initialState';

export default function(state = initialState.vehicles, action) {
  switch (action.type) {
    case ADD_VEHICLE:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};