import handleError from './handleError';
import { API_URL as api_url } from '../constants';

console.log(process.env);
const { NODE_ENV, REACT_APP_SERVER_URL } = process.env;
const API_URL = NODE_ENV === 'production' ? REACT_APP_SERVER_URL : api_url;

export default async function request({
  url, method, body, query, headers
}) {
  try {
    const queryBody = constructUrlBody(query);
    const requestUrl = `${API_URL}${url}?${queryBody}`
    const resp = await fetch(requestUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body),
    });

    const { status, data, error } = await resp.json();
    if (resp.status >= 500) {
      return handleError("Uh oh, something's not right. Try again later.");
    }

    if (resp.status >= 400 && error) {
      return handleError(error);
    }

    return { status, data, error };
  } catch (error) {
    handleError(error.message);
  }
}

function constructUrlBody(data) {
  if (!data) {
    return "";
  }

  let ulrBody = [];
  for (let name in data) {
    // skip inherited and functions
    if (!data.hasOwnProperty(name) || typeof name === 'function') {
      continue;
    }
    let value = data[name];
    if (!value) {
      continue; // skip null/undefined
    }
    value = value.toString();
    name = encodeURIComponent(name.replace(' ', '+'));
    value = encodeURIComponent(value.replace(' ', '+'));
    ulrBody.push(`${name}=${value}`);
  }

  return ulrBody.join('&');
}