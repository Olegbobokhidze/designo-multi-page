import React from "react";
import styled, { css } from "styled-components";
type PropsType = {
  title: string;
  image: string;
  description: string;
  color: string;
};
const Content: React.FC<PropsType> = ({ title, image, description, color }) => {
  return (
    <Wrapper color={color}>
      <Img src={image} alt="contentImg" />
      <TextHolder>
        <Title color={color}>{title}</Title>
        <Desc color={color}>{description}</Desc>
      </TextHolder>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div(
  (props: { color: string }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    text-align: center;
    background-color: ${props.color};
    @media screen and (min-width: 768px) {
      border-radius: 20px;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: row;
    }
  `
);
const TextHolder = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    text-align: left;
    padding: 50px;
    width: 600px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 500px;
    border-radius: 20px 20px 0px 0px;
  }
  @media screen and (min-width: 1440px) {
    width: 1000px;
    height: 500px;
    border-radius: 20px 0px 0px 20px;
  }
`;
const Title = styled.h3(
  (props: { color: string }) => css`
    color: ${props.color === "#E7816B" ? "white" : "black"};
    @media screen and (min-width: 1440px) {
      font-size: 52px;
      letter-spacing: 4px;
    }
  `
);

const Desc = styled.p(
  (props: { color: string }) => css`
    color: ${props.color === "#E7816B" ? "white" : "black"};
    padding: 40px;
    @media screen and (min-width: 1440px) {
      padding: 0px;
      font-size: 20px;
      line-height: 30px;
    }
  `
);
