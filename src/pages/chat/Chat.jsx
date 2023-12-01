import React, { useEffect, useRef, useState } from "react";
import {
  ContainerCall,
  ContainerChat,
  ContainerForUser,
  ContainerListUser,
  ContainerUserProfile,
  DataUserSelected,
  HeaderUser,
  ImageCall,
  Main,
  Search,
  UserName,
} from "./ChatStyled";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import { GetAllUsers, GetUser } from "../../api/UserApi";
import { ImageProfile } from "../../components/common/Header/StyledHeader";
import io from "socket.io-client";
import ChatMessage from "../../components/ui/ChatMessage/ChatMessage";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [users, setUsers] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dataUserMessage, setDataUserMessage] = useState(null);

  useEffect(() => {
    async function fetchGetAllUsers() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllUsers(token);
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        setUsers(json.response);
      }

      if (response.status === 204) {
        setNoContentState("Sem conteúdo");
      }
    }
    fetchGetAllUsers();

    async function getUserDataMessage() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUser(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setDataUserMessage(json.response);
      }

      return json.response.id;
    }

    async function getSocket() {
      const responseGetUserMessage = await getUserDataMessage();
      const socket = await io.connect("http://localhost:4000");
      socket.emit("set_username", responseGetUserMessage);
      setSocket(socket);
    }
    getSocket();
  }, [getAccessTokenSilently, request]);

  return (
    <Main>
      <ContainerForUser>
        <Search type="text" name="search" placeholder="Pesquisar usuários" />
        <ContainerListUser>
          {users &&
            users.map((userData) =>
              userData.id != user.sub ? (
                <ContainerUserProfile
                  key={userData.id}
                  onClick={() => {
                    setSelectedUser(userData);
                  }}
                >
                  <ImageProfile src={userData.picture} alt="Perfil" />
                  <UserName>{userData.name}</UserName>
                </ContainerUserProfile>
              ) : null,
            )}
        </ContainerListUser>
      </ContainerForUser>
      {selectedUser && (
        <ContainerChat>
          <HeaderUser>
            <DataUserSelected>
              <ImageProfile src={selectedUser.picture} alt="Perfil" />
              <UserName>{selectedUser.name}</UserName>
            </DataUserSelected>
            <ContainerCall>
              <ImageCall
                src="http://localhost:5173/src/assets/images/Call.svg"
                alt="ligação"
              />
              <ImageCall
                src="http://localhost:5173/src/assets/images/VideoCamera.svg"
                alt="video chamada"
              />
            </ContainerCall>
          </HeaderUser>
          <ChatMessage
            socket={socket}
            userData={selectedUser}
            dataUserMessage={dataUserMessage}
          />
        </ContainerChat>
      )}
    </Main>
  );
};

export default Chat;
