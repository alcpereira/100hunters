import { unlink, writeFile, access } from "node:fs/promises";
import { resolve } from "path";

/**
 * This file should be updated on each migration to reflect the current state of the database.
 * @todo Add unit tests for this file
 */
(async function seed() {
  // Delete database file
  const dbPath = resolve(process.cwd(), "db", "local.db");

  try {
    await access(dbPath);
    await unlink(dbPath);
    console.log("🗑️  Deleted local.db file");
  } catch (error) {
    console.log("👀 Existing db not found");
  }

  await writeFile(dbPath, "", { flag: "w", mode: 0o666 });
  console.log("📝 Created brand new local.db file");

  if (process.env.NODE_ENV === "production") {
    console.log("🚨 Production environment detected. Exiting seed script.");
    process.exit(0);
  }

  // Async import of db module
  const { default: db } = await import("~/db/db.server");

  // Drop all tables in reverse order to avoid foreign key issues
  await db.batch([
    `DROP TABLE IF EXISTS "card";`,
    `DROP TABLE IF EXISTS "column";`,
    `DROP TABLE IF EXISTS "board";`,
    `DROP TABLE IF EXISTS "test";`,
  ]);

  // Seeds `test` table - Temporary for _index.tsx route data loading
  await db.batch([
    `CREATE TABLE "test" ("id" INTEGER PRIMARY KEY, "name" TEXT);`,
    {
      sql: `INSERT INTO "test" ("name") VALUES (?);`,
      args: ["Welcome to 100hunters!"],
    },
  ]);
  console.log("🌱 Seeded test table");

  await db.batch([
    `CREATE TABLE "board" ("id" INTEGER PRIMARY KEY, "name" TEXT);`,
    {
      sql: `INSERT INTO "board" ("name") VALUES (?);`,
      args: ["board 1"],
    },
  ]);
  console.log("🌱 Seeded board table");

  await db.batch([
    `CREATE TABLE "column" (
      "id" INTEGER PRIMARY KEY, 
      "name" TEXT, "boardId" INTEGER, 
      FOREIGN KEY ("boardId") REFERENCES "board" ("id"));`,
    {
      sql: `INSERT INTO "column" ("name", "boardId") VALUES (?, ?);`,
      args: ["column 1", 1],
    },
    {
      sql: `INSERT INTO "column" ("name", "boardId") VALUES (?, ?);`,
      args: ["column 2", 1],
    },
    {
      sql: `INSERT INTO "column" ("name", "boardId") VALUES (?, ?);`,
      args: ["column 3", 1],
    },
  ]);
  console.log("🌱 Seeded column table");

  await db.batch([
    `CREATE TABLE "card" (
      "id" INTEGER PRIMARY KEY, 
      "name" TEXT, 
      "columnId" INTEGER, 
      FOREIGN KEY ("columnId") REFERENCES "column" ("id"));`,
    {
      sql: `INSERT INTO "card" ("name", "columnId") VALUES (?, ?);`,
      args: ["card 1-1", 1],
    },
    {
      sql: `INSERT INTO "card" ("name", "columnId") VALUES (?, ?);`,
      args: ["card 2-1", 1],
    },
    {
      sql: `INSERT INTO "card" ("name", "columnId") VALUES (?, ?);`,
      args: ["card 3-1", 1],
    },
    {
      sql: `INSERT INTO "card" ("name", "columnId") VALUES (?, ?);`,
      args: ["card 1-2", 2],
    },
    {
      sql: `INSERT INTO "card" ("name", "columnId") VALUES (?, ?);`,
      args: ["card 2-2", 2],
    },
    {
      sql: `INSERT INTO "card" ("name", "columnId") VALUES (?, ?);`,
      args: ["card 3-2", 2],
    },
  ]);
  console.log("🌱 Seeded card table");
})();
