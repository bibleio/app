(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_apps_web_dd472f._.js", {

"[project]/apps/web/components/BibleSelect.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>BibleSelect
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dotenv$40$16$2e$4$2e$5$2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bibleio$2b$design$40$1$2e$2$2e$0_$40$types$2b$react$2d$dom$40$18$2e$3$2e$0_$40$types$2b$react$40$18$2e$3$2e$5_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$f994737_exflbfz3lbpw6wlzdysjmwe2h4$2f$node_modules$2f40$bibleio$2f$design$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@bibleio+design@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@19.0.0-rc-f994737_exflbfz3lbpw6wlzdysjmwe2h4/node_modules/@bibleio/design/dist/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dotenv$40$16$2e$4$2e$5$2f$node_modules$2f$dotenv$2f$lib$2f$main$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].config();
function BibleSelect() {
    _s();
    const [bibles, setBibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function getBibles() {
            try {
                const response = await fetch('https://bible.helloao.org/api/available_translations.json');
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const data = await response.json();
                setBibles(data.translations);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                }
            }
        }
        getBibles();
    }, []);
    if (!bibles) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-body",
        children: "Loading Bibles..."
    }, void 0, false, {
        fileName: "[project]/apps/web/components/BibleSelect.tsx",
        lineNumber: 40,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-body text-dark-red",
        children: error.message
    }, void 0, false, {
        fileName: "[project]/apps/web/components/BibleSelect.tsx",
        lineNumber: 41,
        columnNumber: 21
    }, this);
    if (bibles) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bibleio$2b$design$40$1$2e$2$2e$0_$40$types$2b$react$2d$dom$40$18$2e$3$2e$0_$40$types$2b$react$40$18$2e$3$2e$5_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$f994737_exflbfz3lbpw6wlzdysjmwe2h4$2f$node_modules$2f40$bibleio$2f$design$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        label: "Bible",
        className: "shadow-transparent bg-transparent rounded-[0px] border-none p-0 text-h4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bibleio$2b$design$40$1$2e$2$2e$0_$40$types$2b$react$2d$dom$40$18$2e$3$2e$0_$40$types$2b$react$40$18$2e$3$2e$5_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$f994737_exflbfz3lbpw6wlzdysjmwe2h4$2f$node_modules$2f40$bibleio$2f$design$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroup"], {
            children: bibles.map((bible)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$7_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bibleio$2b$design$40$1$2e$2$2e$0_$40$types$2b$react$2d$dom$40$18$2e$3$2e$0_$40$types$2b$react$40$18$2e$3$2e$5_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$f994737_exflbfz3lbpw6wlzdysjmwe2h4$2f$node_modules$2f40$bibleio$2f$design$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: bible.id,
                    children: bible.name
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/BibleSelect.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/apps/web/components/BibleSelect.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/BibleSelect.tsx",
        lineNumber: 44,
        columnNumber: 7
    }, this);
}
_s(BibleSelect, "tYSev8aRsFllFZXOpxCmy+JGrUM=");
_c = BibleSelect;
var _c;
__turbopack_refresh__.register(_c, "BibleSelect");

})()),
"[project]/apps/web/app/bible/[[...slug]]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=%5Bproject%5D_apps_web_dd472f._.js.map