import React from "react";
import { MdFlag } from "react-icons/md";
import { Button } from "@chakra-ui/react";

const ButtonDenunciar = () => {
  return (
    <Button
      w="194px"
      variant="ghost"
      rightIcon={<MdFlag />}
      justifyContent="space-between"
      fontWeight="normal"
      colorScheme="red"
      fontSize="sm"
    >
      Denunciar
    </Button>
  );
};

export default ButtonDenunciar;
