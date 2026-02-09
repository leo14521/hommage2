"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LABIAPLASTY_PROCESS } from "@/config/labiaplastyPage";

gsap.registerPlugin(ScrollTrigger);

/** 1번 이미지 5단계 슬라이스 — public에 labia-process.png 넣으면 표시 (가로 5등분) */
const PROCESS_IMAGE = "/images/labia-process.png";

/** 단계 간 연결 아이콘 (진한 파란 원형 + 재생) */
function StepConnector() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center text-[#1e3a5f]" aria-hidden>
      <svg className="h-8 w-8 sm:h-9 sm:w-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 12v12l8-6-8-6z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/**
 * 소음순수술과정 — 5단계, 1번 이미지를 5등분해 각 STEP에 하나씩 표시
 * 연한 피치 배경(#F7EDE9) 패널 + 파란 재생 화살표
 */
export function LabiaplastyProcessBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  const topSteps = LABIAPLASTY_PROCESS.slice(0, 3);
  const bottomSteps = LABIAPLASTY_PROCESS.slice(3, 5);

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-[#e8e8e8] bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
    >
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-2 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
          PROCESS
        </p>
        <h3 className="mb-4 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
          소음순수술과정
        </h3>
        <p className="mb-14 text-center text-[14px] text-[#666]">
          정밀한 설계부터 봉합까지 단계별로 진행됩니다.
        </p>

        {/* 상단 3단계 + 1번 이미지 5등분 중 1~3 슬라이스 */}
        <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {topSteps.map((item, i) => (
            <div key={item.step} className="flex items-center gap-2 sm:gap-3">
              <article
                ref={(el) => { cardsRef.current[i] = el; }}
                className="min-w-[160px] max-w-[220px] flex-1 overflow-hidden rounded-2xl border border-[#f0e6e2] bg-[#F7EDE9] shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5ebe6]">
                  {/* 1번 이미지 가로 5등분: i번째 카드에 i번째 조각 표시 */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PROCESS_IMAGE}
                    alt=""
                    className="h-full w-[500%] max-w-none object-cover object-left"
                    style={{ marginLeft: `-${i * 100}%` }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const p = target.parentElement;
                      if (p && !p.querySelector(".process-fallback")) {
                        const fallback = document.createElement("div");
                        fallback.className = "process-fallback absolute inset-0 flex items-center justify-center bg-[#f0e6e2] text-[10px] text-[#999]";
                        fallback.textContent = `STEP ${item.step}`;
                        p.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <span className="mb-1 block font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-[var(--hip-accent-dark)]">
                    STEP {item.step}
                  </span>
                  <h4 className="font-[family-name:var(--font-heading-kr)] text-[16px] font-medium tracking-[0.04em] text-[#111]">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#666]">
                    {item.sub}
                  </p>
                </div>
              </article>
              {i < topSteps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>

        {/* 하단 2단계 — 1번 이미지 5등분 중 4~5 슬라이스 */}
        <div className="mt-6 flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 md:mt-8">
          {bottomSteps.map((item, i) => (
            <div key={item.step} className="flex items-center gap-2 sm:gap-3">
              <article
                ref={(el) => { cardsRef.current[3 + i] = el; }}
                className="min-w-[160px] max-w-[240px] flex-1 overflow-hidden rounded-2xl border border-[#f0e6e2] bg-[#F7EDE9] shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5ebe6]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PROCESS_IMAGE}
                    alt=""
                    className="h-full w-[500%] max-w-none object-cover object-left"
                    style={{ marginLeft: `-${(3 + i) * 100}%` }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const p = target.parentElement;
                      if (p && !p.querySelector(".process-fallback")) {
                        const fallback = document.createElement("div");
                        fallback.className = "process-fallback absolute inset-0 flex items-center justify-center bg-[#f0e6e2] text-[10px] text-[#999]";
                        fallback.textContent = `STEP ${item.step}`;
                        p.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <span className="mb-1 block font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-[var(--hip-accent-dark)]">
                    STEP {item.step}
                  </span>
                  <h4 className="font-[family-name:var(--font-heading-kr)] text-[16px] font-medium tracking-[0.04em] text-[#111]">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#666]">
                    {item.sub}
                  </p>
                </div>
              </article>
              {i < bottomSteps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
