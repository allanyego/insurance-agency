import { ADD_ERROR, SHIFT_ERROR } from '../actionTypes';
import initialState from './initialState';

export default function errors(state = initialState.errors || [], action) {
  switch (action.type) {
    case ADD_ERROR:
      return [
        ...state,
        action.payload
      ];
    case SHIFT_ERROR:
      const [_first, ...rest] = state;
      return [
        ...rest
      ];
    default:
      return state;
  }
};