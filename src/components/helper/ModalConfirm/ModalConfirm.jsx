import React, { useContext } from "react";
import FeedContext from "../../../pages/Feed/FeedContext";
import { useAuth0 } from "@auth0/auth0-react";
import { DeletePublication } from "../../../api/PublicationApi";
import useFetch from "../../../hooks/useFetch";
import { DeleteComment } from "../../../api/CommentApi";
import {
  ButtonCancel,
  ButtonDeleteModal,
  Container,
  ContainerButton,
  ContainerModal,
  Title,
} from "./StyledModalConfirm";
import { LoadingContainer } from "../LoadingContainer";

const ModalConfirm = () => {
  const dataFeedContext = useContext(FeedContext);
  const { loading, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();

  async function onClickDelete() {
    const token = await getAccessTokenSilently();

    if (dataFeedContext.urls === "publication") {
      const { url, options } = DeletePublication(
        dataFeedContext.publicationId,
        token
      );
      const { response } = await request(url, options);

      if (response.status === 200) {
        dataFeedContext.reloadPublications();
        dataFeedContext.handleClickModal();
      }
    } else {
      const { url, options } = DeleteComment(
        dataFeedContext.publicationId,
        token
      );
      const { response } = await request(url, options);

      if (response.status === 200) {
        dataFeedContext.reloadCommentsList();
        dataFeedContext.handleClickModal();
      }
    }
  }

  const onCancelClick = () => {
    if (dataFeedContext.urls === "publication") {
      dataFeedContext.handleClickModal();
    } else {
      dataFeedContext?.handleClickModal();
    }
  };

  return (
    <ContainerModal>
      <Container>
        {loading && <LoadingContainer />}
        {!loading && (
          <div>
            <Title>
              {dataFeedContext.urls === "publication"
                ? "Excluir publicação"
                : "Excluir comentário"}
            </Title>
            <ContainerButton>
              <ButtonCancel onClick={onCancelClick}>
                Cancelar
              </ButtonCancel>
              <ButtonDeleteModal onClick={onClickDelete}>
                Apagar
              </ButtonDeleteModal>
            </ContainerButton>
          </div>
        )}
      </Container>
    </ContainerModal>
  );
};

export default ModalConfirm;
