import React, { useEffect } from "react";
import styled from "styled-components";
import { GiConfirmed } from "react-icons/gi";
import { BiErrorCircle } from "react-icons/bi";

const ToastContainer = styled.div`
  z-index: 99;
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: #4caf50;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s;
`;

const Text = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Toast = ({ message, error }) => {
  if (error) {
    return (
      <ToastContainer className="toast" style={{background: "#e93108"}}>
        <Text>
          <BiErrorCircle />
          {message}
        </Text>
      </ToastContainer>
    );
  }

  return (
    <ToastContainer className="toast">
      <Text>
        <GiConfirmed />
        {message}
      </Text>
    </ToastContainer>
  );
};

export default Toast;
