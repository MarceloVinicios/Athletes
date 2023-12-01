import React, { useEffect, useState } from "react";
import {
  ProfileContainer,
  ProfileCard,
  AvatarProfile,
  Name,
  SportUser,
  ContainerDataUser,
  ContainerOne,
  Container,
  ContainerGoal,
  Goal,
  SubTitleGoal,
  Line,
  ListNoOrderContentProfile,
  ListItemProfile,
  ContainerPublications,
  ProfileImage,
  NoContent,
} from "./StyledBannerProfile";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../hooks/useFetch";
import { GetUser } from "../../../api/UserApi";
import SideBar from "../../SideBar/SideBar";
import { GetAllPublications } from "../../../api/PublicationApi";
import Publication from "../Publication/Publication";

const BannerProfile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [dataUser, setDataUser] = useState(null);
  const { loading, request } = useFetch();
  const [ChooseData, setChooseData] = useState(1);
  const [noContentState, setNoContentState] = useState(null);
  const [publications, setPublications] = useState(null);

  useEffect(() => {
    async function getUserData() {
      try {
        const token = await getAccessTokenSilently();
        const { url, options } = GetUser(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setDataUser(json.response);
          localStorage.setItem("userData", JSON.stringify(json.response));
        }
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error);
      }
    }

    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);

        if (parsedData && parsedData.picture) {
          setDataUser(parsedData);
        } else {
          getUserData();
        }
      } catch (error) {
        getUserData();
      }
    } else {
      getUserData();
    }
  }, [getAccessTokenSilently, request]);

  useEffect(() => {
    async function fetchPublication() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllPublications(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setPublications(json.publicationData);
      }

      if (response.status === 204) {
        setNoContentState("Sem conteúdo");
      }
    }

    if (ChooseData === 1) {
      fetchPublication();
    }
  }, [ChooseData, getAccessTokenSilently, request]);

  if (loading) {
    return null;
  }

  return (
    <Container>
      <SideBar />
      <ProfileContainer>
        <ProfileCard>
          <ProfileImage
            src="https://thefans.com.br/wp-content/uploads/2022/08/Untitled-1-18-732x412.jpg"
            alt="plano de fundo"
          />
          <ContainerOne>
            {dataUser && (
              <ContainerDataUser>
                <AvatarProfile src={dataUser.picture} alt="Perfil" />
                <Name>{dataUser.name}</Name>
              </ContainerDataUser>
            )}
            {dataUser && dataUser.category && dataUser.category[0] && (
              <SportUser>{dataUser.category[0].category}</SportUser>
            )}
          </ContainerOne>
          <ContainerGoal>
            <SubTitleGoal>Objetivo:</SubTitleGoal>
            <Goal>{dataUser && dataUser.goal}</Goal>
          </ContainerGoal>
          <Line />
          <ListNoOrderContentProfile>
            <ListItemProfile onClick={() => setChooseData(1)}>
              <img
                src="src\assets\images\MyPublications.svg"
                alt="Publicações"
              />
              Publicações
            </ListItemProfile>
            <ListItemProfile onClick={() => setChooseData(2)}>
              <img
                src="src\assets\images\MyPublications.svg"
                alt="Estatísticas"
              />
              Estatísticas
            </ListItemProfile>
          </ListNoOrderContentProfile>

          <ContainerPublications>
            {noContentState && (
              <NoContent>
                <p>{noContentState}</p>
              </NoContent>
            )}
            {publications &&
              publications.map(
                (publication) =>
                  user.sub === publication.user?.id && (
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
                  ),
              )}
          </ContainerPublications>
        </ProfileCard>
      </ProfileContainer>
    </Container>
  );
};

export default BannerProfile;
