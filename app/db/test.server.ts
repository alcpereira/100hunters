import pool from "./pool.server";

export async function getData() {
  const [result] = await pool.execute("SELECT * FROM test");
  return result;
}
