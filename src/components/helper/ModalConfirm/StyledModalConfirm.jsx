import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: #1c2c33;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ConfirmButton = styled.button`
  background-color: #ff3535;
  color: #ffffff;
  border: 1px solid #ffffff86;
  border-radius: 9px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ff353547;
  }
`;

export const CancelButton = styled.button`
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid #ffffff6f;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    background-color: #bbbbbb42;
  }
`;
