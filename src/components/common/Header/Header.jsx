import React, { useEffect, useState } from "react";
import LoginButton from "../../Button/auth/LoginButton";
import SingUp from "../../Button/auth/SingUp";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import {
  ContainerMenu,
  ContainerUser,
  Header,
  ImageProfile,
} from "./StyledHeader";
import {
  LinkNavigation,
  LinkNavigationMenu,
  ListMenuNavigation,
  MenuActive,
  NavbarLinks,
  NavbarLogo,
  Navigation,
} from "./StyledNavBar";
import ButtonModal from "../../ui/NewPublication/ButtonModal";
import { GetUser } from "../../../api/UserApi";
import useFetch from "../../../hooks/useFetch";

const Navbar = () => {
  const { user, isAuthenticated, isLoading, logout, getAccessTokenSilently } =
    useAuth0();
  const [MenuActivite, setMenuActive] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const { request } = useFetch();

  useEffect(() => {
    async function getUserData() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUser(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setDataUser(json.response);
        localStorage.setItem("userData", JSON.stringify(json.response));
      }
    }
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);

        if (parsedData && parsedData.picture) {
          setDataUser(parsedData);
        } else {
          getUserData();
        }
      } catch (error) {
        getUserData();
      }
    } else {
      getUserData();
    }
  }, [getAccessTokenSilently, request]);

  if (window.location.href === "http://localhost:5173/register") {
    return null;
  }

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
        <ContainerUser>
          <ButtonModal />
          <ContainerMenu>
            {dataUser ? (
              <ImageProfile src={dataUser.picture} alt="Perfil" />
            ) : (
              <ImageProfile src={user.picture} alt="Perfil" />
            )}
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
                  <a href={`/profile/${dataUser?.id}`}>
                    <LinkNavigationMenu style={{ color: "white" }}>
                      Perfil
                    </LinkNavigationMenu>
                  </a>
                  <LinkNavigationMenu>
                    <a
                      onClick={() => {
                        logout();
                        localStorage.removeItem("userData");
                      }}
                    >
                      Logout
                    </a>
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
