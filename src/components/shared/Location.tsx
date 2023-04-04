import React from "react";
import styled, { css } from "styled-components";
type PropsType = {
  title: string;
  image: string;
  address: string;
  contact: string;
};
const Location: React.FC<PropsType> = ({ title, image, address, contact }) => {
  return (
    <Wrapper>
      <Img src={image} alt="contentImg" />
      <Title>{title}</Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Address>{address}</Address>
        <Contact>{contact}</Contact>
      </div>
    </Wrapper>
  );
};

export default Location;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  background-color: #fdf3f0;
  margin-bottom: 40px;
  @media screen and (min-width: 1440px) {
    border-radius: 25px;
  }
`;
const Img = styled.img`
  width: 100%;
  min-height: 300px;
  @media screen and (min-width: 1440px) {
    border-radius: 25px 25px 0px 0px;
  }
`;
const Title = styled.h2`
  color: #e7816b;
`;
const Address = styled.p`
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Contact = styled.p`
  color: black;
  margin-bottom: 20px;
`;
