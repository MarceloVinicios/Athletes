import React, { useState } from "react";
import LoginButton from "../../Button/auth/LoginButton";
import SingUp from "../../Button/auth/SingUp";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { ContainerMenu, ContainerUser, Header, ImageProfile, Search } from "./StyledHeader";
import { LinkNavigation,
  LinkNavigationMenu,
  ListMenuNavigation,
  MenuActive,
  NavbarLinks,
  NavbarLogo, Navigation } from "./StyledNavBar";
import ButtonModal from "../../ui/NewPublication/ButtonModal";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [MenuActivite, setMenuActive] = useState(false);

  return (
    <Header>
      <NavbarLogo href="/feed">
        <img src="http://localhost:5173/src\assets\logos\Logo.svg" alt="logo" />
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
          <ButtonModal />
          <ContainerMenu>
            <ImageProfile src={user.picture} alt="Perfil" />
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
