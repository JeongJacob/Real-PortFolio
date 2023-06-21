import Header from "./components/Header";
import Menu from "./components/Menu";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Jacob's PortFolio`,
  description:
    "취뽀를 누구보다 강렬히 희망하는 프론트엔드 개발자 Jacob의 포트폴리오 사이트입니다!",
  keywords: [
    "프론트엔드",
    "포트폴리오",
    "프론트엔드 개발자",
    "개발자",
    "정세민",
  ],
  openGraph: {
    title: `Jacob's PortFolio`,
    description: "Jacob's PortFolio 입니다.",
    url: "https://jacob97.vercel.app/",
    siteName: `Jacob's PortFolio`,
    images: [
      { url: "/ogImage.png", width: 800, height: 800 },
      {
        url: "/ogImage.png",
        width: 1800,
        height: 1600,
        alt: "PortFolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  );
}
