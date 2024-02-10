import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  ForConnections,
  ModalCloseButton,
  ListContainer,
  ListItem,
  NoContent,
} from "./StyledModalForConnection";
import { ImageProfile } from "../../../components/common/Header/StyledHeader";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GetRequestsForMe } from "../../../api/ConnectionApi";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../hooks/useFetch";
import ButtonAcceptConnection from "../../../components/Button/ButtonAcceptConnection";
import { PublicationContext } from "../../../Context/PublicationContext";
import ButtonRejectConnection from "../../../components/Button/ButtonRejectConnection";

const ModalForConnection = ({ isOpen, toggleModal }) => {
  const [users, setUsers] = useState(null);
  const [noContent, setNoContent] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const { request } = useFetch();
  const { reload, reloadPublications } = useContext(PublicationContext);

  useEffect(() => {
    if (isOpen) {
      const fetchGetAllUsers = async () => {
        const token = await getAccessTokenSilently();
        const { url, options } = GetRequestsForMe(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setUsers(json.response);
          setNoContent(null);
        } else {
          setUsers(null);
          setNoContent("Nenhum pedido de conexão");
        }
      };
      fetchGetAllUsers();
    }
  }, [getAccessTokenSilently, isOpen, request, reload]);

  return (
    <>
      {isOpen && (
        <Container onClick={toggleModal}>
          <ForConnections onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={toggleModal}>
              <AiOutlineCloseCircle size="20px" />
            </ModalCloseButton>

            <ListContainer>
              {users &&
                users.map((user) => (
                  <div key={user.sender_id}>
                    <ListItem>
                      <div>
                        <ImageProfile src={user.sender_picture} alt="Perfil" />
                        <span>{user.sender_name.slice(0, 8)}</span>
                      </div>
                      <div>
                        <ButtonAcceptConnection
                          user={user}
                          setUsers={setUsers}
                          reloadPublications={reloadPublications}
                        />
                        <ButtonRejectConnection
                          user={user}
                          setUsers={setUsers}
                          reloadPublications={reloadPublications}
                        />
                      </div>
                    </ListItem>
                  </div>
                ))}
              {noContent && <NoContent>{noContent}</NoContent>}
            </ListContainer>
          </ForConnections>
        </Container>
      )}
    </>
  );
};

export default ModalForConnection;
