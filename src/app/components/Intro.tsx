import React from "react";
import intro from "@/app/styles/Intro.module.scss";

const Intro = () => {
  return (
    <section>
      <div className={intro.background}>
        <div className={intro.text__container}>
          <p>Jacob&apos;s PortFolio</p>
          <p>Jacob&apos;s PortFolio</p>
          <p>Jacob&apos;s PortFolio</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
