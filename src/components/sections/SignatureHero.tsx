"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";

gsap.registerPlugin(ScrollTrigger);

interface SignatureHeroProps {
  title: string;
  titleKr?: string;
  description: string;
  imageIndex?: number;
}

/**
 * 시그니처 페이지 공통 히어로 — 토탈이레이즈 스타일
 */
export function SignatureHero({ title, titleKr, description, imageIndex = 0 }: SignatureHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !bgRef.current) return;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(bgRef.current, { y: self.progress * 80 });
        },
      });
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
        );
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[75vh] items-end overflow-hidden bg-white lg:min-h-[85vh]"
      aria-label={title}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] h-[130%] w-full bg-cover bg-center bg-no-repeat opacity-20 grayscale"
        style={{
          backgroundImage: `url(${getLandingImage(imageIndex)})`,
        }}
        aria-hidden
      />
      {/* 아래에서 위로 흰색 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" aria-hidden />
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-60" aria-hidden />

      <div ref={textRef} className="relative z-10 w-full px-6 pb-20 pt-28 lg:px-[var(--pad-global)] lg:pb-28 lg:pt-36">
        <div className="max-w-[900px]">
          <span className="mb-4 block font-[family-name:var(--font-display)] text-[11px] tracking-[0.4em] uppercase text-[#666]">
            SIGNATURE
          </span>
          <h1 className="font-[family-name:var(--font-en-display)] text-[clamp(36px,5.5vw,56px)] font-light leading-[1.2] tracking-tight text-[#111]">
            {title}
          </h1>
          {titleKr && (
            <p className="mt-2 font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.02em] text-[#111]">
              {titleKr}
            </p>
          )}
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-[#333] lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
