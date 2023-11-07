import React from 'react'
import { MdTravelExplore } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Container, List, ListNotOrdered } from './StyledSideBar';
import { Drawer } from '@chakra-ui/react';

const SideBar = () => {

  return (
    <Container>
      <ListNotOrdered>
        <List>
          <AiFillHome href='src\pages\Feed\Feed.jsx' fontSize={"25px"} color={"#EBC556"}/> Início
        </List>
        <a href='/chat'> <List>
          <BiSolidMessageSquareDetail fontSize={"25px"} color={"#EBC556"}/> Mensagens
        </List></a>
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
