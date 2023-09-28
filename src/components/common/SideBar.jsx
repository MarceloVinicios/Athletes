import React from 'react'
import styled from 'styled-components'
import { MdTravelExplore } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { AiFillHome, AiFillStar } from "react-icons/ai";

const Container = styled.aside`
  position: fixed;
  max-width: 250px;
  height: 100vh;
  z-index: 1;
  box-shadow: inset 2px -2px 10px #3a424d;
  background-color: #263238;
`

const ListNotOrdered = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 120px 20px;
`

const List = styled.li`
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

const IconList = styled.img`

`

const SideBar = () => {

  return (
    <Container>
      <ListNotOrdered>
        <List>
          <AiFillHome fontSize={"25px"} color={"#EBC556"}/> Início
        </List>
        <List>
          <BiSolidMessageSquareDetail fontSize={"25px"} color={"#EBC556"}/> Mensagens
        </List>
        <List>
          <MdTravelExplore fontSize={"25px"} color={"#EBC556"}/> Explorar
        </List>
        <List>
          <AiFillStar fontSize={"25px"} color={"#EBC556"}/> Gostei
        </List>
      </ListNotOrdered>
    </Container>
  )
}

export default SideBar
