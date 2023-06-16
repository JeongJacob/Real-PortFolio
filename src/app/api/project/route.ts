import { NextResponse } from "next/server";

const projectData = [
  {
    title: "01 PIKCHA",
    image: "/pikcha.png",
    introduce: "",
  },
  {
    title: "02 NerdNest",
    image: "/nerdnest.png",
    introduce: "",
  },
  {
    title: "03 PortFolio",
    image: "/portfolio.png",
    introduce: "",
  },
];

export async function GET() {
  return NextResponse.json(projectData);
}
