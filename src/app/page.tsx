"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CURATION_WOMEN,
  CURATION_SKIN,
  KNOWHOW_PANELS,
  REP_ITEMS,
  STATS,
  CARE_ITEMS,
  YT_MAIN_ID,
  YT_VIDEOS,
} from "@/config/homePage";
gsap.registerPlugin(ScrollTrigger);

/** 의료진 소개 */
const HOME_DOCTORS = [
  {
    id: "park",
    position: "원장",
    nameKo: "박유나",
    nameEn: "Park Yuna",
    image: "/dr-park.png",
    catchCopy: "산부인과 진료와 소음순 성형의 전문가\n박유나 원장",
    points: [
      "산부인과 전문의로서 여성 건강과 아름다움을 함께 케어합니다.",
      "소음순 성형·여성건강 시술로 많은 분의 만족을 이끌어 온 원장.",
      "편안한 상담과 정확한 진단으로 당신만의 솔루션을 제안합니다.",
    ],
    oneLiner: "당신의 이야기를 듣고, 함께 결정해 나가겠습니다.",
    instagram: "#",
    youtube: "#",
  },
  {
    id: "kim",
    position: "부원장",
    nameKo: "김현빈",
    nameEn: "Kim Hyunbin",
    image: "/dr-kim.png",
    catchCopy: "피부과 시술의 전문가\n김현빈 부원장",
    points: [
      "피부과 시술 전담 부원장으로 리프팅·보톡스·필러·레이저 등 다수의 시술 경험.",
      "피부 재생·모공·흉터·미백 등 맞춤 케어로 자연스러운 결과를 추구합니다.",
      "상담부터 시술까지 꼼꼼하고 세심하게 케어합니다.",
    ],
    oneLiner: "당신의 피부 고민을 이해하고, 가장 적합한 방법을 제안합니다.",
    instagram: "#",
    youtube: "#",
  },
] as const;

export default function HomePage() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [curationTab, setCurationTab] = useState<"women" | "skin">("women");
  const [baUnlocked, setBaUnlocked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const mainYtId = YT_MAIN_ID;
  const [ytMainId, setYtMainId] = useState(mainYtId);
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const screenBgRef = useRef<HTMLDivElement>(null);
  const mainSectionsRef = useRef<HTMLDivElement>(null);
  const heroSequenceRef = useRef<HTMLDivElement>(null);
  const screenTxtRef = useRef<HTMLDivElement>(null);
  const doctorScrollRef = useRef<HTMLDivElement>(null);

  // ---------- Loader: GSAP timeline 후 숨김 ----------
  useGSAP(
    () => {
      if (!loaderRef.current) return;
      const logo = loaderRef.current.querySelector(".loader-logo");
      const line = loaderRef.current.querySelector(".loader-line");
      const tl = gsap.timeline();
      tl.to(logo, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .to(line, { width: "100%", duration: 0.8 })
        .to(loaderRef.current, { y: "-100%", duration: 1.2, delay: 0.2, ease: "power4.inOut" })
        .add(() => setLoaderVisible(false), 0);
    },
    { dependencies: [] }
  );

  // ---------- 메인 화면: 배경 패럴랙스 + 히어로 시퀀스 (이미지 → 텍스트 디졸브 → 중앙 이미지 → 카피) ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const bg = screenBgRef.current;
      const heroSeq = heroSequenceRef.current;
      if (!bg) return;

      const tweens: (gsap.core.Tween | gsap.core.Timeline)[] = [];

      const n1 = bg.querySelector<HTMLElement>(".screenBg-n1");
      const n2 = bg.querySelector<HTMLElement>(".screenBg-n2");
      const n3 = bg.querySelector<HTMLElement>(".screenBg-n3");
      [n1, n2, n3].forEach((layer, i) => {
        if (!layer) return;
        const y = (i + 1) * 12;
        const t = gsap.to(layer, {
          yPercent: -y,
          ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "bottom top", scrub: 1.2 },
        });
        tweens.push(t);
      });

      if (heroSeq) {
        const seqBg = heroSeq.querySelector<HTMLElement>("[data-seq-bg]");
        const seqText = heroSeq.querySelector<HTMLElement>("[data-seq-text]");
        const seqCopy = heroSeq.querySelector<HTMLElement>("[data-seq-copy]");
        const seqHint = heroSeq.querySelector<HTMLElement>("[data-seq-hint]");

        gsap.set(seqText, { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSeq,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1,
          },
        });

        if (seqHint) tl.to(seqHint, { opacity: 0, duration: 0.1 }, 0);
        if (seqText) tl.to(seqText, { opacity: 0, duration: 0.2, ease: "power2.in" }, 0.15);
        if (seqBg) tl.to(seqBg, { opacity: 0, duration: 0.12 }, 0.35);
        if (seqCopy) tl.fromTo(seqCopy, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" }, 0.45);

        tweens.push(tl);
      }

      return () => {
        tweens.forEach((t) => t.kill());
      };
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 스크롤 다운 인디케이터 무한 바운스 ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const hint = document.querySelector<HTMLElement>(".scrollDown [data-bounce]");
      if (hint) {
        gsap.to(hint, {
          y: 8,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 히어로 지나가면 screenBg·screenTxt 숨김 (플로팅 이미지 해결) ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const bg = screenBgRef.current;
      const txt = screenTxtRef.current;
      const about = document.querySelector("#about");
      if (!bg || !txt || !about) return;
      const st = ScrollTrigger.create({
        trigger: about,
        start: "top top",
        onEnter: () => gsap.to([bg, txt], { opacity: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to([bg, txt], { opacity: 1, duration: 0.4 }),
      });
      return () => st.kill();
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 의료진: 스크롤 시 오른쪽→왼쪽 디졸브/슬라이드, 기존 정보 투명화 ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const section = doctorScrollRef.current;
      if (!section) return;
      const blocks = section.querySelectorAll<HTMLElement>(".doctor-block");
      const tweens: (gsap.core.Tween | gsap.core.Timeline)[] = [];
      blocks.forEach((block) => {
        const layer1 = block.querySelector<HTMLElement>("[data-doc-layer='1']");
        const layer2 = block.querySelector<HTMLElement>("[data-doc-layer='2']");
        if (!layer1) return;
        if (layer2) gsap.set(layer2, { opacity: 0, x: 60 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
          },
        });
        tl.to(layer1, { opacity: 0, x: -50, duration: 0.35, ease: "power2.inOut" }, 0.4);
        if (layer2) tl.fromTo(layer2, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }, 0.4);
        tweens.push(tl);
      });
      return () => tweens.forEach((t) => t.kill());
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- Scroll reveal (reveal-text) — 생성한 트리거만 정리 ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const els = document.querySelectorAll<HTMLElement>(".reveal-text");
      const triggers: ScrollTrigger[] = [];
      els.forEach((el) => {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
          },
        });
        triggers.push(st);
        gsap.set(el, { y: 50, opacity: 0 });
      });
      return () => triggers.forEach((t) => t.kill());
    },
    { dependencies: [loaderVisible] }
  );

  const curationCards = curationTab === "women" ? CURATION_WOMEN : CURATION_SKIN;

  return (
    <>
      {/* Loader */}
      {loaderVisible && (
        <div
          ref={loaderRef}
          className="loader-wrap fixed inset-0 z-[9000] flex flex-col items-center justify-center bg-[var(--color-bg-deep)]"
          role="status"
          aria-live="polite"
          aria-label="로딩 중"
        >
          <img src="/logo-hommage.png" alt="Hommage Clinic" className="loader-logo h-12 w-auto object-contain opacity-0 translate-y-5" width={200} height={48} />
          <div className="loader-line mt-5 h-px w-0 bg-[#111] transition-[width] duration-500 ease-out" />
        </div>
      )}

      <main className="relative" ref={contentWrapperRef}>
        {/* screenBg: 꽃/히어로 톤 그라데이션만 사용 (landing 이미지 미사용으로 여자 이미지 비노출) */}
        <div className="screenBg fixed inset-0 z-0" ref={screenBgRef}>
          <div
            className="screenBg-n1 absolute inset-0 bg-cover bg-center"
            style={{ background: "linear-gradient(160deg, #2c2a28 0%, #1a1918 50%, #0f0e0d 100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" aria-hidden />
          <div
            className="screenBg-n2 absolute inset-0 bg-cover bg-center"
            style={{ background: "linear-gradient(180deg, #3d3936 0%, #2a2725 40%, #1f1d1b 100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" aria-hidden />
          <div
            className="screenBg-n3 absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-1000"
            style={{ background: "linear-gradient(150deg, #252220 0%, #1a1918 100%)" }}
          />
        </div>

        {/* 힙 마퀴 — 골드 톤 */}
        <div className="screenTxt fixed left-0 right-0 bottom-8 z-[2] overflow-hidden pointer-events-none" ref={screenTxtRef}>
          <div className="marquee flex w-max" style={{ animation: "marquee 25s linear infinite" }}>
            <span className="marquee-cont font-[family-name:var(--font-en-title)] text-[clamp(10px,2vw,14px)] tracking-[0.45em] whitespace-nowrap px-4 text-white/20 uppercase" style={{ fontWeight: 300 }}>
              THE PRIVATE MASTERPIECE — HOMMAGE —
            </span>
            <span className="marquee-cont font-[family-name:var(--font-en-title)] text-[clamp(10px,2vw,14px)] tracking-[0.45em] whitespace-nowrap px-4 text-white/20 uppercase" style={{ fontWeight: 300 }}>
              THE PRIVATE MASTERPIECE — HOMMAGE —
            </span>
          </div>
        </div>

        {/* 레퍼런스 인터랙션: 스크롤 시 이미지 → 텍스트 디졸브 → 중앙 이미지 → 카피 (핀 + scrub) */}
        <div id="smooth-content" className="relative z-10" ref={mainSectionsRef}>
          <div
            id="hero-sequence"
            ref={heroSequenceRef}
            className="hero-sequence relative h-screen w-full overflow-hidden"
          >
            {/* Phase 0: hero.mp4 재생 + 어두운 배경, 메인 카피 바로 등장 */}
            <div className="hero-seq-bg absolute inset-0 z-0" data-seq-bg>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                src="/hero.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,transparent_0%,rgba(0,0,0,0.25)_100%)]" aria-hidden />
            </div>

            {/* Phase 1: 메인 카피 — 힙한 타이포 + 악센트 라인 */}
            <div className="hero-seq-text absolute inset-0 z-10 flex items-center justify-center px-6" data-seq-text>
              <div className="text-center">
                <p className="font-[family-name:var(--font-en-display)] text-white text-[clamp(38px,8.5vw,76px)] tracking-[0.04em] uppercase" style={{ fontWeight: 400 }}>
                  HOMMAGE
                </p>
                <span className="mt-4 block h-px w-16 mx-auto bg-white opacity-80" aria-hidden />
                <p className="mt-4 font-[family-name:var(--font-en-title)] text-white/95 text-[clamp(16px,2.5vw,22px)] tracking-[0.2em] uppercase italic" style={{ fontWeight: 300 }}>
                  The Best As Ever,
                </p>
                <p className="mt-2 font-[family-name:var(--font-kr-body)] text-white/90 text-base md:text-lg tracking-tight">
                  최고는 여전히 변함 없습니다.
                </p>
              </div>
            </div>

            {/* Phase 2: logo-only-w.png 로고 — 미니멀리즘 (중앙 반복 심볼 단계 제거) */}
            <div className="hero-seq-copy absolute inset-0 z-10 flex items-center justify-center px-6 opacity-0" data-seq-copy>
              <div className="hero-copy-inner relative z-10 flex max-w-[320px] flex-col items-center justify-center text-center md:max-w-[380px]">
                <img
                  src="/logo-only-w.png"
                  alt="HOMMAGE"
                  width={280}
                  height={120}
                  className="h-auto max-h-[100px] w-full max-w-[240px] object-contain object-center drop-shadow-md md:max-h-[120px] md:max-w-[280px]"
                  fetchPriority="high"
                />
                <p className="mt-6 font-[family-name:var(--font-kr-body)] text-[14px] leading-relaxed text-white/90">
                  오마쥬, 나의 자부심이 되는 곳.
                  <br />
                  에너지를 얻고 리프레쉬할 수 있는 곳, 오히려 아름다움은 덤.
                </p>
              </div>
            </div>

            {/* 스크롤 힌트 — 힙 악센트 (바운스 타겟) */}
            <div className="scrollDown absolute bottom-12 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 opacity-90" data-seq-hint>
              <span data-bounce className="block h-8 w-px bg-gradient-to-b from-white to-transparent opacity-80" aria-hidden />
              <p className="text-white/80 text-[10px] tracking-[0.35em] uppercase" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>Scroll</p>
            </div>
          </div>
        </div>

        {/* Philosophy — 힙 그라데이션 + 골드 악센트 */}
        <section
          id="about"
          className="section-philo hip-grain relative overflow-hidden px-6 py-20 lg:px-[var(--pad-global)] lg:py-24"
        >
          <div className="absolute inset-0 bg-white" aria-hidden />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black opacity-30" aria-hidden />
          <div className="philo-text-wrap relative mx-auto max-w-[720px]">
            <span className="sec-sub philo-sub mb-8 block font-[family-name:var(--font-en-title)] text-[11px] tracking-[0.35em] uppercase text-black relative pl-12 before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-black" style={{ fontWeight: 300 }}>
              OUR PHILOSOPHY
            </span>
            <h2 className="philo-tit font-[family-name:var(--font-kr-heading)] text-[clamp(26px,3.5vw,38px)] font-medium leading-[1.5] text-black mb-10 tracking-tight">
              아름다움은 만들어내는 것이 아니라,
              <br />
              당신 안에 숨겨진 빛을 발견하는 것입니다.
            </h2>
            <div className="philo-desc mb-14 font-[family-name:var(--font-kr-body)] text-[15px] font-normal leading-[1.85] text-black/70">
              <p className="mb-5">
                오마쥬 의원은 진부한 공장형 시술을 단호히 거부합니다. 당신의 고유한 얼굴이 지닌 서사에 집중합니다.
              </p>
              <p className="mb-5">
                갤러리에서 유일한 예술 작품을 감상하듯, 오직 당신만을 위한 프라이빗한 의학적 큐레이션을 경험해 보세요.
              </p>
              <p>시간이 흘러도 변치 않는 가치, 본연의 우아함을 찾아드리는 여정을 약속합니다.</p>
            </div>
            <div className="philo-footer flex items-center gap-4">
              <div className="official-seal flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white p-1 -rotate-12">
                <img src="/logo-only.png" alt="Hommage" className="h-full w-full object-contain" width={32} height={32} />
              </div>
              <span className="font-[family-name:var(--font-en-title)] text-[14px] tracking-wide text-black/70" style={{ fontWeight: 300 }}>Park Yuna, Representative Director, Hommage Clinic</span>
            </div>
          </div>
        </section>

        {/* 대표 시술 — 나를위한 대표진료과목 참고 */}
        <section
          id="rep"
          className="section-rep hip-grain relative bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-20"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black opacity-20" aria-hidden />
          <div className="mx-auto max-w-[1200px]">
            <div className="sec-head mb-12">
              <span className="text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>REPRESENTATIVE</span>
              <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(22px,2.8vw,32px)] font-medium tracking-[0.06em] text-black">
                오마쥬 <span className="font-bold">대표 시술</span>
              </h3>
            </div>
            <div className="rep-grid grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {REP_ITEMS.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="rep-card group flex flex-col items-center rounded-sm border border-black/10 bg-white p-6 text-center transition-all duration-300 hover:border-black hover:shadow-lg"
                >
                  <span className="mb-2 font-[family-name:var(--font-en-title)] text-[12px] tracking-[0.2em] text-black/60 uppercase" style={{ fontWeight: 300 }}>{item.en}</span>
                  <h4 className="font-[family-name:var(--font-kr-body)] text-[17px] font-semibold tracking-[0.04em] text-black transition-colors">
                    {item.title}
                  </h4>
                  <span className="mt-3 inline-block h-px w-8 bg-black opacity-0 group-hover:opacity-70 transition-opacity" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 의료진 소개 — 힙 톤 */}
        <section id="doctor" ref={doctorScrollRef} className="relative bg-[var(--hip-bg)]">
          {HOME_DOCTORS.map((doc) => (
            <div key={doc.id} className="doctor-block relative flex min-h-screen w-full flex-col overflow-hidden bg-white lg:flex-row lg:items-center">
              <div className="doctor-photo relative h-[40vh] w-full flex-shrink-0 lg:h-full lg:min-h-screen lg:w-[45%]">
                <Image src={doc.image} alt={doc.nameKo} fill className="object-cover object-center" sizes="50vw" />
                <div className="absolute inset-0 bg-black/5" aria-hidden />
                <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-white to-transparent pointer-events-none" aria-hidden />
              </div>
              <div className="doctor-copy relative flex flex-1 items-center overflow-hidden px-6 py-12 lg:min-h-screen lg:px-14 lg:py-16">
                {/* 배경 워터마크: 레이어 뒤에 고정, 한글 서체로 정돈 */}
                <p className="doctor-deco pointer-events-none select-none absolute right-4 bottom-4 z-0 font-[family-name:var(--font-display)] text-[72px] font-light italic leading-none tracking-wide text-[#111]/[0.06] lg:right-10 lg:bottom-10 lg:text-[100px]">
                  {doc.id === "park" ? "Dr. Park" : "Dr. Kim"}
                </p>

                <div data-doc-layer="1" className="copy-layer absolute inset-0 z-10 flex flex-col justify-center px-6 py-12 lg:px-14 lg:py-16">
                  <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-[#111]">{doc.position}</p>
                  <h2 className="mt-2 flex flex-wrap items-baseline gap-2">
                    <span className="font-[family-name:var(--font-kr-serif)] text-[clamp(28px,4vw,40px)] font-medium text-[#111]">{doc.nameKo}</span>
                    <span className="font-[family-name:var(--font-display)] text-base tracking-wide text-[#666]">{doc.nameEn}</span>
                  </h2>
                  <ul className="mt-6 flex items-center gap-3">
                    <li className="text-[11px] text-[#888]">SNS</li>
                    <li>
                      <a href={doc.instagram} target="_blank" rel="noopener noreferrer nofollow" className="text-[#111] hover:opacity-70" aria-label="Instagram">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={doc.youtube} target="_blank" rel="noopener noreferrer nofollow" className="text-[#111] hover:opacity-70" aria-label="Youtube">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-doc-layer="2" className="copy-layer absolute inset-0 z-10 flex flex-col justify-center px-6 py-12 lg:px-14 lg:py-16">
                  <h3 className="font-[family-name:var(--font-kr-serif)] text-[clamp(17px,2.2vw,20px)] font-medium leading-relaxed text-[#333] whitespace-pre-line">{doc.catchCopy}</h3>
                  <ul className="mt-8 space-y-3 font-[family-name:var(--font-pretendard)] text-[15px] leading-relaxed text-[#555]">
                    {doc.points.map((point, i) => (
                      <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[0.45em] before:h-0.5 before:w-0.5 before:rounded-full before:bg-[#111]">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link href="/doctor" className="inline-flex items-center rounded border border-[#111] px-4 py-2 font-[family-name:var(--font-display)] text-xs tracking-[0.1em] text-[#111] transition-all duration-300 hover:bg-[#111] hover:text-white">
                      의료진 소개
                    </Link>
                    <Link href="/blog" className="inline-flex items-center rounded border border-black px-4 py-2 font-[family-name:var(--font-en-title)] text-xs tracking-[0.1em] text-black transition-all duration-300 hover:bg-black hover:text-white uppercase" style={{ fontWeight: 300 }}>
                      블로그·칼럼
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Curation — 힙 카드 + 골드 탭 */}
        <section
          id="curation"
          className="reveal-text switcher-wrap hip-grain relative bg-white px-[var(--pad-global)] py-24 lg:py-32"
        >
          <div className="sec-head mx-auto mb-12 text-center">
            <span className="sec-label mb-3 block font-[family-name:var(--font-en-title)] text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontWeight: 300 }}>
              PRIVATE CURATION
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-[clamp(22px,3vw,28px)] font-medium tracking-[0.08em] text-black">
              당신에게 필요한 솔루션
            </h3>
          </div>
          <div className="switcher-nav mb-14 flex justify-center gap-10 border-b border-[var(--hip-bg-deep)] pb-5">
            <button
              type="button"
              onClick={() => setCurationTab("women")}
              className={`font-[family-name:var(--font-en-title)] text-[15px] tracking-[0.12em] transition-all duration-300 lg:text-[18px] uppercase ${
                curationTab === "women" ? "text-black border-b-2 border-black -mb-[13px] pb-5" : "text-black/40 hover:text-black"
              }`}
              style={{ fontWeight: curationTab === "women" ? 500 : 300 }}
            >
              Women&apos;s Boutique
            </button>
            <button
              type="button"
              onClick={() => setCurationTab("skin")}
              className={`font-[family-name:var(--font-en-title)] text-[15px] tracking-[0.12em] transition-all duration-300 lg:text-[18px] uppercase ${
                curationTab === "skin" ? "text-black border-b-2 border-black -mb-[13px] pb-5" : "text-black/40 hover:text-black"
              }`}
              style={{ fontWeight: curationTab === "skin" ? 500 : 300 }}
            >
              Aesthetic Suite
            </button>
          </div>
          <div className="card-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curationCards.map((card, i) => (
              <Link
                key={i}
                href={card.href ?? "#curation"}
                className={`lux-card group relative flex flex-col rounded-sm border p-8 transition-all duration-300 hover:shadow-[var(--shadow-hip)] ${
                  card.highlight
                    ? "border-[var(--hip-accent)]/40 bg-white border-l-4 border-l-[var(--hip-accent)]"
                    : "border-[#e8e8e8] bg-white hover:border-[var(--hip-accent)]/30"
                }`}
              >
                <h4 className="c-tit font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.06em] text-[#111] mb-3">
                  {card.title}
                </h4>
                <p className="c-desc mb-6 line-clamp-2 font-[family-name:var(--font-pretendard)] text-[14px] leading-relaxed text-[#555]">
                  {card.highlight && (
                    <span className="font-medium text-[var(--hip-accent-dark)]">[Signature] </span>
                  )}
                  {card.desc}
                </p>
                <div className="c-tags mt-auto flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/20 px-3 py-1 font-[family-name:var(--font-en-title)] text-[11px] tracking-wider text-black/60 transition-colors group-hover:border-black group-hover:text-black uppercase"
                      style={{ fontWeight: 300 }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 숫자 인포그래픽 — 나를위한 Specialist/A/C/Career/Case 참고 */}
        <section className="section-stats relative bg-gradient-to-br from-[#1a1a1a] to-[#252525] px-6 py-20 lg:px-[var(--pad-global)] lg:py-24">
          <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30" aria-hidden />
          <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="stats-card text-center">
                <p className="font-[family-name:var(--font-en-display)] text-[clamp(36px,5vw,52px)] font-light tracking-tight text-white" style={{ fontWeight: 400 }}>
                  <span className="text-white">{s.num}</span>
                  {s.unit}
                </p>
                <h4 className="mt-2 font-[family-name:var(--font-en-title)] text-[15px] tracking-[0.12em] text-white uppercase" style={{ fontWeight: 300 }}>{s.label}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-[#999]">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Knowhow — 힙 카드 + 좌측 악센트 */}
        <section
          id="knowhow"
          className="reveal-text section-knowhow hip-grain relative bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-20"
        >
          <div className="sec-head mx-auto mb-12 max-w-[640px] text-center">
            <span className="text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>HOMMAGE EXPERTISE</span>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] font-normal tracking-[0.08em] text-[#111]">
              독보적인 시술 노하우
            </h3>
          </div>
          <div className="kh-container mx-auto grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-3">
            {KNOWHOW_PANELS.map((panel, i) => (
              <div
                key={i}
                className="kh-card group relative flex flex-col rounded-sm border border-black/10 bg-white p-8 pl-10 transition-all duration-300 hover:shadow-lg hover:border-black/30"
              >
                <span className="absolute left-0 top-8 bottom-8 w-1 rounded-r bg-black opacity-30 group-hover:opacity-100 transition-opacity" aria-hidden />
                <span className="mb-4 font-[family-name:var(--font-en-title)] text-[12px] tracking-[0.3em] text-black uppercase" style={{ fontWeight: 300 }}>{panel.num}</span>
                <h4 className="mb-4 font-[family-name:var(--font-kr-body)] text-[18px] font-semibold tracking-[0.06em] text-black">
                  {panel.title}
                </h4>
                <p className="font-[family-name:var(--font-pretendard)] text-[14px] leading-relaxed text-[#555]">
                  {panel.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Care 시스템 — 나를위한 5가지 케어 참고 */}
        <section
          id="care"
          className="section-care hip-grain relative overflow-hidden bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-24"
        >
          <div className="absolute inset-0 bg-white" aria-hidden />
          <div className="relative mx-auto max-w-[1000px]">
            <div className="sec-head mb-14 text-center">
              <span className="text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>CARE SYSTEM</span>
              <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(24px,3vw,34px)] font-medium tracking-[0.06em] text-black">
                오마쥬 <span className="font-bold">케어</span> 시스템
              </h3>
            </div>
            <ul className="care-list grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {CARE_ITEMS.map((c, i) => (
                <li
                  key={i}
                  className="care-item flex flex-col rounded-sm border border-black/10 bg-white p-6 pl-8 transition-all duration-300 hover:border-black/30 hover:shadow-lg"
                >
                  <span className="mb-3 font-[family-name:var(--font-en-title)] text-[12px] tracking-[0.25em] text-black uppercase" style={{ fontWeight: 300 }}>{c.num}</span>
                  <h4 className="font-[family-name:var(--font-kr-body)] text-[16px] font-semibold tracking-[0.04em] text-black">{c.title}</h4>
                  <p className="mt-2 font-[family-name:var(--font-kr-body)] text-[13px] leading-relaxed text-black/70">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* YouTube */}
        <section
          id="media"
          className="reveal-text section-yt bg-[#f5f5f5] px-[var(--pad-global)] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-[1800px]">
            <div className="sec-head mb-16 text-center">
              <span className="sec-sub block text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>
                슬기로운 여성생활
              </span>
              <h3 className="sec-tit font-[family-name:var(--font-kr-heading)] text-[clamp(28px,3.5vw,40px)] font-medium tracking-[0.06em] text-black">
                오마쥬 의원 유튜브
              </h3>
            </div>
            <div className="yt-container grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr] lg:items-stretch">
              <div className="yt-main-frame relative aspect-video w-full overflow-hidden rounded bg-black shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(https://img.youtube.com/vi/${mainYtId}/maxresdefault.jpg), url(https://img.youtube.com/vi/${mainYtId}/sddefault.jpg)` }}
                  aria-hidden
                />
                <iframe
                  key={ytMainId}
                  id="mainPlayer"
                  src={`https://www.youtube.com/embed/${ytMainId || mainYtId}?rel=0`}
                  title="오마쥬 의원 유튜브"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="relative z-10 h-full w-full bg-black"
                />
              </div>
              <div className="yt-list flex flex-col justify-between gap-4">
                {YT_VIDEOS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setYtMainId(v.id)}
                    className="yt-item flex flex-1 items-center gap-4 rounded border border-[#eee] bg-white p-4 text-left transition-all hover:border-[#111] hover:shadow-md"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                      alt=""
                      className="yt-thumb w-[40%] flex-shrink-0 rounded object-cover aspect-video"
                    />
                    <div className="yt-info flex flex-col justify-center">
                      <h5 className="yt-tit line-clamp-2 text-[15px] font-medium leading-snug text-[var(--color-text-primary)]">
                        {v.title}
                      </h5>
                      <span className="yt-meta text-[12px] text-[var(--color-text-muted)]">{v.meta}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section
          id="ba"
          className="reveal-text section-ba bg-white px-[var(--pad-global)] py-24 text-center lg:py-32"
        >
          <div className="sec-head mx-auto mb-12">
            <span className="text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>REAL RESULTS</span>
            <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(28px,3.5vw,40px)] font-medium tracking-[0.06em] text-black">
              오마쥬 변화의 기록
            </h3>
            <p className="mt-2 text-[var(--color-text-muted)]">수천 건의 데이터로 증명하는 독보적인 차이</p>
          </div>
          <div className={`ba-lock-zone relative mx-auto max-w-[1100px] overflow-hidden rounded-lg ${!baUnlocked ? "locked" : ""}`}>
            {!baUnlocked && (
              <div className="ba-guard-overlay absolute inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-xl">
                <div className="login-dialog max-w-[400px] w-[90%] rounded border border-black/10 bg-white/95 p-10 text-center shadow-xl backdrop-blur-md">
                  <div className="mb-4 text-2xl text-[#333]">🔒</div>
                  <h4 className="font-[family-name:var(--font-kr-serif)] text-[22px] text-[#111] mb-2">
                    전후 사진 확인하기
                  </h4>
                  <p className="text-[14px] text-[#666] leading-relaxed mb-6">
                    의료법 제 56조에 의거하여
                    <br />
                    로그인 후 열람이 가능합니다.
                  </p>
                  <button
                    type="button"
                    onClick={() => setBaUnlocked(true)}
                    className="btn-login w-full bg-[#111] py-4 px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    전후 사진 확인하기
                  </button>
                  <p className="mt-4 text-[11px] text-[#999]">
                    * 민감한 신체 부위가 포함되어 있어 모자이크 처리되었습니다.
                  </p>
                </div>
              </div>
            )}
            <div className={`relative transition-all duration-500 ${!baUnlocked ? "blur-[15px] opacity-60 scale-[0.98]" : ""}`}>
              <div className="ba-case-wrap mx-auto max-w-[1000px] bg-white p-5 shadow-lg">
                <div className="ba-info mb-8 text-center">
                  <h4 className="font-[family-name:var(--font-display)] text-[32px] text-[#222]">Signature Lifting</h4>
                  <span className="text-[14px] text-[#888]">울쎄라 + 튠페이스 복합 시술</span>
                </div>
                <BeforeAfterCompare />
              </div>
            </div>
          </div>
        </section>

        {/* Form — 힙 배경 + 악센트 버튼 */}
        <section className="section-db hip-grain relative border-t border-black/10 bg-white px-[var(--pad-global)] py-24 lg:py-32">
          <div className="db-wrap relative mx-auto max-w-[800px]">
            <div className="sec-head text-center">
              <span className="text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontFamily: 'var(--font-en-title)', fontWeight: 300 }}>QUICK CONSULTATION</span>
              <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(26px,3.5vw,38px)] font-medium tracking-[0.06em] text-black">
                아름다움의 시작을 함께하세요
              </h3>
              <p className="mt-2 text-[14px] text-[#666]">
                빠른 상담 신청을 남겨주시면 전문 상담 실장이 연락드립니다.
              </p>
            </div>
            <form
              className="db-form-grid mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
            >
              <input
                type="text"
                placeholder="성함"
                required
                disabled={formSubmitted}
                className="form-field w-full border-b border-[#ddd] bg-transparent py-4 text-[16px] text-[#111] placeholder:text-[#999] focus:border-[var(--hip-accent)] disabled:opacity-60"
              />
              <input
                type="tel"
                placeholder="연락처 (010-0000-0000)"
                required
                disabled={formSubmitted}
                className="form-field w-full border-b border-[#ddd] bg-transparent py-4 text-[16px] text-[#111] placeholder:text-[#999] focus:border-[var(--hip-accent)] disabled:opacity-60"
              />
              <select className="form-field form-full col-span-1 w-full border-b border-[#ddd] bg-transparent py-4 text-[16px] text-[#555] md:col-span-2 focus:border-[var(--hip-accent)] disabled:opacity-60" disabled={formSubmitted}>
                <option value="">관심 시술을 선택해주세요</option>
                <option value="lifting">리프팅 (울쎄라/온다/튠페이스)</option>
                <option value="skin">스킨부스터 (쥬브젠/리쥬란)</option>
                <option value="body">바디 컨투어링 (튠바디/리뉴비온)</option>
                <option value="etc">기타 문의</option>
              </select>
              <textarea
                rows={3}
                placeholder="문의사항을 남겨주세요"
                className="form-field form-full col-span-1 w-full border-b border-[#ddd] bg-transparent py-4 text-[16px] text-[#111] md:col-span-2 focus:border-[var(--hip-accent)] disabled:opacity-60"
                disabled={formSubmitted}
              />
              <button
                type="submit"
                disabled={formSubmitted}
                className="btn-submit col-span-1 mt-6 w-full rounded-sm bg-[#111] py-5 text-center text-[16px] font-medium tracking-[0.1em] text-white transition-all duration-300 hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)] disabled:bg-[var(--hip-accent)] disabled:cursor-default md:col-span-2"
              >
                {formSubmitted ? "접수되었습니다" : "상담 신청하기"}
              </button>
            </form>
          </div>
        </section>

        {/* 지도 + 진료시간·오시는 길 — 나를위한 푸터 참고 */}
        <section id="map" className="map-section relative bg-[#0f0f0f]">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1fr)_1.6fr]">
            <div className="map-info flex flex-col justify-center px-6 py-12 lg:px-[var(--pad-global)] lg:py-16">
              <h3 className="mb-8 font-[family-name:var(--font-display)] text-[18px] tracking-[0.12em] text-white">진료시간 · 오시는 길</h3>
              <ul className="space-y-5 text-[14px] text-[#bbb]">
                <li>
                  <span className="text-[#888]">평일</span>
                  <span className="ml-2">AM 10:00 ~ PM 07:30</span>
                  <br />
                  <small className="text-[12px] text-[#666]">매일 야간진료</small>
                </li>
                <li>
                  <span className="text-[#888]">토요일</span>
                  <span className="ml-2">AM 10:00 ~ PM 03:00</span>
                </li>
                <li>
                  <span className="text-[#888]">Tel</span>
                  <span className="ml-2 text-[var(--hip-accent)]">02-543-4842</span>
                </li>
                <li className="pt-2 text-[12px] text-[#666]">일요일 및 공휴일 휴진</li>
              </ul>
              <p className="mt-8 text-[14px] leading-relaxed text-[#999]">
                서울 강남구 도산대로 67길 13-5
                <br />
                <span className="text-[12px] text-[#666]">Hommage 빌딩 전층</span>
              </p>
            </div>
            <div className="relative h-[360px] w-full overflow-hidden bg-[#eee] lg:h-[480px]">
              <div className="relative h-full w-full grayscale [&>iframe]:grayscale">
                <iframe
                  title="오마쥬 의원 오시는 길"
                  src="https://maps.google.com/maps?q=서울+강남구+도산대로+67길+13-5&output=embed&hl=ko"
                  className="absolute inset-0 h-full w-full border-0 grayscale"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 lg:left-6 lg:right-auto lg:justify-start">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=서울+강남구+도산대로+67길+13-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border-2 border-white/90 bg-[#111] px-6 py-3 text-sm tracking-[0.08em] text-white transition-all duration-300 hover:bg-[var(--hip-accent-dark)] hover:border-[var(--hip-accent)]"
                  >
                    구글 지도에서 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

function BeforeAfterCompare() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);

  const updateView = useCallback(
    (clientX: number) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      let pos = clientX - rect.left;
      if (pos < 0) pos = 0;
      if (pos > rect.width) pos = rect.width;
      setPercent((pos / rect.width) * 100);
    },
    []
  );

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onMove = (e: MouseEvent) => {
      if (e.buttons === 1) updateView(e.clientX);
    };
    const onTouch = (e: TouchEvent) => {
      updateView(e.touches[0].clientX);
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("touchmove", onTouch);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("touchmove", onTouch);
    };
  }, [updateView]);

  return (
    <div
      ref={wrapRef}
      className="ba-compare-view relative h-[350px] w-full cursor-col-resize select-none overflow-hidden rounded bg-[#f0f0f0] lg:h-[600px]"
      onClick={(e) => updateView(e.clientX)}
    >
      <div
        className="ba-img after absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage:
            "url('https://www.braunps.co.kr/data/file/m09_01/file2/3543616225_KlEbe9uA_d87c6329890359ad02de72e1c6ad7a4616ba6fe1.jpg?q=80&w=1000')",
        }}
      />
      <div
        ref={beforeRef}
        className="ba-img before absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage:
            "url('https://www.braunps.co.kr/data/file/m09_01/thumb-3543616225_SrNMu8R7_40660ca55d05ff2cc61b944ceabbce607646a5ef_600x600.jpg?q=80&w=1000')",
          clipPath: `inset(0 ${100 - percent}% 0 0)`,
        }}
      />
      <div
        ref={handleRef}
        className="ba-handle absolute top-0 bottom-0 z-[10] flex w-10 -translate-x-1/2 items-center justify-center"
        style={{ left: `${percent}%` }}
      >
        <div className="ba-circle flex h-12 w-12 items-center justify-center rounded-full border border-[#eee] bg-white text-[#111] shadow-lg">
          ↔
        </div>
      </div>
      <span className="badge b absolute bottom-5 left-5 z-[5] bg-black/30 px-2.5 py-1 text-[12px] text-white backdrop-blur-sm">
        BEFORE
      </span>
      <span className="badge a absolute bottom-5 right-5 z-[5] bg-black/30 px-2.5 py-1 text-[12px] text-white backdrop-blur-sm">
        AFTER
      </span>
    </div>
  );
}
