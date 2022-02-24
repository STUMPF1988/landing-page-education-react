import react from 'react';
import StyledMain from './styleds';
import CardText from '../cardText/CardText';
import ImgCard from '../imgCard/ImgCard';

function Main({ children }) {
  return (
    <>
      <StyledMain>
        <CardText>
          <h3>ESTUDE A TRILHA DE CONTEÚDO MAIS COMPLETA PARA SER CIENTISTA DE DADOS </h3>
          <p>
            Com quase 500h de conteúdo construído junto com grandes líderes de Data Science, você
            aprenderá desde Python, até técnicas de Machine Learning, Engenharia de Dados,
            Storytelling, Ética e Visão de Negócios.
          </p>
        </CardText>
        <ImgCard>
          <img
            src="https://jovemnerd.com.br/wp-content/uploads/2021/11/camera-como-escolher-o-seu-celular-black-friday-nerdbunker-760x570.jpg"
            alt="Cell"
          />
        </ImgCard>
      </StyledMain>
      <StyledMain>
        <ImgCard>
          <img src="https://storage.googleapis.com/tera-site/dsc/new-header-dsc.webp" alt="" />
        </ImgCard>
        <CardText>
          <h3>CONSTRUA UM PORTFÓLIO E COMPROVE SUA EXPERIÊNCIA </h3>
          <p>
            Aplique seus conhecimentos em desafios reais oferecidos por empresas parceiras e ainda
            desenvolva um projeto próprio para apresentar a grandes líderes de Data Science. Aqui é
            100% prático e mão na massa!
          </p>
        </CardText>
      </StyledMain>
      <StyledMain>
        <CardText>
          <h3>DESVENDE AS VAGAS E ENTENDA O MERCADO DE TRABALHO </h3>
          <p>
            Acelere a sua entrada no mercado e faça uma migração de carreira segura com mentorias
            exclusivas, contato direto com empresas empregadoras e suas vagas e suporte em processos
            seletivos, cases e portfólio.
          </p>
        </CardText>
        <ImgCard>
          <img
            src="https://www.remessaonline.com.br/blog/wp-content/uploads/2021/09/Cursos-de-Data-Science.jpg.webp"
            alt=""
          />
        </ImgCard>
      </StyledMain>
      <StyledMain>
        <ImgCard>
          <img
            src="https://www.remessaonline.com.br/blog/wp-content/uploads/2021/09/8-melhores-cursos-de-Data-Science-1024x628.jpg.webp"
            alt=""
          />
        </ImgCard>
        <CardText>
          <h3>CONQUISTE UMA CERTIFICAÇÃO COMPROVADA E RECONHECIDA </h3>
          <p>
            O curso foi desenvolvido e é assinado por experts do setor de grandes empresas
            referências do país! Tenha um certificado valorizado no mercado, comprovando e
            diferenciando o seu currículo em Ciência de Dados.
          </p>
        </CardText>
      </StyledMain>
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Main;
