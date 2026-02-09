import Link from "next/link";
import Logo from "@/components/ui/Logo";

export const metadata = {
  title: "About | HOMMAGE",
  description: "브랜드 스토리 - 오마쥬 의원",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-14 lg:pt-0">
      <div className="mx-auto max-w-[900px] px-6 py-20">
        <Logo href="/" className="mb-12 h-auto w-auto max-h-10" />
        <h1 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[var(--color-text-primary)]">
          Brand Story
        </h1>
        <p className="mt-4 font-[family-name:var(--font-kr)] text-[var(--color-text-secondary)]">
          오마쥬 의원은 공장형 시술을 지양하고, 오직 당신만을 위한 프라이빗한 의학적 큐레이션을 제공합니다.
        </p>
        <p className="mt-4 font-[family-name:var(--font-kr)] text-[var(--color-text-secondary)]">
          본연의 아름다움을 깨우는 Atelier. The Private Masterpiece.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block font-[family-name:var(--font-display)] text-sm tracking-widest text-[var(--color-accent)] hover:underline"
        >
            ← HOME
        </Link>
      </div>
    </main>
  );
}
