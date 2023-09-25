import React, { useState } from "react";
import LoginButton from "../../auth/LoginButton";
import SingUp from "../../auth/SingUp";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLoading, ContainerMenu, ContainerUser, Header, ImageProfile, Search } from "./StyledHeader";
import { LinkNavigation, LinkNavigationMenu, ListMenuNavigation, MenuActive, NavbarLinks, NavbarLogo, Navigation } from "./StyledNavBar";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [MenuActivite, setMenuActive] = useState(false);

  return (
    <Header>
      <NavbarLogo href="/feed">
        <img src="src\assets\logos\Logo.svg" alt="logo" />
      </NavbarLogo>

      <Navigation aria-label="Login">
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
        <Search type="text" name="search" placeholder="Buscar" />
      )}
      {isAuthenticated && (
        <ContainerUser>
          <ButtonLoading href="#">Carregar</ButtonLoading>
          <ContainerMenu>
            <ImageProfile src={user.picture} alt={user.name} />
            <MenuActive>
              <MdKeyboardArrowDown
                size={"20px"}
                onClick={() => setMenuActive(!MenuActivite)}
                style={{ cursor: "pointer" }}
              />
              <nav aria-label="Primaria">
                <ListMenuNavigation
                  style={{ display: MenuActivite ? "block" : "none" }}
                >
                  <LinkNavigationMenu>Profile</LinkNavigationMenu>
                  <LinkNavigationMenu>
                    <a onClick={() => logout()}>Logout</a>
                  </LinkNavigationMenu>
                </ListMenuNavigation>
              </nav>
            </MenuActive>
          </ContainerMenu>
        </ContainerUser>
      )}
    </Header>
  );
};

export default Navbar;
