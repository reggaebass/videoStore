const { database, password } = require("pg/lib/defaults");

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "movies",
    password: "Batman@1939",
    port: 5432,
})

module.exports = pool;