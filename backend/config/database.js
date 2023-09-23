const { Pool, Client } = require('pg');

const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})
pool.on('connect',()=>{
    console.log("I am connected to the database");
})

pool.on('end',()=>{
    console.log("I got disconnected from the database");
})
module.exports = pool;
