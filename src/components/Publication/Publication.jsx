import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, IconButton} from '@chakra-ui/react';
import { LiaShareSquare, LiaComment, } from 'react-icons/lia'
import Like from './Like';
import MoreOptionsPubli from './MoreOptionsPubli';

const PublicacaoContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.445);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "usuarioInfo"
    "moreOptions"
    "midia"
    "interacao"
    "descricao";
`;

const UsuarioInfo = styled.div`
  grid-area: usuarioInfo;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const NomeUsuario = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const TempoPublicacao = styled.span`
  margin-left: 10px;
  color: #999;
  font-size: 0.8em;
`;

const Opcoes = styled.div`
  grid-area: moreOptions;
  
  justify-self: end;
  padding: 5px;
`;

const Midia = styled.img`
  grid-area: midia;
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 570px;
  display: block;
`;

const IconesInteracao = styled.div`
  grid-area: interacao;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Descricao = styled.div`
  grid-area: descricao;
  padding: 10px;
`;

const Publication = () => {
  return (
    < PublicacaoContainer>
      <UsuarioInfo>
      <Avatar size="md" name="user" src="src\assets\images\OutraFoto.png" />
        <NomeUsuario>Nome do Usuário</NomeUsuario>
        <TempoPublicacao>há 30 minutos</TempoPublicacao>
         <Opcoes>
            <MoreOptionsPubli />
         </Opcoes>
      </UsuarioInfo>

      <Midia src="src\assets\images\gayy.jpeg " alt="Conteúdo" />
      <IconesInteracao>
      <Like />
      <Button flex='1' variant='ghost' leftIcon={<LiaComment />} fontSize={'24px'}>
        Comment
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<LiaShareSquare />} fontSize={'24px'}>
        Share
      </Button>
      </IconesInteracao>
      <Descricao>
        Descrição da publicação aqui...
      </Descricao>
    </PublicacaoContainer>
  );
};

export default Publication;
