import styled from "styled-components";
import theme from '../../styles/theme';

export const FooterCora = styled.footer`
  background-color: ${theme.colors.white};
`

export const FooterBg = styled.section`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 50px 0px;

  @media (min-width: 1200px) {
    padding-top: 120px;
    padding-bottom: 128px;
  }
`

export const FooterContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;

  @media (min-width: 768px) {
    max-width: 1920px;
    gap: 24px;
    grid-template-columns: repeat(12, 1fr);
    padding: 0px 64px;
    display: grid;
  }
`

export const FooterContent = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0px;
  }

  &:nth-child(1) {
    grid-column: 2 / 4;
  }

  &:nth-child(2) {
    grid-column: 6 / 11;

    @media (min-width: 1200px) {
      grid-column: 4 / 6;
    }
  }

  &:nth-child(3) {
    grid-column: 2 / 6;

    @media (min-width: 1200px) {
      grid-column: 6 / 9;
    }
  }

  &:nth-child(4) {
    grid-column: 6 / 11;

    @media (min-width: 1200px) {
      grid-column: 9 / 11;
    }
  }

  &:nth-child(5) {
    grid-column: 2 / 6;
  }

  &:nth-child(6) {
    grid-column: 6 / 9;
  }
`

export const FooterLink = styled.a`
  padding-bottom: 2px;

  &:hover {
    border-bottom: 1px solid ${theme.colors.lightgray};
  }
`

export const FooterList = styled.ul`
  padding: 0px;
  margin: 0px;
`

export const FooterItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${theme.colors.lightgray};
`

export const FooterTitle = styled.h4`
  font-weight: 800;
  margin-bottom: 16px;
`

export const BtnWrap = styled.div`
  display: block;

  @media (min-width: 1200px) {
    display: flex;
  }

  a:hover {
    border: 0px;
  }
`

export const BtnStore = styled.button`
  border-radius: 8px;
  border: 1px solid ${theme.colors.lightgray};
  background-color: transparent;
  padding: 10px 29px 9px;
  font-size: 14px;
  color: ${theme.colors.lightgray};
  display: flex;
  align-items: center;
  margin: 0px auto 20px;

  @media (min-width: 768px) {
    margin: 0px 0px 20px;
  }

  @media (min-width: 1200px) {
    &:first-of-type {
      margin-right: 28px;
    }
  }

  span {
    margin-left: 8px;
  }
`

export const FooterCr = styled.section`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  & > div {
    height: 64px;
    align-items: center;
  }

  p {
    margin: 20px 0px;
    font-size: 14px;
    line-height: 22px;

    @media (min-width: 768px) {
      grid-column: 2 / 10;
      margin: 0px;
    }
  }

  span {
    color: ${theme.colors.lightprimary};
    font-weight: 800;
  }
`

export const FooterListCr = styled.ul`
  grid-column: 10 / 13;
  display: flex;
  align-items: center;
`

export const FooterItemCr = styled.li`
  margin: 10px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }

  @media (min-width: 1200px) {
    margin-left: 40px;
  }
`
