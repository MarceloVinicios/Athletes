import React, { useEffect, useState } from "react";
import { ContainerComments, NoContent, PostInput } from "./StyleComment";
import { Stack } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import { GetAllCommentOfPublication } from "../../../../api/CommentApi";
import ErrorComment from "../../../helper/ErrorComment";
import PostComments from "./PostComments";
import { Skeleton } from "@chakra-ui/react";
import CommentListOfPublication from "./CommentsList";
import CommentContext from "./CommentContext";

const CommentsList = ({ publicationId }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [comments, setComments] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [reloadComments, setReloadComments] = useState(0);

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
    reloadComments,
    getAccessTokenSilently,
    request,
    publicationId,
    noContentState,
  ]);

  function reloadCommentsList() {
    setReloadComments(() => reloadComments + 1);
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
    <CommentContext.Provider value={{ reloadCommentsList }}>
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
    </CommentContext.Provider>
  );
};

export default CommentsList;
