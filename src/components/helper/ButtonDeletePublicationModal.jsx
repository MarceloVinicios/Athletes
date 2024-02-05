import React, { useContext } from "react";
import ModalConfirm from "../helper/ModalConfirm/ModalConfirm";
import { DeletePublication } from "../../api/PublicationApi";
import useFetch from "../../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import { PublicationContext } from "../../Context/PublicationContext";

const ButtonDeletePublicationModal = ({ id, onCloseDeleteModal }) => {
  const { loading, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const {reloadPublications} = useContext(PublicationContext)

  const handleConfirmDelete = async () => {
    if (!loading) {
      const token = await getAccessTokenSilently();
      const { url, options } = DeletePublication(id, token);
      const { response } = await request(url, options);

      if (response.status === 200) {
        onCloseDeleteModal();
        reloadPublications();
      }
    }
  };

  return (
    <ModalConfirm
      isOpen={true}
      title="Confirmar exclusão"
      message="Tem certeza de que deseja excluir este comentário?"
      onConfirm={handleConfirmDelete}
      onClose={onCloseDeleteModal}
      loading={loading}
    />
  );
};

export default ButtonDeletePublicationModal;
