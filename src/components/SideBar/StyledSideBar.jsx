import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  max-width: 250px;
  height: 100vh;
  z-index: 1;
  box-shadow: inset 2px -2px 10px #3a424d;
  background-color: #263238;

  @media (max-width: 900px) {
      display: none;
  }
`

export const ListNotOrdered = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px 15px;
`

export const List = styled.li`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: #363d46;
  }
`
