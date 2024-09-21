import React, { useContext, useEffect, useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormContent,
  PreviewContainer,
  PreviewImage,
  PreviewVideo,
  FileContainer,
  FileInput,
  CustomButton,
  FileLabel,
  SelectSport,
  DescriptionContainer,
  LabelDescription,
  DescriptionArea,
} from "./StyledFormUpload";
import { PostPublication } from "../../../../api/PublicationApi";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import {LoadingContainer} from "../../../helper/LoadingContainer";
import Successfully from "../../../helper/Successfully";
import { GetAllCategory } from "../../../../api/CategoryApi";
import { PublicationContext } from "../../../../Context/PublicationContext";

const FormUpload = () => {
  const [successfully, setSuccessfully] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState(null);
  const [categoryResponse, setCategoryResponse] = useState(1);
  const [categoriesApi, setCategoriesApi] = useState([]);
  const { loading, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const {reloadPublications} = useContext(PublicationContext)

  const handleFileChange = ({ target }) => {
    const selectedFile = target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

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

  const handleUpload = async () => {
    if (file && description && categoryResponse) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", description);
      formData.append("category", Number(categoryResponse));

      const token = await getAccessTokenSilently();
      const { url, options } = PostPublication(formData, token);
      const { response } = await request(url, options);
      if (response.status === 201) {
        setSuccessfully(true);
        reloadPublications();
      }
    }
  };

  if (loading) {
    return (
      <FormContainer>
        <LoadingContainer />
      </FormContainer>
    );
  }

  if (successfully) {
    return (
      <FormContainer>
        <Successfully />
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormHeader>Formulário</FormHeader>
      <FormContent>
        <FileContainer>
          <form>
            <div>
              <FileInput
                type="file"
                accept="image/*,video/*"
                id="fileInput"
                onChange={handleFileChange}
              />
              <FileLabel htmlFor="fileInput">Selecionar Arquivo</FileLabel>
            </div>
          </form>
          <PreviewContainer>
            {file && preview && (
              <>
                {file.type.includes("image") ? (
                  <PreviewImage src={preview} alt="Preview" />
                ) : (
                  <PreviewVideo controls>
                    <source src={preview} type={file.type} />
                  </PreviewVideo>
                )}
              </>
            )}
          </PreviewContainer>
        </FileContainer>
        <DescriptionContainer>
          <LabelDescription htmlFor="category">Categoria:</LabelDescription>
          <SelectSport
            id="category"
            name="category"
            value={categoryResponse}
            onChange={(e) => setCategoryResponse(e.target.value)}
          >
            {categoriesApi.map((category) => (
              <option value={category.id} key={category.id}>
                {category.category}
              </option>
            ))}
          </SelectSport>
          <LabelDescription htmlFor="description">Descrição:</LabelDescription>
          <DescriptionArea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            cols="50"
          ></DescriptionArea>
          {file && !loading &&(
            <CustomButton onClick={handleUpload}>Enviar Arquivo</CustomButton>
          )}
        </DescriptionContainer>
      </FormContent>
    </FormContainer>
  );
};

export default FormUpload;
