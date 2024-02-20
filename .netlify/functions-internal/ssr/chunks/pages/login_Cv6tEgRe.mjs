import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://secureathlete.net");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`<html lang="en"> ${maybeRenderHead()}<body> <h1>Sign in</h1> <form method="post" action="/api/login"> <label for="username">Username</label> <input id="username" name="username"> <label for="password">Password</label> <input id="password" name="password"> <button>Continue</button> </form> </body></html>`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/login.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
