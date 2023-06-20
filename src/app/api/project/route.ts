import { NextResponse } from "next/server";

const projectData = [
  {
    title: "01 PIKCHA",
    image: "/pikcha.png",
    skills: [
      "/typescript.svg",
      "/react.svg",
      "/styledcomponents.svg",
      "/recoil.svg",
      "/axios.svg",
      "/zep.jpg",
      "/notion.svg",
    ],
    skillName: [
      "Typescript",
      "React.js",
      "Styled-Components",
      "Recoil",
      "Axios",
      "ZEP",
      "notion",
    ],
    introduce:
      "부트캠프에서 진행한 첫 번째 팀 프로젝트입니다. 기획부터 디자인까지 팀원들과 소통하며 진행하였습니다. 첫 프로젝트라 커뮤니케이션, 개발 실력이 미흡하였습니다. 하지만 그것을 동기 삼아 열정적으로 쏟아부을 수 있었던 시간이었습니다.",
    period: "23.01 ~ 23.02",
    team: "FE, BE",
    myWork: [
      "명소 / 포스트 리스트 페이지(페이지네이션)",
      "명소 / 포스트 지역구 필터링 컴포넌트",
      "포스트 상세페이지 CRUD",
      "포스트 상세페이지 댓글/대댓글 CRUD",
      "포스트 작성/수정 페이지",
      "마이페이지 회원 정보 CRUD",
    ],
    link: "https://pikcha36.o-r.kr/",
    github: "https://github.com/codestates-seb/seb41_main_036",
  },
  {
    title: "02 NerdNest",
    image: "/nerdnest.png",
    skills: [
      "/typescript.svg",
      "/react.svg",
      "/styledcomponents.svg",
      "/toast.png",
      "/axios.svg",
      "/discord.svg",
      "/notion.svg",
    ],
    skillName: [
      "Typescript",
      "React.js",
      "Styled-Components",
      "Toast UI Editor",
      "Axios",
      "Discord",
      "Notion",
    ],
    introduce:
      "부트캠프를 수료 후 수료생들과 진행한 두 번째 팀 프로젝트입니다. 기획부터 API 명세서까지 백엔드와의 소통을 중요시하여 진행하였습니다. Github 잔디 심기에 영감을 받아 블로그를 쓰면 잔디가 심기는 아이디어를 제시했습니다.",
    period: "23.02 ~ 23.03",
    team: "FE, BE",
    myWork: [
      "헤더",
      "무한 스크롤이 가능한 메인/검색 페이지",
      "블로그 상세페이지 CRUD",
      "블로그 상세페이지 댓글/대댓글 CRUD",
      "블로그 Record 컴포넌트",
      "공용 블로그카드 컴포넌트",
    ],
    link: "http://nerdnest.s3-website.ap-northeast-2.amazonaws.com/",
    github: "https://github.com/limdumb/NerdNest_FE",
  },
  {
    title: "03 PortFolio",
    image: "/portfolio.png",
    skills: [
      "/typescript.svg",
      "/next.svg",
      "/sass.svg",
      "/zustand.png",
      "/axios.svg",
      "/vercel.svg",
    ],
    skillName: ["Typescript", "Next.js", "Sass", "Zustand", "Axios", "Vercel"],
    introduce:
      "SEO에 관해 공부하고자 시작한 SSR 기반의 포트폴리오 웹 사이트입니다. 이전에 적용해보지 못했던 반응형, 적응형을 생각하며 진행했습니다. 이번 프로젝트로 개발자에 대한 열정을 다시 한번 알게 되었습니다.",
    period: "23.06",
    myWork: "FE",
    link: "https://jacob97.vercel.app/",
    github: "https://github.com/MINSE97/Real-PortFolio",
  },
];

export async function GET() {
  return NextResponse.json(projectData);
}
