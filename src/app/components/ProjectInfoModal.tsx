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
        <div className={project.modal__role__container}>
          <div>
            <h3>프로젝트 기간</h3>
            <p>{projectData.period}</p>
          </div>
          <div>
            <h3>팀 구성</h3>
            <p className={project.modal__role__team__front}>
              {projectData.team[0]}
            </p>
            {projectData.team[1] && (
              <p className={project.modal__role__team__back}>
                {projectData.team[1]}
              </p>
            )}
          </div>
          <div>
            <h3>팀 내 역할</h3>
            <p>
              {projectData.myWork.map((work, idx) => (
                <p key={idx}>{work}</p>
              ))}
            </p>
          </div>
        </div>
        <button onClick={handleModal} className={project.modal__close__btn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
