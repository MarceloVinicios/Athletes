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
  ButtonShow
} from "./StyledPublication.jsx";
import Like from "./Interation/Like";
import Comments from "./Interation/Comments";
import Share from "./Interation/Share";
import Toast from "../../helper/Toast";

const Publication = ({ userId, pictureUser, nameUser, publicationId, mediaPublication, descriptionPublication}) => {
  const [showMore, setShowMore] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);

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

  function toastDelete(status) {
    setShowToast(status);
  }

  function errorToastShow(status) {
    setErrorToast(status)
  }

  const handleCloseToast = () => {
    setShowToast(false)
    setErrorToast(false)
  };

  return (
    <PublicationContainer>
      {(showToast && <Toast message="Publicação Apagada" onClose={handleCloseToast} error={errorToast}/>) || (errorToast && <Toast message="Erro ao Apagar Publicação" onClose={handleCloseToast} error={errorToast}/>)}
      <UserInformation>
        <Avatar size="md">
          <Image src={pictureUser} alt={nameUser} borderRadius='full'/>
        </Avatar>
        <NameUser>{nameUser}</NameUser>
        <ContainerInformation>
          <TimePublication>há 30 minutos</TimePublication>
          <MoreOptionsPubli userId={userId} idPublication={publicationId} toastDelete={toastDelete} errorToast={errorToastShow}/>
        </ContainerInformation>
      </UserInformation>

      {mediaType === 'video' && mediaPublication && (
        <video controls autoPlay loop muted>
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


      <Description onClick={toggleContent} >
          {showMore ? descriptionPublication : descriptionPublication.slice(0, 111)}
          {descriptionPublication.length > 111 && !showMore && ' ...'}
          {descriptionPublication.length > 111 && <ButtonShow>
            {showMore ? 'Ler Menos' : 'Ler Mais'}
          </ButtonShow>}
        </Description>
    </PublicationContainer>
  );
};

export default Publication;
