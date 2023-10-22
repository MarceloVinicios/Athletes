import React, { useEffect, useState } from "react";
import { Container, Form, Title, Button, Image, FileInput, UploadLabel } from "../StyledRegister";
import InputContainer from "../../../components/common/Form/Input";
import useForm from "../../../hooks/useForm";

const PersonalData = ({ setPage, formUserData, setPersonalData }) => {
  const username = useForm();
  const sport = useForm();
  const goal = useForm();
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

    if (username.validate() && sport.validate() && goal.validate()) {
      const personalFormData = {
        name: username.value,
        picture: selectedFile,
        goal: goal.value,
        sport: sport.value,
      };
      setPersonalData(personalFormData)
    }
  };

  return (
    <Container>
      <Form>
        <Title>Dados Pessoais</Title>
        <InputContainer label="Nome" type="text" name="username" placeholder="Nome" {...username} />
        <InputContainer label="Meta Esportiva" type="text" name="sportsGoal" placeholder="Meta Esportiva" {...goal} />
        <InputContainer label="Esporte de Interesse" type="text" name="sport" placeholder="Esporte de Interesse" {...sport} />
        <div>
          <FileInput type="file" id="fileInput" onChange={handleFileChange} required/>
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
