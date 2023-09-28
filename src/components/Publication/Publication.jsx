import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/react";
import MoreOptionsPubli from "./MoreOptionsPubli";
import {
  PublicationContainer,
  UserInformation,
  NameUser,
  ContainerInformation,
  TimePublication,
  Media,
  IconInteration,
  Description,
  ButtonShow
} from "./StyledPublication.jsx";
import Like from "./Interation/Like";
import Comments from "./Interation/Comments";
import Share from "./Interation/Share";

const Publication = ({ pictureUser, nameUser, mediaPublication, descriptionPublication }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  const getMediaType = (mediaURL) => {
    const extension = mediaURL.split('.').pop().toLowerCase();
    if (extension === 'mp4' || extension === 'webm') {
      return 'video';
    } else if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif') {
      return 'image';
    } else {
      return 'unknown';
    }
  };

  const mediaType = mediaPublication ? getMediaType(mediaPublication) : null;

  return (
    <PublicationContainer>
      <UserInformation>
        <Avatar size="md" src={pictureUser} />
        <NameUser>{nameUser}</NameUser>
        <ContainerInformation>
          <TimePublication>há 30 minutos</TimePublication>
          <MoreOptionsPubli />
        </ContainerInformation>
      </UserInformation>

      {mediaType === 'video' && mediaPublication && (
        <video controls>
          <source src={mediaPublication} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {mediaType === 'image' && mediaPublication && (
       <Media src={mediaPublication} alt="Midia publicação"/>
      )}

      <IconInteration>
        <Like />
        <Comments />
        <Share />
      </IconInteration>

      <div>
        <Description onClick={toggleContent} >
          {showMore ? descriptionPublication : descriptionPublication.slice(0, 111)}
          {descriptionPublication.length > 111 && !showMore && ' ...'}
          <ButtonShow>
            {showMore ? 'Ler Menos' : 'Ler Mais'}
          </ButtonShow>
        </Description>
      </div>
    </PublicationContainer>
  );
};

export default Publication;
