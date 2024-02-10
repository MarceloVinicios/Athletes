import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import useFetch from "../../hooks/useFetch";
import { AccptingRequest } from "../../api/ConnectionApi";
import { ButtonAccepted } from "../../pages/Connection/ModalForConnection/StyledModalForConnection";

const ButtonAcceptConnection = ({user, setUsers, reloadPublications}) => {
  const { getAccessTokenSilently } = useAuth0();
  const { request, loading } = useFetch();

  const connectionAccepted = async (id) => {
    const token = await getAccessTokenSilently();
    const { url, options } = AccptingRequest(id, token);
    const { response } = await request(url, options);


    if (response.status === 200) {
      setUsers((users) => users.filter(u => u.sender_id !== id));
      reloadPublications()
    }
  };

  return (
    <>
      {loading ? (
        <ButtonAccepted disabled>Aceitando</ButtonAccepted>
      ) : (
        <ButtonAccepted onClick={() => connectionAccepted(user.sender_id)}>
          Aceitar
        </ButtonAccepted>
      )}
    </>
  );
};

export default ButtonAcceptConnection;
