import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CF1W5CG1.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./chunks/generic_otvB2hMq.mjs');
const _page1 = () => import('./chunks/404_ouzllIO4.mjs');
const _page2 = () => import('./chunks/about_BSqIel51.mjs');
const _page3 = () => import('./chunks/login_BpRVJORe.mjs');
const _page4 = () => import('./chunks/logout_tVE6CeFV.mjs');
const _page5 = () => import('./chunks/signup_D5214W22.mjs');
const _page6 = () => import('./chunks/contact_DAieThYk.mjs');
const _page7 = () => import('./chunks/mobile-app_IGVwtsYB.mjs');
const _page8 = () => import('./chunks/personal_WPPSLDku.mjs');
const _page9 = () => import('./chunks/saas_DzJkCL5R.mjs');
const _page10 = () => import('./chunks/startup_DssKJnRs.mjs');
const _page11 = () => import('./chunks/click-through_Dcl9hkZv.mjs');
const _page12 = () => import('./chunks/lead-generation_pBiDpEQ5.mjs');
const _page13 = () => import('./chunks/pre-launch_D2yxYZIm.mjs');
const _page14 = () => import('./chunks/product_DZjV18SN.mjs');
const _page15 = () => import('./chunks/sales_CytRbGnG.mjs');
const _page16 = () => import('./chunks/subscription_CEROZCPu.mjs');
const _page17 = () => import('./chunks/login_IfqX_H9F.mjs');
const _page18 = () => import('./chunks/logout_BHsYdrqe.mjs');
const _page19 = () => import('./chunks/pricing_BZmF9nLo.mjs');
const _page20 = () => import('./chunks/privacy_BGQDibe8.mjs');
const _page21 = () => import('./chunks/rss_K3Tj6thF.mjs');
const _page22 = () => import('./chunks/services_D3xNNNti.mjs');
const _page23 = () => import('./chunks/signup_meYGkBcc.mjs');
const _page24 = () => import('./chunks/terms_BhnKjj6l.mjs');
const _page25 = () => import('./chunks/_.._Dq4GGpxU.mjs');
const _page26 = () => import('./chunks/_.._3MC2HrRi.mjs');
const _page27 = () => import('./chunks/_.._PUafYbDv.mjs');
const _page28 = () => import('./chunks/index_DqP-q_II.mjs');
const _page29 = () => import('./chunks/index_B3LlTV0a.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/login.ts", _page3],
    ["src/pages/api/logout.ts", _page4],
    ["src/pages/api/signup.ts", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/homes/mobile-app.astro", _page7],
    ["src/pages/homes/personal.astro", _page8],
    ["src/pages/homes/saas.astro", _page9],
    ["src/pages/homes/startup.astro", _page10],
    ["src/pages/landing/click-through.astro", _page11],
    ["src/pages/landing/lead-generation.astro", _page12],
    ["src/pages/landing/pre-launch.astro", _page13],
    ["src/pages/landing/product.astro", _page14],
    ["src/pages/landing/sales.astro", _page15],
    ["src/pages/landing/subscription.astro", _page16],
    ["src/pages/login.astro", _page17],
    ["src/pages/logout.astro", _page18],
    ["src/pages/pricing.astro", _page19],
    ["src/pages/privacy.md", _page20],
    ["src/pages/rss.xml.ts", _page21],
    ["src/pages/services.astro", _page22],
    ["src/pages/signup.astro", _page23],
    ["src/pages/terms.md", _page24],
    ["src/pages/[...blog]/[category]/[...page].astro", _page25],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page26],
    ["src/pages/[...blog]/[...page].astro", _page27],
    ["src/pages/index.astro", _page28],
    ["src/pages/[...blog]/index.astro", _page29]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c5b1c278-9d88-48d9-a8ce-e9f11eace23f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
