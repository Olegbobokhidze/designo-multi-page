import styled from "styled-components";
import {
  GraphicDesignMobile,
  AppDesignMobile,
  WebDesignMobile,
} from "../../assets";
import Project from "../shared/Project";

const Projects = () => {
  return (
    <>
      <Main>
        <Project title="WEB DESIGN" image={WebDesignMobile} to="/web" />

        <Project title="APP DESIGN" image={AppDesignMobile} to="/app" />

        <Project
          title="GRAPHIC DESIGN"
          image={GraphicDesignMobile}
          to="/graphic"
        />
      </Main>
      <Desktop>
        <Project title="WEB DESIGN" image={WebDesignMobile} to="/web" />
        <DesktopHolder>
          <Project title="APP DESIGN" image={AppDesignMobile} to="/app" />

          <Project
            title="GRAPHIC DESIGN"
            image={GraphicDesignMobile}
            to="/graphic"
          />
        </DesktopHolder>
      </Desktop>
    </>
  );
};

export default Projects;

const Main = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  margin-top: 120px;
  row-gap: 40px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
const DesktopHolder = styled.div`
  gap: 30px;
  display: grid;
`;
const Desktop = styled.div`
  display: none;
  margin-top: 120px;
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 30px;
  }
`;
