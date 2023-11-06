export const API_URL = 'http://localhost:4000';

export function GetAllCategory(token) {
  return {
    url: API_URL + `/categories`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    },
  };
}
