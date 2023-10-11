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
import {
  GetAllCommentOfPublication,
  PostComment,
} from "../../../../api/CommentApi";
import { NameUser } from "../StyledPublication";
import LoadingComment from "../../../helper/LoadingComment";

const CommentsList = ({ publicationId }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [comments, setComments] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [valueComment, setValueComment] = useState("");
  const [reloadComments, setReloadComments] = useState(0);

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
  }, [reloadComments, getAccessTokenSilently, request, publicationId]);

  async function saveComment(event) {
    event.preventDefault();
    const token = await getAccessTokenSilently();
    const { url, options } = PostComment(
      {
        comment: valueComment,
        publication_id: publicationId,
      },
      token,
    );

    const { response, json } = await request(url, options);
    if (response.status === 201) {
      setReloadComments(() => reloadComments + 1);
    }
  }

  if (loading) {
    return <LoadingComment />;
  }

  return (
    <ContainerComments>
      <form>
        <PostInput>
          <input
            type="text"
            placeholder="Adicione seu comentário"
            name="comment"
            value={valueComment}
            onChange={(e) => setValueComment(e.target.value)}
          />
          <button className="publish-text" onClick={saveComment}>
            Publicar
          </button>
        </PostInput>
      </form>
      {noContentState && (
        <ContainerComments>
          <NoContent>{noContentState}</NoContent>
        </ContainerComments>
      )}
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
