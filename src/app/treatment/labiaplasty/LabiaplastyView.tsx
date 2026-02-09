"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignatureHero } from "@/components/sections/SignatureHero";
import {
  LABIAPLASTY_IMAGES,
  LABIAPLASTY_CAPTIONS,
  LABIAPLASTY_PROCESS,
  HOMMAGE_ADVANTAGES,
  LABIAPLASTY_FAQ,
} from "@/config/labiaplastyPage";
import { LabiaTypeDiagramBlock } from "./LabiaTypeDiagramBlock";

gsap.registerPlugin(ScrollTrigger);

export default function LabiaplastyView() {
  const introRef = useRef<HTMLElement>(null);
  const advantagesRef = useRef<HTMLElement>(null);
  const advantagesCardsRef = useRef<(HTMLElement | null)[]>([]);
  const processRef = useRef<HTMLElement>(null);
  const processItemsRef = useRef<(HTMLElement | null)[]>([]);
  const faqRef = useRef<HTMLElement>(null);
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
      advantagesCardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: advantagesRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: advantagesRef, dependencies: [] }
  );

  useGSAP(
    () => {
      processItemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: processRef, dependencies: [] }
  );

  useGSAP(
    () => {
      if (!faqRef.current) return;
      gsap.fromTo(
        faqRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { dependencies: [] }
  );

  useGSAP(
    () => {
      if (!ctaRef.current) return;
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 88%",
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
        title="Labiaplasty"
        titleKr="레이저 소음순 성형"
        description="절개 수술 없이 레이저 에너지로 소음순의 형태를 정리하여 자연스럽고 아름다운 라인을 만드는 시술입니다. 비비브, 질쎄라 등 최신 레이저 기술을 활용하여 안전하고 효과적인 결과를 제공합니다."
        imageIndex={0}
      />

      {/* Intro */}
      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            레이저 소음순 성형
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            절개 수술 없이 레이저 에너지로 소음순의 형태를 정리하여 자연스럽고 아름다운 라인을 만듭니다.
            오마쥬는 여의사 1:1 전담 진료와 정밀 레이저 기술로 당신만의 맞춤 설계를 제공합니다.
          </p>
        </div>
      </section>

      {/* 소음순 유형별 도식화 + 애니메이션 */}
      <LabiaTypeDiagramBlock />

      {/* 오마쥬만의 특징 */}
      <section
        ref={advantagesRef}
        className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            HOMMAGE ADVANTAGES
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            왜 <span className="text-[var(--hip-accent-dark)]">오마쥬</span>에서 소음순 수술을 받아야 하나요
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HOMMAGE_ADVANTAGES.map((item, i) => (
              <li
                key={i}
                ref={(el) => {
                  advantagesCardsRef.current[i] = el;
                }}
                className={`group relative flex flex-col rounded-lg border-2 bg-white p-6 pl-8 transition-all duration-300 ${
                  item.highlight
                    ? "border-[var(--hip-accent)] shadow-lg"
                    : "border-[#e8e8e8] hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
                }`}
              >
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.num}
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 시술 과정 */}
      <section
        ref={processRef}
        className="relative border-t border-[#eee] bg-[#fafaf8] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-14 text-center font-[family-name:var(--font-display)] text-[clamp(24px,3vw,32px)] tracking-[0.06em] text-[#111]">
            시술 <span className="text-[var(--hip-accent-dark)]">과정</span>
          </h2>
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {LABIAPLASTY_PROCESS.map((item, i) => (
              <li
                key={i}
                ref={(el) => {
                  if (el) processItemsRef.current[i] = el;
                }}
                className="flex gap-6 rounded-xl border border-[#eee] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-md"
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-[var(--hip-accent)] bg-white font-[family-name:var(--font-display)] text-[20px] text-[var(--hip-accent-dark)]">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[17px] font-normal text-[#111]">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#666]">{item.sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section
        ref={faqRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="mx-auto max-w-[800px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            FAQ
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            자주 묻는 <span className="text-[var(--hip-accent-dark)]">질문</span>
          </h3>
          <div className="space-y-4">
            {LABIAPLASTY_FAQ.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-[#e8e8e8] pb-4 transition-colors hover:bg-[var(--hip-bg)]/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 px-2">
                  <span className="font-[family-name:var(--font-heading-kr)] text-[16px] leading-relaxed text-[#111] group-hover:text-[var(--hip-accent-dark)] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-2xl font-thin text-[var(--hip-accent-dark)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-2 pb-2 pt-2 text-[14px] leading-relaxed text-[#666] animate-[fadeIn_0.3s_ease-out]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="relative bg-[#0f0f0f] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-60" aria-hidden />
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.5vw,34px)] tracking-[0.06em] text-white">
            비밀 상담 · 예약
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#999]">
            여의사 1:1 전담 진료로 편안하게 상담받으세요. 모든 과정이 비밀 보장됩니다.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/#curation"
              className="group inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all duration-300 hover:bg-[var(--hip-accent-dark)] hover:shadow-[0_0_28px_rgba(184,160,120,0.35)]"
            >
              상담 문의
            </Link>
            <Link
              href="/#map"
              className="inline-block rounded-sm border-2 border-[var(--hip-accent)] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[var(--hip-accent)] transition-all duration-300 hover:bg-[var(--hip-accent)] hover:text-white hover:shadow-[0_0_28px_rgba(184,160,120,0.35)]"
            >
              오시는 길
            </Link>
          </div>
        </div>
      </section>

      {/* 하단 링크 */}
      <div className="border-t border-[#222] bg-[#0a0a0a] px-6 py-10">
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-6">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-[13px] tracking-[0.15em] text-[#888] transition-colors hover:text-[var(--hip-accent)]"
          >
            ← HOME
          </Link>
          <Link
            href="/#doctor"
            className="font-[family-name:var(--font-display)] text-[13px] tracking-[0.15em] text-[#888] transition-colors hover:text-[var(--hip-accent)]"
          >
            의료진 소개
          </Link>
        </div>
      </div>
    </main>
  );
}
