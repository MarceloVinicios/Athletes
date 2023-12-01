import React from "react";
import { Button } from "@chakra-ui/react";
import { MdInsertLink } from "react-icons/md";

const ButtonCopy = ({idPublication}) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:5173/feed/publication/${idPublication}`);
  };

  return (
    <Button
      w="194px"
      variant="ghost"
      colorScheme="blue"
      rightIcon={<MdInsertLink />}
      justifyContent="space-between"
      fontWeight="normal"
      fontSize="sm"
      onClick={copyToClipboard}
    >
      Copy Link
    </Button>
  );
};

export default ButtonCopy;
