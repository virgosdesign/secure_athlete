import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import { b as $$Hero2, $ as $$CallToAction, a as $$LandingLayout } from './click-through_D189PO3Y.mjs';

const $$Astro = createAstro("https://secureathlete.net");
const $$Subscription = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Subscription;
  const metadata = {
    title: "Subscription Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Subscription Landing Demo", "title": "Subscription Landing Page: Turn Casual Browsers into Loyal Subscribers!", "subtitle": "Unlock the formula for a Subscription Landing Page that keeps your audience coming back for more.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Ironic image associated with canceling a subscription. Subscription Landing Page Demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/landing/subscription.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/landing/subscription.astro";
const $$url = "/landing/subscription";

export { $$Subscription as default, $$file as file, $$url as url };
