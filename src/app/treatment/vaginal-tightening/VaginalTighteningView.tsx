"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignatureHero } from "@/components/sections/SignatureHero";

gsap.registerPlugin(ScrollTrigger);

const METHODS = [
  {
    title: "레이저 타이트닝",
    description: "비침습 레이저를 이용하여 질 내벽의 콜라겐 생성을 촉진하고 탄력을 개선합니다.",
  },
  {
    title: "고주파 타이트닝",
    description: "고주파 에너지를 이용하여 질 근육을 강화하고 타이트닝 효과를 제공합니다.",
  },
  {
    title: "비수술 시술",
    description: "수술 없이 레이저와 고주파를 활용하여 안전하고 효과적인 타이트닝을 제공합니다.",
  },
  {
    title: "회복 기간 단축",
    description: "비수술 시술로 회복 기간이 짧고 일상생활에 지장이 없습니다.",
  },
];

export default function VaginalTighteningView() {
  const introRef = useRef<HTMLElement>(null);
  const methodRef = useRef<HTMLElement>(null);

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
      const cards = methodRef.current?.querySelectorAll(".method-card");
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
              trigger: methodRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: methodRef, dependencies: [] }
  );

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Vaginal Tightening"
        titleKr="질 타이트닝"
        description="레이저와 고주파를 활용한 비수술 질 타이트닝 시술"
        imageIndex={2}
      />

      {/* Intro */}
      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Vaginal Tightening
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            질 타이트닝은 출산 후나 노화로 인해 느슨해진 질을 탄력 있게 만드는 시술입니다.
            오마쥬 클리닉에서는 레이저와 고주파를 활용한 비수술 질 타이트닝 시술을 제공합니다.
            수술 없이 안전하고 효과적인 타이트닝을 통해 더욱 자신감 있는 삶을 만들어드립니다.
          </p>
        </div>
      </section>

      {/* Methods */}
      <section
        ref={methodRef}
        className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            시술 방법
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {METHODS.map((method, idx) => (
              <div
                key={idx}
                className="method-card bg-white p-8 rounded-lg shadow-sm border border-[#e8e8e8]"
              >
                <h3 className="text-xl font-medium text-[#111] mb-3">{method.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{method.description}</p>
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
            질 타이트닝 시술에 대한 자세한 상담을 원하시면<br />
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
