"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "향상된 DeepSEE 기술",
    description: "실시간 초음파 영상을 통해 피부 깊이를 더욱 정확하게 확인하며 시술합니다.",
  },
  {
    title: "정밀한 에너지 전달",
    description: "SMAS층까지 정확한 에너지 전달로 더욱 효과적인 리프팅 결과를 제공합니다.",
  },
  {
    title: "빠른 시술 속도",
    description: "향상된 기술로 시술 시간을 단축하면서도 효과는 더욱 향상되었습니다.",
  },
  {
    title: "FDA 승인",
    description: "FDA 승인을 받은 안전하고 검증된 리프팅 시술입니다.",
  },
];

export default function UltheraProPrimeView() {
  const heroRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);

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
      const cards = featureRef.current?.querySelectorAll(".feature-card");
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

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${getLandingImage(5)})`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-white mb-6">
            Ulthera Pro Prime
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-white/90 leading-relaxed">
            최신 울쎄라 기술로<br />
            더욱 정확하고 효과적인 리프팅
          </p>
        </div>
      </section>

      {/* Intro */}
      <section
        ref={introRef}
        className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Ulthera Pro Prime
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            울쎄라 프로 프라임은 최신 울쎄라 기술을 적용한 리프팅 시술입니다.
            향상된 DeepSEE 기술로 실시간 초음파 영상을 통해 피부 깊이를 더욱 정확하게 확인하며,
            SMAS층까지 정확한 에너지 전달로 더욱 효과적인 리프팅 결과를 제공합니다.
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        ref={featureRef}
        className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-white p-8 rounded-lg shadow-sm border border-[#e8e8e8]"
              >
                <h3 className="text-xl font-medium text-[#111] mb-3">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{feature.description}</p>
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
            울쎄라 프로 프라임 시술에 대한 자세한 상담을 원하시면<br />
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
