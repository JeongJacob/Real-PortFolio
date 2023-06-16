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
    introduce: "",
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
    introduce: "",
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
    introduce: "",
  },
];

export async function GET() {
  return NextResponse.json(projectData);
}
