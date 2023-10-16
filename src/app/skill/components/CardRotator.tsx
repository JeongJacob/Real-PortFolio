import MuiCard from "@/app/components/MuiCard";
import rotator from "@/app/styles/CardRotator.module.scss";
import { SkillBodyT } from "../page";

export default function CardRotator({ skill }: { skill: SkillBodyT[] }) {
  return (
    <div className={rotator.roter__container}>
      {skill?.map((skill, idx) => (
        <div className={rotator.items} key={idx}>
          <MuiCard src={skill.src} title={skill.title} body={skill.body} />
        </div>
      ))}
    </div>
  );
}
