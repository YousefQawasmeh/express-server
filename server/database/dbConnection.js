const { Pool } = require("pg");
require("env2")("./config.env");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("set DATABASE_URL");
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes("localhost"),
});
