import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import SingUp from "./SingUp";
import { useAuth0 } from "@auth0/auth0-react";

const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f7f9f8;
  background-color: #24292f;
  box-shadow: inset 2px -2px 4px#3a424d;
`

const Navigation = styled.nav`
`

const NavbarLogo = styled.a`
  width: 46px;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const LinkNavigation = styled.li`
  cursor: pointer;
`;

const Menu = styled.img`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`

const ButtonLoading = styled.a`
  color: #EBC556;
  background-color: #24292F;
  padding: 5px 30px 5px 15px;
  border: 1px solid #F7F9F8;
  display: flex;
  border-radius: 5px;

 &::before {
  content: "";
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url("src/assets/images/More.svg");
  background-repeat: no-repeat;
  padding-right: 20px;
  margin-top: 2px;
 }

 &:hover {
  transition: 0.3s;
  filter: hue-rotate(10deg);
 }
`

const ImageProfile = styled.img`
  width: 48px;
  border-radius: 50%;
`

const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

const Search = styled.input`
  max-width: 400px;
  border-radius: 100px;
  padding: 7px 20px;
  border: 2px solid #F7F9F8;
  background: #263238;

  &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url("src/assets/images/More.svg");
    background-repeat: no-repeat;
    padding-right: 20px;
    margin-top: 2px;
  }
`

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Header>
      <NavbarLogo href="#">
        <img src="src\assets\logos\Logo.svg" alt="logo" />
      </NavbarLogo>

      <Navigation aria-label="primaria">
        <Menu src="src\assets\images\Menu.svg" alt="" />
        <NavbarLinks>
          <LinkNavigation>
            <LoginButton />
          </LinkNavigation>
          <LinkNavigation>
            <SingUp />
          </LinkNavigation>
        </NavbarLinks>
      </Navigation>

      {isAuthenticated && (
        <ContainerUser>
          <Search type="text" name="search" placeholder="Buscar"/>
          <ContainerUser>
            <ButtonLoading href="#">Carregar</ButtonLoading>
            <ImageProfile src={user.picture} alt={user.name}/>
          </ContainerUser>
        </ContainerUser>
      )}
    </Header>
  );
};

export default Navbar;