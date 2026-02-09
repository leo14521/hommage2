import type { Metadata, Viewport } from "next";
import { Gowun_Batang, Noto_Sans_KR, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBanner from "@/components/ui/FloatingBanner";

// 힙한 영문 폰트: Inter (모던하고 깔끔한 산세리프)
const inter = Inter({
  variable: "--font-en-title",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 영문 본문 폰트: Inter (동일하게 적용)
const interBody = Inter({
  variable: "--font-en-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 큰 글자용 영문 폰트: Playfair Display (우아한 세리프)
const playfairDisplay = Playfair_Display({
  variable: "--font-en-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 폰트 2: 한글 메인 헤드라인 폰트 (고전적이고 우아한 명조체 계열)
const gowunBatang = Gowun_Batang({
  variable: "--font-kr-heading",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// 폰트 3: 한글 본문 폰트 (현대적이고 깔끔한 고딕체 계열)
const notoSansKR = Noto_Sans_KR({
  variable: "--font-kr-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "HOMMAGE | The Private Masterpiece",
  description:
    "오마쥬 의원 - 공장형 시술을 지양하고 오직 당신만을 위한 프라이빗한 의학적 큐레이션을 제공합니다.",
  formatDetection: { telephone: false, email: false, address: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${interBody.variable} ${playfairDisplay.variable} ${gowunBatang.variable} ${notoSansKR.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-body-kr antialiased">
        <SmoothScroll>
          <Header />
          <div className="min-h-screen pb-[140px] lg:pb-8">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
        <FloatingBanner />
      </body>
    </html>
  );
}
