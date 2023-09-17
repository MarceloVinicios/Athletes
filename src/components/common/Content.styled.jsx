import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.section`
  padding: 2rem;
  background-color: #24292F;
  color: #F7F9F8;
  display: flex;
  flex-direction: column;

`

const ContentImg1 = styled.img`
  width: 25rem;
  margin-top: 75px;
  margin-left: 450px;

`

const ContentTitle1 = styled.h1`
  color: #F7F9F8;
  font-weight: bold;
  font-size: 30px;
  white-space: nowrap;
`
const ContentSpan = styled.span`
  color: #ebc556;
`

const ContentText = styled.p`
  color: #F7F9F8;
  font-size: 12px;
  margin-top: -150px;

`
const SideBySideContainer = styled.div`
  display: flex;
  align-items: center;
`

const SideBySideContainer2 = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const ContentImage2 = styled.img`
  width: 18rem;
  margin-top: 100px;

`

const ContentTitle2 = styled.h1`
  color: #F7F9F8;
  font-weight: bold;
  font-size: 26px;
  margin-left: 200px;
  margin-top: 80px;
  white-space: nowrap;
`

const ContentListUl = styled.ul`
  flex-direction: column;
  list-style: none;
  margin-top: 120px;
  max-width: 50px;
  margin-left: -250px;
`
const ContentText2 = styled.p`
  color: #F7F9F8;
  font-size: 12px;
  white-space: nowrap;
  margin-top: 10px;
`

const Content = () => {
  return (
     <div>
      <ContentContainer>
        <SideBySideContainer>
          <ContentTitle1>
            DESCUBRA A PLATAFORMA DE
            <ContentSpan><br/> REDE SOCIAL PARA ATLETAS!</ContentSpan>
          </ContentTitle1>
          <ContentImg1 src='src\assets\images\Winners-cuate 1.svg'></ContentImg1>
        </SideBySideContainer>
        <ContentText><p>Bem-vindo à nossa inovadora Plataforma de <ContentSpan>Rede Social para Atletas </ContentSpan>
        um espaço virtual <br/> feito sob medida para unir a comunidade esportiva de todo o mundo.
        Explore um ambiente <br/> envolvente onde atletas de <ContentSpan>todas as modalidades </ContentSpan> podem se conectar,
        compartilhar suas <br/> conquistas,
        <ContentSpan>aprimorar suas habilidades </ContentSpan>e aprender com os melhores.</p></ContentText>
      </ContentContainer>
      <ContentContainer>
        <SideBySideContainer2>
          <div> <SideBySideContainer2>
        <ContentImage2 src='src\assets\images\Component 1.svg'></ContentImage2>
        <ContentTitle2>
          <ContentSpan>O QUE OFERECEMOS</ContentSpan>
        </ContentTitle2></SideBySideContainer2>
        </div>

        <ContentListUl>

          <li><ContentText2><ContentSpan>Compartilhe sua Jornada: </ContentSpan>
                Compartilhe seus treinos,
                jogadas e rotinas de treinamento com uma comunidade de entusiastas esportivos apaixonados.</ContentText2>
            </li>
            <li><ContentText2><ContentSpan>Aprendizado e Desenvolvimento: </ContentSpan>
            Acesse recursos educativos, tutoriais em vídeo para melhorar suas habilidades e técnicas esportivas.
</ContentText2></li>
                <li><ContentText2><ContentSpan>Análise de Vídeo Técnico: </ContentSpan>
                Receba feedback detalhado sobre suas jogadas por meio de análises colaborativas de vídeos esportivos.</ContentText2>
            </li>
            <li><ContentText2><ContentSpan>Conexões Significativas: </ContentSpan>
                Conecte-se com outros atletas, treinadores e especialistas em sua área para trocar experiências e conhecimentos.</ContentText2>
            </li>
            <li><ContentText2><ContentSpan>Motivação Constante: </ContentSpan>
            Siga atletas inspiradores, compartilhe suas conquistas e motive-se com o progresso dos outros.</ContentText2>
            </li>
          </ContentListUl>

          </SideBySideContainer2>

      </ContentContainer>
    </div>
  );
};


export default Content;
