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
"[project]/src/app/signature/lifting/LiftingView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiftingView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/landingImages.ts [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
const SPECIALITY_ITEMS = [
    {
        id: "effect01",
        title: "높은 고정력과 리프팅효과",
        description: "각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다."
    },
    {
        id: "effect02",
        title: "빠른 시술 속도",
        description: "효율적인 시술 방법으로 바쁜 시간 중에도 편안하게 부담없이 받으실 수 있습니다."
    },
    {
        id: "effect03",
        title: "시술 후 통증 최소화",
        description: "정확한 피부층에 에너지를 전달하면서 빠르게 완성하여 붓기와 멍, 통증이 거의 없는 방법으로 시술하고 있습니다."
    },
    {
        id: "effect04",
        title: "얼굴형 맞춤시술",
        description: "개인의 골격, 피부 두께, 근육의 움직임까지 분석하여 가장 이상적인 리프팅 벡터를 설계합니다."
    },
    {
        id: "effect05",
        title: "편안한 시술",
        description: "리프팅에 대한 걱정과 두려움을 최소화하여 편안하게 시술 받으실 수 있습니다."
    }
];
const FEATURE_ITEMS = [
    {
        num: "01",
        title: "울쎄라 (Ulthera)",
        description: "마이크로포커스 초음파 기술로 SMAS층까지 에너지를 전달하는 FDA 승인 시술",
        link: "/signature/ulthera"
    },
    {
        num: "02",
        title: "슈링크 유니버스",
        description: "고강도 집속 초음파(HIFU) 에너지를 이용한 2세대 리프팅 시술",
        link: "/signature/shrink-universe"
    },
    {
        num: "03",
        title: "튠페이스",
        description: "멀티 고주파를 활용한 페이스리프팅 시술로 3단계 깊이 조절이 가능",
        link: "/signature/tune-face"
    },
    {
        num: "04",
        title: "코레지셀핏",
        description: "고주파 에너지를 이용한 비침습 바디 컨투어링 시술",
        link: "/signature/correction-fit"
    },
    {
        num: "05",
        title: "민트 실",
        description: "돌기가 달린 몰딩실을 사용한 비절개 리프팅 시술",
        link: "/signature/mint-thread"
    },
    {
        num: "06",
        title: "실루엣소프트",
        description: "부드러운 실을 사용한 자연스러운 리프팅 시술",
        link: "/signature/silhouette-soft"
    }
];
function LiftingView() {
    _s();
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "LiftingView.useGSAP": ()=>{
            // 수평 스크롤 (데스크톱)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].matchMedia({
                "(min-width: 1025px)": {
                    "LiftingView.useGSAP": ()=>{
                        if (!wrapRef.current) return;
                        const horizon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("._lifting .horizontal .Wrap", {
                            xPercent: -100,
                            x: {
                                "LiftingView.useGSAP.horizon": ()=>window.innerWidth
                            }["LiftingView.useGSAP.horizon"],
                            scrollTrigger: {
                                pin: "._lifting .horizontal",
                                trigger: "._lifting .horizontal",
                                start: "left left",
                                end: {
                                    "LiftingView.useGSAP.horizon": ()=>`+=${wrapRef.current?.offsetWidth || 0} bottom`
                                }["LiftingView.useGSAP.horizon"],
                                scrub: 1
                            }
                        });
                        // sec1 애니메이션
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline().from("._lifting .sec1 .bg", {
                            scale: 1.2,
                            duration: 2
                        }).from("._lifting .sec1 .lbx", {
                            opacity: 0,
                            xPercent: -100,
                            duration: 1.5
                        }, "-=100%").from("._lifting .sec1 .rbx", {
                            opacity: 0,
                            xPercent: 100,
                            duration: 1.5
                        }, "-=100%").from("._lifting .sec1 .tit p", {
                            opacity: 0,
                            y: 40,
                            stagger: 0.2,
                            duration: 0.8
                        }, "-=80%");
                        // sec2 애니메이션
                        const tl2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            scrollTrigger: {
                                trigger: "._lifting .sec2",
                                start: "left 45%",
                                end: "left",
                                containerAnimation: horizon,
                                toggleActions: "play none none reverse"
                            }
                        });
                        tl2.from("._lifting .sec2 .bg", {
                            scale: 1.2,
                            duration: 1.5
                        }).from("._lifting .sec2 .tit h2", {
                            opacity: 0,
                            duration: 0.8,
                            y: 40
                        }, "-=100%").from("._lifting .sec2 .tit .bx", {
                            opacity: 0,
                            duration: 0.8,
                            y: 40
                        }, "-=80%");
                        // 헤더 색상 변경
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: "._lifting .sec2",
                            start: "left 45%",
                            containerAnimation: horizon,
                            onEnter: {
                                "LiftingView.useGSAP": ()=>{
                                    document.querySelector("header")?.classList.remove("white");
                                }
                            }["LiftingView.useGSAP"],
                            onLeaveBack: {
                                "LiftingView.useGSAP": ()=>{
                                    document.querySelector("header")?.classList.add("white");
                                }
                            }["LiftingView.useGSAP"]
                        });
                        // sec3 애니메이션
                        const tl3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            scrollTrigger: {
                                trigger: "._lifting .sec3",
                                start: "left 90%",
                                end: "left",
                                containerAnimation: horizon,
                                toggleActions: "play none none reverse"
                            }
                        });
                        tl3.from("._lifting .sec3 .con .tit > *", {
                            opacity: 0,
                            stagger: 0.2,
                            duration: 0.8,
                            x: -40
                        }).from("._lifting .sec3 .con .sub p > *", {
                            opacity: 0,
                            stagger: 0.2,
                            duration: 0.8,
                            y: 40
                        }, "-=80%");
                        // 마퀴 애니메이션
                        setTimeout({
                            "LiftingView.useGSAP": ()=>{
                                const marquees = document.querySelectorAll("._lifting .sec2 .marquee .absol");
                                marquees.forEach({
                                    "LiftingView.useGSAP": (marquee)=>{
                                        const marqueeChild = marquee.querySelector(".mar_ch");
                                        if (!marqueeChild) return;
                                        const cloneTimes = Math.ceil(marquee.getBoundingClientRect().width / marqueeChild.getBoundingClientRect().width);
                                        for(let i = 0; i < cloneTimes; i++){
                                            const clone = marqueeChild.cloneNode(true);
                                            marquee.appendChild(clone);
                                        }
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(marquee.querySelectorAll(".mar_ch"), {
                                            xPercent: 0
                                        }, {
                                            xPercent: -100,
                                            repeat: -1,
                                            duration: 15,
                                            ease: "none"
                                        });
                                    }
                                }["LiftingView.useGSAP"]);
                            }
                        }["LiftingView.useGSAP"], 100);
                    }
                }["LiftingView.useGSAP"],
                "(max-width: 1024px)": {
                    "LiftingView.useGSAP": ()=>{
                        // 모바일 애니메이션
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline().from("._lifting .sec1 .bg", {
                            scale: 1.2,
                            duration: 2
                        }).from("._lifting .sec1 .lbx", {
                            opacity: 0,
                            xPercent: -100,
                            duration: 1.5
                        }, "-=100%").from("._lifting .sec1 .rbx", {
                            opacity: 0,
                            xPercent: 100,
                            duration: 1.5
                        }, "-=100%").from("._lifting .sec1 .tit p", {
                            opacity: 0,
                            y: 40,
                            stagger: 0.2,
                            duration: 0.8
                        }, "-=80%");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            scrollTrigger: {
                                trigger: "._lifting .sec2",
                                start: "top center+=20%",
                                toggleActions: "play none none reverse"
                            }
                        }).from("._lifting .sec2 .bg", {
                            scale: 1.2,
                            duration: 1.5
                        }).from("._lifting .sec2 .tit h2", {
                            opacity: 0,
                            duration: 0.8,
                            y: 40
                        }, "-=100%").from("._lifting .sec2 .tit .bx", {
                            opacity: 0,
                            duration: 0.8,
                            y: 40
                        }, "-=80%");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            scrollTrigger: {
                                trigger: "._lifting .sec3",
                                start: "top center+=20%",
                                toggleActions: "play none none reverse"
                            }
                        }).from("._lifting .sec3 .con .tit > *", {
                            opacity: 0,
                            stagger: 0.2,
                            duration: 0.8,
                            x: -40
                        }).from("._lifting .sec3 .con .sub p > *", {
                            opacity: 0,
                            stagger: 0.2,
                            duration: 0.8,
                            y: 40
                        }, "-=80%");
                    }
                }["LiftingView.useGSAP"]
            });
            // Speciality 섹션
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].matchMedia({
                "(min-width: 1025px)": {
                    "LiftingView.useGSAP": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: "._lifting .speciality .lbx",
                            endTrigger: "._lifting .speciality",
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 1,
                            pin: true
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("._lifting .speciality .wrap", {
                            scrollTrigger: {
                                trigger: "._lifting .speciality .bg",
                                endTrigger: "._lifting .speciality",
                                start: "top top",
                                end: "bottom bottom",
                                scrub: 1,
                                pin: true
                            }
                        });
                    }
                }["LiftingView.useGSAP"]
            });
            const specialityTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: "._lifting .speciality",
                    start: "top center+=20%",
                    toggleActions: "play none none reverse",
                    onEnter: {
                        "LiftingView.useGSAP.specialityTl": ()=>{
                            document.querySelector("header")?.classList.remove("white");
                        }
                    }["LiftingView.useGSAP.specialityTl"],
                    onLeaveBack: {
                        "LiftingView.useGSAP.specialityTl": ()=>{
                            document.querySelector("header")?.classList.add("white");
                        }
                    }["LiftingView.useGSAP.specialityTl"]
                }
            });
            specialityTl.from("._lifting .speciality .wrap .tit h2", {
                opacity: 0,
                x: 40,
                duration: 0.8
            }).from("._lifting .speciality .lbx", {
                opacity: 0,
                x: -40,
                duration: 0.8
            }, "-=80%");
            const infoBoxes = document.querySelectorAll("._lifting .speciality .con .rbx .left .bx, ._lifting .speciality .con .rbx .right .bx");
            infoBoxes.forEach({
                "LiftingView.useGSAP": (item)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top center+=20%",
                            toggleActions: "play none none reverse"
                        }
                    }).from(item, {
                        opacity: 0,
                        y: 40,
                        duration: 0.8
                    });
                }
            }["LiftingView.useGSAP"]);
            // Feature 섹션
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: "._lifting .feature",
                    start: "top center+=20%",
                    toggleActions: "play none none reverse"
                }
            }).from("._lifting .feature .tit h2", {
                opacity: 0,
                y: 40,
                duration: 0.8
            }).from("._lifting .feature .tit p", {
                opacity: 0,
                y: 40,
                duration: 0.8
            }, "-=80%");
            const featureBoxes = document.querySelectorAll("._lifting .feature .con .bx");
            featureBoxes.forEach({
                "LiftingView.useGSAP": (item, idx)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: item,
                            start: "top center+=20%",
                            toggleActions: "play none none reverse"
                        }
                    }).from(item, {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        delay: idx % 2 * 0.1
                    });
                }
            }["LiftingView.useGSAP"]);
        }
    }["LiftingView.useGSAP"], {
        scope: mainRef,
        dependencies: []
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: mainRef,
        className: "_lifting _s min-h-screen bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "horizontal relative w-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: wrapRef,
                    className: "Wrap relative flex w-max",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sec1 relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-[#1a1a1a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg absolute inset-0 bg-cover bg-center bg-[#1a1a1a]",
                                    style: {
                                        backgroundImage: `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingImage"])(0)})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lbx absolute left-[10%] top-1/2 -translate-y-1/2 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[clamp(60px,12vw,120px)] font-light tracking-[0.2em] text-white uppercase",
                                        style: {
                                            fontFamily: 'var(--font-en-title)',
                                            fontWeight: 300
                                        },
                                        children: "FIGURE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rbx absolute right-[10%] top-1/2 -translate-y-1/2 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[clamp(60px,12vw,120px)] font-light tracking-[0.2em] text-white uppercase",
                                        style: {
                                            fontFamily: 'var(--font-en-title)',
                                            fontWeight: 300
                                        },
                                        children: "MAKING"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tit absolute bottom-[15%] left-1/2 -translate-x-1/2 z-10 text-center max-w-4xl px-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[clamp(16px,2vw,20px)] text-white leading-relaxed mb-4",
                                            style: {
                                                fontFamily: 'var(--font-kr-body)'
                                            },
                                            children: [
                                                '아름다운 라인을 만드는 "FIGURE MAKING"을 모토로 탄생한',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, this),
                                                "오마쥬의 TOP 시그니처 시술."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[clamp(14px,1.5vw,18px)] text-white/90 leading-relaxed",
                                            style: {
                                                fontFamily: 'var(--font-kr-body)'
                                            },
                                            children: [
                                                "얼굴의 전반적인 조화, 자연스러움, 각각의 개성을 살리고",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this),
                                                "단점을 보완하는 방향으로 수술없이 간단한 시술로도",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                "본연의 숨겨진 라인과 아름다움을 재발견."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "scrollcircle absolute bottom-20 left-1/2 -translate-x-1/2 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rel relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/asset/img/sub/scroll_circle.png",
                                                alt: "scroll",
                                                className: "w-16 h-16 opacity-50",
                                                onError: (e)=>{
                                                    e.target.style.display = "none";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    id: "arrow_down",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 128.66 218.52",
                                                    className: "w-8 h-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "stroke-white stroke-[6] fill-none",
                                                            d: "M-546.63,408.4a61.33,61.33,0,0,1,61.33-61.33",
                                                            transform: "translate(610.96 -192.89)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "stroke-white stroke-[6] fill-none",
                                                            d: "M-546.63,195.89V408.4A61.33,61.33,0,0,0-608,347.07",
                                                            transform: "translate(610.96 -192.89)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sec2 relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-[#1a1a1a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg absolute inset-0 bg-cover bg-center bg-[#1a1a1a]",
                                    style: {
                                        backgroundImage: `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingImage"])(1)})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[clamp(60px,12vw,120px)] font-light tracking-[0.1em] text-white mb-6 uppercase",
                                            style: {
                                                fontFamily: 'var(--font-en-title)',
                                                fontWeight: 300
                                            },
                                            children: "Lifting"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bx",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[clamp(20px,3vw,28px)] text-white/90",
                                                style: {
                                                    fontFamily: 'var(--font-kr-body)'
                                                },
                                                children: "리프팅"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "marquee absolute bottom-0 left-0 w-full h-20 overflow-hidden z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absol absolute flex whitespace-nowrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mar_ch text-[clamp(40px,6vw,80px)] font-light text-white/20 tracking-wider uppercase",
                                            style: {
                                                fontFamily: 'var(--font-en-title)',
                                                fontWeight: 300
                                            },
                                            children: "HOMMAGE LIFTING"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sec3 relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-[#1a1a1a]",
                            style: {
                                backgroundImage: `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingImage"])(2)})`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "scrollcircle absolute top-20 left-1/2 -translate-x-1/2 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rel relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/asset/img/sub/scroll_circle.png",
                                                alt: "scroll",
                                                className: "w-16 h-16 opacity-50",
                                                onError: (e)=>{
                                                    e.target.style.display = "none";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    id: "arrow_down",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 128.66 218.52",
                                                    className: "w-8 h-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "stroke-white stroke-[6] fill-none",
                                                            d: "M-546.63,408.4a61.33,61.33,0,0,1,61.33-61.33",
                                                            transform: "translate(610.96 -192.89)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "stroke-white stroke-[6] fill-none",
                                                            d: "M-546.63,195.89V408.4A61.33,61.33,0,0,0-608,347.07",
                                                            transform: "translate(610.96 -192.89)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "con absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-4xl px-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg -z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative p-8 md:p-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tit mb-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-[clamp(40px,6vw,60px)] font-light text-white mb-4",
                                                            style: {
                                                                fontFamily: 'var(--font-en-title)',
                                                                fontWeight: 300
                                                            },
                                                            children: "02"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[clamp(32px,5vw,48px)] font-medium text-white mb-6",
                                                            style: {
                                                                fontFamily: 'var(--font-kr-heading)'
                                                            },
                                                            children: "리프팅이란?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[clamp(14px,1.5vw,18px)] text-white leading-relaxed",
                                                            style: {
                                                                fontFamily: 'var(--font-kr-body)',
                                                                lineHeight: '1.8'
                                                            },
                                                            children: [
                                                                "고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만들기 위한 최적의 리프팅 컴비네이션.",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있는",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "원데이익스트림리프팅, 또는 과도한 지방을 분해하고 배출하여 윤곽을 개선해주는 조각주사와 함께 컴바인한",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "'조각술'은 더욱 효과적인 라인을 만들어주는 오마쥬만의 차별화된 특별한 경험이 될 것입니다."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "line w-full h-px bg-white/30 mb-8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[clamp(14px,1.5vw,18px)] text-white",
                                                        style: {
                                                            fontFamily: 'var(--font-kr-body)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                className: "font-semibold",
                                                                children: "종류"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-4",
                                                                children: "울쎄라, 슈링크 유니버스, 튠페이스, 실리프팅, V라인 리프팅, 이중턱 리프팅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "speciality relative min-h-screen overflow-hidden bg-[#1a1a1a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg absolute inset-0 bg-cover bg-center bg-[#1a1a1a]",
                        style: {
                            backgroundImage: `url(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$landingImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingImage"])(3)})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wrap relative z-10 max-w-[1600px] mx-auto px-[6vw] py-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tit mb-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[clamp(40px,6vw,60px)] font-light text-white text-center uppercase",
                                    style: {
                                        fontFamily: 'var(--font-en-title)',
                                        fontWeight: 300
                                    },
                                    children: "Speciality"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-2 gap-16 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lbx",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[clamp(24px,4vw,36px)] font-medium text-white leading-relaxed",
                                            style: {
                                                fontFamily: 'var(--font-kr-heading)'
                                            },
                                            children: [
                                                "오마쥬 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: "리프팅"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this),
                                                "으로",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 17
                                                }, this),
                                                "변하지 않는 아름다움을",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 17
                                                }, this),
                                                "만들어 보세요."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "con",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rbx",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bx",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "btn mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-white/60 uppercase tracking-wider",
                                                                        children: "effect01"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "cont",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-white mb-3",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[0].title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 488,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-white/90 leading-relaxed",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[0].description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bx",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "btn mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-white/60 uppercase tracking-wider",
                                                                        children: "effect03"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 493,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "cont",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-white mb-3",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[2].title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-white/90 leading-relaxed",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[2].description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 498,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bx",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "btn mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-white/60 uppercase tracking-wider",
                                                                        children: "effect05"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "cont",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-white mb-3",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[4].title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 506,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-white/90 leading-relaxed",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[4].description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 507,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bx",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "btn mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-white/60 uppercase tracking-wider",
                                                                        children: "effect02"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                        lineNumber: 514,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 513,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "cont",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-white mb-3",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[1].title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 517,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-white/90 leading-relaxed",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[1].description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 518,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bx",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "btn mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-white/60 uppercase tracking-wider",
                                                                        children: "effect04"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "cont",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-semibold text-white mb-3",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[3].title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-white/90 leading-relaxed",
                                                                            style: {
                                                                                fontFamily: 'var(--font-kr-body)'
                                                                            },
                                                                            children: SPECIALITY_ITEMS[3].description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                            lineNumber: 527,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 481,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 480,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "feature relative py-32 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap max-w-[1440px] mx-auto px-[6vw]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tit text-center mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[clamp(40px,6vw,60px)] font-light text-[#111] mb-4 uppercase",
                                    style: {
                                        fontFamily: 'var(--font-en-title)',
                                        fontWeight: 300
                                    },
                                    children: "Feature"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[clamp(16px,2vw,20px)] text-gray-600",
                                    style: {
                                        fontFamily: 'var(--font-kr-body)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[#111]",
                                            children: "리프팅"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        " 시술별 특징"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "con grid md:grid-cols-3 gap-8 mb-16",
                            children: FEATURE_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.link,
                                    className: "bx group bg-white p-8 rounded-lg border border-black/10 hover:border-black transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bxCont",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "top mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-semibold text-[#111] mb-3",
                                                        style: {
                                                            fontFamily: 'var(--font-kr-body)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "num text-black mr-2",
                                                                children: item.num
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-600 leading-relaxed block",
                                                        style: {
                                                            fontFamily: 'var(--font-kr-body)'
                                                        },
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bottom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {}, void 0, false, {
                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "view flex items-center gap-2 text-black opacity-0 group-hover:opacity-100 transition-opacity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium",
                                                                children: "View more"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "arrow",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                                lineNumber: 561,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this)
                                }, item.num, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "linkBx flex flex-wrap justify-center gap-4",
                            children: [
                                {
                                    name: "조각주사",
                                    link: "#"
                                },
                                {
                                    name: "이지실리프팅",
                                    link: "#"
                                },
                                {
                                    name: "티타늄리프팅",
                                    link: "#"
                                },
                                {
                                    name: "콰트로리프팅",
                                    link: "#"
                                },
                                {
                                    name: "원데이익스트림리프팅",
                                    link: "#"
                                },
                                {
                                    name: "B토닝",
                                    link: "#"
                                }
                            ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.link,
                                    className: `px-6 py-3 border border-black/20 rounded-full text-sm transition-colors ${link.name === "이지실리프팅" ? "bg-black text-white border-black" : "bg-white text-black hover:border-black"}`,
                                    children: link.name
                                }, link.name, false, {
                                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                                    lineNumber: 585,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/signature/lifting/LiftingView.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
_s(LiftingView, "WImL8kVjO9OLXdQ1dVbryrcI/00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = LiftingView;
var _c;
__turbopack_context__.k.register(_c, "LiftingView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f0685aec._.js.map