
			import { onRequest } from "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/.netlify/functions-internal/ssr/middleware.mjs";
			import { createContext, trySerializeLocals } from 'astro/middleware';

			export default async (request, context) => {
				const ctx = createContext({ 
					request,
					params: {}
				});
				ctx.locals = { netlify: { context } }
				const next = () => {
					const { netlify, ...otherLocals } = ctx.locals;
					request.headers.set("x-astro-locals", trySerializeLocals(otherLocals));
					request.headers.set("x-astro-middleware-secret", "fbf99317-e7df-4982-a7f7-d4ce247ae99b");
					return context.next();
				};
			
				return onRequest(ctx, next);
			}

			export const config = {
				name: "Astro Middleware",
				generator: "@astrojs/netlify@5.1.2",
				path: "/*", excludedPath: ["/_astro/*", "/.netlify/images/*"]
			};
			