import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 130px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  @media (max-width: 1400px) {
    gap: 40px;
  }

  @media (max-width: 1300px) {
    gap: 0px;
  }
`;

export const Image = styled.img`
  display: block;
  @media (max-width: 1250px) {
    width: 500px;
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const Form = styled.form`
  background-color: #33434be8;
  padding: 40px 70px;
  display: inline-block;
  box-shadow: 4px 4px 7px #000000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    padding: 40px 35px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.4rem;
`;

export const Label = styled.label`
  display: block;
  padding-top: 15px;
  font-weight: 600;
`;

export const Input = styled.input`
  background-color: #263238;
  color: #ffffff;
  width: 500px;
  padding: 10px;
  display: block;
  border: 2px solid #ebc556;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Checkbox = styled.input`
  background-color: #263238;
  color: #ffffff;
  border: 2px solid #ebc556;
  border-radius: 10px;
  margin-right: 10px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const UploadLabel = styled.label`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #FFCC00;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-end;
`;