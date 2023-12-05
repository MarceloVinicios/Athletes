import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  max-width: 1380px;
  padding: 40px 20px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerCategory = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: end;

  @media (max-width: 400px) {
    width: 300px;
    height: 320px;
  }

  @media (max-width: 350px) {
    width: 200px;
    height: 280px;
  }
`;

export const Category = styled.span`
  font-size: 50px;
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 350px) {
    font-size: 30px;
  }
`;
