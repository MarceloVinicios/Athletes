import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PushButton from "../common/PushButton";
import { UserContext } from "../../../Context/UserContext";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const {setWasDataUser} = useContext(UserContext)

  function handleClick() {
    setWasDataUser(false)
    logout()
  }

  return (
    isAuthenticated && <PushButton value={"Sair"} onClick={handleClick} />
  );
};

export default LogoutButton;
