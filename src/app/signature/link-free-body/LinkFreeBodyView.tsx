"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignatureHero } from "@/components/sections/SignatureHero";

gsap.registerPlugin(ScrollTrigger);

const FEATURE_ITEMS = [
  {
    title: "실 없는 바디 리프팅",
    sub: "THREAD-FREE LIFTING",
    description: "기존 실리프팅과 달리 실을 사용하지 않고 고주파와 초음파 에너지로 근막층을 자극하여 자연스러운 리프팅 효과를 구현합니다.",
  },
  {
    title: "윤곽 개선",
    sub: "CONTOUR IMPROVEMENT",
    description: "팔뚝, 허벅지, 복부 등 원하는 부위의 윤곽을 개선하여 더욱 탄력 있고 아름다운 바디 라인을 만들어줍니다.",
  },
  {
    title: "지방 분해",
    sub: "FAT REDUCTION",
    description: "선택적 지방 분해 기술로 원하는 부위의 지방을 효과적으로 감소시켜 자연스러운 바디 컨투어를 완성합니다.",
  },
  {
    title: "통증 최소화",
    sub: "MINIMAL DISCOMFORT",
    description: "비침습적 시술로 통증과 회복 기간을 최소화하여 일상생활에 지장 없이 시술받을 수 있습니다.",
  },
];

export default function LinkFreeBodyView() {
  const introRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLElement>(null);
  const solutionCardsRef = useRef<(HTMLElement | null)[]>([]);
  const ctaRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!introRef.current) return;
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { dependencies: [] }
  );

  useGSAP(
    () => {
      solutionCardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: solutionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: solutionRef, dependencies: [] }
  );

  useGSAP(
    () => {
      if (!ctaRef.current) return;
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { dependencies: [] }
  );

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Link-Free Body"
        titleKr="링크프리 바디"
        description="실 없이 바디 라인을 개선하는 혁신적인 바디 컨투어링. 고주파와 초음파 에너지로 근막층을 자극하고 지방을 분해합니다."
        imageIndex={4}
      />

      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Link-Free Body
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            LINK-FREE BODY는 기존 실리프팅과 달리 실을 사용하지 않고 고주파와 초음파 에너지를 이용하여
            근막층을 자극하고 지방을 분해하는 혁신적인 바디 컨투어링 시술입니다.
            팔뚝, 허벅지, 복부 등 원하는 부위의 윤곽을 개선하여 더욱 탄력 있고 아름다운 바디 라인을 만들어줍니다.
          </p>
        </div>
      </section>

      <section
        ref={solutionRef}
        className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            HOMMAGE Solution
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">링크프리 바디</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_ITEMS.map((item, i) => (
              <li
                key={i}
                ref={(el) => {
                  solutionCardsRef.current[i] = el;
                }}
                className="group relative flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-6 pl-8 transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
              >
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20"
      >
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">
            링크프리 바디 상담
          </p>
          <p className="mt-2 text-[14px] text-[#999]">
            오마쥬 클리닉이 1:1로 맞춤 설계해 드립니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              시그니처 상담 문의
            </Link>
            <Link
              href="/"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              ← HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
