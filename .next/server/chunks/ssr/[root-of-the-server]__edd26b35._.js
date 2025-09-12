module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/content.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hero\":{\"title\":\"Convenção Coletiva\",\"subtitle\":\"Quando o assunto é Convenção Coletiva, o contrato é nosso.\",\"text\":\"Contrato Seguro\",\"cta\":\"Saiba Mais\",\"carousel\":[\"/img/banner-capa.jpg\",\"/img/logo-pequena.png\"]},\"header\":{\"logoText\":\"\",\"logoIcon\":\"/img/logo-pequena.png\",\"menu\":[\"Home\",\"Sobre\",\"Serviços\",\"Contato\"]},\"about\":{\"title\":\"Sobre Nós\",\"text\":\"Somos especialistas em desenvolvimento web e mobile, ajudando empresas a crescer no digital.\"},\"services\":{\"title\":\"Nossos Serviços\",\"items\":[{\"name\":\"Desenvolvimento Web\",\"description\":\"Sites rápidos, responsivos e otimizados para SEO.\"},{\"name\":\"Aplicativos Mobile\",\"description\":\"Apps híbridos e nativos para Android e iOS.\"},{\"name\":\"Consultoria Digital\",\"description\":\"Estratégias para impulsionar sua presença online.\"}]}}"));}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/components/HeroCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/content.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
const HeroCarousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/app/components/HeroCarousel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function HeroCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "indicators-carousel",
        className: "relative w-full",
        "data-carousel": "static",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-56 overflow-hidden rounded-lg md:h-96",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2e$json__$28$json$29$__["default"].hero.carousel.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden duration-700 ease-in-out",
                    "data-carousel-item": index === 0 ? "active" : "",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: img,
                        alt: `Slide ${index + 1}`,
                        width: 600,
                        height: 400,
                        className: "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeroCarousel.tsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/components/HeroCarousel.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/HeroCarousel.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/HeroCarousel.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__edd26b35._.js.map