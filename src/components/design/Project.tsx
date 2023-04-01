import React from "react";
import styled from "styled-components";
import { ProjectType } from "../../types";

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <Li>
      <Poster src={"https://designo.onrender.com" + project.image} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </Li>
  );
};

export default Project;

const Poster = styled.img`
  width: 100%;
  height: 350px;
`;
const Li = styled.li`
  list-style: none;
`;
