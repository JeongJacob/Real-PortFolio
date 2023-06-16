"use client";
import React from "react";
import Image from "next/image";
import { ProjectProps } from "../project/page";
import ProjectInfoModal from "./ProjectInfoModal";
import { useModalStore } from "@/store";
import project from "@/app/styles/Project.module.scss";

const ProjectPreview = ({ projectData }: { projectData: ProjectProps }) => {
  const { onModal, handleModal } = useModalStore();
  return (
    <>
      {onModal ? (
        <ProjectInfoModal projectData={projectData} />
      ) : (
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
          <button
            className={project.content__moreinfo__btn}
            onClick={handleModal}
          >
            More Info
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectPreview;
