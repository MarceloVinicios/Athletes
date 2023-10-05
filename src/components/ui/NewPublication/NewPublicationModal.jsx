import React, { useState } from "react";
import {
  ModalFather,
  ModalHeader,
  ModalContent,
  Title,
  Close,
} from "./StyledNewPublicationModal";
import FormUpload from "./FormUpload/FormUpload";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NewPublicationModal = ({handleClickModal}) => {
  return (
    <ModalFather >
      <ModalHeader>
        <Title>FAÇA SUA NOVA PUBLICAÇÃO</Title>
        <Close onClick={handleClickModal}>
          <AiOutlineCloseCircle />
        </Close>
      </ModalHeader>
      <ModalContent>
        <FormUpload />
      </ModalContent>
    </ModalFather>
  );
};

export default NewPublicationModal;
