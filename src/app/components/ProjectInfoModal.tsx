"use client";
import React from "react";
import Image from "next/image";
import { ProjectProps } from "../project/page";
import { useModalStore } from "@/store";
import project from "@/app/styles/Project.module.scss";

const ProjectInfoModal = ({ projectData }: { projectData: ProjectProps }) => {
  const handleModal = useModalStore((state) => state.handleModal);
  return (
    <div className={project.modal__wrapper}>
      <div className={project.modal__container}>
        <div className={project.modal__skill__wrapper}>
          {projectData.skills.map((skill, idx) => (
            <div className={project.modal__skill__container} key={idx}>
              <Image src={skill} alt="react" width={60} height={60} />
              <p>{projectData.skillName[idx]}</p>
            </div>
          ))}
        </div>
        <div className={project.modal__introduce__container}>
          <p>{projectData.introduce}안녕하세요</p>
        </div>
        <button onClick={handleModal} className={project.modal__close__btn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
