import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import {
  ContainerForUser,
  ContainerListUser,
  ContainerUserProfile,
  Main,
  UserName,
} from "../chat/ChatStyled";
import { ImageProfile } from "../../components/common/Header/StyledHeader";
import {
  ButtonConnection,
  ContainerDataUser,
  ContainerForIfConect,
  ContainerItemUser,
  ContainerList,
  ContainerOfInformation,
  ContainerOptionConnection,
  ImageNotifications,
  NoConnection,
  NumberRequest,
  RequestConnection,
  SubTitleConnections,
} from "./StyledConnection";
import {
  GetUserForConnect,
  GetUserOfMyConnections,
  sendRequestConnection,
  GetRequestsForMe,
} from "../../api/ConnectionApi";

const Connection = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();
  const [users, setUsers] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [myConnections, setMyConnections] = useState(null);
  const [noContentConnections, setNoContentConnections] = useState(null);
  const [requestConnection, setRequestConnection] = useState(null);
  const [requestsForMeNumber, setRequestsForMeNumber] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchGetAllUsers = async () => {
      try {
        await fetchGetUsersOfMyConnections();

        const token = await getAccessTokenSilently();
        const { url, options } = GetUserForConnect(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setUsers(json.response);
        }

        if (response.status === 204) {
          setNoContentState("Nenhum usuário para se conectar");
        }
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    const fetchGetUsersOfMyConnections = async () => {
      try {
        const token = await getAccessTokenSilently();
        const { url, options } = GetUserOfMyConnections(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setMyConnections(json.response);
        }

        if (response.status === 204) {
          setNoContentConnections("Nenhuma conexão feita");
        }
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };

    const fetchGetRequestsForme = async () => {
      try {
        await fetchGetAllUsers();
        await fetchGetUsersOfMyConnections();

        const token = await getAccessTokenSilently();
        const { url, options } = GetRequestsForMe(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setRequestConnection(json.response);
        }

        if (response.status === 204) {
          setRequestsForMeNumber(0);
        }
      } catch (error) {
        console.error("Erro ao obter os pedidos", error);
      }
    };

    fetchGetRequestsForme();
  }, [request, getAccessTokenSilently]);

  const handleConnection = async (id) => {
    if (id) {
      const user_recipient = {
        user_recipient: id,
      };

      const token = await getAccessTokenSilently();
      const { url, options } = sendRequestConnection(user_recipient, token);
      const { response } = await request(url, options);

      if (response.status === 201) {
        console.log("pedido enviado");
      } else {
        console.log("erro ao enviar pedido");
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Main>
      <ContainerForUser>
        {noContentConnections ? (
          <NoConnection>{noContentConnections}</NoConnection>
        ) : (
          <SubTitleConnections>Minhas Conexões</SubTitleConnections>
        )}
        <ContainerListUser>
          {myConnections &&
            myConnections.map((userData) => (
              <a href={`/profile/${userData.id}`}>
                <ContainerUserProfile key={userData.id}>
                  <ImageProfile src={userData.picture} alt="Perfil" />
                  <UserName>{userData.name}</UserName>
                </ContainerUserProfile>
              </a>
            ))}
        </ContainerListUser>
      </ContainerForUser>
      <ContainerForIfConect>
        <RequestConnection>
          <ImageNotifications
            src="src\assets\images\Notification.svg"
            alt="Notifications"
          />
          <NumberRequest>
            {requestConnection ? requestConnection.length : 0}
          </NumberRequest>
        </RequestConnection>
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
                        onClick={() => handleConnection(dataUser.id)}
                      >
                        CONECTAR
                      </ButtonConnection>
                    </ContainerOptionConnection>
                  </ContainerItemUser>
                ),
            )}
        </ContainerList>
      </ContainerForIfConect>
    </Main>
  );
};

export default Connection;
