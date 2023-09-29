import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import styled from 'styled-components';

const ContainerButton = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`

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
