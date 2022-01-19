import React from 'react'
import {
  NavMenu,
  BtnNav,
  NavLeft,
  NavList,
  NavItem,
  NavRight,
  NavIcon,
  NavLabel,
  NavInput,
} from "./styles";
import { GlobalStyle } from "../../styles/global";
import LogoCora from '../../assets/logo_cora.svg'

export default function Footer(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <NavMenu>
        <NavLeft>
          <LogoCora />
          <NavInput type="checkbox" id="menu-btn" />
          <NavLabel htmlFor="menu-btn">
          </NavLabel>
          <NavIcon></NavIcon>
          <NavList>
            <NavItem>
              <a href="/">Conta digital</a>
            </NavItem>
            <NavItem>
              <a href="/">Cartão</a>
            </NavItem>
            <NavItem>
              <a href="/">Gestão de Cobrança</a>
            </NavItem>
            <NavItem>
              <a href="/">Sobre nós</a>
            </NavItem>
            <NavItem>
              <a href="/">Soluções Integradas</a>
            </NavItem>
          </NavList>
        </NavLeft>
        <NavRight>
          <a href="/">Login</a>
          <BtnNav type="button">Quero Ser Cora</BtnNav>
        </NavRight>
      </NavMenu>
    </>
  );
};
