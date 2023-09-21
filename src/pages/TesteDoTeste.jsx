import React, { useState } from 'react'
import styled from "styled-components";
import Avatar from 'react-avatar-edit'

const Container = styled.div`
  padding-top: 400px;
  background-color: red;
  width: 500px;
  height: 500px;
  color: white;
`
const TesteDoTeste = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(1);

  const onClose = () => {
    setPreview(null);
  }

  const onCrop = () => {
    setPreview(src)
  }

  return (
    <Container>
      <Avatar width={400} height={300} onCrop={onCrop} onClose={onClose} src={src}/>
    </Container>
  )
}

export default TesteDoTeste
