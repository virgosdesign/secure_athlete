import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { Lucia } from 'lucia';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { Argon2id } from 'oslo/password';
import { eq } from 'drizzle-orm';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});
const userTable = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  username: text("username").unique(),
  hashed_password: text("hashed_password")
});
const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id").notNull().references(() => userTable.id),
  expiresAt: integer("expires_at").notNull()
});
const db = drizzle(client);
const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: true
    }
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      username: attributes.username
    };
  }
});

async function POST(context) {
  const formData = await context.request.formData();
  const username = formData.get("username");
  if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-z0-9_-]+$/.test(username)) {
    return new Response("Invalid username", {
      status: 400
    });
  }
  const password = formData.get("password");
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    return new Response("Invalid password", {
      status: 400
    });
  }
  const existingUser = await db.select().from(userTable).where(eq(userTable.username, username));
  if (!existingUser) {
    return new Response("Incorrect username or password", {
      status: 400
    });
  }
  if (existingUser[0].hashed_password) {
    const validPassword = await new Argon2id().verify(existingUser[0].hashed_password, password);
    if (!validPassword) {
      return new Response("Incorrect username or password", {
        status: 400
      });
    }
  }
  const session = await lucia.createSession(existingUser[0].id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  console.log("******************* cookies *******************", session);
  console.log("******************* session *******************", context.cookies.get(sessionCookie.name));
  return context.redirect("/");
}

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

export { login as a, db as d, lucia as l, userTable as u };
