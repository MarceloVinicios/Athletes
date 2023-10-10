import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineComment } from "react-icons/ai";

const Comments = ({ onCommentClick }) => {
  return (
    <Button variant="ghost" justifySelf={"start"} onClick={onCommentClick}>
      <AiOutlineComment fontSize={"24px"} />
      Comentários
    </Button>
  );
}

export default Comments;
