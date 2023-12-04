import styled from "styled-components";

export const Navigation = styled.nav`
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
`;

export const NavbarLogo = styled.a`
  width: 46px;
  justify-self: start;
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

export const MenuActive = styled.div`
  display: flex;
`;

export const ListMenuNavigation = styled.ul`
  list-style: none;
  padding: 10px 10px;
  margin-right: 10px;
  border-radius: 6px;
  position: absolute;
  background-color: #0b0e0e;
  top: 60px;
  left: 170px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    top: 60px;
    left: -30px;
  }
`;

export const LinkNavigationMenu = styled.li`
  padding: 10px 20px;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    background-color: #363a3a;
  }

  &:last-child {
    margin-top: 5px; /* Adicionei um espaçamento superior ao último item do menu */
    color: #f83131f8;
  }
`;

