import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import FeedContext from "../../pages/Feed/FeedContext";

const ButtonDelete = ({ id, urls }) => {
  const dataFeedContext = useContext(FeedContext);

  const handleDeleteUserData = () => {
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    dataFeedContext.setPublicationId(id);
    dataFeedContext.setUrls(urls);
  }, [dataFeedContext, id, urls]);

  return (
    <Button
      w="194px"
      variant="ghost"
      rightIcon={<AiFillDelete />}
      justifyContent="space-between"
      fontWeight="normal"
      colorScheme="red"
      fontSize="sm"
      onClick={() => {
        dataFeedContext.handleClickModal();
        handleDeleteUserData();
      }}
    >
      Apagar
    </Button>
  );
};

export default ButtonDelete;

