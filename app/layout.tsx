import type { Metadata } from "next";
import { Newsreader, Space_Mono, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

// Korean serif — Newsreader has no Hangul glyphs, so Korean text falls back
// to this for consistent typesetting across the site.
const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-korean",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jung Yubin — Product Designer",
  description:
    "7년 차 프로덕트 디자이너 정유빈. 핀테크·헬스케어·B2B 제품에서 복잡한 흐름을 명료한 인터페이스와 디자인 시스템으로 풀어냅니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${newsreader.variable} ${spaceMono.variable} ${notoSerifKr.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
