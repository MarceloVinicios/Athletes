import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const AnimatedBall = styled.img`
  height: 70px;
`;

const TextLoading = styled.p`
  font-size: 1.2rem;
`;

const ErrorComment = () => {
  return (
    <Container>
      <AnimatedBall
        src="http://localhost:5173/src\assets\images\ErrorComment.svg"
        alt=""
      />
      <TextLoading>
        Error ao carregar comentários
      </TextLoading>
    </Container>
  );
};

export default ErrorComment;
