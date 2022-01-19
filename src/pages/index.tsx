import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalStyle } from "../styles/global";
import {
  Main,
  BtnPrimary,
  Container,
  FifthSection,
  FifthText,
  FifthImg,
  FirstImg,
  FirstLeft,
  FirstTitle,
  FirstRight,
  FirstSection,
  FourthImg,
  FourthSection,
  FourthText,
  Title,
  Text,
  InternalLink,
  SecondLeft,
  SecondSection,
  SecondImg,
  ThirdSection,
  ThirdText,
  WrapBtn,
  SecondText
} from '../styles/Home/styles'

function Home(): JSX.Element {
  return (
    <>
    <GlobalStyle />
    <Head>
      <title>Teste Cora</title>
    </Head>
    <Header />
    <Main>
      <FirstSection>
        <Container>
          <FirstLeft>
            <FirstTitle>Lorem ipsum dolor sit adipiscing elit.</FirstTitle>
            <WrapBtn>
              <BtnPrimary>Quero Ser Cora</BtnPrimary>
            </WrapBtn>
          </FirstLeft>
          <FirstRight>
            <FirstImg src="/img_first_section.png" alt="Imagem Ilustrativa Cora" />
          </FirstRight>
        </Container>
      </FirstSection>
      <SecondSection>
        <Container>
          <SecondLeft>
            <SecondText>Aenean pretium varius posuere. Aenean porttitor elementum tristique. Etiam eget metus lobortis.</SecondText>
            <InternalLink href="/">Interdum et malesuada fames ac ante ipsum primis in faucibus.</InternalLink>
          </SecondLeft>
          <SecondImg src="/shape_one.png" alt="Imagem ilustrativa" />
        </Container>
      </SecondSection>
      <ThirdSection>
        <Container>
          <ThirdText>
            <h1>Sed eu leo non eros max?</h1>
            <h2>Quis rutrum sapien</h2>
          </ThirdText>
        </Container>
      </ThirdSection>
      <FourthSection>
        <Container>
          <FourthText>
            <Title>Vivamus at vestibulum tellus. Phasellus sit amet.</Title>
            <Text>Aenean pretium varius posuere. Aenean porttitor elementum tristique. Etiam eget metus lobortis, ultricies nisl vitae, tempus felis. Proin lacinia justo non elit semper consequat.</Text>
          </FourthText>
          <FourthImg src="/img_fourth.jpg" alt="Imagem ilustrativa" />
        </Container>
      </FourthSection>
      <FifthSection>
        <Container>
          <FifthImg src="/img_fifth.jpg" alt="Imagem ilustrativa" />
          <FifthText>
            <Title>Ut vel laoreet magna, tempor finibus augue.</Title>
            <Text>Aenean pretium varius posuere. Aenean porttitor elementum tristique. Etiam eget metus lobortis, ultricies nisl vitae, tempus felis. Proin lacinia justo non elit semper consequat.</Text>
          </FifthText>
        </Container>
      </FifthSection>
    </Main>
    <Footer />
    </>
  )
}

export default Home;
