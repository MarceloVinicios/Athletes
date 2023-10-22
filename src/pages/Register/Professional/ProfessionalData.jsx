import React, { useEffect, useState } from "react";
import { Container, Form, Title, Label, Button, Image, Warning } from "../StyledRegister";
import InputContainer from "../../../components/common/Form/Input";
import useForm from "../../../hooks/useForm";
import { CircularProgress } from "@chakra-ui/react";

const ProfessionalData = ({ setFormContatoData, warning, loading}) => {
  const sport = useForm();
  const country = useForm();
  const state = useForm();
  const city = useForm();

  const handleSave = (event) => {
    event.preventDefault();

    if (country.validate() && state.validate() && city.validate()) {
      const professionalFormData = {
        sport: sport.value,
        country: country.value,
        state: state.value,
        city: city.value
      };
      setFormContatoData(professionalFormData);
    }
  };

  return (
    <Container>
      <Form>
        <Title>Dados Profissionais</Title>
        <InputContainer label="País" type="text" name="country" placeholder="País" {...country}/>
        <InputContainer label="Estado" type="text" name="state" placeholder="Estado" {...state}/>
        <InputContainer label="Cidade" type="text" name="city" placeholder="Cidade" {...city}/>
        <Button onClick={handleSave}>{loading ? <CircularProgress isIndeterminate color='green.300'/> : "Salvar"}</Button>
        {warning && <Warning>{warning}</Warning>}
      </Form>
      <Image src="src\assets\images\VoleiRegister.svg" />
    </Container>
  );
};

export default ProfessionalData;
