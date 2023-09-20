import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@chakra-ui/react';

const PublicacaoContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.445);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto; /* Quatro linhas para as seções */
  grid-template-areas:
    "usuarioInfo"
    "opcoes"
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
  grid-area: opcoes;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

const Icone = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;

const Midia = styled.img`
  grid-area: midia;
  max-width: 100%;
  display: block;
`;

const IconesInteracao = styled.div`
  grid-area: interacao;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const IconeInteracao = styled.div`
  margin-right: 10px;
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
          <Icone src="  \src\assets\images\MoreOptions.svg" />
         </Opcoes>
      </UsuarioInfo>

      <Midia src="src\assets\images\FotoTeste.jpg " alt="Conteúdo" />
      <IconesInteracao>
        <IconeInteracao>Ícone 1</IconeInteracao>
        <IconeInteracao>Ícone 2</IconeInteracao>
        <IconeInteracao>Ícone 3</IconeInteracao>
      </IconesInteracao>
      <Descricao>
        Descrição da publicação aqui...
      </Descricao>
    </PublicacaoContainer>
  );
};

export default Publication;
