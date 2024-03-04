import mysql2 from "mysql2/promise";
import invariant from "invariant";

invariant(
  process.env.DATABASE_URL,
  "DATABASE_URL is not defined in the environment variables",
);

export default mysql2.createPool(process.env.DATABASE_URL);
