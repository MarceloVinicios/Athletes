import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";
import { UserContext } from "../../Context/UserContext";

const ProtectedRoute = ({ children }) => {
  const {dataUser, loading, isLoading, getUserAPI} = useContext(UserContext)

  if (loading || isLoading) {
    return <Loading />;
  } else if (dataUser === false) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
