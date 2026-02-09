"use client";

/** 2단계: 가운데에서 다른 이미지 + 카피라이트 등장 (사이드메뉴는 이미 노출) */
const BG =
  "https://images.unsplash.com/photo-1507643179173-39db4f92bf84?q=80&w=2000&auto=format&fit=crop";

export default function Stage2Section() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-bg-deep)]"
      data-stage="2"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${BG})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide">
          HOMMAGE
        </h2>
        <div className="mt-6">
          <p className="font-[family-name:var(--font-en)] text-lg italic">
            The Best As Ever,
          </p>
          <p className="mt-1 font-[family-name:var(--font-kr)] text-white/90">
            최고는 여전히 변함 없습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
