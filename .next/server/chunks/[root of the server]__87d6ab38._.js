module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/mocks/newsletters.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NEWSLETTER_ITEMS": (()=>NEWSLETTER_ITEMS)
});
const NEWSLETTER_ITEMS = [
    {
        id: "000000000000000000000000",
        image: "https://picsum.photos/200",
        description: "Dive into the unknown with this week's spotlight!",
        title: "Weekly Wonders",
        site: "DEN",
        subscriptions: [
            "RIGHT_1"
        ]
    },
    {
        id: "000000000000000000000001",
        image: "https://picsum.photos/200",
        description: "Kickstart your week with a burst of inspiration.",
        title: "Marvelous Mondays",
        site: "DAN",
        subscriptions: [
            "RIGHT_1"
        ]
    },
    {
        id: "000000000000000000000002",
        image: "https://picsum.photos/200",
        description: "Tuesdays just got a lot more exciting!",
        title: "Terrific Tuesdays",
        site: "LAN",
        subscriptions: [
            "RIGHT_1"
        ]
    },
    {
        id: "000000000000000000000003",
        image: "https://picsum.photos/200",
        description: "Midweek madness unleashed.",
        title: "Wacky Wednesdays",
        site: "SAN",
        subscriptions: [
            "RIGHT_1"
        ]
    },
    {
        id: "000000000000000000000004",
        image: "https://picsum.photos/200",
        description: "Discover the thrill of innovation.",
        title: "Thrilling Thursdays",
        site: "DEN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "000000000000000000000005",
        image: "https://picsum.photos/200",
        description: "Wrap up your week on a high note.",
        title: "Fun Fridays",
        site: "DAN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "000000000000000000000006",
        image: "https://picsum.photos/200",
        description: "Weekend wonders to amaze and delight.",
        title: "Sensational Saturdays",
        site: "LAN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "000000000000000000000007",
        image: "https://picsum.photos/200",
        description: "Unwind with our serene selection for Sunday.",
        title: "Serene Sundays",
        site: "SAN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "000000000000000000000008",
        image: "https://picsum.photos/200",
        description: "Mysteries and magic await in our latest feature.",
        title: "Mystery and Magic",
        site: "DEN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "000000000000000000000009",
        image: "https://picsum.photos/200",
        description: "Tech trends and titans: this week's must-read.",
        title: "Tech Titans",
        site: "DAN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "00000000000000000000000a",
        image: "https://picsum.photos/200",
        description: "A blast from the past with a modern twist.",
        title: "Historical Highlights",
        site: "LAN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "00000000000000000000000b",
        image: "https://picsum.photos/200",
        description: "Futuristic fantasies turned reality.",
        title: "Future Frontiers",
        site: "SAN",
        subscriptions: [
            "RIGHT_2"
        ]
    },
    {
        id: "00000000000000000000000c",
        image: "https://picsum.photos/200",
        description: "Exploring the intersection of art and life.",
        title: "Artistic Avenues",
        site: "DEN",
        subscriptions: []
    },
    {
        id: "00000000000000000000000d",
        image: "https://picsum.photos/200",
        description: "Culinary adventures that tantalize the taste buds.",
        title: "Culinary Quests",
        site: "DAN",
        subscriptions: []
    },
    {
        id: "00000000000000000000000e",
        image: "https://picsum.photos/200",
        description: "Tales from the trail: the world is your oyster.",
        title: "Traveler's Tales",
        site: "LAN",
        subscriptions: []
    },
    {
        id: "00000000000000000000000f",
        image: "https://picsum.photos/200",
        description: "Celebrating the spirit of sport and competition.",
        title: "Sporting Spirits",
        site: "SAN",
        subscriptions: []
    },
    {
        id: "000000000000000000000010",
        image: "https://picsum.photos/200",
        description: "The latest and greatest in global fashion.",
        title: "Fashion Finds",
        site: "DEN",
        subscriptions: [
            "RIGHT_1"
        ]
    },
    {
        id: "000000000000000000000011",
        image: "https://picsum.photos/200",
        description: "Musical moments that moved the world.",
        title: "Music Moments",
        site: "DAN",
        subscriptions: []
    },
    {
        id: "000000000000000000000012",
        image: "https://picsum.photos/200",
        description: "Cinematic celebrations for every cinephile.",
        title: "Cinema Circles",
        site: "LAN",
        subscriptions: []
    },
    {
        id: "000000000000000000000013",
        image: "https://picsum.photos/200",
        description: "Literary gems to add to your collection.",
        title: "Literary Landscapes",
        site: "SAN",
        subscriptions: [
            "RIGHT_2"
        ]
    }
];
}}),
"[project]/pages/api/newsletters.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mocks$2f$newsletters$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/mocks/newsletters.ts [api] (ecmascript)");
;
function handler(req, res) {
    if (req.method === 'GET') {
        console.log({
            req
        });
        res.status(200).json(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$mocks$2f$newsletters$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["NEWSLETTER_ITEMS"]);
    } else {
        res.status(405).end(); // Méthode non autorisée
    }
}
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/newsletters.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$newsletters$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/newsletters.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$newsletters$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$newsletters$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/newsletters",
        pathname: "/api/newsletters",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$newsletters$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__87d6ab38._.js.map