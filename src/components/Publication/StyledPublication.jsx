import styled from "styled-components";

export const PublicationContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.445);
  display: grid;
  grid-template-areas:
    "UserInformation"
    "media"
    "interation"
    "description";
`;

export const UserInformation = styled.div`
  grid-area: UserInformation;
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  align-items: center;
  padding: 5px 10px;
`;

export const NameUser = styled.span`
  font-weight: bold; 
`;

export const ContainerInformation = styled.div `
  justify-self: end;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding-bottom: 10px;
`

export const TimePublication = styled.span`
  color: #999;
  font-size: 0.8em;
  padding-top: 12px;
`;

export const Media = styled.img`
  grid-area: media;
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 570px;
  display: block;
`;

export const IconInteration = styled.div`
  grid-area: interation;
  display: grid;
  padding: 10px 50px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Description = styled.div`
  grid-area: description;
  padding: 0 10px  10px 10px;
`;
