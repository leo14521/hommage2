/**
 * HOMMAGE 레퍼런스: 모드별 GNB (WOMEN'S BOUTIQUE / AESTHETIC SUITE)
 */
export type HeaderNavSub = { name: string; link: string };
export type HeaderNavItem = {
  title: string;
  link: string;
  subs?: HeaderNavSub[];
  isHighlight?: boolean;
};

export type HeaderMode = "women" | "aesthetic";

export const HEADER_NAV: Record<HeaderMode, HeaderNavItem[]> = {
  women: [
    {
      title: "WOMEN'S SURGERY",
      link: "#",
      subs: [
        { name: "여성 성형 소개", link: "#" },
        { name: "소음순 성형", link: "#" },
        { name: "질 성형", link: "#" },
      ],
    },
    {
      title: "INTIMATE CARE",
      link: "#",
      subs: [
        { name: "질 타이트닝", link: "#" },
        { name: "요실금 케어", link: "#" },
        { name: "미백 관리", link: "#" },
      ],
    },
    { title: "WAXING", link: "#" },
    { title: "EVENT & PACKAGE", link: "#", isHighlight: true },
  ],
  aesthetic: [
    {
      title: "LIFTING",
      link: "/signature/lifting",
      subs: [
        { name: "리프팅", link: "/signature/lifting" },
      ],
    },
    {
      title: "LASER",
      link: "/signature/ulthera",
      subs: [
        { name: "울쎄라 (Ulthera)", link: "/signature/ulthera" },
        { name: "울쎄라 프로 프라임", link: "/signature/ulthera-pro-prime" },
        { name: "온다", link: "/signature/onda" },
        { name: "튠페이스", link: "/signature/tune-face" },
        { name: "코레지셀핏", link: "/signature/correction-fit" },
        { name: "슈링크 유니버스", link: "/signature/shrink-universe" },
      ],
    },
    {
      title: "THREAD",
      link: "/signature/mint-thread",
      subs: [
        { name: "민트", link: "/signature/mint-thread" },
        { name: "실루엣 소프트", link: "/signature/silhouette-soft" },
        { name: "압토스", link: "/signature/aptos" },
      ],
    },
    {
      title: "SIGNATURE",
      link: "/signature/total-erase",
      isHighlight: true,
      subs: [
        { name: "TOTAL ERASE (토탈 이레이즈)", link: "/signature/total-erase" },
        { name: "LINK-FREE BODY (바디)", link: "/signature/link-free-body" },
        { name: "RECOVERY (재생)", link: "/signature/recovery" },
      ],
    },
    {
      title: "SKIN BOOSTER",
      link: "/signature/juvegen",
      subs: [
        { name: "쥬브젠", link: "/signature/juvegen" },
        { name: "리쥬란", link: "/signature/rejuran" },
        { name: "엑소좀", link: "/signature/exosome" },
      ],
    },
    {
      title: "BODY",
      link: "/signature/tune-body",
      subs: [
        { name: "튠바디", link: "/signature/tune-body" },
        { name: "리뉴비온", link: "/signature/renewvion" },
        { name: "인모드", link: "/signature/inmode" },
      ],
    },
    { title: "EVENT", link: "#" },
  ],
};
