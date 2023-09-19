import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import SingUp from "./SingUp";

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
  width: 40px;
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

const Navbar = () => {
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
    </Header>
  );
};

export default Navbar;
