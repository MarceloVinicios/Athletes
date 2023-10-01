import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/common/SideBar";
import { GetAllPublications } from "../components/api/ApiPublication";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Publication from "../components/Publication/Publication";
import useFetch from "../components/hooks/useFetch";

const Main = styled.main`
  height: 100%;
  background-color: #263238;
`;

const ContainerPublication = styled.div`
  min-height: 100vh;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    align-items: end;
    margin-right: 170px;
  }

  @media (max-width: 1100px) {
    margin-right: 100px;
  }

  @media (max-width: 1000px) {
    margin-right: 70px;
  }

  @media (max-width: 960px) {
    margin-right: 40px;
  }

  @media (max-width: 900px) {
    margin-right: initial;
    align-items: center;
  }
`;

const Feed = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { loading, error, request } = useFetch();
  const [publications, setPublications] = useState(null);

  useEffect(() => {
    async function fetchPuliction() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllPublications(token);
      const { response, json } = await request(url, options);
      setPublications(json.publicationData);
    }
    fetchPuliction();
  }, [getAccessTokenSilently, request]);

  return (
    <Main>
      <SideBar />
      <ContainerPublication>
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
    </Main>
  );
};

export default Feed;
