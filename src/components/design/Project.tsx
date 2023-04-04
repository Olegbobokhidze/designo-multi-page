import React from "react";
import styled from "styled-components";
import { ProjectType } from "../../types";

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <Li>
      <Poster src={"https://designo.onrender.com" + project.image} />
      <div style={{ padding: "20px" }}>
        <H2>{project.title}</H2>
        <Par>{project.description}</Par>
      </div>
    </Li>
  );
};

export default Project;

const Poster = styled.img`
  width: 100%;
  height: 350px;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 400px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;
const Li = styled.li`
  list-style: none;
  background-color: #fdf3f0;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
const H2 = styled.h2`
  color: #e7816b;
`;
const Par = styled.p`
  color: black;
`;
