import { NextResponse } from "next/server";

const projectData = [
  {
    name: "pikcha",
    title: "01 PIKCHA",
    image: "/pikcha.png",
    introduce: "",
  },
  {
    name: "nerdnest",
    title: "02 NerdNest",
    image: "/nerdnest.png",
    introduce: "",
  },
  {
    name: "portfolio",
    title: "03 PortFolio",
    image: "/portfolio.png",
    introduce: "",
  },
];

export async function GET() {
  return NextResponse.json(projectData);
}
