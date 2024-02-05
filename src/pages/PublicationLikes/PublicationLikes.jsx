import React, { useContext, useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { GetAllPublications } from "../../api/PublicationApi";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import Publication from "../../components/ui/Publication/Publication";
import { ContainerPublication, NoContent } from "../Feed/StyledFeed";
import { Main } from "../Apresentation/StyledHome";
import { PublicationContext } from "../../Context/PublicationContext";

const PublicationLikes = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [publications, setPublications] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const {reload} = useContext(PublicationContext)

  useEffect(() => {
    const fetchUserLikedPublications = async () => {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllPublications(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        const likedPublications = json.publicationData.filter((publication) =>
          publication.likes.some((like) => like.user_id === user.sub),
        );

        setPublications(likedPublications);
      } else {
        setNoContentState("Sem publicações curtidas");
      }
    };

    fetchUserLikedPublications();
  }, [request, getAccessTokenSilently, user.sub, reload]);

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

export default withAuthenticationRequired(PublicationLikes, {
  onRedirecting: () => <Loading />,
});
