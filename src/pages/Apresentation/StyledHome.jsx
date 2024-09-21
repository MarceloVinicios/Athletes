import styled from "styled-components";

export const Main = styled.div`
  padding-top: 90px;
  background-color: #24292f;
  color: #f7f9f8;
  min-height: 100vh;
`

export const ContentContainer = styled.article`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding: 2rem;

  @media (max-width: 1500px) {
    gap: 4rem;
  }

  @media (max-width: 1100px) {
    gap: 1.5rem;
    padding-top: 2rem;
    margin-bottom: initial;
  }
`;

export const ContentTitle1 = styled.h1`
  color: #f7f9f8;
  font-weight: bold;
  font-size: 2.8rem;
  text-align: center;
  padding: 0 0 2rem;

  @media (max-width: 1500px) {
    font-size: 2.4rem;
    padding: 0 0 1rem;
  }

  @media (max-width: 800px) {
    font-size: 2rem;
  }

  @media (max-width: 650px) {
    font-size: 1.6rem;
    padding: 0 0 0.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.2rem;
    padding: 0 0 0rem;
  }

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const ContentSpan = styled.span`
  color: #ebc556;
`;

export const ContentImg1 = styled.img`
  max-width: 36%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContentText = styled.p`
  padding-bottom: 0.5rem;
  color: #f7f9f8;
  font-size: 1rem;
  text-align: center;
  width: 45rem;
  margin: 0 auto;

  @media (max-width: 1500px) {
    font-size: 1rem;
    padding: 1rem 0;
    width: 38rem;
  }

  @media (max-width: 1300px) {
    font-size: 0.9rem;
    padding: 1rem 0;
  }

  @media (max-width: 800px) {
    width: 30rem;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
  }

  @media (max-width: 550px) {
    width: 20rem;
  }

  @media (max-width: 350px) {
    width: 15rem;
  }
`;

export const ContentListUl = styled.ul`
  list-style: none;
`;
