import React, { useEffect, useState } from "react";
import {
  ContainerComments,
  Comment,
  NoContent,
  ContainerComment,
  PostInput,
} from "./StyleComment";
import { Avatar, Image } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import { GetAllCommentOfPublication } from "../../../../api/CommentApi";
import { NameUser } from "../StyledPublication";

const CommentsList = ({ publicationId }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [comments, setComments] = useState(null);
  const [noContentState, setNoContentState] = useState(null);

  useEffect(() => {
    async function commentsList() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllCommentOfPublication(publicationId, token);
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        setComments(json.commentsData);
      }

      if (response.status === 204) {
        setNoContentState("Sem comentários");
      }
    }
    commentsList();
  }, [getAccessTokenSilently, request, publicationId]);

  if (noContentState) {
    return (
      <ContainerComments>
        <NoContent>{noContentState}</NoContent>
      </ContainerComments>
    );
  }

  return (
    <ContainerComments>
      <form>
        <PostInput type="text" placeholder="Adicione seu comentário" />
      </form>
      {comments &&
        comments.map((comment) => (
          <ContainerComment key={comment.id}>
            <Avatar size="md">
              <Image
                src={comment.user.picture}
                alt={comment.user.name}
                borderRadius="full"
              />
            </Avatar>
            <div>
              <NameUser>{comment.user.name}</NameUser>
              <Comment>{comment.comment}</Comment>
            </div>
          </ContainerComment>
        ))}
    </ContainerComments>
  );
};

export default CommentsList;
