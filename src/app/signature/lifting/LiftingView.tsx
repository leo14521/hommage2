"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";
import { SignatureHero } from "@/components/sections/SignatureHero";
import { LiftingFusionBlock } from "./LiftingFusionBlock";

gsap.registerPlugin(ScrollTrigger);

const SPECIALITY_ITEMS = [
  {
    title: "높은 고정력과 리프팅효과",
    sub: "STRONG FIXATION",
    description: "각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다.",
  },
  {
    title: "빠른 시술 속도",
    sub: "FAST PROCEDURE",
    description: "효율적인 시술 방법으로 바쁜 시간 중에도 편안하게 부담없이 받으실 수 있습니다.",
  },
  {
    title: "시술 후 통증 최소화",
    sub: "MINIMAL DISCOMFORT",
    description: "정확한 피부층에 에너지를 전달하면서 빠르게 완성하여 붓기와 멍, 통증이 거의 없는 방법으로 시술하고 있습니다.",
  },
  {
    title: "얼굴형 맞춤시술",
    sub: "CUSTOMIZED DESIGN",
    description: "개인의 골격, 피부 두께, 근육의 움직임까지 분석하여 가장 이상적인 리프팅 벡터를 설계합니다.",
  },
  {
    title: "편안한 시술",
    sub: "COMFORTABLE",
    description: "리프팅에 대한 걱정과 두려움을 최소화하여 편안하게 시술 받으실 수 있습니다.",
  },
];

const FEATURE_ITEMS = [
  {
    num: "01",
    title: "울쎄라 (Ulthera)",
    sub: "ULTHERA",
    description: "마이크로포커스 초음파 기술로 SMAS층까지 에너지를 전달하는 FDA 승인 시술",
    link: "/signature/ulthera",
  },
  {
    num: "02",
    title: "슈링크 유니버스",
    sub: "SHRINK UNIVERSE",
    description: "고강도 집속 초음파(HIFU) 에너지를 이용한 2세대 리프팅 시술",
    link: "/signature/shrink-universe",
  },
  {
    num: "03",
    title: "튠페이스",
    sub: "TUNE FACE",
    description: "멀티 고주파를 활용한 페이스리프팅 시술로 3단계 깊이 조절이 가능",
    link: "/signature/tune-face",
  },
  {
    num: "04",
    title: "코레지셀핏",
    sub: "CORRECTION FIT",
    description: "고주파 에너지를 이용한 비침습 바디 컨투어링 시술",
    link: "/signature/correction-fit",
  },
  {
    num: "05",
    title: "민트 실",
    sub: "MINT THREAD",
    description: "돌기가 달린 몰딩실을 사용한 비절개 리프팅 시술",
    link: "/signature/mint-thread",
  },
  {
    num: "06",
    title: "실루엣소프트",
    sub: "SILHOUETTE SOFT",
    description: "부드러운 실을 사용한 자연스러운 리프팅 시술",
    link: "/signature/silhouette-soft",
  },
];

export default function LiftingView() {
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLElement>(null);
  const solutionCardsRef = useRef<(HTMLElement | null)[]>([]);
  const featureRef = useRef<HTMLElement>(null);
  const featureCardsRef = useRef<(HTMLElement | null)[]>([]);
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
      if (!aboutRef.current) return;
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
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
      featureCardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featureRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: featureRef, dependencies: [] }
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
        title="Lifting"
        titleKr="리프팅"
        description="아름다운 라인을 만드는 FIGURE MAKING을 모토로 탄생한 오마쥬의 TOP 시그니처 시술. 고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만듭니다."
        imageIndex={0}
      />

      {/* Intro */}
      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Lifting
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만들기 위한 최적의 리프팅 컴비네이션.
            각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있는
            원데이익스트림리프팅, 또는 과도한 지방을 분해하고 배출하여 윤곽을 개선해주는 조각주사와 함께 컴바인한
            '조각술'은 더욱 효과적인 라인을 만들어주는 오마쥬만의 차별화된 특별한 경험이 될 것입니다.
          </p>
        </div>
      </section>

      {/* Fusion Block */}
      <LiftingFusionBlock />

      {/* About Lifting - 이미지와 텍스트가 함께 */}
      <section
        ref={aboutRef}
        className="relative overflow-hidden border-y border-[#e8e8e8] bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getLandingImage(1)})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
            <div>
              <p className="mb-4 font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
                ABOUT LIFTING
              </p>
              <h3 className="mb-6 font-[family-name:var(--font-heading-kr)] text-[clamp(24px,3vw,32px)] tracking-[0.06em] text-[#111]">
                리프팅이란?
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-[#666]">
                고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만들기 위한 최적의 리프팅 컴비네이션입니다.
                각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다.
              </p>
              <div className="space-y-3">
                <p className="text-[14px] text-[#666]">
                  <span className="font-medium text-[#111]">종류:</span>{" "}
                  <span className="ml-2">울쎄라, 슈링크 유니버스, 튠페이스, 실리프팅, V라인 리프팅, 이중턱 리프팅</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speciality - 오마쥬만의 특징 */}
      <section
        ref={solutionRef}
        className="hip-grain relative bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            HOMMAGE Solution
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">리프팅</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALITY_ITEMS.map((item, i) => (
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

      {/* Feature - 리프팅 시술별 특징 */}
      <section
        ref={featureRef}
        className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            LIFTING FEATURES
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            리프팅 <span className="text-[var(--hip-accent-dark)]">시술별</span> 특징
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURE_ITEMS.map((item, i) => (
              <Link
                key={item.num}
                href={item.link}
                ref={(el) => {
                  featureCardsRef.current[i] = el;
                }}
                className="group relative flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-6 pl-8 transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
              >
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.sub}
                </span>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-en-display)] text-[24px] font-light text-[var(--hip-accent-dark)]" style={{ fontWeight: 400 }}>
                    {item.num}
                  </span>
                  <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[var(--hip-accent-dark)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[12px] font-medium tracking-wider">VIEW MORE</span>
                  <span className="text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20"
      >
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">
            리프팅 상담
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
