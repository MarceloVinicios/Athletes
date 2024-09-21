// MoreOptionsPubli.jsx

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import ButtonDenunciar from "../../../Button/ButtonDenunciar";
import ButtonCopy from "../../../Button/ButtonCopy";
import ButtonDeletePublication from "../../../Button/ButtonDeletePublication";
import ButtonDeletePublicationModal from "../../../helper/ButtonDeletePublicationModal";

export default function MoreOptionsPubli({
  userId,
  idPublication
}) {
  const { user } = useAuth0();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteButtonClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <ButtonCopy idPublication={idPublication}/>
              {user.sub === userId ? (
                <ButtonDeletePublication
                  id={idPublication}
                  urls={"publication"}
                  onOpenDeleteModal={handleDeleteButtonClick}
                />
              ) : (
                <ButtonDenunciar />
              )}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {showDeleteModal && (
        <ButtonDeletePublicationModal
          id={idPublication}
          onCloseDeleteModal={handleCloseDeleteModal}
        />
      )}
    </Flex>
  );
}
