import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import Publication from '../Publication/Publication';
import { Main } from "../../../pages/Apresentation/StyledHome";
import SideBar from '../../SideBar/SideBar';
import { ContainerPublication, NoContent } from '../../../pages/Feed/StyledFeed';
import Loading from '../../helper/Loading';
import useFetch from '../../../hooks/useFetch';
import { GetAllPublicationsByCategory } from '../../../api/PublicationApi';
import { PublicationContext } from '../../../Context/PublicationContext';

const ListPublicationByCategory = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [publications, setPublications] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const { idCategory } = useParams();
  const {reload} = useContext(PublicationContext)

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
  }, [getAccessTokenSilently, request, idCategory, reload]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Main>
      <SideBar />
      <ContainerPublication>
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
              publication_at={publication.publication_at}
            />
          ))}
      </ContainerPublication>
    </Main>
  );
};

export default ListPublicationByCategory;
