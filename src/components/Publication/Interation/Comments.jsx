import React from 'react'
import {  Button } from '@chakra-ui/react';
import { AiOutlineComment } from "react-icons/ai";

const Comments = () => {
  return (
    <Button variant="ghost" justifySelf={"start"}>
      <AiOutlineComment fontSize={"24px"}/>
      Comentários
    </Button>
  )
}

export default Comments

