import React, { useContext, useEffect, useState } from "react";
import { GetAllPublications } from "../../api/PublicationApi";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Publication from "../../components/ui/Publication/Publication";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import { ContainerPublication, NoContent } from "./StyledFeed";
import { Main } from "../Apresentation/StyledHome";
import { PublicationContext } from "../../Context/PublicationContext";

const Feed = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [publications, setPublications] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const {reload} = useContext(PublicationContext)

  useEffect(() => {
    const fetchPublications = async () => {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllPublications(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setPublications(json.publicationData);
      }

      if (response.status === 204) {
        setNoContentState("Sem conteúdo");
      }
    };
    fetchPublications();
  }, [reload, request, getAccessTokenSilently]);

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

export default withAuthenticationRequired(Feed, {
  onRedirecting: () => <Loading />,
});
