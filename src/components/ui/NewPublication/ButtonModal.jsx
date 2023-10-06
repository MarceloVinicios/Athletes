import React, { useState } from "react";
import { ButtonLoading } from "../../common/Header/StyledHeader";
import NewPublicationModal from "./NewPublicationModal";

const ButtonModal = () => {
  const [isModalVisible, setModalIsVisible] = useState(false);

  function handleClickModal() {
    setModalIsVisible(!isModalVisible)
  }

  return (
    <div>
      <ButtonLoading onClick={handleClickModal}>
        Carregar
      </ButtonLoading>
      {isModalVisible ? <NewPublicationModal handleClickModal={handleClickModal}/> : null}
    </div>
  );
};

export default ButtonModal;
