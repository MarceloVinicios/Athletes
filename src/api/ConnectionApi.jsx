export const API_URL = 'http://localhost:4000';

export function GetUserForConnect(token) {
  return {
    url: API_URL + `/connections/users`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
  };
}

export function GetRequestsForMe(token) {
  return {
    url: API_URL + `/requests`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
  };
}

export function GetUserOfMyConnections(token) {
  return {
    url: API_URL + `/connections`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
  };
}

export function sendRequestConnection(user_recipient, token) {
  return {
    url: API_URL + `/connection`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user_recipient),
    },
  };
}

export function AccptingRequest(id, token) {
  return {
    url: API_URL + `/connection/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`
      },
    },
  };
}

export function RejectRequest(id, token) {
  return {
    url: API_URL + `/connection/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    },
  };
}


