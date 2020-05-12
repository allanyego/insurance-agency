import { ADD_INSURER, UPDATE_INSURERS } from '../actionTypes';
import initialState from './initialState';

export const nonDuplicates = (oldList, newList) => oldList.filter((o) => {
  const index = newList.findIndex(n => n.id === o.id);
  return (index === -1);
});

export default function(state = initialState.insurers, action) {
  switch (action.type) {
    case ADD_INSURER:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_INSURERS:
      return [
        ...nonDuplicates(state, action.payload),
        ...action.payload
      ];
    default:
      return state;
  }
};