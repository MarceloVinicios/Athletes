import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1315195e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ForConnections = styled.div`
  background-color: #1c2c33;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 0 20px;
`;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  align-self: flex-end;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

export const ListContainer = styled.ul`
  margin-top: 35px;
  max-height: 500px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background: #EBC556;
    border-radius: 9px;
  }

  &::-webkit-scrollbar-thumb:hover {
    transition: 0.3;
    background: #ebc6569e;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid #131519a9;
  padding: 10px 20px;
  border-radius: 9px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-right: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;


export const ButtonAccepted = styled.button`
  background-color: #00ac00;
  padding: 10px 20px;
  border-radius: 9px;

  &:hover {
    transition: 0.4s;
    background-color: #00ac0090
  }
`

export const ButtonRecused = styled.button`
  background-color: #d81010;
  padding: 10px 20px;
  border-radius: 9px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    transition: 0.4s;
    background-color: #d810108d;
  }
`;

export const NoContent = styled.li`
  list-style-type: none;
  text-align: center;
  padding: 20px;
`
