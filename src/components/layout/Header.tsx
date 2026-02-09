"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

const TEL = "02-543-4842";

/**
 * B&S 스타일: 좌 햄버거 | 중앙 로고 | 우 전화. 스크롤 시 nav-active(배경·높이 변경).
 * 햄버거 클릭 시 전체 메뉴 오버레이.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`nav-header ${scrolled ? "nav-active" : ""}`}
      >
        <button
          type="button"
          className={`nav-menu-btn flex flex-col justify-center gap-1 ${scrolled ? "" : "nav-menu-btn-inactive"}`}
          onClick={() => setMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <span className="block h-px w-full bg-white" />
          <span className="block h-px w-full bg-white" />
          <span className="block h-px w-full bg-white" />
        </button>

        <Link href="/" className="nav-logo" aria-label="Hommage Clinic 홈">
          <img src="/logo-hommage.png" alt="Hommage Clinic" className="h-8 w-auto object-contain" width={140} height={32} />
        </Link>

        <a
          href={`tel:${TEL.replace(/-/g, "")}`}
          className="nav-tel flex items-center justify-center text-white hover:opacity-90"
          aria-label="전화 문의"
        >
          <PhoneIcon />
        </a>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
