"use client";
import React from "react";
import Image from "next/image";
import { ProjectProps } from "../project/page";
import ProjectInfoModal from "./ProjectInfoModal";
import { useModalStore } from "@/store";
import project from "@/app/styles/Project.module.scss";
import Link from "next/link";

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
            <Link href={projectData.link} target="blink">
              <Image
                src={projectData.image}
                alt="홈페이지"
                width={350}
                height={350}
                className={project.content__image}
              />
            </Link>
          </div>
          <div className={project.content__moreinfo__btn__container}>
            <Link
              href={projectData.github}
              target="blink"
              className={project.content__moreinfo__btn}
            >
              Github
            </Link>
            <button
              className={project.content__moreinfo__btn}
              onClick={handleModal}
            >
              More Info
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPreview;
