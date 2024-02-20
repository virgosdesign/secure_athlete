import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, j as Fragment, u as unescapeHTML } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import { b as $$WidgetWrapper, c as $$Headline, i as $$Icon, $ as $$Button, l as $$Features3, e as $$PageLayout } from './about_XCoz99y9.mjs';
import { $ as $$HeroText } from './contact_CYnQ_Nr8.mjs';
import { $ as $$FAQs } from './index_DmNudQEr.mjs';
import { $ as $$Steps } from './personal_BErFv9hS.mjs';
import { $ as $$CallToAction } from './click-through_D189PO3Y.mjs';

const $$Astro$1 = createAstro("https://secureathlete.net");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-5xl">$</span> <span class="text-6xl font-extrabold">${price}</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/Pricing.astro", void 0);

const $$Astro = createAstro("https://secureathlete.net");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const metadata = {
    title: "Pricing"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Pricing", "title": "Stellar Pricing for Every Journey", "subtitle": "Choose the perfect plan that aligns with your cosmic goals." })}  ${renderComponent($$result2, "Prices", $$Pricing$1, { "title": "Our prices", "subtitle": "Only pay for what you need", "prices": [
    {
      title: "basic",
      subtitle: "Optimal choice for personal use",
      price: 29,
      period: "per month",
      items: [
        {
          description: "Etiam in libero, et volutpat"
        },
        {
          description: "Aenean ac nunc dolor tristique"
        },
        {
          description: "Cras scelerisque accumsan lib"
        },
        {
          description: "In hac habitasse"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    },
    {
      title: "standard",
      subtitle: "Optimal choice for small teams",
      price: 69,
      period: "Per Month",
      items: [
        {
          description: "Proin vel laoreet"
        },
        {
          description: "Ut efficitur habitasse egestas"
        },
        {
          description: "Volutpat hac curabitur"
        },
        {
          description: "Pellentesque blandit ut nibh"
        },
        {
          description: "Donec fringilla sem"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "popular"
    },
    {
      title: "premium",
      subtitle: "Optimal choice for companies",
      price: 199,
      period: "Per Month",
      items: [
        {
          description: "Curabitur suscipit risus"
        },
        {
          description: "Aliquam habitasse malesuada"
        },
        {
          description: "Suspendisse sit amet blandit"
        },
        {
          description: "Suspendisse auctor blandit dui"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Price-related features", "subtitle": "Discover the advantages of choosing our plans", "columns": 2, "items": [
    {
      title: "Tiered Pricing Plans",
      description: "Choose from a range of pricing plans designed to accommodate different budgets and requirements.",
      icon: "tabler:stairs"
    },
    {
      title: "Transparent Pricing",
      description: "Clearly displayed pricing details for each plan, with no hidden costs or unexpected charges.",
      icon: "tabler:flip-vertical"
    },
    {
      title: "Secure Payment Methods",
      description: "Secure payment gateways to protect your financial information during transactions.",
      icon: "tabler:shield-lock"
    },
    {
      title: "Instant Access",
      description: `Immediate access to your chosen plan's features and templates upon subscription.`,
      icon: "tabler:accessible"
    },
    {
      title: "Upgrade Value",
      description: "Upgrade to higher-tier plans to unlock more features and benefits for an enhanced experience.",
      icon: "tabler:chevrons-up"
    },
    {
      title: "24H support",
      description: "Questions answered via live chat, email or phone, every calendar day.",
      icon: "tabler:headset"
    }
  ], "classes": { container: "max-w-5xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "A guided journey from plans to creativity", "tagline": "simplified process", "isReversed": true, "items": [
    {
      title: "Explore plans",
      icon: "tabler:number-1"
    },
    {
      title: "Select a plan",
      icon: "tabler:number-2"
    },
    {
      title: "Sign Up / Log In",
      icon: "tabler:number-3"
    },
    {
      title: "Review order",
      icon: "tabler:number-4"
    },
    {
      title: "Enter payment details",
      icon: "tabler:number-5"
    },
    {
      title: "Confirmation",
      icon: "tabler:number-6"
    },
    {
      title: "Download and start using the template(s)",
      icon: "tabler:number-7"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Pricing FAQs", "subtitle": "Choosing the right plan is important, and we're here to answer your questions. If you have queries about our pricing options, you're in the right place.", "columns": 1, "items": [
    {
      title: "Do the plans come with customer support?",
      description: "Absolutely, all plans include access to our dedicated customer support to assist you with any queries or concerns."
    },
    {
      title: "Is there a trial period for the different plans?",
      description: "Unfortunately, we don't offer trial periods for the plans. However, you can check out our demo section to preview the quality of our templates."
    },
    {
      title: "Can I switch between plans?",
      description: "Certainly! You can easily upgrade or downgrade your plan, at any time, to find the one that best suits your evolving requirements."
    },
    {
      title: "What payment methods do you accept?",
      description: "We accept major credit cards and online payment methods to ensure a convenient and secure transaction process."
    },
    {
      title: "Are there any hidden fees beyond the displayed cost?",
      description: "No, the subscription cost covers all the features and templates listed under each plan. There are no hidden fees or extra charges."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Ready to boost your projects?", "subtitle": "Join our community of satisfied customers who have transformed their work with our templates.", "actions": [
    {
      variant: "primary",
      text: "Get started now",
      href: "/"
    }
  ] })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/pricing.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/pricing.astro";
const $$url = "/pricing";

const pricing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pricing$1 as $, pricing as p };
