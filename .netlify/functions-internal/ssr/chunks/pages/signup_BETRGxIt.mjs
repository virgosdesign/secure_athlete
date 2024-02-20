import { d as db, u as userTable, l as lucia } from './login_R6zBtA_B.mjs';
import { Argon2id } from 'oslo/password';
import { generateId } from 'lucia';

async function POST(context) {
  const formData = await context.request.formData();
  const username = formData.get("username");
  console.log("******************* username *******************", typeof username);
  if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-z0-9_-]+$/.test(username)) {
    console.log("******************* Invalid username *******************");
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
  const userId = generateId(15);
  const hashedPassword = await new Argon2id().hash(password);
  await db.insert(userTable).values({
    id: userId,
    username,
    hashed_password: hashedPassword
  });
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return context.redirect("/");
}

export { POST };
