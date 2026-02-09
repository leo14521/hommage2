"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignatureHero } from "@/components/sections/SignatureHero";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "줄기세포 엑소좀",
    sub: "STEM CELL EXOSOME",
    description: "줄기세포에서 추출한 엑소좀은 세포 간 신호 전달 물질을 포함하여 피부 재생을 촉진합니다.",
  },
  {
    title: "항노화 효과",
    sub: "ANTI-AGING",
    description: "세포 노화를 억제하고 젊은 세포의 기능을 활성화하여 항노화 효과를 제공합니다.",
  },
  {
    title: "피부 재생",
    sub: "SKIN REGENERATION",
    description: "손상된 피부 세포를 복구하고 새로운 세포 생성을 촉진하여 피부를 재생시킵니다.",
  },
  {
    title: "콜라겐 생성",
    sub: "COLLAGEN PRODUCTION",
    description: "콜라겐과 엘라스틴 생성을 촉진하여 피부 탄력과 주름 개선에 효과적입니다.",
  },
];

export default function ExosomeView() {
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
        title="Exosome"
        titleKr="엑소좀"
        description="줄기세포에서 추출한 엑소좀을 활용한 차세대 스킨부스터. 세포 노화를 억제하고 피부 재생을 촉진합니다."
        imageIndex={1}
      />

      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Exosome
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            엑소좀은 줄기세포에서 추출한 세포 간 신호 전달 물질로, 차세대 스킨부스터로 주목받고 있습니다.
            엑소좀은 세포 노화를 억제하고 젊은 세포의 기능을 활성화하여 항노화 효과를 제공하며,
            손상된 피부 세포를 복구하고 새로운 세포 생성을 촉진하여 피부를 재생시킵니다.
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
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">엑소좀</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((item, i) => (
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
            엑소좀 상담
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
