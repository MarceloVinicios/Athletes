import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ContainerButton } from "../StyledPublication";
import { FaWhatsapp } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const Share = ({ publicationId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyLink = () => {
    const linkToCopy = window.location.href+ '/publication/' + publicationId;
    navigator.clipboard.writeText(linkToCopy);
    handleCloseModal();
  };

  const handleShareWhatsApp = () => {
    const linkToShare = window.location.href+ '/publication/' + publicationId;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      linkToShare,
    )}`;
    window.open(whatsappUrl, "_blank");
    handleCloseModal();
  };

  return (
    <ContainerButton>
      <Button
        className="share-button"
        variant="ghost"
        justifySelf="end"
        onClick={handleOpenModal}
      >
        <AiOutlineShareAlt fontSize="24px" />
        Compartilhar
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size="lg"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escolha como compartilhar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={handleCopyLink} marginRight="20px">
              <CiLink style={{ margin: '0 2px', fontSize: '20px' }}/>
              Copiar Link
            </Button>
            <Button onClick={handleShareWhatsApp} color="green">
              <FaWhatsapp style={{ margin: '0 2px', fontSize: '20px' }}/>
              Compartilhar no WhatsApp
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </ContainerButton>
  );
};

export default Share;
