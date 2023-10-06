import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00000058;
`

export const ModalFather = styled.div`
  position: fixed;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d3e46;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const ModalHeader = styled.div`
  text-align: center;
  color: #ffffff;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  flex: 1;
  text-align: center;
`;

export const ModalContent = styled.div`
  text-align: center;
  margin: 20px;
`;

export const ModalFooter = styled.div`
  text-align: center;
`;

export const Close = styled.span `
  cursor: pointer;
`
