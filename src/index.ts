import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { db } from "./db/db";
import { usersTable } from "./db/schema";

const app = new Elysia()
  .use(swagger())

  .get("/", () => "Hello Elysia")
  .get("/hello", "Do you miss me?")
  .post(
    "/api/products",
   async ({ body }) => {
      const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
      };
       await db.insert(usersTable).values(user);
  console.log('New user created!')
      return body;
    },
    {
      body: t.Object({
        filho: t.String(),
        filha: t.Object({
          id: t.Optional(t.Integer()),
        }),
      }),
    }
  )
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
