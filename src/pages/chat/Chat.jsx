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
import { GetAllUsers } from "../../api/UserApi";
import { ImageProfile } from "../../components/common/Header/StyledHeader";
import io from "socket.io-client";
import ChatMessage from "./ChatMessage/ChatMessage";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [users, setUsers] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function fetchPuliction() {
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
    fetchPuliction();

    async function getSocket() {
      const socket = await io.connect("http://localhost:4000");
      const user = "luiz";
      socket.emit("set_username", user.trim());
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
            users.map((user) => (
              <ContainerUserProfile
                key={user.id}
                onClick={() => {
                  setSelectedUser(user);
                }}
              >
                <ImageProfile src={user.picture} alt="Perfil" />
                <UserName>{user.name}</UserName>
              </ContainerUserProfile>
            ))}
            
        </ContainerListUser>
      </ContainerForUser>
      {selectedUser && (
        <ContainerChat>
          <HeaderUser>
            <DataUserSelected>
              <ImageProfile
                src={selectedUser.picture}
                alt="Perfil"
              />
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
          <ChatMessage socket={socket} userData={selectedUser}/>
        </ContainerChat>
      )}
    </Main>
  );
};

export default Chat;
