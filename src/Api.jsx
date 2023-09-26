export const API_URL = 'http://localhost:4000';

export function GetAll(body, token) {
  return {
    url: API_URL + '/publication',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function PostPublication(body, token) {
  return {
    url: API_URL + '/publication',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function UpdatePublication(body, token, id) {
  return {
    url: API_URL + `/publication/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function DeletePublication(body, token, id) {
  return {
    url: API_URL + `/publication/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}
