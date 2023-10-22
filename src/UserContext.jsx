import React from 'react';
import { GetUser } from './api/UserApi';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const userLogout = React.useCallback(function () {
    window.localStorage.removeItem('identificador');
    setLogin(false);
  }, []);


  React.useEffect(() => {
    async function registerUser() {
      try {
        setError(null);
        setLoading(true);
        const token = await getAccessTokenSilently();
        const { url, options } = GetUser(token);
        const response = await fetch(url, options);

        if (response.status === 200) {
          window.localStorage.setItem('identificador', 'true');
          setLogin(true);
        } else {
          window.localStorage.removeItem('identificador');
          setLogin(false);
        }
      } catch (err) {
        setError(err.message);
        setLogin(false);
      } finally {
        setLoading(false);
      }
    }
    registerUser();
  }, [getAccessTokenSilently]);

  return (
    <UserContext.Provider
      value={{ userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;
