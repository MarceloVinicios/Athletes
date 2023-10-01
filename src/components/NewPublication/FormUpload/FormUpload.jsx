import React, { useState } from 'react';
import { FormContainer,
  PreviewContainer,
  PreviewImage,
  PreviewVideo,
  FileInput,
  CustomButton,
  FileLabel
 } from './StyledFormUpload';

 import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import useFetch from '../../hooks/useFetch';
import { PostPublication } from '../../api/ApiPublication';



const FormUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { loading, error, request } = useFetch
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
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

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', File);

      async function fetchPublication() {
        try {
          const token = await getAccessTokenSilently();
          const { url, options } = PostPublication(formData, token);
          const { response, json } = await request(url, options);
          console.log("response", json);
        } catch (error) {
          console.error('Erro ao enviar arquivo:', error);
        }
      }

      fetchPublication();
    }
  }



  return (
    <FormContainer>
      <h1>Formulário</h1>
      <form>
        <div>
          <FileInput type="file" accept="image/*,video/*" id="fileInput" onChange={handleFileChange} />
          <FileLabel htmlFor="fileInput">Selecionar Arquivo</FileLabel>
        </div>
      </form>
      <PreviewContainer>
        {file && preview && (
          <>
            {file.type.includes('image') ? (
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
        <CustomButton onClick={handleUpload}>
          Enviar Arquivo
        </CustomButton>
      )}
    </FormContainer>
  );
};



export default FormUpload;
