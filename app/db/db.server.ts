import { createClient, type Client } from "@libsql/client";
import invariant from "invariant";

let client: Client;

if (process.env.NODE_ENV === "production") {
  console.log("🚀 Using production database");
  invariant(
    process.env.DB_URL,
    "DB_URL is not defined in the environment variables",
  );

  invariant(
    process.env.DB_TOKEN,
    "DB_TOKEN is not defined in the environment variables",
  );

  client = createClient({
    url: process.env.DB_URL,
    authToken: process.env.DB_TOKEN,
  });
} else {
  console.log("🚀 Using local database");
  client = createClient({
    url: "file:./db/local.db",
  });
}

export default client;
