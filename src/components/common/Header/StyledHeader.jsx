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
`;
