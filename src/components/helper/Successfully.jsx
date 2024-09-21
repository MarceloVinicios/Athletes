import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  color: #f7f9f8;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding: 20px;
`;

const AnimatedBall = styled.img`
  height: 350px;
`;

const TextLoading = styled.p`
  font-size: 2rem;
`;

const Loading = ({msg}) => {
  return (
    <Container>
      <AnimatedBall src="http://localhost:5173/src\assets\images\Successfully.svg" alt="Sucesso ao publicar" />
      <TextLoading>
        {msg}
      </TextLoading>
    </Container>
  );
};

export default Loading;
