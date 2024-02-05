import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  top: 0;
  z-index: 100;
  position: fixed;
  background-color: #263238;
  color: #f7f9f8;
  box-shadow: inset 2px -2px 4px#3a424d;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const NavbarLogo = styled.a`
  width: 46px;
  justify-self: start;
`;

export const Navigation = styled.nav`
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const LinkNavigation = styled.li`
  cursor: pointer;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  position: relative;

  @media (max-width: 500px) {
    gap: 1rem;
  }
`;

export const ButtonLoading = styled.a`
  color: #ebc556;
  background-color: #24292f;
  padding: 5px 30px 5px 15px;
  border: 1px solid #f7f9f8;
  display: flex;
  border-radius: 5px;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url("http://localhost:5173/src/assets/images/More.svg");
    background-repeat: no-repeat;
    padding-right: 20px;
    margin-top: 2px;
  }

  &:hover {
    transition: 0.3s;
    filter: hue-rotate(10deg);
  }

  @media (max-width: 500px) {
    padding: 5px 10px;

    &::before {
      padding-right: 0;
    }
  }

  span {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const ContainerUserData = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`

export const MenuActive = styled.div`
  display: flex;
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProfile = styled.img`
  min-width: 48px;
  max-width: 48px;
  max-height: 50px;
  min-height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ListMenuNavigation = styled.ul`
  list-style: none;
  padding: 10px;
  margin-right: 10px;
  border-radius: 6px;
  position: absolute;
  background-color: #0b0e0e;
  top: 60px;
  left: 170px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    top: 60px;
    left: 130px;
  }

  @media (max-width: 500px) {
    top: 60px;
    left: -30px;
  }

  a {
    display: none;
  }

  a:last-child {
    color: #f83131f8;
  }

  a:nth-last-child(-n+2) {
      display: block;
  }

  @media (max-width: 900px) {
    a {
      display: block;
    }
  }
`;

export const LinkNavigationMenu = styled.li`
  padding: 10px 20px;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    background-color: #363a3a;
  }
`;

