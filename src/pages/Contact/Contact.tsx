import React from "react";
import styled from "styled-components";
import { ContactForm, Countries } from "../../components";

const Contact = () => {
  return (
    <Main>
      <ContactForm />
      <Countries />
    </Main>
  );
};

export default Contact;
const Main = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    padding: 0px 120px;
  }
`;
