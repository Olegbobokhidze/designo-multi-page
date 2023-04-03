import React from "react";
import styled from "styled-components";

type PropsType = {
  title: string;
  image: string;
  paragraph: string;
};
const Description = ({ title, image, paragraph }: PropsType) => {
  return (
    <Main>
      <Img src={image} alt="img" />
      <div>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </div>
    </Main>
  );
};

export default Description;
const Main = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: space-around;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #333136;
`;
const Paragraph = styled.p`
  color: #333136;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  max-width: 300px;
`;
