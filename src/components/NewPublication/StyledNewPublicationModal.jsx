import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1178px;
  height: 824px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalFather = styled.div `
  position: fixed;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2D3E46;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2;

`;

export const ModalHeader = styled.div`
  text-align: center;
  color: #ffffff;
`;

export const DividerStyled = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;

export const ModalContent = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const ModalFooter = styled.div`
  text-align: center;
`;
