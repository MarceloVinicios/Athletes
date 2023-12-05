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
  ButtonAccept,
  ButtonConnection,
  ButtonRefuse,
  ContainerButtonConnection,
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
  AccptingRequest,
} from "../../api/ConnectionApi";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #2d3e46;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #ebc556;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Modal = ({ handleClose, requestConnection }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { loading, request } = useFetch();

  const connectionAccepted = async (id) => {
    try {
      const token = await getAccessTokenSilently();
      const { url, options } = AccptingRequest(id, token);
      const { response } = await request(url, options);

      if (response.status === 200) {
        console.log("Conexao aceita");
      } else {
        console.log("Conexao recusada");
      }
    } catch (error) {
      console.error("Error accepting connection:", error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ContainerList>
          {requestConnection &&
            requestConnection.map(
              (dataUser) =>
                user.sub !== dataUser.sender_id && (
                  <ContainerItemUser key={dataUser.sender_id}>
                    <a href={`/profile/${dataUser.sender_id}`}>
                      <ContainerDataUser>
                        <ImageProfile
                          src={dataUser.sender_picture}
                          alt="Perfil"
                        />
                        <ContainerOfInformation>
                          <UserName>{dataUser.sender_name}</UserName>
                          <span>Futebol</span>
                        </ContainerOfInformation>
                      </ContainerDataUser>
                    </a>
                    <ContainerOptionConnection>
                      <ContainerButtonConnection>
                        <ButtonRefuse>Recusar</ButtonRefuse>
                        <ButtonAccept
                          onClick={() => connectionAccepted(dataUser.sender_id)}
                        >
                          CONECTAR
                        </ButtonAccept>
                      </ContainerButtonConnection>
                    </ContainerOptionConnection>
                  </ContainerItemUser>
                ),
            )}
        </ContainerList>
        <CloseButton onClick={handleClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

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

  const handleOpenModal = () => {
    setModalVisible(true);
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
        <RequestConnection onClick={handleOpenModal}>
          <ImageNotifications
            src="src\assets\images\Notification.svg"
            alt="Notifications"
          />
          <NumberRequest>
            {requestConnection ? requestConnection.length : 0}
          </NumberRequest>
        </RequestConnection>

        {isModalVisible && (
          <Modal
            handleClose={handleCloseModal}
            requestConnection={requestConnection}
          />
        )}

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
