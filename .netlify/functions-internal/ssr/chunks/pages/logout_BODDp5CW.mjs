import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://secureathlete.net");
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  return renderTemplate`${maybeRenderHead()}<form method="post" action="/api/logout"> <button>Sign out</button> </form>`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/logout.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
