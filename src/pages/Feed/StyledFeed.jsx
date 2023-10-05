import styled from "styled-components";

export const ContainerPublication = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    align-items: end;
    margin-right: 500px;
  }

  @media (max-width: 1100px) {
    margin-right: 100px;
  }

  @media (max-width: 1000px) {
    margin-right: 70px;
  }

  @media (max-width: 960px) {
    margin-right: 40px;
  }

  @media (max-width: 900px) {
    margin-right: initial;
    align-items: center;
  }
`;

export const NoContent = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  top: 40%;
`
