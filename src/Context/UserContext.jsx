import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { GetUserById } from "../api/UserApi";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const { isAuthenticated, getAccessTokenSilently, user, isLoading } = useAuth0();
  const { request, loading } = useFetch();
  const [wasDataUser, setWasDataUser] = useState(false);
  const [dataUser, setDataUser] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getUserData() {
      if (!isLoading) {
        if (isAuthenticated) {
            if (!dataUser) {
              if (wasDataUser === false) {
                const response = await getUserAPI();
                if (response === false) {
                  setWasDataUser(false)
                  navigate("/register")
                } else {
                  setWasDataUser(true)
                }
              }
            }
        } else {
          setWasDataUser(false);
          navigate("/")
        }
      }
    }

    getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, getAccessTokenSilently, request]);

  async function getUserAPI() {
    const token = await getAccessTokenSilently();
    const { url, options } = GetUserById(user.sub, token);
    const { response, json } = await request(url, options);
    if (response.status === 200) {
      setDataUser(json.response)
      return true
    } else {
      return false
    }
  }

  return (
    <UserContext.Provider value={{ dataUser, setWasDataUser, wasDataUser, isLoading, loading}}>
      {children}
    </UserContext.Provider>
  );
};
