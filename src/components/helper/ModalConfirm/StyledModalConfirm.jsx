import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Container = styled.div`
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1c2c33;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: -1;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ContainerButton = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ButtonCancel = styled.button`
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid #ffffff6f;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: #bbbbbb42;
  }
`;

export const ButtonDeleteModal = styled.button`
  background-color: #ff3535;
  color: #ffffff;
  border: 1px solid #ffffff86;
  border-radius: 9px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: #ff353547;
  }
`;
