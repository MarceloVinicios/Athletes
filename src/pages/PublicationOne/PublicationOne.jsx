// PublicationOne.js
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPublicationById } from "../../api/PublicationApi";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import Publication from "../../components/ui/Publication/Publication";
import { ContainerPublication, NoContent } from "../Feed/StyledFeed";
import { Main } from "../Apresentation/StyledHome";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { PublicationContext } from "../../Context/PublicationContext";

const PublicationOne = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [publication, setPublication] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const {reload} = useContext(PublicationContext)

  const { id: routeId } = useParams();

  useEffect(() => {
    const fetchPublicationById = async (id) => {
      const token = await getAccessTokenSilently();
      const { url, options } = GetPublicationById(id, token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setPublication(json.publicationData);
      } else {
        setNoContentState("Publicação não encontrada");
      }
    };

    if (routeId) {
      fetchPublicationById(routeId);
    }
  }, [routeId, request, getAccessTokenSilently, reload]);


  if (loading) {
    return <Loading />;
  }

  return (
    <Main>
      <ContainerPublication>
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
            publication_at={publication.publication_at}
          />
        )}
      </ContainerPublication>
    </Main>
  );
};

export default withAuthenticationRequired(PublicationOne, {
  onRedirecting: () => <Loading />,
});
