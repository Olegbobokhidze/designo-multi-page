import React from "react";
import styled from "styled-components";
import { Content, Contents, Countries } from "../../components";
import { DealMobile, DesktopReal } from "../../assets";
const About = () => {
  const Desc =
    "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.";
  return (
    <>
      <Contents />
      <Countries />
      <Wrapper>
        <Content
          color="#FDF3F0"
          description={Desc}
          title="The Real Deal"
          image={DealMobile}
        />
      </Wrapper>
      <Desktop>
        <Content
          color="#FDF3F0"
          description={Desc}
          title="The Real Deal"
          image={DesktopReal}
        />
      </Desktop>
    </>
  );
};
export default About;

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 40px;
    display: none;
  }
`;
const Desktop = styled.div`
  display: none;
  margin-top: 100px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 120px;
  }
`;
