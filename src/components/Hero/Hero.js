import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nppadding>
    <LeftSection>
      <SectionTitle main center>
        Abdul Moiz Ahmed Khan
      </SectionTitle>
      <SectionText>
        MernStack Developer
        <br />
        JAMStack Developer
        <br />
        Frontend BlockChain Engineer
      </SectionText>
      <Button
        onClick={() => {
          window.location = "https://www.upwork.com/freelancers/~010fd5bf6a0799b7a2";
        }}
      >
        Hire Me{" "}
      </Button>
     
    </LeftSection>
  </Section>
);

export default Hero;
