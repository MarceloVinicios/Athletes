import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { ContainerButton } from '../StyledPublication';

const Share = () => {
  return (
    <ContainerButton>
      <Button className="share-button" variant="ghost" justifySelf="end">
        <AiOutlineShareAlt fontSize="24px" />
        Compartilhar
      </Button>
    </ContainerButton>
  );
};

export default Share;
