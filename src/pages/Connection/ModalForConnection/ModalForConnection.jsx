import React, { useEffect, useState } from "react";
import {
  Container,
  ForConnections,
  ModalCloseButton,
  ListContainer,
  ListItem,
  ButtonAccepted,
  ButtonRecused,
  NoContent,
} from "./StyledModalForConnection";
import { ImageProfile } from "../../../components/common/Header/StyledHeader";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GetRequestsForMe } from "../../../api/ConnectionApi";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../hooks/useFetch";

const ModalForConnection = ({ isOpen, toggleModal }) => {
  const [users, setUsers] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const { request } = useFetch();

  useEffect(() => {
    if (isOpen) {
      const fetchGetAllUsers = async () => {
        const token = await getAccessTokenSilently();
        const { url, options } = GetRequestsForMe(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setUsers(json.response);
        } else {
          setUsers(null);
        }
      };
      fetchGetAllUsers();
    }
  }, [getAccessTokenSilently, isOpen, request]);

  return (
    <>
      {isOpen && (
        <Container onClick={toggleModal}>
          <ForConnections onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={toggleModal}>
              <AiOutlineCloseCircle size="20px" />
            </ModalCloseButton>

            <ListContainer>
              {users ? (
                users.map((user) => (
                  <ListItem key={user.sender_id}>
                    <div>
                      <ImageProfile src={user.sender_picture} alt="Perfil" />
                      <span>{user.sender_name.slice(0, 8)}</span>
                    </div>
                    <div>
                      <ButtonAccepted>Aceitar</ButtonAccepted>
                      <ButtonRecused>Recusar</ButtonRecused>
                    </div>
                  </ListItem>
                ))
              ) : (
                <NoContent>
                  Você não tem recebido nenhum pedido para conexão
                </NoContent>
              )}
            </ListContainer>
          </ForConnections>
        </Container>
      )}
    </>
  );
};

export default ModalForConnection;
