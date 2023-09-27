import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/common/SideBar";
import { GetAll } from "../components/api/ApiPublication";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Publication from "../components/Publication/Publication";
import useFetch from "../components/hooks/useFetch";

const Main = styled.main`
  height: 100%;
  background-color: #263238;
`;

const ContainerPublication = styled.div`
  padding: 80px 0 20px;
`

const Feed = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const { data, loading, error, request } = useFetch();
  const [publications, setPublications] = useState(null)
  const [media, setMedia] = useState(null)

  useEffect(() => {
    async function fetchPuliction() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAll(token);
      const { response, json } = await request(url, options);
      setPublications(json.publicationData)
      console.log(publications[0].user.picture)
    }
    fetchPuliction();
  }, []);

  return (
    <Main>
      <ContainerPublication >
        {publications && publications.map(publication => (
          <Publication pictureUser={publication.user.picture} nameUser={publication.user.name} mediaPublication={publication.url} descriptionPublication={publication.description} key={publication.id}/>
        ))}
      </ContainerPublication>
    </Main>
  );
};

export default Feed;
