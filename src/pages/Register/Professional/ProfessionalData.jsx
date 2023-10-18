import React, { useState } from "react";
import { Container, Form, Title, Label, Button, Image } from "../StyledRegister";
import InputContainer from "../../../components/common/Form/Input";
import useForm from "../../../hooks/useForm";

const ProfessionalData = ({formUserData }) => {
  const sport = useForm();
  const experience = useForm();
  const sportsGoal = useForm();
  const [professionalData, setProfessionalData] = useState()

  const handleSave = (event) => {
    event.preventDefault();

    if (sport.validate() && experience.validate() && sportsGoal.validate()) {
      const professionalFormData = {
        sport: sport.value,
        experience: experience.value,
        sportsGoal: sportsGoal.value,
      };
      setProfessionalData(professionalFormData)
    }
  };

  return (
    <Container>
      <Form>
        <Title>Dados Profissionais</Title>
        <InputContainer label="Esporte de Interesse" type="text" name="sport" placeholder="Esporte de Interesse" {...sport} />
        <InputContainer label="Nível de Experiência" type="text" name="experience" placeholder="Nível de Experiência" {...experience} />
        <InputContainer label="Meta Esportiva" type="text" name="sportsGoal" placeholder="Meta Esportiva" {...sportsGoal} />
        <Button onClick={handleSave}>Salvar</Button>
      </Form>
      <Image src="src\assets\images\VoleiRegister.svg" />
    </Container>
  );
};

export default ProfessionalData;
