import {
  ADD_CLIENT,
  UPDATE_CLIENTS,
  ADD_INSURER,
  ADD_POLICY,
  ADD_VEHICLE,
  UPDATE_POLICY,
  UPDATE_INSURERS,
  ADD_ERROR,
  SHIFT_ERROR,
  UPDATE_POLICIES,
  ADD_SUCCESS,
  SHIFT_SUCCESS,
  LOGIN,
  LOGOUT,
  SET_PRINT_DOC
} from '../actionTypes';

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: client,
});

export const updateClients = (clients) => ({
  type: UPDATE_CLIENTS,
  payload: clients,
});

export const addInsurer = (insurer) => ({
  type: ADD_INSURER,
  payload: insurer,
});

export const addPolicy = (policy) => ({
  type: ADD_POLICY,
  payload: policy,
});

export const addVehicle = (vehicle) => ({
  type: ADD_VEHICLE,
  payload: vehicle,
});

export const updatePolicy = (policy) => ({
  type: UPDATE_POLICY,
  payload: policy,
});

export const updatePolicies = (policies) => ({
  type: UPDATE_POLICIES,
  payload: policies,
});

export const updateInsurers = (insurers) => ({
  type: UPDATE_INSURERS,
  payload: insurers,
});

export const addError = (error) => ({
  type: ADD_ERROR,
  payload: error,
});

export const shiftError = () => ({
  type: SHIFT_ERROR,
  payload: null,
});

export const addSuccess = (success) => ({
  type: ADD_SUCCESS,
  payload: success,
});

export const shiftSuccess = () => ({
  type: SHIFT_SUCCESS,
  payload: null,
});

export const login = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
  payload: null,
});
