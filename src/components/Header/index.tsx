import React from 'react'
import {
  NavMenu,
  LinkLogo,
  BtnNav,
  NavLeft,
  NavList,
  NavItem,
  NavRight,
  NavIcon,
  NavLabel,
  NavInput,
  NavLink,
} from "./styles";
import { GlobalStyle } from "../../styles/global";
import LogoCora from '../../assets/logo_cora.svg'

export default function Footer(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <NavMenu>
        <NavLeft>
          <LinkLogo href="/">
            <LogoCora />
          </LinkLogo>
          <NavInput type="checkbox" id="menu-btn" />
          <NavLabel htmlFor="menu-btn">
          </NavLabel>
          <NavIcon></NavIcon>
          <NavList>
            <NavItem>
              <NavLink href="/">Conta digital</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Cartão</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Gestão de Cobrança</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Sobre nós</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Soluções Integradas</NavLink>
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
