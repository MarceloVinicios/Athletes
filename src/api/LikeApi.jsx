export const API_URL = 'http://localhost:4000';

export function AddLike(publication_id, token) {
  return {
    url: API_URL + `/like/${publication_id}`,
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}

export function DeleteLike(publication_id, token) {
  return {
    url: API_URL + `/like/${publication_id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}
