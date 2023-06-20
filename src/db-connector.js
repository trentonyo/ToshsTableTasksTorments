// Get an instance of mysql we can use in the app
var mysql = require('mysql')
var postgres = require('pg')


// Create a 'connection pool' using the provided credentials
// var pool = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'classmysql.engr.oregonstate.edu',
//     user            : 'cs340_youngtre',
//     password        : '8706',
//     database        : 'cs340_youngtre'
// })

const pool = new postgres.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ToshsTableTasksTorments',
    password: 'yo',
    port: 5432,
})

// Export it for use in our application
module.exports.pool = pool;