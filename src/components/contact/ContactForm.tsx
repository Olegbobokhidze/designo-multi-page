import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Description>
        Ready to take it to the next level? Let’s talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that’s relatable to your users, drop us a
        line.
      </Description>
      <Input placeholder="Home" />
      <Input placeholder="Email Address" />
      <Input placeholder="Phone" />
      <TextArea placeholder="Your Message" />
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #e7816b;
`;
const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 500;
`;
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: white;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  background-color: #e7816b;
  color: whitesmoke;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid whitesmoke;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid whitesmoke;
  background-color: #e7816b;
  color: whitesmoke;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid whitesmoke;
  }
`;
