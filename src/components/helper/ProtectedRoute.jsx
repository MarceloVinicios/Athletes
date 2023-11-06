import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GetUser } from '../../api/UserApi';

const ProtectedRoute = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUser(token);
      const { response } = await request(url, options);

      if (response.status === 200) {
        setDataUser(true);
      } else {
        setDataUser(false);
      }
    }
    getUserData();
  }, [getAccessTokenSilently, request]);

  if (loading) {
    return null;
  }

  if (dataUser === false) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
