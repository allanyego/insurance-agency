import request from './helpers/request';

const BASE_URL = '/insurers';

export async function postInsurer(insurer) {
  const {token, ...rest} = insurer;
  return await request({
    url: BASE_URL,
    method: 'POST',
    body: rest,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

export async function loadInsurers() {
  return await request({
    url: BASE_URL,
    method: 'GET'
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
  insurerId
}) {
  return await request({
    url: `${BASE_URL}/${insurerId}`,
    method: 'GET',
  });
}