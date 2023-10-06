import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
background-color: #EFBB23;
border: none;
border-radius: 5px;
color: #fff;
cursor: pointer;
font-size: 16px;
padding: 10px 20px;
margin: 20px;
display: inline-block;
`;

export const CustomButton = styled.button`
  background-color: #EFBB23;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 10px;
`;

export const PreviewContainer = styled.div`
  margin-bottom: 20px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  object-fit: contain;
`;

export const PreviewVideo = styled.video`
  width: 100%;
  min-height: 100px;
  max-height: 300px;
  object-fit: contain;
`;

