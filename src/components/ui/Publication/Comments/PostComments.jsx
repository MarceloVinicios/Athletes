import React, { useContext, useRef, useState } from 'react'
import { PostInput } from './StyleComment'
import { useAuth0 } from '@auth0/auth0-react';
import useFetch from '../../../../hooks/useFetch';
import { PostComment } from '../../../../api/CommentApi';
import { PublicationContext } from '../../../../Context/PublicationContext';

const PostComments = ({publicationId}) => {
  const [valueComment, setValueComment] = useState("");
  const { getAccessTokenSilently } = useAuth0();
  const { request } = useFetch();
  const {reloadCommentsList} = useContext(PublicationContext);

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

    setValueComment("")
    const { response } = await request(url, options);
    if (response.status === 201) {
      reloadCommentsList()
    }
  }

  return (
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
  )
}

export default PostComments
