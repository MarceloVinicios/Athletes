import React from 'react'
import { MdTravelExplore } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Container, List, ListNotOrdered } from './StyledSideBar';

const SideBar = () => {

  return (
    <Container>
      <ListNotOrdered>
        <List>
          <AiFillHome href='src\pages\Feed\Feed.jsx' fontSize={"25px"} color={"#EBC556"}/> Início
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
