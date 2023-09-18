import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Main = styled.main`
  background-color: #24292f;
  color: #f7f9f8;
  padding-bottom: 2rem;
  padding-top: 5rem;
`;

const ContentContainer = styled.article`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30rem;
  padding-top: 3.4rem;
  padding: 0 2rem;

  @media (max-width: 2300px) {
    gap: 20rem;
  }

  @media (max-width: 1900px) {
    gap: 10rem;
  }

  @media (max-width: 1500px) {
    gap: 4rem;
  }

  @media (max-width: 1100px) {
    gap: 1.5rem;
    padding-top: 2rem;
  }
`;

const SideBySideContainer = styled.div``;

const ContentTitle1 = styled.h1`
  color: #f7f9f8;
  font-weight: bold;
  font-size: 2.8rem;
  white-space: nowrap;
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

const ContentSpan = styled.span`
  color: #ebc556;
`;

const ContentImg1 = styled.img`
  max-width: 36%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ContentText = styled.p`
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

const ContentListUl = styled.ul`
  list-style: none;
`;

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Main>
      <ContentContainer>
        <SideBySideContainer>
          <ContentTitle1>
            DESCUBRA A PLATAFORMA DE
            <br />
            <ContentSpan>REDE SOCIAL PARA ATLETAS!</ContentSpan>
          </ContentTitle1>
          <ContentText>
            Bem-vindo à nossa inovadora Plataforma de
            <ContentSpan> Rede Social para Atletas </ContentSpan>
            um espaço virtual feito sobre medida para unir a comunidade
            esportiva de todo o mundo. Explore um ambiente envolvente onde
            atletas de <ContentSpan> todas as modalidades </ContentSpan>
            podem se conectar, compartilhar suas conquistas,
            <ContentSpan> aprimorar suas habilidades </ContentSpan>e aprender
            com os melhores.
          </ContentText>
        </SideBySideContainer>
        <ContentImg1
          src="src\assets\images\Winners-cuate 1.svg"
          alt="Seja o número 1"
        />
      </ContentContainer>

      <ContentContainer>
        <ContentImg1 src="src\assets\images\Component 1.svg"></ContentImg1>
        <SideBySideContainer>
          <ContentTitle1>
            <ContentSpan>O QUE OFERECEMOS</ContentSpan>
          </ContentTitle1>
          <ContentListUl>
            <li>
              <ContentText>
                <ContentSpan>Compartilhe sua Jornada: </ContentSpan>
                Compartilhe seus treinos, jogadas e rotinas de treinamento com
                uma comunidade de entusiastas esportivos apaixonados.
              </ContentText>
            </li>
            <li>
              <ContentText>
                <ContentSpan>Aprendizado e Desenvolvimento: </ContentSpan>
                Acesse recursos educativos, tutoriais em vídeo para melhorar
                suas habilidades e técnicas esportivas.
              </ContentText>
            </li>
            <li>
              <ContentText>
                <ContentSpan>Análise de Vídeo Técnico: </ContentSpan>
                Receba feedback detalhado sobre suas jogadas por meio de
                análises colaborativas de vídeos esportivos.
              </ContentText>
            </li>
            <li>
              <ContentText>
                <ContentSpan>Conexões Significativas: </ContentSpan>
                Conecte-se com outros atletas, treinadores e especialistas em
                sua área para trocar experiências e conhecimentos.
              </ContentText>
            </li>
            <li>
              <ContentText>
                <ContentSpan>Motivação Constante: </ContentSpan>
                Siga atletas inspiradores, compartilhe suas conquistas e
                motive-se com o progresso dos outros.
              </ContentText>
            </li>
          </ContentListUl>
        </SideBySideContainer>
      </ContentContainer>

      <ContentContainer>
        <SideBySideContainer>
          <ContentTitle1>
            VENHA FAZER PARTE DO
            <ContentSpan>TIME</ContentSpan>
          </ContentTitle1>
          <ContentText>
            Junte-se à nossa comunidade <ContentSpan>apaixonada de atletas</ContentSpan> e descubra um novo
            mundo de aprendizado, motivação e crescimento esportivo. Este é o
            lugar onde sua jornada esportiva se torna uma experiência
            compartilhada!
          </ContentText>
          <br />
          <ContentText>
            Pronto para Começar? <ContentSpan><a onClick={() => loginWithRedirect()} alt="redirecionamento para a página de cadastro">Registre-se</a></ContentSpan> agora e seja parte
            da Plataforma de Rede Social para Atletas.
          </ContentText>
        </SideBySideContainer>
        <ContentImg1
          src="src\assets\images\Soccer.svg"
          alt="Seja o número 1"
        />
      </ContentContainer>
    </Main>
  );
};

export default Home;
