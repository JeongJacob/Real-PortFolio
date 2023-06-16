import { NextResponse } from "next/server";

const introduceData = [
  {
    image: "/jacob1.png",
    caption: "안녕하세요",
  },
  {
    image: "/jacob2.png",
    caption: "안녕하세요",
  },
  {
    image: "/jacob4.png",
    caption: "안녕하세요",
  },
];

export async function GET() {
  return NextResponse.json(introduceData);
}
