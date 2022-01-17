import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Button from "../../styles/GlobalComponents/Button";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">03150676993</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:moizubit123@gmail.com">
            moizubit123@gmail.com
          </LinkItem>
          <LinkItem >
      
          </LinkItem>
   <a href="/images/AbdulMoiz_MernStack_web3.pdf" download>
   <Button
     
     >
       Hire Me
     </Button>
   </a>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Eagerly waiting to connect with you</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/MANIAHMED">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/abdul-moiz-ahmed-khan-4b26bb216/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
         
        </SocialContainer>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
