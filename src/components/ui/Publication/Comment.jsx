import React from "react";
import { CommentList, ContainerComments, NameUser } from "./StyledPublication";

const Comment = () => {
  return (
    <ContainerComments>
      <CommentList>
        <div>
          <NameUser>Pirataria</NameUser>
          <Comment>
            Piratia é o melhor do mundoPiratia é o melhor do mundoPiratia é o
            melhor do mundoPiratia é o melhor do mundoPiratia é o melhor do
            mundoPiratia é o melhor do mundoPiratia é o melhor do mundoPiratia é
            o melhor do mundo
          </Comment>
        </div>
      </CommentList>
    </ContainerComments>
  );
};

export default Comment;
