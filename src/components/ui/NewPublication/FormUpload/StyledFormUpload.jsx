import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  position: relative;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const FormHeader = styled.h1`
  width: 100%;
  text-align: center;
`;


export const FormContent = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const FileContainer = styled.div`
  flex: 1;
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
  flex: 1;
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

export const SelectSport = styled.select`
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;
export const LabelDescription = styled.label`
  font-weight: bold;
  display: block;
`;
export const DescriptionArea = styled.textarea`
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
`;
