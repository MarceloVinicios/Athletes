import React from 'react';
import styled from 'styled-components';
import LoginButton from '../LoginButton';
import { useState } from 'react';
import LogoutButton from '../LogoutButton';


const NavbarContainer = styled.nav`
  position: fixed;
  background-color:#24292F;
  padding: 0.7rem;
  display: flex;
  justify-content: space-between;
  color: #F7F9F8;
  border-bottom: 1px solid #F7F9F8;
  width: 100%;
`;

const NavbarLogo = styled.div`
  width: 40px;
  margin-left: 40px;
  margin-bottom: 10px;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.li`
  margin: 0 1rem;
  cursor: pointer;



  @media (max-width: 768px) {
    margin: 10px 0;}
`;

const Navbar = () => {

  return (
    <div>
      <NavbarContainer>
        <NavbarLogo>
          <a href='#'><img src="src\assets\logos\Logo.svg" alt="logo"/></a>
        </NavbarLogo>
        <NavbarLinks>
          <NavbarLink><a href='#'>Home</a></NavbarLink>
          <NavbarLink><a href='#'>Contact</a></NavbarLink>
          <NavbarLink><LogoutButton></LogoutButton></NavbarLink>
        </NavbarLinks>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
