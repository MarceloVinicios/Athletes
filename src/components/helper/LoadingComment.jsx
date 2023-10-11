import React from "react";
import { styled, keyframes } from "styled-components";

const Container = styled.div`
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimatedBall = styled.img`
  height: 70px;
  animation: ${spin} 2s linear infinite;
`;

const TextLoading = styled.p`
  font-size: 1.2rem;
`;

const JumpDotAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
`;

const JumpDotAnimation2 = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
`;

const JumpDotAnimation3 = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
`;

const JumpDot = styled.span`
  display: inline-block;
  animation: ${JumpDotAnimation} 1.5s ease-in-out infinite;
`;

const JumpDot2 = styled.span`
  display: inline-block;
  animation: ${JumpDotAnimation2} 1.5s ease-in-out infinite;
`;

const JumpDot3 = styled.span`
  display: inline-block;
  animation: ${JumpDotAnimation3} 1.5s ease-in-out infinite;
`;

const LoadingComment = () => {
  return (
    <Container>
      <AnimatedBall src="http://localhost:5173/src\assets\animations\basketballLoading.svg" alt="" />
      <TextLoading>
        Carregando
        <JumpDot>.</JumpDot>
        <JumpDot2>.</JumpDot2>
        <JumpDot3>.</JumpDot3>
      </TextLoading>
    </Container>
  );
};

export default LoadingComment;
