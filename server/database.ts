import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { create: true });

export const close = async () => {
  db.close();
};
