import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, j as Fragment } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import { b as $$WidgetWrapper, c as $$Headline, g as $$ItemGrid, i as $$Icon, j as $$Hero, f as $$Features2, k as $$Stats, l as $$Features3, e as $$PageLayout } from './about_XCoz99y9.mjs';
import { $ as $$CallToAction } from './click-through_D189PO3Y.mjs';
import { c as getPermalink } from './404_HRkBPS6g.mjs';

const $$Astro$3 = createAstro("https://secureathlete.net");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/FAQs.astro", void 0);

const $$Astro$2 = createAstro("https://secureathlete.net");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 2,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "",
    title: "md:text-[1.3rem]",
    icon: "text-white bg-primary rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 rtl:ml-4 rtl:mr-0",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/Features.astro", void 0);

const $$Astro$1 = createAstro("https://secureathlete.net");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Brands;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 my-2 lg:my-4 py-1 px-3 rounded-md dark:bg-gray-200"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt || "", "alt")} class="max-h-12"> </div>`
  )} </div> ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/Brands.astro", void 0);

const $$Astro = createAstro("https://secureathlete.net");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Secure Athlete",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Secure Athlete", "actions": [
    {
      variant: "primary",
      target: "_blank",
      text: "Login",
      href: getPermalink("/login"),
      icon: "tabler:login"
    },
    { text: "Sign up", href: getPermalink("/signup") }
  ] }, { "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "image" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="relative h-0 pb-[56.25%]"> <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/D4RppC6PHZU?si=UhaZ4H2kai-QuO6p" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="absolute top-0 left-0 w-full h-full"></iframe> --> </div> ` })}`, "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Equip Your Students With The Financial Literacy The School System Never Taught, But Everyone Wish They Had!
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Financial Education for the Student <span class="hidden sm:inline">Athlete</span> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "About us", "subtitle": "Secure Athlete provides the basic financial knowledge and blueprint to help athletes understand how money works through education. We work with Athletes to help them understand the basic money principles to ensure their financial wellbeing during the emergence of NIL and the rest of their lives!" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Here are some statistics about the importance of financial literacy for student-athletes.", "subtitle": "The numbers below reflect the impact of financial education on student-athletes and the value it brings to their lives, as well as the impact of a lack of financial literacy.", "stats": [
    { title: "Average net worth of professional athletes", amount: "$116K" },
    { title: "Pro-athletes facing extreme financial hardship after retirement", amount: "72%" },
    { title: "Percent of NFL players that file for bankrupcy", amount: "16%" },
    { title: "Professional athletes with a net worth less than $1mil", amount: "22%" }
  ] })} ${renderComponent($$result2, "Stats", $$Stats, { "title": "The impact of financial education on student-athletes", "subtitle": "The numbers below reflect the impact of financial education on student-athletes and the value it brings to their lives, as well as the impact of a lack of financial literacy.", "stats": [
    { title: "Student-athletes with a financial plan", amount: "80%" },
    { title: "Student-athletes with a budget", amount: "90%" },
    { title: "Student-athletes with a savings account", amount: "85%" },
    { title: "Student-athletes with a retirement account", amount: "75%" }
  ] })}  ${renderComponent($$result2, "Brands", $$Brands, { "title": "Partnerships & Collaborations", "subtitle": "At Secure Athlete, we are proud to have partnered with some of the most reputable organizations in the world. Our collaborations have allowed us to provide the best financial education services to student-athletes and help them achieve financial success.", "icons": [], "images": [
    {
      src: "/src/assets/logos/university_nebraska.jpg",
      alt: "Paypal"
    },
    {
      src: "/src/assets/logos/u_of_a.jpg",
      alt: "Visa"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "The Secured Athlete Way", "subtitle": "We offer a variety of financial education services to help student-athletes develop the financial skills they need to succeed in life. Our services include:", "items": [
    {
      title: "Financial Literacy Courses",
      description: "Comprehensive in-person courses that cover topics such as budgeting, saving, investing, taxes, and managing debt. These courses are tailored specifically for student-athletes, addressing unique financial situations and decisions they will face in the real world post college.",
      icon: "carbon:education"
    },
    {
      title: "Personal Finance Workshops",
      description: "Live workshops for student-athletes, to learn about financial literacy in an interactive setting. These workshops cover various topics and allow participants to ask questions and receive personalized guidance.",
      icon: "carbon:money"
    },
    {
      title: "Financial Coaching Services",
      description: "One-on-one financial coaching sessions with certified financial advisors who specialize in working with student-athletes. These sessions can provide personalized financial guidance, help set financial goals, and create customized financial plans for student success.",
      icon: "game-icons:whistle"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "Main features of our templates", "subtitle": "Possess several key characteristics to effectively cater to the needs of startups and entrepreneurs.", "columns": 3, "items": [
    {
      title: "Modern and Professional Design",
      description: "Have a contemporary design that reflects current design trends and gives a professional impression.",
      icon: "tabler:artboard"
    },
    {
      title: "Responsive and Mobile-Friendly",
      description: "Adapt seamlessly to different screen sizes and devices to ensure a consistent experience.",
      icon: "tabler:picture-in-picture"
    },
    {
      title: "Customizability",
      description: "Easily customizable, allowing users to adapt the design, colors, typography, and content to match their brand identity.",
      icon: "tabler:adjustments-horizontal"
    },
    {
      title: "Fast Loading Times",
      description: "Optimized for speed to ensure a smooth user experience and favorable search engine rankings.",
      icon: "tabler:rocket"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Incorporate SEO best practices in template structure and code to improve visibility in search engine results.",
      icon: "tabler:arrows-right-left"
    },
    {
      title: "Compatibility",
      description: "The templates work seamlessly across various content management systems and website builders.",
      icon: "tabler:plug-connected"
    }
  ] })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "items": [
    {
      title: "What are landing page templates?",
      description: "Landing page templates are pre-designed web page layouts that are specifically created to serve as a foundation for building effective landing pages. These templates are designed to capture the attention of visitors and guide them towards a specific action or goal, such as signing up for a newsletter, making a purchase, or downloading a resource."
    },
    {
      title: "Why should I use a template?",
      description: "Some of the advantages are that they provide a ready-to-use structure,  saving you significant time. Are designed with user-friendliness in mind and provide a cost-effective alternative, saving you money while still delivering a quality result."
    },
    {
      title: "Can I preview templates before buying?",
      description: 'Yes, the templates allow you to preview them before making a purchase. There is a "Demo" button associated with each template.'
    },
    {
      title: "Do I need technical skills to use a template?",
      description: "Advanced technical skills are not required to use a template, but having a basic understanding of web navigation and familiarity with using online tools can still be beneficial. If you have more specific customization needs, you might need to consult guides or reach out to customer support for assistance."
    },
    {
      title: "Can I use the template on multiple websites?",
      description: "No, the template comes with a single-use license, meaning you can use the template on one website or project only. Using the template on additional websites would require purchasing additional licenses."
    },
    {
      title: "What if I need help with customization?",
      description: "The templates provides a comprehensive step-by-step guide that walk you through the customization process. If you still have doubts, you can reach out to our customer support team. They can answer your questions, provide guidance on customization, and address any issues you're facing."
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Let us know how we can help", "subtitle": "We\u2019re here to help and answer any question you might have.", "columns": 4, "items": [
    {
      title: "Phone",
      icon: "tabler:phone",
      callToAction: {
        target: "_blank",
        text: "Call us",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Email",
      icon: "tabler:mail",
      callToAction: {
        target: "_blank",
        text: "Write to us",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Chat with sales",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Start chatting",
        href: "/",
        variant: "link"
      }
    },
    {
      title: "Chat with support",
      icon: "tabler:message-circle",
      callToAction: {
        target: "_blank",
        text: "Start chatting",
        href: "/",
        variant: "link"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [{
    variant: "primary",
    target: "_blank",
    text: "Join us",
    href: getPermalink("/careers"),
    icon: "tabler:trophy"
  }] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
At Secure Athlete, we're always scouting new talent, and we'd love to have you on our team. If you're passionate about financial literacy and want to make a difference in the lives of student-athletes, we'd love to hear from you.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Be a part of our vision` })}` })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/index.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FAQs as $, $$Features as a, $$Brands as b, index as i };
