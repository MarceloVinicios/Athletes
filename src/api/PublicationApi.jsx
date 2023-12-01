export const API_URL = 'http://localhost:4000';

export function GetAllPublications(token) {
  return {
    url: API_URL + '/publication',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function GetPublicationById(id, token) {
  return {
    url: API_URL + `/publication/${id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function GetAllPublicationsByCategory(id, token) {
  return {
    url: API_URL + `/publication/category/${id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function PostPublication(body, token) {
  return {
    url: API_URL + '/publication',
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
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
