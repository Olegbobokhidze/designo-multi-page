import styled from "styled-components";
import React from "react";
import { Description } from "../shared";
import { Fri, Pas, Res } from "../../assets";
const Descriptions = () => {
  const passionate =
    "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.";
  const friendly =
    " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.";
  const resourceful =
    "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.";
  return (
    <Main>
      <Description image={Pas} paragraph={passionate} title="passionate" />
      <Description image={Res} paragraph={resourceful} title="resourceful" />
      <Description image={Fri} paragraph={friendly} title="friendly" />
    </Main>
  );
};

export default Descriptions;
const Main = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  row-gap: 130px;
  margin-top: 120px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto auto auto;
  }
`;
