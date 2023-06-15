import React from "react";
import intro from "@/app/styles/Intro.module.scss";

const Intro = () => {
  return (
    <section>
      <div className={intro.background}>
        <div className={intro.text__container}>
          <p className={intro.text}>Jacob's PortFolio</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
