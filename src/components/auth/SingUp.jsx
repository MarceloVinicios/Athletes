import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Sing = styled.a`
  border: 1.5px solid white;
  border-radius: 55px;
  padding: 10px 20px;
  font-size: 1rem;
  text-decoration: none;
  color: #ecb40d;
  &:hover {
    transition: 0.3s;
    color: #fbff1b;
    background-color: #44434339;
  }
`

const SingUp = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Sing onClick={() => loginWithRedirect()}>Cadastra-se</Sing>
    )
  );
};

export default SingUp;
