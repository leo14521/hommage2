"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MENU_OVERLAY_ITEMS, MENU_FOOTER_SOCIAL } from "@/config/menuOverlay";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileSubVisible, setMobileSubVisible] = useState(false);

  const activeItem = activeIndex !== null ? MENU_OVERLAY_ITEMS[activeIndex] : null;
  const hasChildren = activeItem?.children && activeItem.children.length > 0;

  useEffect(() => {
    if (open) {
      setActiveIndex(null);
      setMobileSubVisible(false);
    }
  }, [open]);

  const handleItemClick = (index: number) => {
    const item = MENU_OVERLAY_ITEMS[index];
    if (item.children?.length) {
      setActiveIndex(index);
      setMobileSubVisible(true);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    setMobileSubVisible(false);
    setActiveIndex(null);
  };

  return (
    <div
      className={`menu-overlay ${open ? "menu-open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-label="메뉴"
    >
      <div className="menu-overlay-header">
        <Link href="/" className="logo-link" onClick={onClose} aria-label="Hommage Clinic 홈">
          <img src="/logo-hommage.png" alt="Hommage Clinic" className="h-9 w-auto object-contain" width={160} height={36} />
        </Link>
        <button
          type="button"
          className="menu-overlay-close"
          onClick={onClose}
          aria-label="메뉴 닫기"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="menu-overlay-content relative">
        {/* 메인 메뉴 (모바일에서 서브 보일 때만 숨김) */}
        <div className={`menu-list flex flex-col gap-4 ${mobileSubVisible ? "max-md:hidden" : ""}`}>
          <button
            type="button"
            className="menu-back-btn"
            onClick={handleBack}
          >
            <span aria-hidden>←</span>
            <span>BACK</span>
          </button>
          {MENU_OVERLAY_ITEMS.map((item, i) =>
            item.children?.length ? (
              <div
                key={item.link + i}
                role="button"
                tabIndex={0}
                className={`menu-item ${activeIndex === i ? "active" : ""}`}
                onClick={() => handleItemClick(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleItemClick(i);
                  }
                }}
              >
                <div className="flex flex-col gap-0.5">
                  <span className={`menu-item-title ${item.title === "시그니처" ? "font-bold" : ""}`}>{item.title}</span>
                  <span className="menu-item-subtitle">{item.subtitle}</span>
                </div>
                <span className="text-[#ccc] text-xs" aria-hidden>→</span>
              </div>
            ) : (
              <Link
                key={item.link + i}
                href={item.link}
                className="menu-item"
                onClick={onClose}
              >
                <div className="flex flex-col gap-0.5">
                  <span className={`menu-item-title ${item.title === "시그니처" ? "font-bold" : ""}`}>{item.title}</span>
                  <span className="menu-item-subtitle">{item.subtitle}</span>
                </div>
                <span className="text-[#ccc] text-xs" aria-hidden>→</span>
              </Link>
            )
          )}
        </div>

        <div className="menu-overlay-line" aria-hidden />

        {/* 서브 메뉴: 선택한 상위 항목(activeIndex)의 자식만 표시, 상위 변경 시 이전 서브리스트 제거 */}
        <div
          key={activeIndex ?? "none"}
          className={`menu-list menu-sub-list flex flex-col gap-4 ${!hasChildren ? "hidden" : ""} ${hasChildren && !mobileSubVisible ? "max-md:hidden" : ""}`}
        >
          {hasChildren &&
            activeItem?.children?.map((sub) => (
              <Link
                key={sub.link}
                href={sub.link}
                className="menu-item"
                onClick={onClose}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="menu-item-title">{sub.title}</span>
                  {sub.subtitle && (
                    <span className="menu-item-subtitle">{sub.subtitle}</span>
                  )}
                </div>
                <span className="text-[#ccc] text-xs" aria-hidden>→</span>
              </Link>
            ))}
        </div>
      </div>

      <div className="menu-overlay-footer">
        {MENU_FOOTER_SOCIAL.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#333]"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
