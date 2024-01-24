import React, { useEffect, useState, useRef } from "react";
import LoginButton from "../../Button/auth/LoginButton";
import SingUp from "../../Button/auth/SingUp";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { GetUser } from "../../../api/UserApi";
import useFetch from "../../../hooks/useFetch";
import ButtonModal from "../../ui/NewPublication/ButtonModal";
import ImageModal from "../../ui/ImageModal";
import { ContainerUser, ContainerUserData, Header, ImageProfile } from "./StyledHeader";
import Modal from "react-modal";
import {
  LinkNavigation,
  LinkNavigationMenu,
  ListMenuNavigation,
  MenuActive,
  NavbarLinks,
  NavbarLogo,
  Navigation,
} from "./StyledNavBar";

Modal.setAppElement("#root");

const Navbar = () => {
  const { user, isAuthenticated, logout, getAccessTokenSilently } = useAuth0();
  const [menuActive, setMenuActive] = useState(false);
  const [dataUser, setDataUser] = useState(null);
  const { request } = useFetch();

  const menuRef = useRef(null);

  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function getUserData() {
      try {
        const token = await getAccessTokenSilently();
        const { url, options } = GetUser(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setDataUser(json.response);
          localStorage.setItem("userData", JSON.stringify(json.response));
        }
      } catch (error) {
        console.error("Erro ao obter dados do usuário", error);
      }
    }

    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      getUserData();
    } else {
      try {
        const parsedData = JSON.parse(storedUserData);

        if (parsedData?.picture) {
          setDataUser(parsedData);
        } else {
          getUserData();
        }
      } catch (error) {
        getUserData();
      }
    }
  }, [getAccessTokenSilently, request]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("userData");
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageModalOpen(true);
  };

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
          <ContainerUserData>
            <ImageProfile
              src={dataUser ? dataUser.picture : user.picture}
              alt="Perfil"
              onClick={() =>
                handleImageClick(dataUser ? dataUser.picture : user.picture)
              }
            />
            <MenuActive ref={menuRef}>
              <MdKeyboardArrowDown
                size={"20px"}
                onClick={() => setMenuActive(!menuActive)}
                style={{ cursor: "pointer" }}
              />
              <nav aria-label="Primaria">
                <ListMenuNavigation
                  style={{ display: menuActive ? "block" : "none" }}
                >
                  {[
                    { to: "/feed", label: "Início" },
                    { to: "/explore", label: "Explorar" },
                    { to: "/chat", label: "Mensagens" },
                    { to: "/connections", label: "Conexões" },
                    { to: "/feed/publications/likes", label: "Gostei" },
                    { to: `/profile/${dataUser?.id}`, label: "Perfil" },
                  ].map((item, index) => (
                    <a key={index} href={item.to}>
                      <LinkNavigationMenu>{item.label}</LinkNavigationMenu>
                    </a>
                  ))}
                  <LinkNavigationMenu>
                    <a onClick={handleLogout}>Logout</a>
                  </LinkNavigationMenu>
                </ListMenuNavigation>
              </nav>
            </MenuActive>
          </ContainerUserData>
        </ContainerUser>
      )}

      <ImageModal
        isOpen={isImageModalOpen}
        onRequestClose={() => setImageModalOpen(false)}
        imageUrl={selectedImage}
      />
    </Header>
  );
};

export default Navbar;
