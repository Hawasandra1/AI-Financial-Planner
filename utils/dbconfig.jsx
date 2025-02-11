// dbconfig.jsx
import { neon } from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // Ensure your schema file path is correct

// Create a connection using the Neon database URL from .env.local
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

// Configure Drizzle ORM with the connection and schema
export const db = drizzle(sql, { schema });


