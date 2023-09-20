import React from 'react';
import styled from 'styled-components';

const PublicacaoContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  max-width: 500px;
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
        <img src="src\assets\images\OutraFoto.png" alt="Foto do Usuário" />
        <NomeUsuario>Nome do Usuário</NomeUsuario>
        <TempoPublicacao>há 30 minutos</TempoPublicacao>
      </UsuarioInfo>
      <Opcoes>
        <Icone>Opção 1</Icone>
        <Icone>Opção 2</Icone>
        <Icone>Opção 3</Icone>
      </Opcoes>
      <Midia src="src\assets\images\FotoTeste.jpg   " alt="Conteúdo" />
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
