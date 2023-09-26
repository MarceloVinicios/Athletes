import React, { useState } from "react";
import { Avatar } from "@chakra-ui/react";
import MoreOptionsPubli from "./MoreOptionsPubli";
import {
  PublicationContainer,
  UserInformation,
  NameUser,
  ContainerInformation,
  TimePublication,
  Media,
  IconInteration,
  Description
} from "./StyledPublication.jsx";
import Like from "./Interation/Like";
import Comments from "./Interation/Comments";
import Share from "./Interation/Share";

const Publication = () => {
  return (
    <PublicationContainer>
      <UserInformation>
        <Avatar
          size="md"
          src="src\assets\images\OutraFoto.png"
        />
        <NameUser>Nome do Usuário</NameUser>
        <ContainerInformation>
          <TimePublication>há 30 minutos</TimePublication>
          <MoreOptionsPubli />
        </ContainerInformation>
      </UserInformation>

      <Media src="src\assets\images\FotoTeste.jpg" alt="Conteúdo" />
      <IconInteration>
        <Like />
        <Comments />
        <Share />
      </IconInteration>
      <Description>Descrição da publicação aqui...</Description>
    </PublicationContainer>
  );
};

export default Publication;
