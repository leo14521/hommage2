(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/landingImages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** landing 폴더의 이미지 목록 */ __turbopack_context__.s([
    "LANDING_IMAGES",
    ()=>LANDING_IMAGES,
    "getLandingImage",
    ()=>getLandingImage,
    "getNextLandingImage",
    ()=>getNextLandingImage,
    "getRandomLandingImage",
    ()=>getRandomLandingImage
]);
const LANDING_IMAGES = [
    "/landing/3717368605_67e60e75c2e20_EC8B9CEC88A0EB8C80EC8381.jpg",
    "/landing/item01.webp",
    "/landing/main_visual_model.png",
    "/landing/main-model.png",
    "/landing/unnamed.png",
    "/landing/그림1.png"
];
/** 이미지를 순환하면서 가져오는 함수 */ let currentIndex = 0;
function getNextLandingImage() {
    const image = LANDING_IMAGES[currentIndex % LANDING_IMAGES.length];
    currentIndex++;
    return image;
}
function getLandingImage(index) {
    return LANDING_IMAGES[index % LANDING_IMAGES.length];
}
function getRandomLandingImage() {
    const randomIndex = Math.floor(Math.random() * LANDING_IMAGES.length);
    return LANDING_IMAGES[randomIndex];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/labiaplastyPage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOMMAGE_ADVANTAGES",
    ()=>HOMMAGE_ADVANTAGES,
    "LABIAPLASTY_CAPTIONS",
    ()=>LABIAPLASTY_CAPTIONS,
    "LABIAPLASTY_FAQ",
    ()=>LABIAPLASTY_FAQ,
    "LABIAPLASTY_IMAGES",
    ()=>LABIAPLASTY_IMAGES,
    "LABIAPLASTY_POINTS",
    ()=>LABIAPLASTY_POINTS,
    "LABIAPLASTY_PROCESS",
    ()=>LABIAPLASTY_PROCESS
]);
/**
 * 소음순 수술 페이지 - 예다여성의원 원본 이미지 URL 및 섹션별 텍스트
 * 원본: sub02_01_visual + sub02_01_01 ~ 08
 */ const BASE = "https://www.yedaclinic.com/mn02/images";
const LABIAPLASTY_IMAGES = {
    visual: `${BASE}/sub02_01_visual.jpg`,
    content: [
        `${BASE}/sub02_01_01.jpg`,
        `${BASE}/sub02_01_02.jpg`,
        `${BASE}/sub02_01_03.jpg`,
        `${BASE}/sub02_01_04.jpg`,
        `${BASE}/sub02_01_05.jpg`,
        `${BASE}/sub02_01_06.jpg`,
        `${BASE}/sub02_01_07.jpg`,
        `${BASE}/sub02_01_08.jpg`
    ]
};
const LABIAPLASTY_CAPTIONS = [
    {
        title: "예다여성의원",
        sub: "수술 없이 달라지는 비수술적 질 성형"
    },
    {
        title: "비비브·질쎄라",
        sub: "레이저 기반 프리미엄 시술"
    },
    {
        title: "레이저 소음순 성형",
        sub: "흉터 최소화, 자연스러운 라인"
    },
    {
        title: "여의사 1:1 진료",
        sub: "프라이빗 상담부터 시술까지"
    },
    {
        title: "안전 시스템",
        sub: "검증된 장비와 프로토콜"
    },
    {
        title: "빠른 회복",
        sub: "일상 복귀가 빠른 케어"
    },
    {
        title: "맞춤 설계",
        sub: "개인별 시술 범위와 방법"
    },
    {
        title: "상담·예약",
        sub: "비밀 보장, 편한 문의"
    }
];
const LABIAPLASTY_POINTS = [
    {
        num: "01",
        title: "수술 없이 레이저로",
        desc: "절개 수술 없이 레이저 에너지로 형태를 정리하여 흉터와 회복 부담을 최소화합니다."
    },
    {
        num: "02",
        title: "여의사 1:1 진료",
        desc: "여성 의료진이 프라이빗하게 상담부터 시술·케어까지 전 과정을 함께합니다."
    },
    {
        num: "03",
        title: "흉터 최소화",
        desc: "정밀한 레이저 시술로 자연스러운 라인과 대칭을 추구하며, 눈에 띄는 흉터를 줄입니다."
    },
    {
        num: "04",
        title: "빠른 일상 복귀",
        desc: "수술 대비 회복 기간이 짧고, 개인별 케어 가이드로 안전한 관리를 안내합니다."
    }
];
const LABIAPLASTY_PROCESS = [
    {
        step: "1",
        label: "비밀 1:1 상담",
        sub: "고민과 목표를 편하게 말씀해 주세요."
    },
    {
        step: "2",
        label: "검사 및 설계",
        sub: "개인에 맞는 시술 범위와 방법을 결정합니다."
    },
    {
        step: "3",
        label: "레이저 시술",
        sub: "마취·소독 후 정밀 시술을 진행합니다."
    },
    {
        step: "4",
        label: "애프터케어",
        sub: "회복 기간 관리와 재방문 일정을 안내합니다."
    }
];
const HOMMAGE_ADVANTAGES = [
    {
        num: "01",
        title: "여의사 1:1 전담 진료",
        desc: "오마쥬는 여성 의료진이 상담부터 시술·케어까지 전 과정을 함께합니다. 여성의 몸을 가장 잘 이해하는 여의사가 직접 진료하므로, 부끄러움 없이 편안하게 상담하고 시술받을 수 있습니다.",
        highlight: true
    },
    {
        num: "02",
        title: "정밀 레이저 기술",
        desc: "비비브, 질쎄라 등 검증된 레이저 장비를 사용하여 절개 없이 정확하게 형태를 정리합니다. 흉터를 최소화하고 자연스러운 라인을 만들어 드립니다."
    },
    {
        num: "03",
        title: "개인 맞춤 설계",
        desc: "모든 여성의 소음순 형태는 다릅니다. 오마쥬는 개인별 골격, 비대칭 정도, 원하는 결과를 종합 분석하여 최적의 시술 범위와 방법을 설계합니다."
    },
    {
        num: "04",
        title: "프라이빗 케어 시스템",
        desc: "완전 분리된 프라이빗 룸에서 1:1 상담과 시술이 진행됩니다. 개인정보 보호와 프라이버시를 최우선으로 하며, 모든 과정이 비밀 보장됩니다."
    },
    {
        num: "05",
        title: "안전한 마취 프로토콜",
        desc: "국소 마취를 정확하게 적용하여 통증을 최소화합니다. 시술 중 불편함 없이 편안하게 받을 수 있으며, 회복도 빠릅니다."
    },
    {
        num: "06",
        title: "체계적인 애프터케어",
        desc: "시술 후 회복 기간 동안 전담 의료진이 직접 케어를 안내합니다. 재방문 일정과 관리 방법을 상세히 안내하여 최적의 결과를 보장합니다."
    }
];
const LABIAPLASTY_FAQ = [
    {
        q: "소음순 성형은 언제부터 효과가 나타나나요?",
        a: "시술 직후 즉각적인 형태 개선을 확인할 수 있으며, 부종이 가라앉는 1~2주 후부터 최종 결과가 보이기 시작합니다. 완전한 회복과 최종 형태는 개인차가 있으나 보통 1~2개월 정도 소요됩니다."
    },
    {
        q: "통증이 심한가요?",
        a: "국소 마취를 정확하게 적용하므로 시술 중 통증은 거의 없습니다. 시술 후 1~2일간 약간의 불편함이나 부종이 있을 수 있으나, 진통제로 충분히 관리 가능하며 일상생활에 큰 지장은 없습니다."
    },
    {
        q: "수술 후 일상생활은 언제부터 가능한가요?",
        a: "레이저 소음순 성형은 절개 수술이 아니므로 회복이 빠릅니다. 시술 당일 휴식을 취하시고, 다음 날부터는 가벼운 일상생활이 가능합니다. 운동이나 무거운 활동은 1~2주 후부터 시작하시는 것을 권장합니다."
    },
    {
        q: "흉터가 남나요?",
        a: "레이저 시술은 절개가 없으므로 눈에 띄는 흉터가 거의 남지 않습니다. 시술 후 초기에는 미세한 딱지가 생길 수 있으나, 자연스럽게 떨어지며 시간이 지날수록 더욱 자연스러운 라인으로 회복됩니다."
    },
    {
        q: "재시술이 필요한 경우가 있나요?",
        a: "대부분의 경우 1회 시술로 원하는 결과를 얻을 수 있습니다. 다만 비대 정도가 심하거나 개인적인 요구사항에 따라 추가 정리가 필요한 경우, 최소 3개월 이상 간격을 두고 재시술이 가능합니다."
    },
    {
        q: "시술 후 성생활은 언제부터 가능한가요?",
        a: "시술 부위가 완전히 회복될 때까지 약 2~4주 정도의 휴식 기간이 필요합니다. 정확한 시기는 개인별 회복 속도에 따라 다르므로, 재방문 시 의료진과 상담하여 안전한 시기를 결정하시기 바랍니다."
    },
    {
        q: "비용은 얼마인가요?",
        a: "소음순 유형, 시술 범위, 사용 장비에 따라 비용이 달라집니다. 정확한 견적은 1:1 상담을 통해 개인별 맞춤 설계 후 안내해 드립니다. 오마쥬는 투명한 가격 정책을 유지하고 있습니다."
    },
    {
        q: "왜 오마쥬에서 소음순 수술을 받아야 하나요?",
        a: "오마쥬는 여의사 1:1 전담 진료, 정밀 레이저 기술, 개인 맞춤 설계, 프라이빗 케어 시스템을 갖춘 전문 클리닉입니다. 여성의 몸을 가장 잘 이해하는 의료진이 전 과정을 함께하며, 자연스러운 결과와 안전한 시술을 보장합니다. 부끄러움 없이 편안하게 상담받고, 검증된 기술로 최적의 결과를 얻을 수 있는 것이 오마쥬만의 차별점입니다."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabiaTypeDiagramBlock",
    ()=>LabiaTypeDiagramBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const LABIA_TYPES = [
    {
        id: "normal",
        label: "정상형",
        sub: "Normal",
        desc: "소음순이 대음순 안쪽에 자연스럽게 위치한 상태입니다. 시술이 필요하지 않습니다.",
        before: {
            left: 0.3,
            right: 0.3,
            thickness: 0.4
        },
        after: {
            left: 0.3,
            right: 0.3,
            thickness: 0.4
        },
        color: "#8b9a8f"
    },
    {
        id: "hypertrophy",
        label: "비대형",
        sub: "Hypertrophy",
        desc: "소음순이 과도하게 길거나 넓어 대음순 밖으로 돌출되는 경우입니다. 레이저로 정확하게 정리하여 자연스러운 라인을 만듭니다.",
        before: {
            left: 0.7,
            right: 0.7,
            thickness: 0.5
        },
        after: {
            left: 0.35,
            right: 0.35,
            thickness: 0.4
        },
        color: "#b8a078"
    },
    {
        id: "asymmetric",
        label: "비대칭형",
        sub: "Asymmetric",
        desc: "한쪽 소음순만 비대하거나 양쪽 크기가 다른 경우입니다. 대칭을 맞추어 균형잡힌 형태로 개선합니다.",
        before: {
            left: 0.8,
            right: 0.4,
            thickness: 0.5
        },
        after: {
            left: 0.35,
            right: 0.35,
            thickness: 0.4
        },
        color: "#b8a078"
    },
    {
        id: "thick",
        label: "비후형",
        sub: "Thickened",
        desc: "소음순이 두꺼워 보기 거북하거나 불편함을 주는 경우입니다. 두께를 줄여 섬세하고 자연스러운 형태로 정리합니다.",
        before: {
            left: 0.5,
            right: 0.5,
            thickness: 0.7
        },
        after: {
            left: 0.35,
            right: 0.35,
            thickness: 0.4
        },
        color: "#b8a078"
    }
];
function LabiaDiagram({ type, isBefore }) {
    _s();
    const { left, right, thickness } = isBefore ? type.before : type.after;
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LabiaDiagram.useEffect": ()=>{
            if (!svgRef.current) return;
            const paths = svgRef.current.querySelectorAll("path");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(paths, {
                opacity: 0,
                scale: 0.9
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }["LabiaDiagram.useEffect"], [
        isBefore
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        className: "h-full w-full",
        viewBox: "0 0 200 300",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 50 50 Q 100 30 150 50 Q 150 150 150 250 Q 100 270 50 250 Q 50 150 50 50",
                fill: "#f0e8e0",
                stroke: "#d0c0b0",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: 100 - left * 30,
                cy: 150,
                rx: 8 + thickness * 8,
                ry: 30 + left * 40,
                fill: type.color,
                fillOpacity: isBefore ? 0.7 : 0.5,
                stroke: type.color,
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: 100 + right * 30,
                cy: 150,
                rx: 8 + thickness * 8,
                ry: 30 + right * 40,
                fill: type.color,
                fillOpacity: isBefore ? 0.7 : 0.5,
                stroke: type.color,
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "100",
                y1: "50",
                x2: "100",
                y2: "250",
                stroke: "#e0d0c0",
                strokeWidth: "1",
                strokeDasharray: "4 4"
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(LabiaDiagram, "89Ty783ABEwsfMbSOeu9vscWF34=");
_c = LabiaDiagram;
function LabiaTypeDiagramBlock() {
    _s1();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAfter, setShowAfter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaTypeDiagramBlock.useGSAP": ()=>{
            cardsRef.current.forEach({
                "LabiaTypeDiagramBlock.useGSAP": (el, i)=>{
                    if (!el) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                        opacity: 0,
                        y: 40,
                        scale: 0.95
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        delay: i * 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["LabiaTypeDiagramBlock.useGSAP"]);
        }
    }["LabiaTypeDiagramBlock.useGSAP"], {
        scope: sectionRef,
        dependencies: []
    });
    const toggleAfter = (id)=>{
        setShowAfter((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden border-y border-[#e8e8e8] bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1000px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]",
                        children: "LABIAPLASTY TYPES"
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]",
                        children: [
                            "소음순 유형별 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--hip-accent-dark)]",
                                children: "수술 효과"
                            }, void 0, false, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                lineNumber: 150,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-14 text-center text-[14px] text-[#666]",
                        children: "유형을 선택하고 버튼을 클릭하면 수술 전후 효과를 확인할 수 있습니다."
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-8 sm:grid-cols-2",
                        children: LABIA_TYPES.map((type, i)=>{
                            const isActive = activeId === type.id;
                            const isShowingAfter = showAfter[type.id];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    cardsRef.current[i] = el;
                                },
                                className: `group relative overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 ${isActive ? "border-[var(--hip-accent)] shadow-lg" : "border-[#e8e8e8] hover:border-[var(--hip-accent)]/50"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[11px] tracking-[0.2em] text-[var(--hip-accent-dark)]",
                                                            children: type.sub
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "mt-1 font-[family-name:var(--font-heading-kr)] text-[18px] tracking-[0.04em] text-[#111]",
                                                            children: type.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                type.id !== "normal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setActiveId(type.id);
                                                        toggleAfter(type.id);
                                                    },
                                                    className: `rounded-full px-4 py-2 text-[12px] font-medium tracking-wider transition-all ${isShowingAfter ? "bg-[var(--hip-accent)] text-white" : "bg-[var(--hip-bg)] text-[var(--hip-accent-dark)] hover:bg-[var(--hip-accent)]/10"}`,
                                                    children: isShowingAfter ? "수술 전" : "수술 후"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mx-auto h-[200px] w-full max-w-[180px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 transition-opacity duration-500 ${isShowingAfter ? "opacity-0" : "opacity-100"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LabiaDiagram, {
                                                        type: type,
                                                        isBefore: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this),
                                                type.id !== "normal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 transition-opacity duration-500 ${isShowingAfter ? "opacity-100" : "opacity-0"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LabiaDiagram, {
                                                        type: type,
                                                        isBefore: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-[13px] leading-relaxed text-[#666] animate-[fadeIn_0.3s_ease-out]",
                                            children: type.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                            lineNumber: 210,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            }, type.id, false, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s1(LabiaTypeDiagramBlock, "vOcJW/lnoG8d2gKOyOlqqXB4Oeg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = LabiaTypeDiagramBlock;
var _c, _c1;
__turbopack_context__.k.register(_c, "LabiaDiagram");
__turbopack_context__.k.register(_c1, "LabiaTypeDiagramBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LabiaplastyView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/landingImages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$labiaplastyPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/labiaplastyPage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$treatment$2f$labiaplasty$2f$LabiaTypeDiagramBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/treatment/labiaplasty/LabiaTypeDiagramBlock.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function LabiaplastyView() {
    _s();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroTxtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const advantagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const advantagesCardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const processRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const processItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const faqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaplastyView.useGSAP": ()=>{
            if (!heroRef.current || !heroTxtRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(heroTxtRef.current, {
                opacity: 0,
                y: 32
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.3
            });
            if (heroImgRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.8,
                    onUpdate: {
                        "LabiaplastyView.useGSAP": (self)=>{
                            const y = self.progress * 80;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(heroImgRef.current, {
                                y: y * 0.4
                            });
                        }
                    }["LabiaplastyView.useGSAP"]
                });
            }
        }
    }["LabiaplastyView.useGSAP"], {
        scope: heroRef,
        dependencies: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaplastyView.useGSAP": ()=>{
            if (!introRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(introRef.current, {
                opacity: 0,
                y: 40
            }, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: introRef.current,
                    start: "top 82%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }["LabiaplastyView.useGSAP"], {
        dependencies: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaplastyView.useGSAP": ()=>{
            advantagesCardsRef.current.forEach({
                "LabiaplastyView.useGSAP": (el, i)=>{
                    if (!el) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                        opacity: 0,
                        y: 50,
                        scale: 0.96
                    }, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        delay: i * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: advantagesRef.current,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["LabiaplastyView.useGSAP"]);
        }
    }["LabiaplastyView.useGSAP"], {
        scope: advantagesRef,
        dependencies: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaplastyView.useGSAP": ()=>{
            processItemsRef.current.forEach({
                "LabiaplastyView.useGSAP": (el, i)=>{
                    if (!el) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                        opacity: 0,
                        x: i % 2 === 0 ? -40 : 40
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        delay: i * 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: processRef.current,
                            start: "top 78%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["LabiaplastyView.useGSAP"]);
        }
    }["LabiaplastyView.useGSAP"], {
        scope: processRef,
        dependencies: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaplastyView.useGSAP": ()=>{
            if (!faqRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(faqRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: faqRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }["LabiaplastyView.useGSAP"], {
        dependencies: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LabiaplastyView.useGSAP": ()=>{
            if (!ctaRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ctaRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 88%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }["LabiaplastyView.useGSAP"], {
        dependencies: []
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                className: "relative flex min-h-[70vh] items-end overflow-hidden lg:min-h-[85vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: heroImgRef,
                        className: "absolute inset-0 -top-[10%] h-[120%] w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingImage"])(0),
                            alt: "레이저 소음순 성형",
                            fill: true,
                            className: "object-cover object-center",
                            sizes: "100vw",
                            priority: true,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: heroTxtRef,
                        className: "relative z-10 w-full px-6 pb-16 pt-24 lg:px-[var(--pad-global)] lg:pb-24 lg:pt-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-[1000px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mb-4 block font-[family-name:var(--font-display)] text-[11px] tracking-[0.4em] uppercase text-[var(--hip-accent)]",
                                    children: "WOMEN'S AESTHETIC"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-[family-name:var(--font-philo)] text-[clamp(32px,5.5vw,52px)] font-light leading-[1.25] tracking-tight text-white drop-shadow-lg",
                                    children: [
                                        "레이저 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--hip-accent-light)]",
                                            children: "소음순 성형"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-[520px] text-[15px] leading-relaxed text-white/90 lg:text-[16px]",
                                    children: "수술 없이 달라지는 질 성형. 비비브, 질쎄라 등 레이저 기반 시술로 당신만의 아름다움을 프라이빗하게 찾아드립니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#curation",
                                            className: "group inline-flex items-center gap-2 rounded-sm bg-[var(--hip-accent)] px-7 py-4 text-[14px] font-medium tracking-[0.12em] text-white transition-all duration-300 hover:bg-[var(--hip-accent-dark)] hover:shadow-[0_0_30px_rgba(184,160,120,0.4)]",
                                            children: [
                                                "상담 문의",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "transition-transform group-hover:translate-x-1",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#map",
                                            className: "inline-flex items-center rounded-sm border-2 border-white/80 bg-transparent px-7 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:border-[var(--hip-accent)] hover:bg-white/5",
                                            children: "오시는 길"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block h-8 w-px bg-current"
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: introRef,
                className: "relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[720px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]",
                            children: "레이저 소음순 성형"
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[15px] leading-relaxed text-[#666]",
                            children: "절개 수술 없이 레이저 에너지로 소음순의 형태를 정리하여 자연스럽고 아름다운 라인을 만듭니다. 오마쥬는 여의사 1:1 전담 진료와 정밀 레이저 기술로 당신만의 맞춤 설계를 제공합니다."
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$treatment$2f$labiaplasty$2f$LabiaTypeDiagramBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabiaTypeDiagramBlock"], {}, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: advantagesRef,
                className: "hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-[1200px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]",
                                children: "HOMMAGE ADVANTAGES"
                            }, void 0, false, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]",
                                children: [
                                    "왜 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--hip-accent-dark)]",
                                        children: "오마쥬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    "에서 소음순 수술을 받아야 하나요"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$labiaplastyPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOMMAGE_ADVANTAGES"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        ref: (el)=>{
                                            advantagesCardsRef.current[i] = el;
                                        },
                                        className: `group relative flex flex-col rounded-lg border-2 bg-white p-6 pl-8 transition-all duration-300 ${item.highlight ? "border-[var(--hip-accent)] shadow-lg" : "border-[#e8e8e8] hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 group-hover:opacity-80 transition-opacity",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]",
                                                children: item.num
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-[14px] leading-relaxed text-[#666]",
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: processRef,
                className: "relative border-t border-[#eee] bg-[#fafaf8] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[900px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-14 text-center font-[family-name:var(--font-display)] text-[clamp(24px,3vw,32px)] tracking-[0.06em] text-[#111]",
                            children: [
                                "시술 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--hip-accent-dark)]",
                                    children: "과정"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 307,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "grid grid-cols-1 gap-8 sm:grid-cols-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$labiaplastyPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LABIAPLASTY_PROCESS"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    ref: (el)=>{
                                        if (el) processItemsRef.current[i] = el;
                                    },
                                    className: "flex gap-6 rounded-xl border border-[#eee] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-[var(--hip-accent)] bg-white font-[family-name:var(--font-display)] text-[20px] text-[var(--hip-accent-dark)]",
                                            children: item.step
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-[family-name:var(--font-display)] text-[17px] font-normal text-[#111]",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[14px] text-[#666]",
                                                    children: item.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: faqRef,
                className: "relative border-t border-[#e8e8e8] bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[800px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]",
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]",
                            children: [
                                "자주 묻는 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--hip-accent-dark)]",
                                    children: "질문"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 343,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$labiaplastyPage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LABIAPLASTY_FAQ"].map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "group border-b border-[#e8e8e8] pb-4 transition-colors hover:bg-[var(--hip-bg)]/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "flex cursor-pointer list-none items-center justify-between gap-4 py-4 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-[family-name:var(--font-heading-kr)] text-[16px] leading-relaxed text-[#111] group-hover:text-[var(--hip-accent-dark)] transition-colors",
                                                    children: faq.q
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 text-2xl font-thin text-[var(--hip-accent-dark)] transition-transform group-open:rotate-45",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-2 pb-2 pt-2 text-[14px] leading-relaxed text-[#666] animate-[fadeIn_0.3s_ease-out]",
                                            children: faq.a
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: ctaRef,
                className: "relative bg-[#0f0f0f] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-60",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-[640px] text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-[family-name:var(--font-display)] text-[clamp(26px,3.5vw,34px)] tracking-[0.06em] text-white",
                                children: "비밀 상담 · 예약"
                            }, void 0, false, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-[15px] leading-relaxed text-[#999]",
                                children: "여의사 1:1 전담 진료로 편안하게 상담받으세요. 모든 과정이 비밀 보장됩니다."
                            }, void 0, false, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex flex-wrap items-center justify-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#curation",
                                        className: "group inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all duration-300 hover:bg-[var(--hip-accent-dark)] hover:shadow-[0_0_28px_rgba(184,160,120,0.35)]",
                                        children: "상담 문의"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#map",
                                        className: "inline-block rounded-sm border-2 border-[var(--hip-accent)] bg-transparent px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[var(--hip-accent)] transition-all duration-300 hover:bg-[var(--hip-accent)] hover:text-white hover:shadow-[0_0_28px_rgba(184,160,120,0.35)]",
                                        children: "오시는 길"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#222] bg-[#0a0a0a] px-6 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "font-[family-name:var(--font-display)] text-[13px] tracking-[0.15em] text-[#888] transition-colors hover:text-[var(--hip-accent)]",
                            children: "← HOME"
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#doctor",
                            className: "font-[family-name:var(--font-display)] text-[13px] tracking-[0.15em] text-[#888] transition-colors hover:text-[var(--hip-accent)]",
                            children: "의료진 소개"
                        }, void 0, false, {
                            fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/treatment/labiaplasty/LabiaplastyView.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(LabiaplastyView, "PmGDmL/NfD7tHq265CChIfpMvGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = LabiaplastyView;
var _c;
__turbopack_context__.k.register(_c, "LabiaplastyView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5b7eb374._.js.map