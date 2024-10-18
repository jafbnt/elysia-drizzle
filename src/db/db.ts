
import 'dotenv/config';
import { drizzle } from "drizzle-orm/node-postgres";

declare module "bun" {
  interface Env {
    DATABASE_URL: string;
  }
}

export const db = drizzle(process.env.DATABASE_URL);
