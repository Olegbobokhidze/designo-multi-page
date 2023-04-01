import { useParams } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AppDesignMobile,
  GraphicDesignMobile,
  WebDesignMobile,
} from "../../assets";
import { getCategoryProjects } from "../../axios";
import { Project } from "../../components";
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
    },
    {
      title: "APP DESIGN",
      image: AppDesignMobile,
      to: "app",
    },
    {
      title: "GRAPHIC DESIGN",
      image: GraphicDesignMobile,
      to: "graphic",
    },
  ]);
  return (
    <Main>
      {data.length > 0 ? <DesignProjects projects={data} /> : null}
      {arrOfProjects
        .filter((el) => el.to !== category)
        .map((el) => (
          <Project to={"/" + el.to} image={el.image} title={el.title} />
        ))}
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
  margin-top: 120px;
`;
