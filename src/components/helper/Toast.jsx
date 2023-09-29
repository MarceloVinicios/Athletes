import React, { useEffect } from 'react';
import styled from 'styled-components';
import {GiConfirmed} from "react-icons/gi"

const ToastContainer = styled.div`
  z-index: 99;
  position: fixed;
  top: 100px;
  right: 20px;
  background-color: #4CAF50;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s;
`

const Text = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); // Fecha o toast após 3 segundos

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);


  return (
    <ToastContainer className="toast">
      <Text><GiConfirmed />{message}</Text>
    </ToastContainer>
  );
};

export default Toast;

