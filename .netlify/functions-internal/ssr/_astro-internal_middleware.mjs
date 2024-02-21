import 'kleur/colors';
import './chunks/astro_C6C2Eh3i.mjs';
import 'clsx';
import 'cookie';
import '@astrojs/internal-helpers/path';
import { l as lucia } from './chunks/pages/login_R6zBtA_B.mjs';
import { verifyRequestOrigin } from 'lucia';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest$1 = defineMiddleware(async (context, next) => {
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&& ");
  if (context.request.method !== "GET") {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& POST", context);
    const originHeader = context.request.headers.get("Origin");
    const hostHeader = context.request.headers.get("Host");
    if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
      return new Response(null, {
        status: 403
      });
    }
  }
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& GET", context);
  if (!sessionId) {
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }
  const { session, user } = await lucia.validateSession(sessionId);
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  context.locals.session = session;
  context.locals.user = user;
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
