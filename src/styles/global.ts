import { createGlobalStyle } from "styled-components"
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${theme.colors.black};
    font-family: Nunito;
    font-weight: 400;
  }

  li {
    list-style: none;
  }

  p {
    font-family: Nunito;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;

    @media (min-width: 768px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  h1, h2, h3, h4 {
    margin: 0px;
  }

  h1 {
    font-family: Nunito;
    font-size: 48px;
    font-weight: 400;
    line-height: 60px;

    @media (min-width: 768px) {
      font-size: 72px;
      line-height: 80px;
    }
  }

  h2 {
    font-family: Nunito;
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 56px;
    }
  }

  h3 {
    font-family: Nunito;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 48px;
    }
  }

  h4 {
    font-family: Nunito;
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }

  button {
    transition: all 0.3s ease-in-out 0s;
    text-align: center;
    box-shadow: none;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
  }
`;

export default GlobalStyle
