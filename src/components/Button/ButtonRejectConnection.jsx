import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useAuth0 } from '@auth0/auth0-react';
import { ButtonReject } from '../../pages/Connection/ModalForConnection/StyledModalForConnection';
import { RejectRequest } from '../../api/ConnectionApi';

const ButtonRejectConnection = ({user, setUsers, reloadPublications}) => {
  const { getAccessTokenSilently } = useAuth0();
  const { request, loading } = useFetch();

  const connectionReject = async (id) => {
    const token = await getAccessTokenSilently();
    const { url, options } = RejectRequest(id, token);
    const { response } = await request(url, options);

    if (response.status === 204) {
      setUsers((users) => users.filter(u => u.sender_id !== id));
      reloadPublications()
    }
  };


  return (
    <div>
 <>
      {loading ? (
        <ButtonReject disabled>Recusando</ButtonReject>
      ) : (
        <ButtonReject onClick={() => connectionReject(user.sender_id)}>
          Recusar
        </ButtonReject>
      )}
    </>
    </div>
  )
}

export default ButtonRejectConnection

