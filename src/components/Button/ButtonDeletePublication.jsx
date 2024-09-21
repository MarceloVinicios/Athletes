import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@chakra-ui/react";

const ButtonDeletePublication = ({ onOpenDeleteModal }) => {
  return (
    <Button
      w="194px"
      variant="ghost"
      rightIcon={<AiFillDelete />}
      justifyContent="space-between"
      fontWeight="normal"
      colorScheme="red"
      fontSize="sm"
      onClick={onOpenDeleteModal}
    >
      Apagar
    </Button>
  );
};

export default ButtonDeletePublication;
