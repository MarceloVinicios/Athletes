import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Title,
  Button,
  Image,
  FileInput,
  UploadLabel,
  LabelDescription,
  SelectSport,
} from "../StyledRegister";
import InputContainer from "../../../components/common/Form/Input";
import useForm from "../../../hooks/useForm";
import { GetAllCategory } from "../../../api/CategoryApi";
import useFetch from "../../../hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";

const PersonalData = ({ setPage, setPersonalData }) => {
  const username = useForm();
  const goal = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [categoriesApi, setCategoriesApi] = useState([]);
  const { loading, error, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const [categoryResponse, SetCategoryResponse] = useState(1);

  useEffect(() => {
    async function getAllCategoryOfApi() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetAllCategory(token);
      const { response, json } = await request(url, options);
      if (response.status === 200) {
        setCategoriesApi(json.categoriesData);
      }
    }
    getAllCategoryOfApi();
  }, [getAccessTokenSilently, request]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleNext = (event) => {
    event.preventDefault();

    if (username.validate() && goal.validate()) {
      const personalFormData = {
        name: username.value,
        picture: selectedFile,
        goal: goal.value,
        category: Number(categoryResponse),
      };
      console.log(personalFormData.category);
      setPersonalData(personalFormData);
      setPage(2);
    }
  };

  return (
    <Container>
      <Form>
        <Title>Dados Pessoais</Title>
        <InputContainer
          label="Nome"
          type="text"
          name="username"
          placeholder="Nome"
          {...username}
        />
        <InputContainer
          label="Meta Esportiva"
          type="text"
          name="sportsGoal"
          placeholder="Meta Esportiva"
          {...goal}
        />
        <LabelDescription htmlFor="category">Categoria:</LabelDescription>
        <SelectSport
          id="category"
          name="category"
          value={categoryResponse}
          onChange={(e) => SetCategoryResponse(e.target.value)}
        >
          {categoriesApi.map((category) => (
            <option value={category.id} key={category.id}>
              {category.category}
            </option>
          ))}
        </SelectSport>

        <div>
          <FileInput
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            required
          />
          <UploadLabel htmlFor="fileInput">
            <img src="src\assets\images\UploadUser.svg" width="70px" />
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
