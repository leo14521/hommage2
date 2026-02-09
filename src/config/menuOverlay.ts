/**
 * 메뉴 오버레이: 어바웃 오마쥬, 시그니처, 여성성형(통합), 리프팅, 피부(스킨부스터)
 */
export type MenuOverlaySub = { title: string; subtitle: string; link: string };

export type MenuOverlayItem = {
  title: string;
  subtitle: string;
  link: string;
  children?: MenuOverlaySub[];
};

export const MENU_OVERLAY_ITEMS: MenuOverlayItem[] = [
  { title: "About Hommage", subtitle: "어바웃 오마쥬", link: "/about" },
  {
    title: "시그니처",
    subtitle: "SIGNATURE",
    link: "/signature/total-erase",
    children: [
      { title: "TOTAL ERASE", subtitle: "토탈 이레이즈", link: "/signature/total-erase" },
      { title: "LINK-FREE BODY", subtitle: "바디", link: "/signature/link-free-body" },
      { title: "RECOVERY", subtitle: "재생", link: "/signature/recovery" },
    ],
  },
  {
    title: "여성성형",
    subtitle: "여성의료 · 인티메이트 케어",
    link: "/treatment/labiaplasty",
    children: [
      { title: "소음순 성형", subtitle: "레이저 소음순", link: "/treatment/labiaplasty" },
      { title: "질 성형", subtitle: "", link: "/treatment/vaginal-plasty" },
      { title: "처녀막 재생", subtitle: "", link: "/treatment/hymen-restoration" },
      { title: "질 타이트닝", subtitle: "", link: "/treatment/vaginal-tightening" },
      { title: "요실금 케어", subtitle: "", link: "/treatment/urinary-incontinence" },
      { title: "미백 관리", subtitle: "", link: "/treatment/intimate-whitening" },
    ],
  },
  {
    title: "LIFTING",
    subtitle: "리프팅",
    link: "/signature/lifting",
    children: [
      { title: "리프팅", subtitle: "Lifting", link: "/signature/lifting" },
    ],
  },
  {
    title: "레이저",
    subtitle: "LASER",
    link: "/signature/ulthera",
    children: [
      { title: "울쎄라 (Ulthera)", subtitle: "", link: "/signature/ulthera" },
      { title: "울쎄라 프로 프라임", subtitle: "Ulthera Pro Prime", link: "/signature/ulthera-pro-prime" },
      { title: "온다", subtitle: "Onda", link: "/signature/onda" },
      { title: "튠페이스", subtitle: "Tune Face", link: "/signature/tune-face" },
      { title: "코레지셀핏", subtitle: "Correction Fit", link: "/signature/correction-fit" },
      { title: "슈링크 유니버스", subtitle: "", link: "/signature/shrink-universe" },
    ],
  },
  {
    title: "실",
    subtitle: "THREAD",
    link: "/signature/mint-thread",
    children: [
      { title: "민트", subtitle: "Mint Thread", link: "/signature/mint-thread" },
      { title: "실루엣 소프트", subtitle: "Silhouette Soft", link: "/signature/silhouette-soft" },
      { title: "압토스", subtitle: "Aptos", link: "/signature/aptos" },
    ],
  },
  {
    title: "피부",
    subtitle: "스킨부스터",
    link: "/signature/juvegen",
    children: [
      { title: "쥬브젠", subtitle: "", link: "/signature/juvegen" },
      { title: "리쥬란", subtitle: "", link: "/signature/rejuran" },
      { title: "엑소좀", subtitle: "", link: "/signature/exosome" },
    ],
  },
];

export const MENU_FOOTER_SOCIAL = [
  { label: "WeChat", href: "#", icon: "wechat" },
  { label: "Line", href: "#", icon: "line" },
  { label: "Blog", href: "#", icon: "blog" },
  { label: "Instagram", href: "#", icon: "instagram" },
];
