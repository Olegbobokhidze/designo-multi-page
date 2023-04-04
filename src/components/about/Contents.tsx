import React from "react";
import styled from "styled-components";
import { Content } from "../shared";
import {
  AboutHeroMobile,
  DesktopAbout,
  DesktopWorld,
  WorldTalentMobile,
} from "../../assets";
const Contents = () => {
  const AboutDesc =
    "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.";
  const WorldDesc =
    "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.";
  return (
    <>
      <Wrapper>
        <Content
          description={AboutDesc}
          color="#E7816B"
          title="About Us"
          image={AboutHeroMobile}
        />
        <Content
          description={WorldDesc}
          color="#FDF3F0"
          title="World-class talent"
          image={WorldTalentMobile}
        />
      </Wrapper>
      <Desktop>
        <Content
          description={AboutDesc}
          color="#E7816B"
          title="About Us"
          image={DesktopAbout}
        />
        <Content
          description={WorldDesc}
          color="#FDF3F0"
          title="World-class talent"
          image={DesktopWorld}
        />
      </Desktop>
    </>
  );
};

export default Contents;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Desktop = styled.div`
  width: 100%;
  display: none;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 40px;
  }
`;
