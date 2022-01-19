import React from 'react'
import {
    FooterCora,
    FooterBg,
    FooterContainer,
    FooterContent,
    FooterList,
    FooterItem,
    BtnWrap,
    BtnStore,
    FooterCr,
    FooterListCr,
    FooterItemCr,
    FooterLink,
    FooterTitle,
    TextCr,
    HightTextCr,
} from "./styles";
import AppleStore from '../../assets/apple_store_icon.svg';
import PlayStore from '../../assets/play_store_icon.svg';
import FacebookI from '../../assets/ic_facebook.svg';
import InstagramI from '../../assets/ic_instagram.svg';
import LinkedinI from '../../assets/ic_linkedin.svg';

export default function Footer(): JSX.Element {
  return (
    <FooterCora>
      <FooterBg>
        <FooterContainer>
          <FooterContent>
            <FooterTitle>Cora</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink href="/">Sobre nós</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Carreiras</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Produtos</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink href="/">Conta PJ</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Cartão</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Gestão de Cobranças</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Boletos</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Integrações</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Explore</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink href="/">Blog</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Compre dos pequenos</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Por que não cobramos tarifas?</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Suporte</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink href="/">Central de Ajuda</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="mailto:meajuda@cora.com.br">meajuda@cora.com.br</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Baixe o App</FooterTitle>
            <BtnWrap>
              <FooterLink href="">
                <BtnStore>
                  <PlayStore alt="Play Store" />
                  <span>Play Store</span>
                </BtnStore>
              </FooterLink>
              <FooterLink href="">
                <BtnStore>
                  <AppleStore alt="Apple Store" />
                  <span>App Store</span>
                </BtnStore>
              </FooterLink>
            </BtnWrap>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Transparência</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink href="/">Termos e condições</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/">Política de privacidade</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterContent>
        </FooterContainer>
      </FooterBg>
      <FooterCr>
        <FooterContainer>
          <TextCr><HightTextCr>Cora Pagamentos LTDA.</HightTextCr> 34.052.649/0001-78 - Rua Gomes de Carvalho, 1629 - 2º andar - Vila Olímpia, São Paulo, SP</TextCr>
          <FooterListCr>
            <FooterItemCr>
              <a href="/">
                <InstagramI alt="Instagram" />
              </a>
            </FooterItemCr>
            <FooterItemCr>
              <a href="/">
                <FacebookI alt="Facebook" />
              </a>
            </FooterItemCr>
            <FooterItemCr>
              <a href="/">
                <LinkedinI alt="Linkedin" />
              </a>
            </FooterItemCr>
          </FooterListCr>
        </FooterContainer>
      </FooterCr>
    </FooterCora>
  );
};
