"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";

gsap.registerPlugin(ScrollTrigger);

const IMG = {
  hero: getLandingImage(0),
  tech: getLandingImage(1),
  techFallback: getLandingImage(2),
  device: getLandingImage(3),
  deviceFallback: getLandingImage(4),
  process: getLandingImage(5),
};

export default function OndaView() {
  const mainRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!parallaxRef.current) return;
      gsap.to(parallaxRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current?.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { dependencies: [] }
  );

  useGSAP(
    () => {
      const els = mainRef.current?.querySelectorAll(".reveal-text");
      els?.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: mainRef, dependencies: [] }
  );

  return (
    <main
      ref={mainRef}
      data-page="onda"
      className="min-h-screen bg-[var(--hm-beige)] pt-[var(--header-height)] text-[#111] overflow-x-hidden"
    >
      {/* Dot nav */}
      <nav
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-6 mix-blend-difference text-[var(--hm-black)]"
        aria-label="섹션 네비게이션"
      >
        {[
          { href: "#intro", label: "INTRO" },
          { href: "#technology", label: "TECH" },
          { href: "#process", label: "PROCESS" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} className="group flex items-center gap-3 cursor-pointer">
            <span className="text-[10px] font-[family-name:var(--font-display)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
              {label}
            </span>
            <div className="w-1.5 h-1.5 bg-current rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-transform" />
          </Link>
        ))}
      </nav>

      {/* Intro */}
      <section
        id="intro"
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-[var(--hm-beige)]"
      >
        <div className="absolute top-0 right-[15%] w-px h-full bg-[var(--hm-line)] z-0" />
        <div className="absolute bottom-0 left-[10%] w-px h-1/2 bg-[var(--hm-line)] z-0" />

        <div className="w-full max-w-[1600px] mx-auto px-[6vw] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative z-20">
            <div className="mb-8 overflow-hidden">
              <span className="inline-block font-[family-name:var(--font-display)] text-[var(--hm-gold)] text-lg lg:text-xl tracking-[0.2em] uppercase reveal-text">
                Laser Treatment
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[12vw] lg:text-[130px] leading-[0.9] text-[var(--hm-black)] mb-10">
              <div className="overflow-hidden">
                <span className="block reveal-text">Onda</span>
              </div>
              <div className="overflow-hidden flex items-center gap-4 lg:gap-8">
                <span className="block font-[family-name:var(--font-philo)] italic font-light text-[var(--hm-gold)] text-[60%] translate-y-[-5%] reveal-text delay-100">
                  by
                </span>
                <span className="block reveal-text delay-200">Coolwaves</span>
              </div>
            </h1>

            <div className="max-w-xl pl-6 border-l-2 border-[var(--hm-gold)]/30 ml-2">
              <p className="font-[family-name:var(--font-kr-serif)] text-[var(--hm-gray)] text-lg lg:text-xl leading-relaxed break-keep reveal-text delay-300">
                <strong>오마쥬 온다</strong>는 고주파를 활용한 비침습 바디 컨투어링 시술입니다.
                <br />
                쿨웨이브 기술로 지방 세포를 분해하고 피부 탄력을 개선하여,
                <br />
                수술 없이 안전하고 효과적인 바디 라인을 만들어드립니다.
              </p>
            </div>

            <div className="mt-16 reveal-text delay-500 flex flex-wrap gap-6">
              <Link
                href="/#curation"
                className="inline-flex items-center justify-center px-12 py-5 border border-[var(--hm-black)]/20 bg-transparent text-[#111] text-sm font-medium tracking-wider overflow-hidden transition-all duration-500 hover:text-white hover:border-[#111] group"
              >
                <span>프라이빗 상담 예약</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="#technology"
                className="flex items-center gap-3 text-[var(--hm-charcoal)] px-6 py-4 hover:text-[var(--hm-gold)] transition-colors"
              >
                <span className="text-sm font-medium tracking-wider border-b border-current pb-1">
                  DISCOVER TECHNOLOGY
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full group">
            <div className="absolute inset-0 overflow-hidden shadow-2xl bg-gray-200 rounded-sm">
              <img
                ref={parallaxRef}
                src={IMG.hero}
                alt="Hommage Onda Mood"
                className="w-full h-[120%] object-cover object-center scale-110 transition-transform duration-[2s] group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur p-6 shadow-xl border border-white/40 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--hm-gold)] rounded-full flex items-center justify-center text-white">
                  <span className="text-lg">★</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--hm-gray)] uppercase tracking-widest mb-1">
                    Non-Invasive
                  </span>
                  <span className="block font-[family-name:var(--font-display)] text-xl text-[var(--hm-black)]">
                    Body Contouring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
          <div className="w-px h-16 bg-[var(--hm-charcoal)]/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-1/2 bg-[var(--hm-black)]"
              style={{ animation: "movedown 2s infinite" }}
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-12 bg-[var(--hm-charcoal)] overflow-hidden relative z-20 border-y border-white/5">
        <div className="flex gap-24 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">
            HOMMAGE ONDA
          </span>
          <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">
            Coolwaves Technology
          </span>
          <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">
            Body Contouring
          </span>
          <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">
            Non-Invasive
          </span>
          <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">
            HOMMAGE ONDA
          </span>
          <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">
            Coolwaves Technology
          </span>
        </div>
      </div>

      {/* Technology */}
      <section id="technology" className="py-32 lg:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-[6vw]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-8 border-b border-[var(--hm-line)]">
            <div className="mb-8 lg:mb-0 reveal-text">
              <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">
                Core Technology
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)]">
                Coolwaves <br />
                <span className="font-[family-name:var(--font-philo)] italic text-[var(--hm-gray)]">RF Technology</span>
              </h2>
            </div>
            <p className="max-w-md text-gray-600 text-lg leading-relaxed text-right lg:text-left break-keep reveal-text delay-100">
              고주파 에너지를 이용하여 지방 세포를 분해하고 피부 탄력을 개선하는 비침습 바디 컨투어링 기술입니다.
              수술 없이 안전하고 효과적인 바디 라인을 만들어드립니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <div className="order-2 lg:order-1 reveal-text space-y-8">
              <div className="flex items-start gap-4">
                <span className="font-[family-name:var(--font-philo)] text-4xl text-[var(--hm-gold)] italic">
                  01
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-bold text-[var(--hm-black)] mb-2">
                    쿨웨이브 고주파 기술
                  </h3>
                  <p className="text-gray-600 leading-7 break-keep">
                    온다는 쿨웨이브(Coolwaves) 고주파 기술을 사용하여 지방 세포를 선택적으로 분해합니다.
                    피부 표면은 보호하면서 깊은 곳의 지방층에만 에너지를 전달하여 안전하고 효과적인 바디 컨투어링을 제공합니다.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-500 font-light pl-12">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--hm-gold)] text-xs">✓</span> 선택적 지방 분해
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--hm-gold)] text-xs">✓</span> 피부 표면 보호
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--hm-gold)] text-xs">✓</span> 비침습 시술
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative reveal-text delay-200">
              <div className="relative rounded-lg overflow-hidden shadow-2xl group border border-gray-100">
                <img
                  src={IMG.tech}
                  alt="Onda Technology"
                  className="w-full object-cover relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = IMG.techFallback;
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center bg-[var(--hm-beige)] p-8 lg:p-12 rounded-xl">
            <div className="lg:col-span-7 relative">
              <img
                src={IMG.device}
                alt="Onda Device"
                className="w-full rounded shadow-lg mix-blend-multiply"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = IMG.deviceFallback;
                }}
              />
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="mb-6">
                <span className="font-[family-name:var(--font-philo)] text-4xl text-[var(--hm-gold)] italic block mb-2">
                  02
                </span>
                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-bold text-[var(--hm-black)]">
                  콜라겐 생성 촉진
                </h3>
                <p className="text-gray-600 mt-4 leading-7 text-sm break-keep">
                  고주파 에너지가 피부 깊숙이 전달되면서 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다.
                </p>
              </div>
              <div className="space-y-2">
                {[
                  { title: "지방 분해", sub: "Fat Reduction", desc: "선택적 지방 분해로 원하는 부위의 지방을 효과적으로 감소시킵니다." },
                  { title: "탄력 개선", sub: "Skin Tightening", desc: "콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다." },
                  { title: "비침습 시술", sub: "Non-Invasive", desc: "수술 없이 고주파를 활용하여 안전하고 효과적인 바디 컨투어링을 제공합니다." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group border border-[var(--hm-charcoal)]/10 bg-white p-4 cursor-pointer hover:border-[var(--hm-gold)] transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[var(--hm-charcoal)] text-sm">{item.title}</span>
                      <span className="text-xs text-[var(--hm-gold)]">{item.sub}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 lg:py-40 bg-[var(--hm-charcoal)] text-[var(--hm-beige)] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-[6vw]">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="relative">
              <div className="sticky top-[150px]">
                <span className="block text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-6 reveal-text">
                  The Process
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl leading-tight mb-8 reveal-text">
                  Steps to <br />
                  <span className="text-[var(--hm-gold)] italic font-[family-name:var(--font-philo)]">Perfection</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-sm mb-12 reveal-text delay-100">
                  오마쥬의 온다 시술 과정은 가장 편안하고 안전한 결과를 위한 당신만의 의식입니다.
                </p>
                <div className="rounded-lg overflow-hidden border border-white/10 relative group reveal-text delay-200">
                  <img
                    src={IMG.process}
                    alt="Onda Process"
                    className="w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="relative pt-10 lg:pt-0">
              <div className="absolute left-[19px] top-10 bottom-10 w-px bg-white/10 hidden lg:block" />
              <div className="space-y-0">
                {[
                  {
                    step: "01",
                    title: "맞춤 상담",
                    sub: "Consultation",
                    desc: "개인의 바디 상태와 목표를 정밀 진단하고 개인별 맞춤 시술 계획을 설계합니다.",
                  },
                  {
                    step: "02",
                    title: "시술 준비",
                    sub: "Preparation",
                    desc: "시술 부위를 깨끗이 정리하고 전용 젤을 도포하여 최적의 시술 환경을 만듭니다.",
                  },
                  {
                    step: "03",
                    title: "고주파 시술",
                    sub: "Procedure",
                    desc: "쿨웨이브 고주파 기술로 지방 세포를 분해하고 콜라겐 생성을 촉진합니다.",
                  },
                  {
                    step: "04",
                    title: "진정 관리",
                    sub: "After Care",
                    desc: "시술 후 진정 관리로 피부를 보호하고 최적의 회복을 돕습니다.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="group pl-0 lg:pl-16 py-8 relative border-b border-white/5 lg:border-none hover:bg-white/5 transition-colors rounded-r-xl"
                  >
                    <span className="hidden lg:block absolute left-[15px] top-[45px] w-[9px] h-[9px] bg-[var(--hm-charcoal)] border border-white/30 rounded-full group-hover:bg-[var(--hm-gold)] group-hover:border-[var(--hm-gold)] transition-all duration-300 z-10" />
                    <span className="font-[family-name:var(--font-philo)] text-sm text-[var(--hm-gold)] tracking-widest mb-2 block">
                      STEP {item.step}
                    </span>
                    <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-medium mb-3 text-white">
                      {item.title} <span className="text-base font-light text-white/40 ml-2">{item.sub}</span>
                    </h3>
                    <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-[1000px] mx-auto px-[6vw]">
          <div className="text-center mb-16 reveal-text">
            <span className="text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4 block">
              Q&A Advisory
            </span>
            <h2 className="font-[family-name:var(--font-kr-serif)] text-3xl lg:text-4xl text-[var(--hm-black)]">
              자주 묻는 질문
            </h2>
          </div>
          <div className="border-t border-[var(--hm-black)]">
            {[
              {
                q: "Q. 시술 효과는 언제부터 나타나나요?",
                a: "시술 직후 즉각적인 효과를 느낄 수 있으나, 지방 분해와 콜라겐 재생이 본격화되는 2-4주 후부터 효과가 더욱 뚜렷해집니다. 개인의 바디 상태에 따라 다르지만, 평균적으로 3-6개월 정도 효과가 유지됩니다.",
              },
              {
                q: "Q. 통증이 있나요?",
                a: "온다는 비침습 시술로 통증이 거의 없습니다. 시술 중 따뜻한 느낌이나 약간의 따끔함을 느낄 수 있으나 대부분의 고객님께서 편안하게 시술을 받으실 수 있습니다.",
              },
              {
                q: "Q. 일상생활은 바로 가능한가요?",
                a: "네, 온다는 피부 표면에 손상을 주지 않는 비침습 시술입니다. 시술 직후 바로 일상생활이 가능하며, 운동이나 샤워도 시술 당일부터 가능합니다.",
              },
              {
                q: "Q. 어떤 부위에 시술이 가능한가요?",
                a: "복부, 허벅지, 팔뚝, 옆구리, 등, 엉덩이 등 다양한 부위에 시술이 가능합니다. 개인의 상태와 목표에 따라 맞춤형 시술 계획을 수립합니다.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-[var(--hm-line)]"
              >
                <summary className="flex justify-between items-center py-8 cursor-pointer list-none transition-colors hover:bg-gray-50 px-4">
                  <span className="font-[family-name:var(--font-kr-serif)] text-xl text-[var(--hm-charcoal)] group-hover:text-[var(--hm-gold)] transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-2xl font-thin text-[var(--hm-gray)] group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <div className="pb-8 px-8 text-gray-600 leading-7 font-light" style={{ animation: "fadeIn 0.5s ease-out" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="reservation" className="py-32 lg:py-40 bg-[var(--hm-charcoal)] text-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-[6vw] relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-40">
            <div className="flex flex-col justify-center reveal-text">
              <span className="text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-8 block">
                Private Booking
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl leading-tight mb-10">
                Begin Your <br />
                <span className="text-[var(--hm-gold)] italic font-[family-name:var(--font-philo)]">Journey</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md break-keep">
                오마쥬의 모든 시술은 100% 예약제로 운영됩니다.
                <br />
                아래 양식을 남겨주시면, 전담 컨시어지가 가장 편안한 시간대에 연락드리겠습니다.
              </p>
              <div className="space-y-6 text-sm text-white/40 font-light pl-2 border-l border-[var(--hm-gold)]/20">
                <p className="flex items-center gap-4">
                  <span className="w-4 text-[var(--hm-gold)]">📍</span> 서울 강남구 도산대로 67길 13-5
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-4 text-[var(--hm-gold)]">📞</span> 02-543-4842
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-4 text-[var(--hm-gold)]">🕐</span> Mon - Fri : 10:00 - 20:00
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 lg:p-16 border border-white/10 reveal-text delay-200 shadow-2xl">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="성함을 입력해주세요"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors placeholder-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Contact</label>
                  <input
                    type="tel"
                    placeholder="연락처를 입력해주세요"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors placeholder-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Inquiry</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors cursor-pointer appearance-none rounded-none">
                    <option value="">관심 시술 선택 (Onda)</option>
                    <option value="onda">온다 바디 컨투어링</option>
                    <option value="consult">기타 바디 시술 상담</option>
                  </select>
                </div>
                <div className="pt-8">
                  <Link
                    href="/#curation"
                    className="inline-flex items-center justify-center w-full py-5 border border-white/30 text-white hover:bg-white hover:text-[var(--hm-black)] hover:border-white transition-all duration-500"
                  >
                    REQUEST CONSULTATION
                  </Link>
                </div>
                <p className="text-[10px] text-white/30 text-center leading-relaxed">
                  * 보내주신 정보는 상담 예약 목적으로만 활용되며,
                  <br />
                  개인정보보호법에 따라 안전하게 관리됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
