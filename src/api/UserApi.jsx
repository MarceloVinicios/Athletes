export const API_URL = 'http://localhost:4000';

export function TOKEN_VALIDATE_POST(id, token) {
  return {
    url: API_URL + `/user/${id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function GetUser(token) {
  return {
    url: API_URL + `/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function PostUser(body, token) {
  return {
    url: API_URL + '/user',
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  };
}

export function UpdatePublication(id, body, token) {
  return {
    url: API_URL + `/publication/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function DeletePublication(id, token) {
  return {
    url: API_URL + `/publication/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}
