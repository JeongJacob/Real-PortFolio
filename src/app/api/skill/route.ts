import { NextResponse } from "next/server";

const skillData = {
  frontSkillList: [
    {
      src: "/react.svg",
      title: "React",
      body: "기능 구현에 필요한 Hooks를 자유롭게 사용합니다.",
    },
    {
      src: "/next.svg",
      title: "Next.js",
      body: "Next 13버전을 사용하여 SSR 방식으로 정적인 앱을 구축할 수 있습니다.",
    },
    {
      src: "/typescript.svg",
      title: "Typescript",
      body: "인터페이스, 제네릭 문법을 사용하여 객체지향 프로그래밍을 할 수 있습니다. ",
    },
    {
      src: "/html.svg",
      title: "HTML5",
      body: "마크업 작성 시 웹 표준과 웹 접근성을 고려하여 시맨틱 요소를 사용합니다.",
    },
    {
      src: "/javascript.svg",
      title: "Javascript",
      body: "reduce, map, filter 등 고차 함수 프로그래밍 기법 활용하여 코드를 작성할 수 있습니다.",
    },
    {
      src: "/css.svg",
      title: "CSS3",
      body: "flex를 능숙하게 사용하여 요소들을 적절히 배치하고 반응형,적응형 앱을 작성할 수 있습니다.",
    },
    {
      src: "/sass.svg",
      title: "SCSS",
      body: "SCSS 함수 기능을 능숙하게 이용하여 가독성 있는 코드를 작성할 수 있습니다.",
    },
    {
      src: "/styledcomponents.svg",
      title: "Styled-components",
      body: "props 문법을 작성할 수 있으며 유지보수가 유용하도록 재사용성을 고려합니다.",
    },
    {
      src: "/redux.svg",
      title: "Redux",
      body: "Store에 대한 개념을 알고 있으며 RTK를 이용하여 다양한 옵션을 사용할 수 있습니다.",
    },

    {
      src: "/axios.svg",
      title: "Axios",
      body: "RESTful API 사용에 대해 익숙하며, async/await를 이용하여 데이터를 통신할 수 있습니다.",
    },
    {
      src: "/aws.svg",
      title: "AWS",
      body: "AWS S3를 이용한 정적 웹사이트 배포를 할 수 있습니다.",
    },
  ],

  trySkillList: [
    {
      src: "/recoil.svg",
      title: "Recoil",
      body: "atom을 사용하여 상태 관리를 한 경험이 있습니다.",
    },
    {
      src: "/zustand.png",
      title: "Zustand",
      body: "zustand를 사용하여 상태 관리를 한 경험이 있습니다.",
    },
    {
      src: "/vercel.svg",
      title: "Vercel",
      body: "Next.js로 앱 개발 후 Vercel로 배포한 경험이 있습니다.",
    },
    {
      src: "/toast.png",
      title: "Toast-UI-Editor",
      body: "Toast-UI-Editor를 커스텀화 하여 프로젝트에 적용한 경험이 있습니다.",
    },
  ],

  communitySkillList: [
    {
      src: "/github.png",
      title: "Git",
      body: "fork, commit, push, stash 등등 다양한 명령어를 능숙하게 이용하며, 칸반보드를 이용하여 프로젝트를 진행한 경험이 있습니다.",
    },
    {
      src: "/figma.svg",
      title: "Figma",
      body: "프로토타입을 이용하여 나타내고자 하는 기능을 그릴 수 있습니다.",
    },
  ],
};

export async function GET() {
  return NextResponse.json(skillData);
}
