import React, { useContext, useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import { UserName } from "../chat/ChatStyled";
import { ImageProfile } from "../../components/common/Header/StyledHeader";
import { IoIosNotifications } from "react-icons/io";
import {
  Container,
  ButtonConnection,
  ContainerDataUser,
  ContainerForIfConect,
  ContainerItemUser,
  ContainerList,
  ContainerOfInformation,
  ContainerOptionConnection,
  ContainerNotification,
} from "./StyledConnection";
import {
  GetUserForConnect,
  sendRequestConnection,
} from "../../api/ConnectionApi";
import { PublicationContext } from "../../Context/PublicationContext";
import ModalForConnection from "./ModalForConnection/ModalForConnection";

const Connection = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [users, setUsers] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { reloadPublications, reload } = useContext(PublicationContext);

  useEffect(() => {
    const fetchGetAllUsers = async () => {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUserForConnect(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setUsers(json.response);
      }

      if (response.status === 204) {
        setNoContentState("Nenhum usuário para se conectar");
        setUsers(null);
      }
    };

    fetchGetAllUsers();
  }, [request, getAccessTokenSilently, reload]);

  const handleConnection = async (id) => {
    if (id) {
      const user_recipient = {
        user_recipient: id,
      };

      const token = await getAccessTokenSilently();
      const { url, options } = sendRequestConnection(user_recipient, token);
      const { response } = await request(url, options);

      if (response.status === 201) {
        reloadPublications();
      }
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <ContainerNotification onClick={() => setModalOpen(!modalOpen)}>
        <IoIosNotifications size="30px" />
        <span>Pedidos 1</span>
      </ContainerNotification>
      <ModalForConnection isOpen={modalOpen} toggleModal={toggleModal} users={users}/>
      <ContainerForIfConect>
        <ContainerList>
          {noContentState && <p>{noContentState}</p>}
          {users &&
            users.map(
              (dataUser) =>
                user.sub !== dataUser.id && (
                  <ContainerItemUser key={dataUser.id}>
                    <a href={`/profile/${dataUser.id}`}>
                      <ContainerDataUser>
                        <ImageProfile src={dataUser.picture} alt="Perfil" />
                        <ContainerOfInformation>
                          <UserName>{dataUser.name}</UserName>
                          <span>Futebol</span>
                        </ContainerOfInformation>
                      </ContainerDataUser>
                    </a>
                    <ContainerOptionConnection>
                      <ButtonConnection
                        onClick={() => {
                          toggleModal();
                          handleConnection(dataUser.id);
                        }}
                      >
                        CONECTAR
                      </ButtonConnection>
                    </ContainerOptionConnection>
                  </ContainerItemUser>
                ),
            )}
        </ContainerList>
      </ContainerForIfConect>
    </Container>
  );
};

export default withAuthenticationRequired(Connection, {
  onRedirecting: () => <Loading />,
});
