import React, { useEffect, useState } from "react";
import { Container, Form, Title, Button, Image, FileInput, UploadLabel } from "../StyledRegister";
import InputContainer from "../../../components/common/Form/Input";
import useForm from "../../../hooks/useForm";

const PersonalData = ({ setPage, formUserData,  setPersonalData }) => {
  const username = useForm();
  const country = useForm();
  const state = useForm();
  const city = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (formUserData !== null) {
      setPage(2)
    }
  }, [formUserData, setPage]);

  const handleNext = (event) => {
    event.preventDefault();

    if (username.validate() && country.validate() && state.validate() && city.validate()) {
      const personalFormData = {
        name: username.value,
        country: country.value,
        state: state.value,
        city: city.value,
      };
      setPersonalData(personalFormData)
    }
  };

  return (
    <Container>
      <Form>
        <Title>Dados Pessoais</Title>
        <InputContainer label="Nome" type="text" name="username" placeholder="Nome" {...username} />
        <InputContainer label="País" type="text" name="country" placeholder="País" {...country}/>
        <InputContainer label="Estado" type="text" name="state" placeholder="Estado" {...state}/>
        <InputContainer label="Cidade" type="text" name="city" placeholder="Cidade" {...city}/>
        <div>
          <FileInput type="file" id="fileInput" onChange={handleFileChange} />
          <UploadLabel htmlFor="fileInput">
            <img src="src\assets\images\UploadUser.svg" alt="" width="70px" />
            <span>Inserir Foto de Perfil</span>
          </UploadLabel>
        </div>
        <Button onClick={handleNext}>Prosseguir</Button>
      </Form>
      <Image src="src\assets\images\AtletasRegister1.svg" />
    </Container>
  );
};

export default PersonalData;
