"use client";

import Image from "next/image";
import { getLandingImage } from "@/utils/landingImages";

const HERO_IMAGE = getLandingImage(0);

/** 1단계: 메인이미지 + 메인 카피라이트 + Scroll Down (블랑드비 UX) */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-full min-h-screen w-full overflow-hidden bg-[var(--color-bg-dark)]"
      data-hero
    >
      <div
        className="absolute inset-0 z-0 origin-center will-change-transform"
        data-hero-bg
      >
        <Image
          src={HERO_IMAGE}
          alt="HOMMAGE"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-black/0"
        data-hero-overlay
        aria-hidden
      />
      {/* 메인 카피: HOMMAGE + The Best As Ever, 최고는 여전히 변함 없습니다. */}
      <div
        className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-white"
        data-hero-content
      >
        <h1 className="max-w-4xl text-center font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5rem)] font-normal tracking-[0.2em]">
          HOMMAGE
        </h1>
        <div className="mt-8 flex flex-col items-center gap-1 text-center">
          <span className="inline-block h-px w-24 bg-white/60" />
          <p className="font-[family-name:var(--font-en)] text-[clamp(0.9rem,1.5vw,1.1rem)] font-medium italic">
            The Best As Ever,
          </p>
          <p className="font-[family-name:var(--font-kr)] text-[clamp(0.8rem,1.2vw,1rem)] text-white/90">
            최고는 여전히 변함 없습니다.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="h-16 w-px overflow-hidden rounded-full bg-white/30">
          <div
            className="h-1/2 w-full origin-top rounded-full bg-white"
            data-hero-scroll-bar
          />
        </div>
        <span className="text-[10px] tracking-[0.2em] text-white/70">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
