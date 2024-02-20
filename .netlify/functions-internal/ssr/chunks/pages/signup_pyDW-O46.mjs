import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import { b as $$WidgetWrapper, c as $$Headline, f as $$Features2, e as $$PageLayout } from './about_XCoz99y9.mjs';
import { a as $$Form } from './contact_CYnQ_Nr8.mjs';

const $$Astro$1 = createAstro("https://secureathlete.net");
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignUp;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/SignUp.astro", void 0);

const $$Astro = createAstro("https://secureathlete.net");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const metadata = {
    title: "Sign up"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignUp", $$SignUp, { "title": "Get started with Secure Athlete.", "subtitle": "Secure your your financial future with Secure Athlete.", "inputs": [
    {
      type: "text",
      name: "first_name",
      label: "First Name"
    },
    {
      type: "text",
      name: "last_name",
      label: "Last Name"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    }
  ], "disclaimer": {
    label: "By submitting this contact form, you acknowledge and agree to the collection of your personal information."
  }, "description": "Our support team typically responds within 24 business hours.", "button": "Signup" })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "We are here to help!", "items": [
    {
      title: "General support",
      description: `Chat with us for inquiries related to account management, website navigation, payment issues, accessing purchased templates or general questions about the website's functionality.`
    },
    {
      title: "Contact sales",
      description: "Chat with us for questions about purchases, customization options, licensing for commercial use, inquiries about specific template, etc."
    },
    {
      title: "Technical support",
      description: "Chat with us when facing issues like template installation, problems editing difficulties, compatibility issues with software or download errors, or other technical challenges related to using the templates."
    },
    {
      title: "Phone",
      description: "+1 (234) 567-890",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "contact@support.com",
      icon: "tabler:mail"
    },
    {
      title: "Location",
      description: "1234 Lorem Ipsum St, 12345, Miami, EEUU",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/signup.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
