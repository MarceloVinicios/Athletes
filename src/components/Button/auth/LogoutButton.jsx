import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PushButton from "../common/PushButton";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && <PushButton value={"Sair"} onClick={() => logout()} />
  );
};

export default LogoutButton;
