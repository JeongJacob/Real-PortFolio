"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import skill from "@/app/styles/Skill.module.scss";
import CardRotator from "./components/CardRotator";

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

  const getskillData = () => {
    const fetchData = async () => {
      await axios
        .get("/api/skill")
        .then((res) => setSkillData(res.data))
        .catch((err) => console.error(err));
    };
    fetchData();
  };

  useEffect(() => {
    getskillData();
  }, []);

  return (
    <div className={skill.wrapper}>
      <div className={skill.container}>
        <div className={skill.front__container}>
          <h1>FrontEnd Skill</h1>
          {skillData && <CardRotator skill={skillData.frontSkillList} />}
        </div>
        <div className={skill.try__container}>
          <h1>Try Skill</h1>
          {skillData && <CardRotator skill={skillData.trySkillList} />}
        </div>
        <div className={skill.community__container}>
          <h1>Community Skill</h1>
          {skillData && <CardRotator skill={skillData.communitySkillList} />}
        </div>
      </div>
    </div>
  );
}
