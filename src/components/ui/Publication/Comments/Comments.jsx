// Importe o hook useContext do React
import React, { useEffect, useState, useContext } from "react";
import { ContainerComments, NoContent, PostInput } from "./StyleComment";
import { Stack } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import { GetAllCommentOfPublication } from "../../../../api/CommentApi";
import ErrorComment from "../../../helper/ErrorComment";
import PostComments from "./PostComments";
import { Skeleton } from "@chakra-ui/react";
import CommentListOfPublication from "./CommentsList";
import FeedContext from "../../../../pages/Feed/FeedContext";

const CommentsList = ({ publicationId }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [comments, setComments] = useState(null);
  const [noContentState, setNoContentState] = useState(null);

  const dataContextComent = useContext(FeedContext);

  useEffect(() => {
    async function commentsList() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllCommentOfPublication(publicationId, token);
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        if (noContentState) {
          setNoContentState(null);
        }
        setComments(json.commentsData);
      }

      if (response.status === 204) {
        setNoContentState("Sem comentários");
      }
    }
    commentsList();
  }, [
    dataContextComent.reloadComments,
    getAccessTokenSilently,
    request,
    publicationId,
    noContentState,
  ]);

  function reloadCommentsList() {
    dataContextComent.reloadCommentsList();
  }

  if (loading) {
    return (
      <PostInput>
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      </PostInput>
    );
  }

  if (error && !noContentState) {
    return <ErrorComment />;
  }

  return (
    <>
      <ContainerComments>
        <PostComments
          publicationId={publicationId}
          reloadCommentsList={reloadCommentsList}
        />
        {noContentState && (
          <ContainerComments>
            <NoContent>{noContentState}</NoContent>
          </ContainerComments>
        )}
        {!noContentState && <CommentListOfPublication comments={comments} />}
      </ContainerComments>
    </>
  );
};

export default CommentsList;
