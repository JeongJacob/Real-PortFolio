import { NextResponse } from "next/server";

const introduceData = [
  {
    image: "/jacob1.png",
    caption:
      "프로젝트에 무엇보다 중요한 건 팀원과의 소통이라고 생각합니다. 협업하는 즐거움을 누구보다 잘 알고 있기에 열정적인 커뮤니케이션을 할 수 있습니다.",
  },
  {
    image: "/jacob2.png",
    caption:
      "남다른 호기심을 가지고 태어나 처음 접하는 문제더라도 몇 시간이든 끝끝내 해결하는 끈기를 가지고 있습니다.",
  },
  {
    image: "/jacob4.png",
    caption:
      "사용자, 클라이언트, 더 나아가 팀원들의 니즈를 파악하여 끊임없는 상상력으로 무궁무진한 아이디어를 만들어냅니다.",
  },
];

export async function GET() {
  return NextResponse.json(introduceData);
}
