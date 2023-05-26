const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '5504',
  host: 'localhost',
  database: 'enco',
  port: '5432',
});

module.exports = pool;