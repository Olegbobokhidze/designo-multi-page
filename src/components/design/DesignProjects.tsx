import React from "react";
import styled from "styled-components";
import { ProjectType } from "../../types";
import Project from "./Project";

const DesignProjects: React.FC<{ projects: ProjectType[] }> = ({
  projects,
}) => {
  return (
    <List>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </List>
  );
};

export default DesignProjects;

const List = styled.ul`
  display: grid;
  width: 100%;
  padding: 10px;
  row-gap: 20px;
  column-gap: 20px;
  grid-template-columns: auto;
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto auto auto;
    column-gap: 40px;
    padding: 0px;
    margin: 40px 0px;
  }
`;
