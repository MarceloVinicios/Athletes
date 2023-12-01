import React, { useState } from "react";
import { Avatar, Image } from "@chakra-ui/react";
import MoreOptionsPubli from "../../ui/Publication/MoreOptions/MoreOptionsPubli";
import {
  PublicationContainer,
  UserInformation,
  NameUser,
  ContainerInformation,
  TimePublication,
  Media,
  IconInteration,
  Description,
  ButtonShow,
} from "./StyledPublication.jsx";
import Like from "./Interation/Like";
import CommentsInteration from "./Interation/Comments";
import Share from "./Interation/Share";
import CommentsList from "./Comments/Comments";
import VideoPlayer from "../../Video/VideoPlayer";

const Publication = ({
  userId,
  pictureUser,
  nameUser,
  publicationId,
  mediaPublication,
  descriptionPublication,
  likes
}) => {
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  const getMediaType = (mediaURL) => {
    const extension = mediaURL.split(".").pop().toLowerCase();
    if (extension === "mp4" || extension === "webm") {
      return "video";
    } else if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "png" ||
      extension === "gif"
    ) {
      return "image";
    } else {
      return "unknown";
    }
  };

  const mediaType = mediaPublication ? getMediaType(mediaPublication) : null;

  async function commentsList() {
    setComments(!comments);
  }

  return (
    <PublicationContainer>
      <UserInformation>
        <Avatar size="md">
          <Image
            src={pictureUser}
            alt={nameUser}
            borderRadius="full"
            width="100000px"
            height="50px"
          />
        </Avatar>
        <NameUser>{nameUser}</NameUser>
        <ContainerInformation>
          <TimePublication>há 30 minutos</TimePublication>
          <MoreOptionsPubli userId={userId} idPublication={publicationId} />
        </ContainerInformation>
      </UserInformation>

      {mediaType === "video" && mediaPublication && (
        <VideoPlayer media={mediaPublication}/>
      )}

      {mediaType === "image" && mediaPublication && (
        <Media src={mediaPublication} alt="Midia publicação" />
      )}

      <IconInteration>
        <Like publication_id={publicationId} likes={likes}/>
        <CommentsInteration onCommentClick={commentsList} />
        <Share publicationI={publicationId}/>
      </IconInteration>

      <Description onClick={toggleContent}>
        {showMore
          ? descriptionPublication
          : descriptionPublication.slice(0, 111)}
        {descriptionPublication.length > 111 && !showMore && " ..."}
        {descriptionPublication.length > 111 && (
          <ButtonShow>{showMore ? "Ler Menos" : "Ler Mais"}</ButtonShow>
        )}
      </Description>

      {comments && <CommentsList publicationId={publicationId} />}
    </PublicationContainer>
  );
};

export default Publication;
