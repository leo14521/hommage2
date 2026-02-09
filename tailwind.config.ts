// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // [중요] 쨍한 오렌지 대신, 채도가 빠지고 깊이감 있는 '번트 오렌지' 사용
        primary: {
          DEFAULT: "#D85C27", // 에르메스/가죽 느낌의 오렌지
          light: "#E87C4D",
          dark: "#A63D11",
        },
        // [중요] 배경은 완전 흰색(#FFF)보다 아주 연한 웜그레이가 고급스러움
        bg: {
          base: "#FDFBF9", // 아주 연한 미색 (A4용지 색 아님)
          sub: "#F5F2EF",  // 톤다운된 베이지 그레이
        },
        text: {
          main: "#1A1A1A", // 완전 블랙(#000) 금지. 짙은 회색 사용.
          sub: "#595959",
          muted: "#999999",
        }
      },
      fontFamily: {
        // 프리텐다드가 없다면 시스템 폰트라도 깔끔하게 떨어지도록 설정
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        serif: ['Times New Roman', 'serif'], // 영문 포인트용
      },
      // [핵심] 글자 간격을 좁혀야(Tight) 세련돼 보임
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        normal: '-0.01em',
      },
    },
  },
  plugins: [],
};
export default config;