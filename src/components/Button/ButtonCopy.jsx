import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MdInsertLink } from "react-icons/md";

const ButtonCopy = () => {

  const copyToClipboard = () => {
    const urlToCopy = window.location.href;
    navigator.clipboard.writeText(urlToCopy);
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
