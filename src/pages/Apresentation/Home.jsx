import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Main,
  ContentContainer,
  ContentImg1,
  ContentListUl,
  ContentSpan,
  ContentText,
  ContentTitle1,
} from "./StyledHome";
import  Header  from "../../components/common/Header/Header";

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <React.Fragment>
      <Header />
      <Main>
        <ContentContainer>
          <div>
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
          </div>
          <ContentImg1
            src="src\assets\images\Winners-cuate 1.svg"
            alt="Seja o número 1"
          />
        </ContentContainer>

        <ContentContainer>
          <ContentImg1
            src="src\assets\images\Component 1.svg"
            alt="Jogadas Incríveis"
          ></ContentImg1>
          <div>
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
          </div>
        </ContentContainer>

        <ContentContainer>
          <div>
            <ContentTitle1>
              VENHA FAZER PARTE DO
              <ContentSpan>TIME</ContentSpan>
            </ContentTitle1>
            <ContentText>
              Junte-se à nossa comunidade{" "}
              <ContentSpan>apaixonada de atletas</ContentSpan> e descubra um
              novo mundo de aprendizado, motivação e crescimento esportivo. Este
              é o lugar onde sua jornada esportiva se torna uma experiência
              compartilhada!
            </ContentText>
            <br />
            <ContentText>
              Pronto para Começar?{" "}
              <ContentSpan>
                <a
                  onClick={() => loginWithRedirect()}
                  alt="redirecionamento para a página de cadastro"
                >
                  Registre-se
                </a>
              </ContentSpan>{" "}
              agora e seja parte da Plataforma de Rede Social para Atletas.
            </ContentText>
          </div>
          <ContentImg1
            src="src\assets\images\Soccer.svg"
            alt="Seja o número 1"
          />
        </ContentContainer>
      </Main>
    </React.Fragment>
  );
};

export default Home;
