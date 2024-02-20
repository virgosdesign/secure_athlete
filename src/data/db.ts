/** @format */

// import {integer, sqliteTable, text} from 'drizzle-orm/sqlite-core';

// import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
// import { LibSQLAdapter } from "@lucia-auth/adapter-sqlite";
// import { Lucia } from "lucia";
// import { createClient } from '@libsql/client/web';
// import { drizzle } from 'drizzle-orm/libsql';
// import { sql } from 'drizzle-orm';

// const client = createClient({ 
//   url: import.meta.env.TURSO_DATABASE_URL, 
//   authToken: import.meta.env.TURSO_AUTH_TOKEN
// })

// export const db = drizzle(client)

// export const userTable = sqliteTable("user", {
// 	id: text("id").notNull().primaryKey()
// });

// const sessionTable = sqliteTable("session", {
// 	id: text("id").notNull().primaryKey(),
// 	userId: text("user_id")
// 		.notNull()
// 		.references(() => userTable.id),
// 	expiresAt: integer("expires_at").notNull()
// });

// export const adapter1 = new DrizzleSQLiteAdapter(db, sessionTable, userTable);
