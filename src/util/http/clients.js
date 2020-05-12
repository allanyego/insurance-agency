import request from './helpers/request';

const BASE_URL = '/clients';

export async function postClient(client) {
  const newClient = function (client) {
    return {
      firstName: client.firstName,
      middleName: client.middleName,
      lastName: client.lastName,
      email: client.email,
      idNumber: client.idNumber,
      phoneNumber: client.phoneNumber,
      addressNumber: client.addressNumber,
      addressCode: client.addressCode,
      addressTown: client.addressTown,
      kraPin: client.kraPin,
      insurer: client.insurer,
      occupation: client.occupation,
    };
  }(client);

  const policy = function (client) {
    return {
      policyNumber: client.policyNumber,
      policyPeriod: client.policyPeriod,
      sumInsured: client.sumInsured,
      premiumRate: client.premiumRate,
      pvt: client.pvt,
      excessProtection: client.excessProtection,
      antiTheftCoverage: client.antiTheftCoverage,
      rookie: client.rookie,
      passengersPllCoverage: client.passengersPllCoverage,
      policyClass: client.policyClass,
    };
  }(client);

  if (policy.policyClass === 'vehicle') {
    policy.vehicle = function (client) {
      return {
        registrationNumber: client.registrationNumber,
        make: client.make,
        bodyType: client.bodyType,
        bodyColor: client.bodyColor,
        manufactureYear: client.manufactureYear,
        engineNumber: client.engineNumber,
        chasisNumber: client.chasisNumber,
        tonnage: client.tonnage,
        ratingCc: client.ratingCc,
      };
    }(client);
  }

  return await request({
    url: BASE_URL,
    method: 'POST',
    body: { policy, ...newClient },
    headers: {
      Authorization: `Bearer ${client.token}`,
    }
  });
}

export async function loadClients() {
  return await request({
    url: BASE_URL,
    method: 'GET',
  });
}

export async function search(searchTerm) {
  return await request({
    url: BASE_URL,
    method: 'GET',
    query: {
      search: searchTerm
    }
  });
}

export async function getById({
  clientId
}) {
  return await request({
    url: `${BASE_URL}/${clientId}`,
    method: 'GET',
  });
}