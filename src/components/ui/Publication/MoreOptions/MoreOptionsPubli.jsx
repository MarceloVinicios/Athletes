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
import ButtonDelete from "../../../Button/ButtonDelete";
import ButtonDenunciar from "../../../Button/ButtonDenunciar";
import ButtonCopy from "../../../Button/ButtonCopy";

export default function MoreOptionsPubli({
  userId,
  idPublication
}) {
  const { user } = useAuth0();

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
              <ButtonCopy />
              {user.sub == userId ? (
                <ButtonDelete
                  id={idPublication}
                  urls={"publication"}
                />
              ) : (
                <ButtonDenunciar />
              )}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
