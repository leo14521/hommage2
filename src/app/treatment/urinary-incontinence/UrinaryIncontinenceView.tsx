"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignatureHero } from "@/components/sections/SignatureHero";

gsap.registerPlugin(ScrollTrigger);

const TREATMENTS = [
  {
    title: "레이저 치료",
    description: "비침습 레이저를 이용하여 요도 주변 조직을 강화하고 요실금을 개선합니다.",
  },
  {
    title: "고주파 치료",
    description: "고주파 에너지를 이용하여 골반 근육을 강화하고 요실금을 치료합니다.",
  },
  {
    title: "비수술 치료",
    description: "수술 없이 레이저와 고주파를 활용하여 안전하고 효과적인 치료를 제공합니다.",
  },
  {
    title: "요실금 수술",
    description: "중등도 이상의 요실금에 대해 요도 밴드 수술, 질벽 성형술 등 수술적 치료를 제공합니다. 개인 상태에 맞는 수술 방법을 상담해 드립니다.",
  },
  {
    title: "근육 강화",
    description: "골반 근육을 강화하여 요실금을 예방하고 개선합니다.",
  },
];

export default function UrinaryIncontinenceView() {
  const introRef = useRef<HTMLElement>(null);
  const treatmentRef = useRef<HTMLElement>(null);

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
      const cards = treatmentRef.current?.querySelectorAll(".treatment-card");
      cards?.forEach((el, i) => {
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
              trigger: treatmentRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: treatmentRef, dependencies: [] }
  );

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Urinary Incontinence Care"
        titleKr="요실금 케어"
        description="비수술 요실금 치료로 일상생활의 불편함을 개선"
        imageIndex={3}
      />

      {/* Intro */}
      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Urinary Incontinence Care
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            요실금은 출산 후나 노화로 인해 골반 근육이 약해지면서 발생하는 증상입니다.
            오마쥬 클리닉에서는 레이저·고주파를 활용한 비수술 치료와 함께, 필요 시 요실금 수술까지 맞춤형으로 제공합니다.
            일상생활의 불편함을 안전하고 효과적으로 개선해 드립니다.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section
        ref={treatmentRef}
        className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            치료 방법
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TREATMENTS.map((treatment, idx) => (
              <div
                key={idx}
                className="treatment-card bg-white p-8 rounded-lg shadow-sm border border-[#e8e8e8]"
              >
                <h3 className="text-xl font-medium text-[#111] mb-3">{treatment.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1a1a1a] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] text-white mb-6">
            상담 및 예약
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            요실금 케어에 대한 자세한 상담을 원하시면<br />
            전문 상담사가 도와드리겠습니다.
          </p>
          <Link
            href="/community/contact"
            className="inline-block px-8 py-4 bg-white text-[#111] rounded-sm hover:bg-[var(--hip-accent)] hover:text-white transition-colors"
          >
            상담 예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
