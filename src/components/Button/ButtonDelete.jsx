import React, { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import { DeletePublication } from "../../api/PublicationApi";
import { DeleteComment } from "../../api/CommentApi"
import FeedContext from "../../pages/Feed/FeedContext";
import CommentContext from "../ui/Publication/Comments/CommentContext";

const ButtonDelete = ({ id, urls }) => {
  const { request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const dataFeedContext = useContext(FeedContext);
  const dataCommentContext = useContext(CommentContext);

  async function onClickDelete() {
    const token = await getAccessTokenSilently();

    if (urls == "publication") {
      const { url, options } = DeletePublication(id, token);
      const { response } = await request(url, options);

      if (response.status == 200) {
        dataFeedContext.reloadPublications();
      } else {
        if (response.status == 500 || response.status == 404) {
          console.log("Error ao apagar publicação")
        }
      }
    } else {
      const { url, options } = DeleteComment(id, token);
      const { response } = await request(url, options);

      if (response.status == 200) {
        console.log("deletado com sucesso comentario")
        dataCommentContext.reloadCommentsList()
      } else {
        if (response.status == 500 || response.status == 404) {
          console.log("error ao apagar comentário")
        }
      }
    }
  }

  return (
    <Button
      w="194px"
      variant="ghost"
      rightIcon={<AiFillDelete />}
      justifyContent="space-between"
      fontWeight="normal"
      colorScheme="red"
      fontSize="sm"
      onClick={onClickDelete}
    >
      Apagar
    </Button>
  );
};

export default ButtonDelete;
