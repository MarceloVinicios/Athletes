import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);
  const isIdentified = window.localStorage.getItem('identificador') === 'true';

  if (!login && isIdentified) {
    return <Navigate to="/feed" />;
  } else if (!login && !isIdentified) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
