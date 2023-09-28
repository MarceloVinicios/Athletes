import React from 'react'
import { OverlayPublication, NewPostContainer, NewPostHeader, NewPostContent, NewPostFooter } from "./NewPublication.style";

const Modal = ({ show, onClose, onUpload }) => {
  return (
    <>
      <OverlayPublication show={show} />
      <NewPostContainer show={show}>
        <NewPostHeader>
          <h2>Adicionar Nova Publicação</h2>
          <hr />
        </NewPostHeader>
        <NewPostContent>
          <input type="file" accept="image/*,video/*" id="fileInput" />
          <button onClick={onUpload}>Carregar</button>
        </NewPostContent>
        <NewPostFooter>
          <button onClick={onClose}>Fechar</button>
        </NewPostFooter>
      </NewPostContainer>
    </>
  );
};

export default Modal;
