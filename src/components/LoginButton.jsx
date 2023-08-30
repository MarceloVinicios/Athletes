import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PushButton from "./PushButton";

const LoginButton = () => {


  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <PushButton value={'Sign in'} onClick={() => loginWithRedirect()} />
    )
  );
};

export default LoginButton;
