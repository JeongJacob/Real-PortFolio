import React from "react";
import Image from "next/image";
import { ProjectProps } from "../project/page";
import project from "@/app/styles/Project.module.scss";
import Link from "next/link";

const ProjectPreview = ({ projectData }: { projectData: ProjectProps }) => {
  return (
    <div className={project.content__container}>
      <h2 className={project.content__title}>{projectData.title}</h2>
      <hr />
      <div className={project.content__image__container}>
        <Image
          src={projectData.image}
          alt="홈페이지"
          width={350}
          height={350}
          className={project.content__image}
        />
      </div>
      <Link
        href={`/project/${projectData.name}`}
        className={project.content__moreinfo__btn}
      >
        More Info
      </Link>
    </div>
  );
};

export default ProjectPreview;
