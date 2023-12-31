import React from "react";
import Image from "next/image";
import Link from "next/link";
import contact from "@/app/styles/Contact.module.scss";

export default function Contact() {
  return (
    <section className={contact.wrapper}>
      <div className={contact.about__container}>
        <Image
          src={"/jacob3.png"}
          alt="개발자"
          width={500}
          height={500}
          className={contact.about__image}
        />
        <div className={contact.about__info__container}>
          <p>정세민</p>
          <p>010-9232-4007</p>
          <p>ja9cob7@gmail.com</p>
          <div className={contact.about__sns__container}>
            <Link href={"https://github.com/MINSE97"} target="blink">
              <Image
                src="/github.png"
                alt="github"
                width={30}
                height={30}
                className={contact.about__sns__github}
              />
            </Link>
            <Link href={"https://velog.io/@alsgood4007"} target="blink">
              <Image
                src="/velog.png"
                alt="velog"
                width={30}
                height={30}
                className={contact.about__sns__velog}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
