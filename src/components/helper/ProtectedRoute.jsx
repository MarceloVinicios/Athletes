import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { GetUser } from "../../api/UserApi";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const { loading, request } = useFetch();
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    async function getUserData() {
      if (isAuthenticated) {
        try {
          const storedUserData = localStorage.getItem("userData");
          if (!storedUserData) {
            await getUserAPI();
          } else {
            const parsedUserData = JSON.parse(storedUserData);
            setDataUser(parsedUserData);
            if (parsedUserData && user.email !== parsedUserData.email) {
              localStorage.removeItem("userData");
              await getUserAPI();
            }
          }
        } catch (error) {
          console.error("Erro ao obter dados do usuário:", error);
        }
      }
    }

    async function getUserAPI() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUser(token);
      const { response } = await request(url, options);

      if (response.status === 200) {
        setDataUser(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
      } else {
        setDataUser(false);
      }
    }


    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, getAccessTokenSilently, request]);

  if (loading) {
    return <Loading />;
  }

  if (dataUser === false) {
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
