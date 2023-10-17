"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BasicAccordion from "../components/BasicAccordion";
import CardRotator from "../components/CardRotator";
import skill from "@/app/styles/Skill.module.scss";

export interface SkillBodyT {
  src: string;
  title: string;
  body: string;
}

interface SkillListT {
  frontSkillList: SkillBodyT[];
  trySkillList: SkillBodyT[];
  communitySkillList: SkillBodyT[];
}

export default function Skill() {
  const [skillData, setSkillData] = useState<SkillListT>();
  const [concatSkillList, setConcatSkillList] = useState<SkillBodyT[]>();
  const [isToggle, setIsToggle] = useState(false);

  const getSkillData = () => {
    const fetchData = async () => {
      await axios
        .get("/api/skill")
        .then((res) => {
          setSkillData(res.data);
          setConcatSkillList([
            ...res.data.frontSkillList,
            ...res.data.communitySkillList,
            ...res.data.trySkillList,
          ]);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  };

  useEffect(() => {
    getSkillData();
  }, []);

  return (
    <div className={skill.wrapper}>
      <div className={skill.container}>
        {!isToggle ? (
          <div className={skill.rotator__skill__container}>
            <h1>My Skill</h1>
            {concatSkillList && <CardRotator skill={concatSkillList} />}
          </div>
        ) : (
          <>
            <div className={skill.front__container}>
              <h1>FrontEnd Skill</h1>
              {skillData &&
                skillData.frontSkillList.map((frontSkill, idx) => (
                  <BasicAccordion skill={frontSkill} key={idx} />
                ))}
            </div>
            <div className={skill.try__container}>
              <h1>Try Skill</h1>
              {skillData &&
                skillData.trySkillList.map((trySkill, idx) => (
                  <BasicAccordion skill={trySkill} key={idx} />
                ))}
            </div>
            <div className={skill.community__container}>
              <h1>Community Skill</h1>
              {skillData &&
                skillData.communitySkillList.map((communitySkill, idx) => (
                  <BasicAccordion skill={communitySkill} key={idx} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
