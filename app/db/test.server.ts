import pool from "./db.server";

export async function getData() {
  const { rows } = await pool.execute("SELECT * FROM test");
  return rows;
}
