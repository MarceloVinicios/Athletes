import React, { useState } from "react";
import {
  FormContainer,
  PreviewContainer,
  PreviewImage,
  PreviewVideo,
  FileInput,
  CustomButton,
  FileLabel,
} from "./StyledFormUpload";
import { PostPublication } from "../../../../api/PublicationApi";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import Loading from "../../../helper/Loading";
import Successfully from "../../../helper/Successfully";

const FormUpload = () => {
  const [successfully, setSucessfully] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { loading, error, request } = useFetch();
  const { getAccessTokenSilently } = useAuth0();

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
    if (file) {
      const formData = new FormData();
      formData.append("description", "Atletas");
      formData.append("file", file);

      const token = await getAccessTokenSilently();
      const { url, options } = PostPublication(formData, token);
      const { response } = await request(url, options);
      if (response.status === 201) {
        setSucessfully(true);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (successfully) {
    return <Successfully />;
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
      {file && (
        <CustomButton onClick={handleUpload}>Enviar Arquivo</CustomButton>
      )}
    </FormContainer>
  );
};

export default FormUpload;
