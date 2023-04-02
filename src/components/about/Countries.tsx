import React from "react";
import styled from "styled-components";
import { Country } from "../shared";
import { Uk, Canada, Australia } from "../../assets";
const Countries = () => {
  return (
    <CountryList>
      <Country image={Canada} title="Canada" />
      <Country image={Australia} title="Australia" />
      <Country image={Uk} title="United Kingdom" />
    </CountryList>
  );
};

export default Countries;

const CountryList = styled.div`
  display: grid;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  row-gap: 100px;
  margin-top: 20px;
  column-gap: 100px;
  grid-template-columns: auto;
`;
