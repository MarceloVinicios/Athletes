export const API_URL = 'http://localhost:4000';

export function GetAllCommentOfPublication(publication_id, token) {
  return {
    url: API_URL + `/comment/${publication_id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}

export function PostComment(body, token) {
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

export function UpdateComment(id, body, token) {
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

export function DeleteComment(id, token) {
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
