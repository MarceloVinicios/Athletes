import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const ModalConfirm = ({
  isOpen,
  title,
  message,
  onConfirm,
  onClose,
  loading,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent bg="#2D3E46" color="white">
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          {loading ? (
            <Button colorScheme="red" mr={3} onClick={onConfirm} disabled>
              Apagando...
            </Button>
          ) : (
            <Button colorScheme="red" mr={3} onClick={onConfirm}>
              Confirmar
            </Button>
          )}
          <Button onClick={onClose} borderColor="white">
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalConfirm;
