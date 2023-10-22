import React, { useState } from "react";
import { Comment, ContainerComment } from "./StyleComment";
import {
  Avatar,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { NameUser } from "../StyledPublication";
import ButtonDenunciar from "../../../Button/ButtonDenunciar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import IconDelete from "../../../Button/IconDelete";

const CommentsList = ({ comments, setReloadComments }) => {
  const { user } = useAuth0();
  const [hoveredCommentId, setHoveredCommentId] = useState(null);

  const handleMouseEnter = (commentId) => {
    setHoveredCommentId(commentId);
  };

  const handleMouseLeave = () => {
    setHoveredCommentId(null);
  };

  return (
    <>
      {comments &&
        comments.map((comment) => (
          <ContainerComment
            key={comment.id}
            onMouseEnter={() => handleMouseEnter(comment.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Avatar size="md">
              <Image
                src={comment.user.picture}
                alt={comment.user.name}
                borderRadius="full"
              />
            </Avatar>
            <div>
              <NameUser>{comment.user.name}</NameUser>
              <Comment>{comment.comment}</Comment>
            </div>
            {hoveredCommentId === comment.id && (
              <Flex justifyContent="end" mt={1}>
                <Popover placement="bottom" isLazy>
                  <PopoverTrigger>
                    <IconButton
                      aria-label="More server options"
                      icon={<BsThreeDotsVertical />}
                      variant="solid"
                      w="fit-content"
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    w="fit-content"
                    _focus={{ boxShadow: "none" }}
                  >
                    <PopoverArrow />
                    <PopoverBody>
                      <Stack>
                        <ButtonDenunciar />
                        {user.sub == comment.user.id ? (
                          <IconDelete
                            id={comment.id}
                            urls={"comment"}
                          />
                        ) : (
                          <ButtonDenunciar />
                        )}
                      </Stack>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            )}
          </ContainerComment>
        ))}
    </>
  );
};
export default CommentsList;
