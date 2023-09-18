import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = styled.a`
  color: white;
  font-size: 1rem;
  &:hover {
    transition: 0.3s;
    color: #ffffffc5;
  }
`

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Login onClick={() => loginWithRedirect()}>Entrar</Login>
    )
  );
};

export default LoginButton;
