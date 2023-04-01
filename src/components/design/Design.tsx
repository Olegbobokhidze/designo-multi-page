import { useParams } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import { getCategoryProjects } from "../../axios";
import { ProjectType } from "../../types";

const Design = () => {
  const [data, setData] = useState<ProjectType>();
  console.log(data);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("bla");
        const response = await getCategoryProjects(category || "");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Design;
