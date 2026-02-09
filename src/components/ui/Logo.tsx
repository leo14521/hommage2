"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
}

/** Hommage Clinic 로고 이미지 (모노그램 + Hommage Clinic) */
export default function Logo({ className = "", href = "/" }: LogoProps) {
  const img = (
    <img
      src="/logo-hommage.png"
      alt="Hommage Clinic"
      className={`${className} w-auto h-auto object-contain`}
      width={160}
      height={38}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" aria-label="Hommage Clinic 홈">
        {img}
      </Link>
    );
  }
  return img;
}
