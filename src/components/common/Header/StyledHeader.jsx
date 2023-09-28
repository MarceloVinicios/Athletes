import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  color: #f7f9f8;
  position: fixed;
  z-index: 2;
  background-color: #263238;
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

export const Search = styled.input`
  width: 300px;
  border-radius: 100px;
  padding: 7px 20px;
  margin-right: 10px;
  border: 2px solid #f7f9f8;
  background: #263238;
  grid-column: 2;
  grid-row: 1;
  justify-self: center;

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

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
  position: relative;
`;

export const ButtonLoading = styled.a`
  color: #ebc556;
  background-color: #24292f;
  padding: 5px 30px 5px 15px;
  border: 1px solid #f7f9f8;
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

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageProfile = styled.img`
  min-width: 48px;
  max-width: 48px;
  border-radius: 50%;
`;
