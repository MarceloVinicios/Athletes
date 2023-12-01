import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GetUser } from '../../api/UserApi';

const ProtectedRoute = ({ children }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const { loading, request } = useFetch();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const storedUserData = localStorage.getItem('userData');

      if (storedUserData) {
        setDataUser(JSON.parse(storedUserData));
      } else {
        const token = await getAccessTokenSilently();
        const { url, options } = GetUser(token);
        const { response } = await request(url, options);

        if (response.status === 200) {
          setDataUser(response.data);
          localStorage.setItem('userData', JSON.stringify(response.data));
        } else {
          setDataUser(false);
        }
      }
    }

    getUserData();
  }, [getAccessTokenSilently, request, user]);

  if (loading) {
    return null;
  }

  if (dataUser === false) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
