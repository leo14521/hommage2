"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";

gsap.registerPlugin(ScrollTrigger);

const FUSION_STEPS = [
  {
    step: "01",
    title: "당김",
    method: "실",
    description: "실리프팅으로 근본적인 당김 효과를 구현합니다.",
    image: getLandingImage(0),
    color: "from-black/5 to-black/10",
  },
  {
    step: "02",
    title: "탄력",
    method: "레이저",
    description: "레이저 에너지로 콜라겐 생성을 촉진하여 탄력을 개선합니다.",
    image: getLandingImage(1),
    color: "from-black/5 to-black/10",
  },
  {
    step: "03",
    title: "결과",
    method: "융합",
    description: "실과 레이저의 융합으로 완벽한 리프팅 결과를 완성합니다.",
    image: getLandingImage(2),
    color: "from-black/5 to-black/10",
  },
];

export function LiftingFusionBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const fusionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 카드들이 순차적으로 나타나는 애니메이션
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const cardContent = el.querySelector(".card-content");
        const cardImage = el.querySelector(".card-image");
        
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 카드 내부 요소들도 순차적으로 나타나게
        if (cardContent) {
          gsap.fromTo(
            cardContent,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.25 + 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // 이미지 패럴랙스 효과
        if (cardImage) {
          gsap.to(cardImage, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // 융합 섹션이 나타나는 애니메이션
      if (fusionRef.current) {
        const fusionContent = fusionRef.current.querySelector(".fusion-content");
        gsap.fromTo(
          fusionRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fusionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        if (fusionContent) {
          gsap.fromTo(
            fusionContent,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: fusionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-[var(--pad-global)] lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* 헤더 */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-[family-name:var(--font-en-title)] text-[11px] tracking-[0.35em] uppercase text-black" style={{ fontWeight: 300 }}>
            FUSION APPROACH
          </p>
          <h2 className="mb-6 font-[family-name:var(--font-kr-heading)] text-[clamp(32px,5vw,56px)] font-medium tracking-wide text-black">
            리프팅은 한가지로 완성되지 않습니다
          </h2>
          <p className="mx-auto max-w-[800px] text-[clamp(16px,2vw,20px)] leading-relaxed text-black/70" style={{ fontFamily: 'var(--font-kr-body)' }}>
            당김은 실로 탄력은 레이저로<br />
            결과는 융합으로 완성됩니다
          </p>
        </div>

        {/* 3단계 카드 */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {FUSION_STEPS.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* 배경 이미지 */}
              <div
                className={`card-image absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 transition-opacity duration-500 group-hover:opacity-60`}
              />
              <div
                className="card-image absolute inset-0 bg-cover bg-center opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* 왼쪽 악센트 라인 */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* 콘텐츠 */}
              <div className="card-content relative z-10 p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[clamp(48px,6vw,72px)] font-light text-black leading-none" style={{ fontFamily: 'var(--font-en-display)', fontWeight: 400 }}>
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-kr-heading)] text-[clamp(28px,3.5vw,36px)] font-medium text-black tracking-tight">
                  {item.title}
                </h3>
                <div className="mb-4 inline-block rounded-full bg-black/5 px-4 py-1.5 backdrop-blur-sm border border-black/10">
                  <p className="font-[family-name:var(--font-en-title)] text-[clamp(14px,1.5vw,16px)] font-medium text-black tracking-wide uppercase" style={{ fontWeight: 500 }}>
                    {item.method}
                  </p>
                </div>
                <p className="text-[15px] leading-relaxed text-black/70" style={{ fontFamily: 'var(--font-kr-body)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 융합 결과 섹션 */}
        <div
          ref={fusionRef}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] p-12 lg:p-16"
        >
          {/* 배경 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-black/5" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 grayscale"
            style={{
              backgroundImage: `url(${getLandingImage(3)})`,
            }}
          />
          
          {/* 블랙 악센트 라인 */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white opacity-30" />
          
          <div className="fusion-content relative z-10 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 backdrop-blur-sm border border-white/20">
              <span className="font-[family-name:var(--font-en-title)] text-xs uppercase tracking-[0.2em] text-white" style={{ fontWeight: 300 }}>
                Complete Fusion
              </span>
            </div>
            <h3 className="mb-6 font-[family-name:var(--font-kr-heading)] text-[clamp(36px,5vw,56px)] font-medium text-white leading-tight">
              완벽한 융합의 결과
            </h3>
            <p className="mx-auto max-w-[800px] text-[clamp(18px,2.2vw,22px)] leading-relaxed text-white/90" style={{ fontFamily: 'var(--font-kr-body)' }}>
              실의 당김과 레이저의 탄력이 융합되어<br />
              <span className="text-white font-normal">단일 시술로는 불가능한 완벽한 리프팅 결과</span>를 만들어냅니다
            </p>
            
            {/* 융합 시각화 아이콘 */}
            <div className="mt-12 flex items-center justify-center gap-4 opacity-40">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <div className="h-2 w-2 rounded-full bg-white/60" />
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
