import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_HqKEf2Sw0lid@ep-round-lab-a44isv7k-pooler.us-east-1.aws.neon.tech/FinTable?sslmode=require"
);
export const db = drizzle(sql, { schema });
