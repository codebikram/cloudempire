import { createPool } from 'mysql2/promise';

const db = createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

export default db;
