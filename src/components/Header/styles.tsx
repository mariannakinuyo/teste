import styled from "styled-components";
import theme from '../../styles/theme';

export const NavMenu = styled.header`
  margin: auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  grid-template-columns: 100%;
  background-color: ${theme.colors.white};
  position: fixed;
  border-bottom: 2px solid ${theme.colors.whitegray};
  width: 100%;

  @media (min-width: 1200px) {
    height: 88px;
    max-width: 1920px;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    padding: 0px 64px;
  }

  a:hover {
    color: ${theme.colors.lightprimary};
  }
`

export const LinkLogo = styled.a`
  margin: 0px;
  line-height: 9px;
`

export const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 1200px) {
    justify-content: unset;
    width: auto;
  }
`

export const NavLink = styled.a`
  margin: auto;
`

export const NavList = styled.ul`
  align-items: center;
  padding: 0px;
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
  overflow: hidden;
  position: absolute;
  top: 70px;
  right: 0px;
  width: 100%;
  background-color: ${theme.colors.white};

  @media (min-width: 1200px) {
    position: inherit;
    display: flex;
    margin-left: 62px;
    width: auto;
    clear: none;
    float: right;
    max-height: none;
  }
`

export const NavInput = styled.input`
  display: none;

  &:checked ~ ul {
    max-height: 240px;
    border-bottom: 2px solid #F0F4F8;
  }

  &:checked ~ span {
    background: transparent;
  }

  &:checked ~ span:before {
    transform: rotate(-45deg);
    top: -2px;
  }

  &:checked ~ span:after {
    transform: rotate(45deg);
    top: -3px;
  }
`

export const NavLabel = styled.label`
  cursor: pointer;
  padding: 35px 26px;
  position: absolute;
  right: 0px;
  user-select: none;

  @media (min-width: 1200px) {
    display: none;
  }
`

export const NavIcon = styled.span`
  background: ${theme.colors.primary};
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;

  @media (min-width: 1200px) {
    display: none;
  }

  &::before, &::after {
    background: ${theme.colors.primary};;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  &::before {
    top: 5px;
  }

  &::after {
    top: -5px;
  }
`

export const NavItem = styled.li`
  padding: 10px 15px;
  text-align: right;

  &:last-of-type {
    padding-bottom: 60px;
  }

  @media (min-width: 1200px) {
    text-align: left;
    margin-right: 32px;
    padding: 0px;

    &:last-of-type {
      padding-bottom: 0px;
    }
  }
`

export const NavRight = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 1200px) {
    display: flex;
  }
`

export const BtnNav = styled.button`
  background-color: ${theme.colors.lightprimary};
  color: ${theme.colors.white};
  border-radius: 60px;
  font-family: Nunito;
  font-weight: 800;
  margin-left: 15px;
  padding: 12px 20px;
  font-size: 14px;

  @media (min-width: 1200px) {
    margin-left: 40px;
    padding: 12px 32px;
    font-size: 16px;
  }

  &:hover {
    background-color: ${theme.colors.primary};
  }
`
