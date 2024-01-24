import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 9999,
  },
};

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Image = styled.img`
  margin: auto;
  width: 100%;
  height: auto;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: #ebc556;
  border-radius: 9px;
  border: none;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Imagem em tela cheia"
      style={customStyles}
    >
      <CloseButton onClick={onRequestClose}>Fechar</CloseButton>
      <Image src={imageUrl} alt="Imagem em tela cheia" />
    </CustomModal>
  );
};

export default ImageModal;
