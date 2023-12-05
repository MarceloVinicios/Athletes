import styled from "styled-components";

export const SubTitleConnections = styled.h2`
  margin-left: 37px;
  font-size: 1.4rem;
`;

export const RequestConnection = styled.div`
  position: absolute;
  right: 50px;
  display: flex;
  align-items: end;
  gap: 4px;
  cursor: pointer;
`;

export const NoConnection = styled.span`
  font-size: 1.2rem;
  text-align: center;
`;

export const ImageNotifications = styled.img`
  width: 40px;
`;

export const NumberRequest = styled.span`
  font-size: 1.2rem;
  color: #ebc556;
`;

export const ContainerForIfConect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 10px;
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 40px 40px;
  gap: 15px;

  @media (max-width: 500px) {
    margin: 50px 10px 40px;
  }
`;
export const ContainerItemUser = styled.li`
  list-style-type: none;
  width: 450px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-content: space-between;
  border: 3px solid #263238;
  box-shadow: 4px 2px 10px #263238;
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const ContainerDataUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ContainerOfInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

export const ContainerOptionConnection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonConnection = styled.button`
  border-radius: 9px;
  border: 2px solid #ffff;
  padding: 10px 20px;
  color: #ebc556;

  @media (max-width: 650px) {
    padding: 5px;
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;

export const ContainerButtonConnection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ButtonAccept = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: green;
  border-radius: 9px;
  font-weight: 600;

  @media (max-width: 650px) {
    padding: 5px;
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;

export const ButtonRefuse = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: red;
  border-radius: 9px;
  font-weight: 600;

  @media (max-width: 650px) {
    padding: 5px;
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;
