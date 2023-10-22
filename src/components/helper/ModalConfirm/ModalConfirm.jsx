import React, { useContext, useState } from "react";
import FeedContext from "../../../pages/Feed/FeedContext";
import { useAuth0 } from "@auth0/auth0-react";
import { DeletePublication } from "../../../api/PublicationApi";
import useFetch from "../../../hooks/useFetch";
import CommentContext from "../../ui/Publication/Comments/CommentContext";
import { DeleteComment } from "../../../api/CommentApi";
import { ButtonCancel, ButtonDeleteModal, Container, ContainerButton, ContainerModal, Title } from "./StyledModalConfirm";

const ModalConfirm = () => {
  const dataFeedContext = useContext(FeedContext);

  const { request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const dataCommentContext = useContext(CommentContext)

  async function onClickDelete() {
    const token = await getAccessTokenSilently();

    if (dataCommentContext.urls == "publication") {
      const { url, options } = DeletePublication(
        dataFeedContext.publicationId,
        token,
      );
      const { response } = await request(url, options);

      if (response.status == 200) {
        dataFeedContext.reloadPublications();
        dataFeedContext.handleClickModal();
      } else {
        if (response.status == 500 || response.status == 404) {
          console.log("Error ao apagar publicação");
        }
      }
    } else {
      const { url, options } = DeleteComment(
        dataFeedContext.publicationId,
        token,
      );
      const { response } = await request(url, options);

      if (response.status == 200) {
        console.log("deletado com sucesso comentario");
        dataCommentContext.reloadCommentsList();
      } else {
        if (response.status == 500 || response.status == 404) {
          console.log("error ao apagar comentário");
        }
      }
    }
  }

  return (
    <ContainerModal>
      <Container>
        <Title>Excluir publicação</Title>
        <ContainerButton>
          <ButtonCancel onClick={dataFeedContext.handleClickModal}>
            Cancelar
          </ButtonCancel>
          <ButtonDeleteModal onClick={onClickDelete}>Apagar</ButtonDeleteModal>
        </ContainerButton>
      </Container>
    </ContainerModal>
  );
};

export default ModalConfirm;
