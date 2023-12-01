import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import Publication from '../../../components/ui/Publication/Publication';
import { Main } from "../../Apresentation/StyledHome";
import SideBar from '../../../components/SideBar/SideBar';
import { ContainerPublication, NoContent } from '../../Feed/StyledFeed';
import ModalConfirm from '../../../components/helper/ModalConfirm/ModalConfirm';
import Loading from '../../../components/helper/Loading';
import useFetch from '../../../hooks/useFetch';
import { GetAllPublicationsByCategory } from '../../../api/PublicationApi';

const ListPublicationByCategory = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [publications, setPublications] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [isModalVisible, setModalIsVisible] = useState(false);
  const { idCategory } = useParams();

  useEffect(() => {
    async function fetchPulication() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllPublicationsByCategory(Number(idCategory), token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setPublications(json.publicationData);
      }

      if (response.status === 204) {
        setNoContentState("Sem conteúdo");
      }
    }
    fetchPulication();
  }, [getAccessTokenSilently, request, idCategory]);

  function handleClickModal() {
    setModalIsVisible(!isModalVisible);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Main>
      <SideBar />
      <ContainerPublication>
        {isModalVisible && (
          <ModalConfirm
            handleClickModal={handleClickModal}
          />
        )}
        {noContentState && (
          <NoContent>
            <p>{noContentState}</p>
          </NoContent>
        )}
        {publications &&
          !noContentState &&
          publications.map((publication) => (
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
          ))}
      </ContainerPublication>
    </Main>
  );
};

export default ListPublicationByCategory;
