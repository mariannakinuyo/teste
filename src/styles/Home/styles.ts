import styled from 'styled-components'
import theme from '../theme'

export const Main = styled.main`
  padding-top: 70px;

  @media (min-width: 1200px) {
    padding-top: 88px;
  }
`

export const Container = styled.div`
  margin: auto;
  display: grid;
  width: 100%;
  padding: 0px 15px;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    max-width: 1920px;
    padding: 0px 64px;
    gap: 24px;
  }
`

export const FirstSection = styled.section`
  background: ${theme.colors.background};
  display: flex;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
export const FirstLeft = styled.div`
  grid-column: 1 / -1;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    grid-column: 1 / 6;
  }

  @media (min-width: 1200px) {
    grid-column: 2 / 6;
  }
`

export const FirstTitle = styled.h1`
  margin-top: 40px;
  margin-bottom: 49px;

  @media (min-width: 768px) {
    margin-top: 109px;
  }
`

export const FirstRight = styled.div`
  grid-column: 1 / -1;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-column: 7 / 13;
    margin-top: 0px;
  }
`

export const FirstImg = styled.img`
  width: 100%;
`

export const WrapBtn = styled.div`
  margin-top: 49px;
`

export const BtnPrimary = styled.button`
  color: ${theme.colors.white};
  border-radius: 60px;
  background-color: ${theme.colors.primary};
  padding: 16px 32px;
  font-family: Nunito;
  font-size: 22px;
  font-weight: 800;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    background-color: ${theme.colors.lightprimary};
  }
`
export const SecondSection = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-top: 200px;
    margin-bottom: 129px;
  }
`

export const SecondText = styled.h3`
  margin-bottom: 26px;

  @media (min-width: 768px) {
    margin-bottom: 47px;
  }
`

export const SecondImg = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    grid-column: 10 / 12;
    margin: auto;
  }
`

export const SecondLeft = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 768px) {
    grid-column: 1 / 8;
  }

  @media (min-width: 1200px) {
    grid-column: 2 / 8;
  }
`

export const InternalLink = styled.a`
  font-size: 22px;
  font-weight: 800;
  color: ${theme.colors.lightprimary};

  &:hover {
    text-decoration: underline;
  }
`

export const ThirdSection = styled.section`
  background-image: url(/img_big.jpg);
  background-position-x: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 658px;

  @media (min-width: 768px) {
    background-position: center;
  }

  @media (min-width: 1920px) {
    background-image: url(/img_big_cover.jpg);
  }
`

export const ThirdText = styled.div`
  grid-column: 1 / -1;
  display: grid;
  margin-top: 329px;
  color: ${theme.colors.white};

  @media (min-width: 768px) {
    grid-column: 1 / 10;
  }

  @media (min-width: 1200px) {
    grid-column: 2 / 10;
  }
`

export const ThirdTitle = styled.h2`
  font-family: Nunito;
  font-size: 48px;
  font-weight: 400;
  line-height: 60px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 80px;
  }
`

export const ThirdSub = styled.h3`
  font-family: Nunito;
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 56px;
  }
`

export const FourthSection = styled.section`
  margin-top: 70px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-top: 168px;
    margin-bottom: 224px;
  }
`

export const FourthText = styled.div`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-column: 1 / 7;
  }

  @media (min-width: 1200px) {
    grid-column: 2 / 7;
    margin: auto;
  }
`

export const Title = styled.h2`
  margin-bottom: 24px;
`

export const Text = styled.p`
  color: ${theme.colors.gray};
`

export const FourthImg = styled.img`
  grid-column: 1 / -1;
  display: grid;
  max-width: 100%;

  @media (min-width: 768px) {
    grid-column: 8 / 13;
  }
`

export const FifthSection = styled.section`
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-bottom: 168px;
  }
`

export const FifthImg = styled.img`
  grid-column: 1 / -1;
  grid-row: 2;
  display: grid;
  max-width: 100%;

  @media (min-width: 768px) {
    grid-column: 1 / 6;
    grid-row: 1;
  }
`

export const FifthText = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  margin: auto;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-column: 7 / 13;
    grid-row: 1;
    margin: auto;
  }

  @media (min-width: 1200px) {
    grid-column: 7 / 12;
  }
`
