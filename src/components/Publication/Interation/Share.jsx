import React from 'react'
import {  Button } from '@chakra-ui/react';
import { AiOutlineShareAlt } from "react-icons/ai";

const Share = () => {
  return (
    <Button variant="ghost" justifySelf={"end"}>
      <AiOutlineShareAlt fontSize={"24px"}/>
      Compartilhar
    </Button>
  )
}

export default Share
