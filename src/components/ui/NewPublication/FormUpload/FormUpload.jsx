import React, { useContext, useState } from "react";
import {
  FormContainer,
  PreviewContainer,
  PreviewImage,
  PreviewVideo,
  FileInput,
  CustomButton,
  FileLabel,
  DescriptionContainer,
  LabelDescription,
  DescriptionArea,
} from "./StyledFormUpload";
import { PostPublication } from "../../../../api/PublicationApi";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import Loading from "../../../helper/Loading";
import Successfully from "../../../helper/Successfully";
import FeedContext  from "../../../../pages/Feed/FeedContext"

const FormUpload = () => {
  const [successfully, setSucessfully] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('')
  const [preview, setPreview] = useState(null);
  const { loading, error, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();
  const dataFeedContext = useContext(FeedContext)

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

  const handleUpload = async () => {
    if (file && description) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", description);

      const token = await getAccessTokenSilently();
      const { url, options } = PostPublication(formData, token);
      const { response } = await request(url, options);
      if (response.status === 201) {
        setSucessfully(true);
        dataFeedContext.reloadPublications();
      }
    }
  };

  if (loading) {
    return (
      <FormContainer>
        <Loading />;
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
      <h1>Formulário</h1>
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
      <DescriptionContainer>
        <LabelDescription htmlFor="description">descrição:</LabelDescription>
        <DescriptionArea
        id='description'
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        cols="50"></DescriptionArea>
      </DescriptionContainer>
      {file && (
        <CustomButton onClick={handleUpload}>Enviar Arquivo</CustomButton>
      )}
    </FormContainer>
  );
};

export default FormUpload;
