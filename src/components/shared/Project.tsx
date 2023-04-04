import { Link } from "@tanstack/react-router";
import styled, { css } from "styled-components";
import { RightArrow } from "../../svg";

type PropsType = {
  title: string;
  image: string;
  to: string;
};

const Project: React.FC<PropsType> = ({ title, image, to }) => {
  return (
    <Main image={image} title={title}>
      <Link
        to="/design/$category"
        params={{ category: to }}
        style={{ textDecoration: "none", zIndex: "10" }}
      >
        <ProjectTitle>{title}</ProjectTitle>
        <ViewProject>
          <ViewProjectText>VIEW PROJECTS</ViewProjectText>
          <RightArrow />
        </ViewProject>
      </Link>
      <Background></Background>
    </Main>
  );
};

export default Project;

const Main = styled.div(
  (props: { image: string; title: string }) => css`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${props.image});
    position: relative;
    cursor: pointer;
    &:hover ${Background} {
      display: flex;
    }
    @media screen and (min-width: 1440px) {
      height: ${props.title === "WEB DESIGN" ? "640px" : "300px"};
    }
  `
);

const ProjectTitle = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1.4px;
  color: white;
  text-transform: uppercase;
  z-index: 1;
`;

const ViewProject = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  z-index: 1;
`;

const ViewProjectText = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: white;
`;
const Background = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(231, 129, 107, 0.4);
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
