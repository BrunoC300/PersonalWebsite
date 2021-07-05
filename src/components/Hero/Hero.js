import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi my name is Bruno, I'm a Portugal-based software engineer who
        specializes in building (and occasionally designing) exceptional digital
        experiences. Currently, I'm looking for my first professional experience
        to leave my footprint in the world of web.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
