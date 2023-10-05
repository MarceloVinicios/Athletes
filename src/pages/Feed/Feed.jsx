import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { GetAllPublications } from "../../api/PublicationApi";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Publication from "../../components/ui/Publication/Publication";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import { ContainerPublication, NoContent } from "./StyledFeed";

const Feed = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { data, error, request } = useFetch();
  const [publications, setPublications] = useState(null);
  const [noContentState, setNoContentState] = useState(null);

  useEffect(() => {
    async function fetchPuliction() {
      const token = await getAccessTokenSilently();
      const {url, options } = GetAllPublications(token);
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        setPublications(json.publicationData);
        console.log(data)
      }

      if (response.status === 204) {
        setNoContentState("Sem conteúdo")
      }
    }
    fetchPuliction();
  }, [data, getAccessTokenSilently, request]);

  return (
    <>
      <SideBar />
      <ContainerPublication>
        {noContentState && <NoContent><p>{noContentState}</p></NoContent>}
        {publications &&
          publications.map((publication) => (
            <Publication
              userId={publication.user?.id}
              pictureUser={publication.user?.picture}
              nameUser={publication.user?.name}
              publicationId={publication.id}
              mediaPublication={publication.url}
              descriptionPublication={publication.description}
              key={publication.id}
            />
          ))}
      </ContainerPublication>
    </>
  );
};

export default withAuthenticationRequired(Feed, {
  onRedirecting: () => <Loading/>,
});

