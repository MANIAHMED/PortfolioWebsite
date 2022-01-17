import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaMediumM } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          <FaMediumM size={"3rem"} /> <Span>Porfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technology">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https:github.com" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/abdul-moiz-ahmed-khan-4b26bb216/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/MANIAHMED" target="_blank">
    <a href="https://www.facebook.com/abdul.moiz.11111111">
    <img
          src="/images/moiz.jpg"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        ></img>
    </a>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
