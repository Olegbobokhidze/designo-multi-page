import styled from "styled-components";
import {
  GraphicDesignMobile,
  AppDesignMobile,
  WebDesignMobile,
} from "../../assets";
import Project from "../shared/Project";

const Projects = () => {
  return (
    <Main>
      <Project title="WEB DESIGN" image={WebDesignMobile} to="/design/web" />
      <Project title="APP DESIGN" image={AppDesignMobile} to="/design/app" />
      <Project
        title="GRAPHIC DESIGN"
        image={GraphicDesignMobile}
        to="/design/graphic"
      />
    </Main>
  );
};

export default Projects;

const Main = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  row-gap: 24px;
  margin-top: 120px;
`;
