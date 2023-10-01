import React from 'react'
import styled from "styled-components";
import Loading from '../components/helper/Loading';

const Main = styled.main`
  background-color: #24292f;
  color: #f7f9f8;
  padding-bottom: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  text-align: center;
  padding: 0 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  padding-top: 1rem;

  @media (max-width: 400px) {
    font-size: 1.7rem;
  }
`

const Paragraph = styled.p`
  padding: 0.3rem;
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`

const ButtonFeed = styled.a`
  padding: 10px 20px;
  color: #EBC556;
  border: 2px solid #EBC556;
  border-radius: 100px;
  font-size: 1.5rem;
  &:hover {
    transition: 0.3s;
    color: #ebc656a9;
    background-color: #24292f92;
    border: 2px solid #ebc656bc;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`

const NotFound = () => {
  return (
    <Main>
    <Container>
      <img src="src/assets/images/NotFound.svg" alt="Error 404" width={"300px"} />
      <div>
        <Title>
          Ocorreu um problema
        </Title>
        <Paragraph>Página não encontrada</Paragraph>
      </div>
      <ButtonFeed href="/feed">
        Acesse seu feed
      </ButtonFeed>
    </Container>
  </Main>
  )
}

export default NotFound
