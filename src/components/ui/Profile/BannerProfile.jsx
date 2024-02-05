/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
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
import { GetUserById } from "../../../api/UserApi";
import { GetAllPublications } from "../../../api/PublicationApi";
import Publication from "../Publication/Publication";
import ProfileStats from "./ProfileStats/ProfileStats";
import { useParams } from "react-router-dom";
import ImageModal from "../../ui/ImageModal";
import { UserContext } from "../../../Context/UserContext";
import Loading from "../../helper/Loading";
import { PublicationContext } from "../../../Context/PublicationContext";

const BannerProfile = () => {
  const { getAccessTokenSilently, user, isLoading } = useAuth0();
  const [dataUserProfile, setDataUserProfile] = useState(null);
  const { dataUser } = useContext(UserContext);
  const {reload} = useContext(PublicationContext)
  const { loading, request } = useFetch();
  const [ChooseData, setChooseData] = useState(1);
  const [noContentState, setNoContentState] = useState(null);
  const [publications, setPublications] = useState(null);
  const [accesses, setAccesses] = useState(0);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setAccesses(accesses + 1);
  }, []);

  useEffect(() => {
    async function getUserData() {
      if (!isLoading) {
        if (user.sub == id) {
          setDataUserProfile(dataUser);
        } else {
          getUserApi();
        }
      }
    }

    async function getUserApi() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUserById(id, token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setDataUserProfile(json.response);
      } else {
        setDataUserProfile(false)
      }
    }

    getUserData();
  }, [
    dataUser,
    getAccessTokenSilently,
    id,
    isLoading,
    request,
    user.sub
  ]);

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
  }, [reload, getAccessTokenSilently, request]);

  const handleImageClick = () => {
    setImageModalOpen(true);
  };

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileCard>
          <ProfileImage
            src="https://thefans.com.br/wp-content/uploads/2022/08/Untitled-1-18-732x412.jpg"
            alt="plano de fundo"
          />
          <ContainerOne>
            {dataUserProfile && (
              <ContainerDataUser>
                <AvatarProfile
                  src={dataUserProfile.picture}
                  alt="Perfil"
                  onClick={handleImageClick}
                />
                <Name>{dataUserProfile.name}</Name>
              </ContainerDataUser>
            )}
            {dataUserProfile &&
              dataUserProfile.category &&
              dataUserProfile.category[0] && (
                <SportUser>{dataUserProfile.category[0].category}</SportUser>
              )}
          </ContainerOne>
          <ContainerGoal>
            <SubTitleGoal>Objetivo:</SubTitleGoal>
            <Goal>{dataUserProfile && dataUserProfile.goal}</Goal>
          </ContainerGoal>
          <Line />
          <ListNoOrderContentProfile>
            <ListItemProfile onClick={() => setChooseData(1)}>
              <img
                src="http://localhost:5173/src/assets/images/MyPublications.svg"
                alt="Publicações"
              />
              Publicações
            </ListItemProfile>
            <ListItemProfile onClick={() => setChooseData(2)}>
              <img
                src="http://localhost:5173/src/assets/images/Esta.svg"
                alt="Publicações"
                style={{ marginTop: "9px" }}
              />
              Estatísticas
            </ListItemProfile>
          </ListNoOrderContentProfile>
          <ContainerPublications>
            {ChooseData === 1 ? (
              <>
                {noContentState && (
                  <NoContent>
                    <p>{noContentState}</p>
                  </NoContent>
                )}
                {publications &&
                  publications.map(
                    (publication) =>
                      id === publication.user?.id && (
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
              </>
            ) : (
              <ProfileStats accesses={accesses} />
            )}
          </ContainerPublications>
        </ProfileCard>
      </ProfileContainer>
      {dataUserProfile && (
        <ImageModal
          isOpen={isImageModalOpen}
          onRequestClose={() => setImageModalOpen(false)}
          imageUrl={dataUserProfile.picture}
        />
      )}
    </Container>
  );
};

export default BannerProfile;
