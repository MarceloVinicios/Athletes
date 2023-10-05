import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import { DeletePublication } from "../../api/PublicationApi";

const ButtonDelete = ({ id, urls, toastDelete, errorToast }) => {
  const { loading, error, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();


  async function onClickDelete() {
    const token = await getAccessTokenSilently();
    const { url, options } = DeletePublication(id, token);
    const { response } = await request(url, options);

    if (response.status == 200) {
      toastDelete(true)
    }else {
      if (response.status == 500 || response.status == 404) {
        errorToast(true)
      }
    }
  }

  return (
    <>
      <Button
        w="194px"
        variant="ghost"
        rightIcon={<AiFillDelete />}
        justifyContent="space-between"
        fontWeight="normal"
        colorScheme="red"
        fontSize="sm"
        onClick={onClickDelete}
      >
        Apagar
      </Button>
    </>
  );
};

export default ButtonDelete;
