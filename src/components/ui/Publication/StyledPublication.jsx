import styled from "styled-components";

export const PublicationContainer = styled.div`
  max-width: 600px;
  min-width: 600px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.445);
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    max-width: 500px;
  }

  @media (max-width: 650px) {
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: 440px) {
    max-width: 300px;
    min-width: 300px;
  }

  @media (max-width: 310px) {
    max-width: 270px;
    min-width: 270px;
  }
`;

export const UserInformation = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  align-items: center;
  padding: 5px 10px;

  @media (max-width: 600px) {
    padding: 5px 5px;
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: 440px) {
    max-width: 300px;
    min-width: 300px;
  }

  @media (max-width: 310px) {
    max-width: 270px;
    min-width: 270px;
  }
`;

export const NameUser = styled.span`
  font-weight: bold;
  color: #000000;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ContainerInformation = styled.div `
  justify-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`

export const TimePublication = styled.span`
  color: #4d4848;
  font-size: 0.8em;
  padding-top: 12px;
  padding-right: 20px;
`;

export const ContainerButton = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`

export const Media = styled.img`
  width: 100%;
  min-height: 100px;
  max-height: 560px;
  object-fit: contain;
  display: block;

  @media (max-width: 600px) {
    max-height: 470px;
    object-fit: contain;
  }
`;

export const IconInteration = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px 20px;
  gap: 40px;

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    padding: 10px 10px;
    gap: 10px;
  }

  @media (max-width: 310px) {
    gap: 2px;
    padding: 10px 0px;
  }
`;

export const Description = styled.div`
  color: #000000;
  padding: 0 20px 10px;
`;

export const ButtonShow = styled.button`
  color: blue;
  margin-left: 5px;
`
