import React from "react";
import styled from "styled-components";
import { Banner, Projects, Descriptions } from "../../components";

const Home = () => {
  return (
    <Page>
      <Banner />
      <Wrapper>
        <Projects />
        <Descriptions />
      </Wrapper>
    </Page>
  );
};
export default Home;
const Page = styled.main`
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`;

const Infos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 120px;
`;
