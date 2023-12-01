// PublicationOne.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPublicationById } from "../../../api/PublicationApi";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/helper/Loading";
import Publication from "../../../components/ui/Publication/Publication";
import FeedContext from "../FeedContext";
import ModalConfirm from "../../../components/helper/ModalConfirm/ModalConfirm";
import { ContainerPublication, NoContent } from "../StyledFeed";
import { Main } from "../../Apresentation/StyledHome";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import SideBar from "../../../components/SideBar/SideBar";

const PublicationOne = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [publication, setPublication] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [publicationId, setPublicationId] = useState(null);
  const [urls, setUrls] = useState(null);

  const { id: routeId } = useParams();

  useEffect(() => {
    const fetchPublicationById = async (id) => {
      try {
        const token = await getAccessTokenSilently();
        const { url, options } = GetPublicationById(id, token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setPublication(json.publicationData);
        } else {
          setNoContentState("Publicação não encontrada");
        }
      } catch (error) {
        console.error("Erro ao obter publicação por ID:", error);
      }
    };

    if (routeId) {
      fetchPublicationById(routeId);
    }
  }, [routeId, request, getAccessTokenSilently]);

  function handleClickModal() {
    setModalIsVisible(!isModalVisible);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <FeedContext.Provider
      value={{
        handleClickModal,
        publicationId,
        setPublicationId,
        urls,
        setUrls,
      }}
    >
      <Main>
        <SideBar />
        <ContainerPublication>
          {isModalVisible && (
            <ModalConfirm
              handleClickModal={handleClickModal}
              publicationId={publicationId}
            />
          )}
          {noContentState && (
            <NoContent>
              <p>{noContentState}</p>
            </NoContent>
          )}
          {publication && (
            <Publication
              userId={publication.user?.id}
              pictureUser={publication.user?.picture}
              nameUser={publication.user?.name}
              publicationId={publication.id}
              mediaPublication={publication.url}
              descriptionPublication={publication.description}
              key={publication.id}
              likes={publication.likes}
            />
          )}
        </ContainerPublication>
      </Main>
    </FeedContext.Provider>
  );
};

export default withAuthenticationRequired(PublicationOne, {
  onRedirecting: () => <Loading />,
});
