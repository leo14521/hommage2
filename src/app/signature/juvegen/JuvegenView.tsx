"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TREATMENT_FEATURES = [
  { icon: "X", title: "마취", desc: "특수 제작된 미세 주사기라서 마취가 필요없음" },
  { icon: "20-30분", title: "시술시간", desc: "" },
  { icon: "없음", title: "입원치료", desc: "" },
  { icon: "1회", title: "시술횟수", desc: "흉터에 따라 차이 있음" },
  { icon: "1회", title: "통원치료", desc: "2일 후 소독 및 시술결과 확인" },
  { icon: "2일", title: "회복과정", desc: "2일 후 세안 / 화장 가능" },
  { icon: "반영구적", title: "유지력", desc: "함몰부위에 콜라겐(새살)이 채워져서 자연스럽고 오래 유지됨" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "이산화탄소가스와 히알루론산 주입",
    desc: "이산화탄소가스와 히알루론산을 같은 장소에 교대로 주입(0.001cc 자동화 기기)",
    image: "/images/main/sec3_1.png",
  },
  {
    step: "02",
    title: "콜라겐 생성",
    desc: "물리적, 화학적, 생물학적 반응이 동시에 일어나면서 콜라겐 (새 살)생성",
    image: "/images/main/sec3_2.png",
  },
  {
    step: "03",
    title: "새 살이 돋아나 효과 지속",
    desc: "새 살이 돋아나 주름과 상처가 채워지고 효과가 오랫동안 지속됨",
    image: "/images/main/sec3_3.png",
  },
];

const STRENGTHS = [
  {
    icon: "/images/sub/play_ico1.png",
    text: "1회 시술만으로도 OK",
  },
  {
    icon: "/images/sub/play_ico2.png",
    text: "이물질을 삽입하거나 절개 및 수술을 하지 않고 함몰된 부분에만 선택적으로 주사시술을 하기 때문에 안전",
  },
  {
    icon: "/images/sub/play_ico3.png",
    text: "주름이나 흉터로 함몰된 부분에 콜라겐(새살)이 자체적으로 채워져 올라오게 하는 방법으로 유지력 좋음",
  },
  {
    icon: "/images/sub/play_ico4.png",
    text: "시술 시간이 짧고(20~40분) 주름, 흉터로 함몰된 부분만 시술하기 때문에 자연스럽게 맞춤 시술 가능",
  },
  {
    icon: "/images/sub/play_ico5.png",
    text: "머리카락정도로 얇은 특수 주사기로 시술되기 때문에 통증이 적어서 마취가 필요 없고, 붓기가 적으며, 수술 자국 최소화",
  },
  {
    icon: "/images/sub/play_ico6.png",
    text: "시술 2일 (48시간) 뒤 소독 이후 바로 세안과 화장이 가능함 (빠른 일상생활 복귀)",
  },
];

const RECOMMENDATIONS = [
  "레이저, 쁘띠성형 다 해봤는데도 효과가 크게 나타나지 않을 때",
  "자주 시술 받지 않아도 될 유지력이 좋은 시술을 찾고 있을 때",
  "시술 1회만으로도 빠른 효과가 나타나기를 바랄 때",
  "통증이 적은, 부작용이 적은 시술을 원할 때",
  "학술적/임상적으로 확실히 검증된 시술을 알아보고 있을 때",
  "자연스럽게 안전하게 오래가는 시술을 찾을 때",
];

export default function JuvegenView() {
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
      data-page="juvegen"
      className="min-h-screen bg-[var(--hm-beige)] pt-[var(--header-height)] text-[#111] overflow-x-hidden"
    >
      {/* Dot nav */}
      <nav
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-6 mix-blend-difference text-[var(--hm-black)]"
        aria-label="섹션 네비게이션"
      >
        {[
          { href: "#intro", label: "INTRO" },
          { href: "#features", label: "FEATURES" },
          { href: "#process", label: "PROCESS" },
          { href: "#research", label: "RESEARCH" },
          { href: "#strengths", label: "STRENGTHS" },
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
                The Regenerative Art
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[12vw] lg:text-[130px] leading-[0.9] text-[var(--hm-black)] mb-10">
              <div className="overflow-hidden">
                <span className="block reveal-text">JUVGEN</span>
              </div>
              <div className="overflow-hidden flex items-center gap-4 lg:gap-8">
                <span className="block font-[family-name:var(--font-philo)] italic font-light text-[var(--hm-gold)] text-[60%] translate-y-[-5%] reveal-text delay-100">
                  자가진피재생술
                </span>
              </div>
            </h1>

            <div className="max-w-xl pl-6 border-l-2 border-[var(--hm-gold)]/30 ml-2">
              <p className="font-[family-name:var(--font-kr-serif)] text-[var(--hm-gray)] text-lg lg:text-xl leading-relaxed break-keep reveal-text delay-300">
                <strong>쥬브젠 자가진피재생술</strong>은 한 번의 시술로 새살이 채워져 지속됩니다.
                <br />
                깊은 주름, 함몰 흉터 지금까지 다양한 치료방법들,
                <br />
                <strong>과연 만족스러웠나요?</strong>
                <br />
                이젠, 쥬브젠 자가진피재생술입니다.
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
                href="#process"
                className="flex items-center gap-3 text-[var(--hm-charcoal)] px-6 py-4 hover:text-[var(--hm-gold)] transition-colors"
              >
                <span className="text-sm font-medium tracking-wider border-b border-current pb-1">
                  DISCOVER PROCESS
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full group">
            <div className="absolute inset-0 overflow-hidden shadow-2xl bg-gray-200 rounded-sm">
              <img
                ref={parallaxRef}
                src="/images/sub/play1_1.jpg"
                alt="Juvegen Treatment"
                className="w-full h-[120%] object-cover object-center scale-110 transition-transform duration-[2s] group-hover:scale-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=JUVGEN";
                }}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur p-6 shadow-xl border border-white/40 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--hm-gold)] rounded-full flex items-center justify-center text-white">
                  <span className="text-lg">★</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[var(--hm-gray)] uppercase tracking-widest mb-1">
                    Verified
                  </span>
                  <span className="block font-[family-name:var(--font-display)] text-xl text-[var(--hm-black)]">
                    SCI Published
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
            JUVGEN AUTOLOGOUS DERMIS REGENERATION
          </span>
          <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">
            One Treatment, Lasting Results
          </span>
          <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">
            JUVGEN AUTOLOGOUS DERMIS REGENERATION
          </span>
          <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">
            One Treatment, Lasting Results
          </span>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-32 lg:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-[6vw]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-8 border-b border-[var(--hm-line)]">
            <div className="mb-8 lg:mb-0 reveal-text">
              <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">
                Treatment Features
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)]">
                시술 특징
              </h2>
            </div>
            <p className="max-w-md text-gray-600 text-lg leading-relaxed text-right lg:text-left break-keep reveal-text delay-100">
              특수 제작된 미세 주사기로 마취 없이 시술하며, 1회 시술만으로도 효과가 지속됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TREATMENT_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[var(--hm-beige)] p-8 rounded-lg border border-[var(--hm-line)] hover:border-[var(--hm-gold)] transition-colors reveal-text"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl font-bold text-[var(--hm-gold)] mb-4">{feature.icon}</div>
                <h3 className="font-[family-name:var(--font-kr-serif)] text-xl font-bold text-[var(--hm-black)] mb-2">
                  {feature.title}
                </h3>
                {feature.desc && (
                  <p className="text-sm text-gray-600 leading-relaxed break-keep">{feature.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="py-32 lg:py-40 bg-[var(--hm-charcoal)] text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(var(--hm-gold) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-[1600px] mx-auto px-[6vw] relative z-10">
          <div className="text-center mb-20 reveal-text">
            <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">
              Treatment Process
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl mb-6">
              쥬브젠 자가진피재생술 시술원리
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              진성형외과에서는 자가진피재생술 개발자인 대표원장님께 직접 상담과 시술을 받으실 수 있습니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="text-center reveal-text" style={{ animationDelay: `${idx * 200}ms` }}>
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[var(--hm-gold)] rounded-full flex items-center justify-center text-[var(--hm-charcoal)] font-bold text-xl z-10">
                    {step.step}
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Step";
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-kr-serif)] text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center reveal-text delay-600">
            <a
              href="https://www.jsdr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[var(--hm-gold)] text-[var(--hm-charcoal)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--hm-gold-light)] transition-colors"
            >
              <span>전용의료기기 자세히 보기</span>
              <span>→</span>
            </a>
          </div>
        </div>
        <h1 className="absolute bottom-0 left-0 text-[20vw] lg:text-[300px] font-[family-name:var(--font-display)] text-white/5 leading-none pointer-events-none">
          JUVGEN
        </h1>
      </section>

      {/* Research */}
      <section id="research" className="py-32 lg:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-[6vw]">
          <div className="text-center mb-20 reveal-text">
            <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">
              Academic Evidence
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)] mb-6">
              쥬브젠 자가진피재생술의 학술적 근거
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Annals of Plastic Surgery <br />
              SCI, 세계 3대 미용성형학술지 2013 표지논문 채택
            </p>
          </div>

          <div className="max-w-4xl mx-auto reveal-text delay-200">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/images/sub/play3_bg.jpg"
                alt="Annals of Plastic Surgery Cover"
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Research";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section id="strengths" className="py-32 lg:py-40 bg-[var(--hm-beige)]">
        <div className="max-w-[1600px] mx-auto px-[6vw]">
          <div className="text-center mb-20 reveal-text">
            <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">
              Key Strengths
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)] mb-6">
              쥬브젠 자가진피재생술의 강점
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STRENGTHS.map((strength, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border border-[var(--hm-line)] hover:border-[var(--hm-gold)] transition-colors reveal-text"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img
                    src={strength.icon}
                    alt=""
                    className="w-full h-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <p className="text-gray-700 leading-relaxed break-keep">{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-[1600px] mx-auto px-[6vw]">
          <div className="text-center mb-20 reveal-text">
            <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">
              Recommended For
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)] mb-6">
              쥬브젠 자가진피재생술 추천 대상
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {RECOMMENDATIONS.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-[var(--hm-beige)] rounded-lg border border-[var(--hm-line)] hover:border-[var(--hm-gold)] transition-colors reveal-text"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <img
                    src="/images/sub/sub_chk_c.png"
                    alt="check"
                    className="w-full h-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).innerHTML = "✓";
                    }}
                  />
                </div>
                <p className="text-gray-700 leading-relaxed break-keep">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
