import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../hooks/useFetch";
import { DeletePublication } from "../../api/ApiPublication";

const ButtonDelete = ({ id, urls, toastDelete }) => {
  const { loading, error, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();


  async function onClickDelete() {
    const token = await getAccessTokenSilently();
    const { url, options } = DeletePublication(id, token);
    const { response } = await request(url, options);

    if (response.status == 200) {
      toastDelete(true)
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
