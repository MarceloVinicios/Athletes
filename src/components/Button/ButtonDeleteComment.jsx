import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import { DeleteComment } from "../../api/CommentApi";
import { PublicationContext } from "../../Context/PublicationContext";

const ButtonDeleteComment = ({ id }) => {
  const { loading, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const { reloadCommentsList } = useContext(PublicationContext);

  async function handleClick() {
    const token = await getAccessTokenSilently();
    const { url, options } = DeleteComment(id, token);
    const { response } = await request(url, options);

    if (response.status === 200) {
      reloadCommentsList();
    }
  }

  return (
    <div>
      {loading ? (
        <Button
          w="194px"
          variant="ghost"
          rightIcon={<AiFillDelete />}
          justifyContent="space-between"
          fontWeight="normal"
          colorScheme="red"
          fontSize="sm"
          disabled
        >
          Apagando...
        </Button>
      ) : (
        <Button
          w="194px"
          variant="ghost"
          rightIcon={<AiFillDelete />}
          justifyContent="space-between"
          fontWeight="normal"
          colorScheme="red"
          fontSize="sm"
          onClick={handleClick}
        >
          Apagar
        </Button>
      )}
    </div>
  );
};

export default ButtonDeleteComment;
