export default {
    dialect: 'postgresql',
    schema: './utils/schema.jsx', 
    out: './drizzle',  // Output folder for generated files
    dbCredentials: {
      url:"postgresql://neondb_owner:npg_HqKEf2Sw0lid@ep-round-lab-a44isv7k-pooler.us-east-1.aws.neon.tech/FinTable?sslmode=require",
      connectionString: "postgresql://neondb_owner:npg_HqKEf2Sw0lid@ep-round-lab-a44isv7k-pooler.us-east-1.aws.neon.tech/FinTable?sslmode=require",
    },
  }