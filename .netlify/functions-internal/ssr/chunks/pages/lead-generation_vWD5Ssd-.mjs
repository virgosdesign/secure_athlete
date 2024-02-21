import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import { $ as $$CallToAction, a as $$LandingLayout } from './click-through_D189PO3Y.mjs';
import { j as $$Hero } from './about_XCoz99y9.mjs';

const $$Astro = createAstro("https://secureathlete.net");
const $$LeadGeneration = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeadGeneration;
  const metadata = {
    title: "Lead Generation Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Lead Generation Landing Demo", "title": "Effective Lead Generation Landing Page: Unlock the Secrets", "subtitle": "Discover the secrets to creating a Landing Page that turns curious visitors into eager leads. (Your Hero should grab attention instantly. Use a powerful headline that speaks directly to your target audience.)", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    alt: "Magnet attracting screws. Lead generation landing page demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/landing/lead-generation.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/landing/lead-generation.astro";
const $$url = "/landing/lead-generation";

export { $$LeadGeneration as default, $$file as file, $$url as url };
