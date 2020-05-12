const localData = 
  JSON.parse(localStorage.getItem('OrientData')) || {};

const initialState = {
  clients: localData.clients || [],
  insurers: localData.insurers || [],
  policies: localData.policies || [],
  vehicles: localData.vehicles || [],
  auth: localData.auth || null,
};

export default initialState;