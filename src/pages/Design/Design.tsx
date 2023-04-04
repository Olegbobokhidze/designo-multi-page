import { useParams } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AppDesignMobile,
  GraphicDesignMobile,
  WebDesignMobile,
} from "../../assets";
import { getCategoryProjects } from "../../axios";
import { Info, Project } from "../../components";
import { DesignProjects } from "../../components/design";
import { ProjectType } from "../../types";

const Design = () => {
  const [data, setData] = useState<ProjectType[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategoryProjects(category || "");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [category]);
  const [arrOfProjects, setArrOfProjects] = useState([
    {
      title: "WEB DESIGN",
      image: WebDesignMobile,
      to: "web",
      description:
        "We build websites that serve as powerful marketing tools and bring memorable brand experiences",
    },
    {
      title: "APP DESIGN",
      image: AppDesignMobile,
      to: "app",
      description:
        "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    },
    {
      title: "GRAPHIC DESIGN",
      image: GraphicDesignMobile,
      to: "graphic",
      description:
        "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    },
  ]);
  return (
    <Main>
      {arrOfProjects
        .filter((el) => el.to === category)
        .map((el) => (
          <Info title={el.title} key={el.title} description={el.description} />
        ))}
      {data.length > 0 ? <DesignProjects projects={data} /> : null}
      <Items>
        {arrOfProjects
          .filter((el) => el.to !== category)
          .map((el) => (
            <Project
              to={"/" + el.to}
              image={el.image}
              title={el.title}
              key={el.title}
            />
          ))}
      </Items>
    </Main>
  );
};

export default Design;

const Main = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  row-gap: 24px;
  padding: 20px;
  margin-top: 60px;
  @media screen and (min-width: 1440px) {
    padding: 120px;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;
