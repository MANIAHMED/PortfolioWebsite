import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaReact,FaNodeJs,FaBitcoin } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='technology'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      With an experience of 2+ years in the field of web development,I have worked successfully with startups and local clients, I'm a full-stack developer who's worked on majorly every Javascript technology, tool, framework, and library in existence. Whatever your project entails, I've done it before.


    </SectionText>
    <List>
      <ListItem>
        <FaReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience<br/>
            React.js, Gatsby.js Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNodeJs size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience<br/>
            Node.js, Express.js, HeadlessCMs, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaBitcoin size="3rem" />
        <ListContainer>
          <ListTitle>BlockChain and Web3</ListTitle>
          <ListParagraph>
            Experience<br/>
            Solifity, Web3, Metamask, NFT's, Hardhat
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
