// prisma.config.ts
import "dotenv/config";               // loads .env when running Prisma CLI
import path from "node:path";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),      // path to your schema
  migrations: {
    path: path.join("prisma", "migrations"),        // optional (default)
  },
  // Put the connection URLs here (moved out of schema.prisma)
  datasource: {
    // runtime URL used by CLI and Prisma Client:
    url: env("DATABASE_URL"),
    // shadow DB URL (if you use migrate dev with shadow DB):
    // shadowDatabaseUrl: env("SHADOW_DATABASE_URL"),
  },
});
