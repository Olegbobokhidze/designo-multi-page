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
      <Title color={color}>{title}</Title>
      <Desc color={color}>{description}</Desc>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div(
  (props: { color: string }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
    background-color: ${props.color};
  `
);
const Img = styled.img`
  width: 100%;
  height: 300px;
`;
const Title = styled.h3(
  (props: { color: string }) => css`
    color: ${props.color === "#E7816B" ? "white" : "black"};
  `
);

const Desc = styled.p(
  (props: { color: string }) => css`
    color: ${props.color === "#E7816B" ? "white" : "black"};
    padding: 40px;
  `
);
