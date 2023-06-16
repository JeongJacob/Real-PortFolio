"use client";
import React, { useEffect, useState } from "react";
import project from "@/app/styles/Project.module.scss";
import axios from "axios";
import ProjectPreview from "../components/ProjectPreview";

export interface ProjectProps {
  name: string;
  title: string;
  image: string;
  introduce: string;
}

const Project = () => {
  const [projectData, setProjectData] = useState<ProjectProps[]>([]);
  const [onTitle, setOnTitle] = useState("");
  const [key, setKey] = useState(0);

  const getProjectData = () => {
    const fetchData = async () => {
      await axios
        .get("/api/project")
        .then((res) => setProjectData(res.data))
        .catch((err) => console.error(err));
    };
    fetchData();
  };

  useEffect(() => {
    getProjectData();
    return () => {
      setKey(0);
    };
  }, []);

  const onTitleHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    setOnTitle(title);
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className={project.container}>
      <div className={project.number__container}>
        <button onClick={(e) => onTitleHandler(e, "PIKCHA")}>PIKCHA</button>
        <button onClick={(e) => onTitleHandler(e, "NerdNest")}>NerdNest</button>
        <button onClick={(e) => onTitleHandler(e, "PortFolio")}>
          PortFolio
        </button>
      </div>
      {projectData && projectData.length > 0 && (
        <ProjectPreview
          key={key}
          projectData={
            onTitle === "PIKCHA"
              ? projectData[0]
              : onTitle === "NerdNest"
              ? projectData[1]
              : projectData[2]
          }
        />
      )}
    </div>
  );
};

export default Project;
