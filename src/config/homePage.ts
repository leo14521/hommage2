/**
 * index.html 이식용 메인 페이지 데이터
 */

export type HeroSlide = {
  image: string;
  alt: string;
  subtitle: string;
  titleLines: string[];
  /** 강조 단어 (이탤릭, 골드) */
  highlightWord?: string;
  /** 강조 없이 이탤릭만 (예: Specialist) */
  italicWord?: string;
  cta: string;
  ctaHref: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "https://arkeedesignstudio.com/wp-content/uploads/2024/04/Social-Media-Banner-38.png?auto=format&fit=crop&q=80&w=2560",
    alt: "Consultation",
    subtitle: "AI PERSONAL ANALYSIS",
    titleLines: ["당신만을 위한", "미학적 설계"],
    highlightWord: "Perfect",
    cta: "나의 예상 견적 확인하기",
    ctaHref: "#",
  },
  {
    image: "https://enlienjang.com/wp-content/uploads/2024/02/img_mainvisual3.jpg?auto=format&fit=crop&q=80&w=2560",
    alt: "Medical Team",
    subtitle: "MASTER MEDICAL TEAM",
    titleLines: ["정직한 진료,", "검증된"],
    italicWord: "Specialist",
    cta: "의료진 소개 바로가기",
    ctaHref: "#",
  },
  {
    image: "https://cdn.prod.website-files.com/5f2c201d6ff41f762a67ed8c/6523c8440384f665b025b3b7_slasharchitects-Cinik-Esthetic-Clinic-01-chic-healthcare-lobby-design.jpg?auto=format&fit=crop&q=80&w=2560",
    alt: "Philosophy",
    subtitle: "OUR PHILOSOPHY",
    titleLines: ["본연의 아름다움을", "깨우는"],
    highlightWord: "Atelier",
    cta: "브랜드 스토리 확인",
    ctaHref: "#",
  },
  {
    image: "https://thumbs.dreamstime.com/b/modern-beige-medical-clinic-interior-warmth-efficiency-comfort-healthcare-step-inside-tranquil-inviting-soft-tones-create-368523559.jpg?auto=format&fit=crop&q=80&w=2560",
    alt: "Signature",
    subtitle: "HOMMAGE SIGNATURE",
    titleLines: ["차원이 다른 깊이,", "리프팅"],
    italicWord: "Link-Free",
    cta: "시그니처 프로그램 보기",
    ctaHref: "#",
  },
  {
    image: "https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vYmQ0NGI0ODMtNzgxZC00MjNlLWJmMzItZDNkZDc0YjRjN2MzLmpwZWc.webp2?auto=format&fit=crop&q=80&w=2560",
    alt: "Reservation",
    subtitle: "PRIVATE RESERVATION",
    titleLines: ["기다림 없는 편안함,", "사전 예약"],
    highlightWord: "Private",
    cta: "실시간 예약 바로가기",
    ctaHref: "#",
  },
];

export type CurationCard = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  highlight?: boolean;
  /** 연결할 페이지 (없으면 #curation) */
  href?: string;
};

export const CURATION_WOMEN: CurationCard[] = [
  {
    title: "Link-Free Body",
    desc: "[Signature] 절개 없는 매끄러운 바디 라인 토탈 솔루션",
    image: "https://image2.gnsister.com/images/direct/1702537386420_5d30e44914234fd9bc30ab4cffb33c2c.jpg?originalImageWidth=1080&originalImageHeight=1620?q=80&w=1000&auto=format&fit=crop",
    tags: ["리뉴비온", "튠바디", "바디인모드"],
    highlight: true,
    href: "/signature/link-free-body",
  },
  {
    title: "Volume & Shape",
    desc: "부족한 볼륨은 채우고, 불필요한 지방은 정리합니다.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    tags: ["쥬브젠", "필러", "윤곽주사"],
    href: "/signature/juvegen",
  },
  {
    title: "Private Care",
    desc: "여성만을 위한 시크릿 리쥬버네이션 (1인실 케어)",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1000&auto=format&fit=crop",
    tags: ["소노케어", "제모", "브이올렛"],
    href: "/treatment/labiaplasty",
  },
];

export const CURATION_SKIN: CurationCard[] = [
  {
    title: "Recovery Lifting",
    desc: "[Best] 중력에 저항하는 강력한 리프팅 에너지",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1000&auto=format&fit=crop",
    tags: ["울쎄라", "온다", "튠페이스"],
    highlight: true,
    href: "/signature/ulthera",
  },
  {
    title: "Skin Booster",
    desc: "피부 깊숙이 차오르는 수분과 영양 솔루션",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
    tags: ["쥬브젠", "큐어젯", "리쥬란"],
    href: "/signature/juvegen",
  },
  {
    title: "Laser Toning",
    desc: "기미, 잡티 없이 맑고 투명한 피부를 위한 레이저",
    image: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?q=80&w=1000&auto=format&fit=crop",
    tags: ["포텐자", "클라리티", "코레지"],
    href: "/signature/total-erase",
  },
];

/** 대표 시술 (나를위한 대표진료과목 참고) */
export const REP_ITEMS = [
  { title: "리프팅", href: "/signature/total-erase", en: "Lifting" },
  { title: "스킨부스터", href: "#curation", en: "Skin Booster" },
  { title: "바디 컨투어", href: "#curation", en: "Body" },
  { title: "여성 케어", href: "#doctor", en: "Women Care" },
  { title: "안티에이징", href: "#curation", en: "Anti-Aging" },
  { title: "검진·상담", href: "#map", en: "Check-up" },
];

/** 숫자 인포그래픽 (나를위한 Specialist/A/C/Career/Case 참고) */
export const STATS = [
  { num: "7", unit: "+", label: "전문 의료진", sub: "실력과 노하우를 겸비한 팀" },
  { num: "5", unit: "", label: "케어 시스템", sub: "1:1 상담 · 검사 · 방역 · 마취 · 수술" },
  { num: "25", unit: "년", label: "전문의 경력", sub: "검증된 노하우" },
  { num: "30", unit: "K+", label: "임상 케이스", sub: "데이터 기반 맞춤 설계" },
];

/** Care 시스템 (나를위한 5가지 케어 참고) */
export const CARE_ITEMS = [
  { num: "01", title: "1:1 비밀 시크릿 상담", desc: "당신만을 위한 프라이빗 상담" },
  { num: "02", title: "안심 종합 검사", desc: "정확한 진단을 위한 체계적 검사" },
  { num: "03", title: "방역·멸균 관리", desc: "청결과 안전을 최우선으로" },
  { num: "04", title: "안전 마취 시스템", desc: "통증 최소화·회복 케어" },
  { num: "05", title: "안전 수술 시스템", desc: "검증된 프로토콜과 애프터케어" },
];

export const KNOWHOW_PANELS = [
  {
    num: "01",
    title: "커스텀 디자인 리프팅",
    desc: "개인의 골격, 피부 두께, 근육의 움직임까지 3D로 분석하여 가장 이상적인 리프팅 벡터(Vector)를 설계합니다.",
  },
  {
    num: "02",
    title: "통증 최소화 솔루션",
    desc: "오마쥬만의 3단계 마취 시스템과 특수 쿨링 요법으로 시술 중 통증과 시술 후 붓기를 획기적으로 줄였습니다.",
  },
  {
    num: "03",
    title: "프리미엄 애프터 케어",
    desc: "시술 효과의 극대화와 빠른 회복을 위해 LDM 물방울 리프팅 및 재생 레이저 관리를 무상 제공합니다.",
  },
];

/** 메인 영상: qYunlQIjJak 고정. 오른쪽 리스트: 예다여성의원 영상 4개만 */
export const YT_MAIN_ID = "qYunlQIjJak";
export const YT_VIDEOS = [
  { id: "kKvIS2lu-kQ", title: "외음부에 뭐가 났어요~ 여드름? 바르톨린낭종? 수포? A to Z", meta: "슬기로운 여성생활" },
  { id: "qZJTqfkySSk", title: "절대 집에서 혼자 짜지 마세요!! (feat.악순환의 반복)", meta: "여성건강 채널" },
  { id: "6rbg-vkzD3A", title: "여아 생식기 관리의 모든 것! 딸 둘맘 산부인과 의사 추천", meta: "우리동네 산부인과" },
  { id: "HYzVNXRgpD4", title: "여자 생식기 가려움증(음부소양증) 원인과 해결방법 완벽 정리", meta: "질염 아닌데 가려움증 필수 시청" },
];
