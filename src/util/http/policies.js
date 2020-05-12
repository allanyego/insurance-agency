import request from './helpers/request';

const BASE_URL = '/policies';

export async function postPolicy(policy) {
  const policyDetails = function (policy) {
    return {
      insurer: policy.insurer,
      client: policy.client,
      policyNumber: policy.policyNumber,
      policyPeriod: policy.policyPeriod,
      sumInsured: policy.sumInsured,
      premiumRate: policy.premiumRate,
      pvt: policy.pvt,
      excessProtection: policy.excessProtection,
      antiTheftCoverage: policy.antiTheftCoverage,
      rookie: policy.rookie,
      passengersPllCoverage: policy.passengersPllCoverage,
      policyClass: policy.policyClass,
    };
  }(policy);

  if (policyDetails.policyClass === 'vehicle') {
    policyDetails.vehicle = function (policy) {
      return {
        registrationNumber: policy.registrationNumber,
        make: policy.make,
        bodyType: policy.bodyType,
        bodyColor: policy.bodyColor,
        manufactureYear: policy.manufactureYear,
        engineNumber: policy.engineNumber,
        chasisNumber: policy.chasisNumber,
        tonnage: policy.tonnage,
        ratingCc: policy.ratingCc,
      };
    }(policy);
  }

  return await request({
    url: BASE_URL,
    method: 'POST',
    body: policyDetails,
    headers: {
      Authorization: `Bearer ${policy.token}`,
    }
  });
}

export async function approvePolicy({ policyId, token }) {
  return await request({
    url: `${BASE_URL}/${policyId}`,
    method: 'PUT',
    body: { approved: true },
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
}

export async function search({
  policyNumber,
  client,
  insurer,
  type
}) {
  return await request({
    url: BASE_URL,
    method: 'GET',
    query: {
      search: policyNumber,
      client,
      insurer,
      type
    }
  });
}

export async function getById({
  policyId
}) {
  return await request({
    url: `${BASE_URL}/${policyId}`,
    method: 'GET',
  });
}

export async function getVehicle({
  policyId
}) {
  return await request({
    url: `${BASE_URL}/${policyId}/vehicle`,
    method: 'GET',
  });
}