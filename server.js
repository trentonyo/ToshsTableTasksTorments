/*
    SETUP
*/
// Express
let express     = require('express')    // We are using the express library for the web server
let server      = express()             // We need to instantiate an express object to interact with the server in our code
PORT            = 2538                  // Set a port number at the top so it's easy to change in the future

// Database
let db = require('./src/db-connector')

/*
    ROUTES
*/
server.get('/', function(req, res)
{
    // Define our queries
    testQuery = 'SELECT * FROM Monsters;'

    // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

    // SELECT *...
    db.pool.query(testQuery, function(err, results, fields){

        // Send the results to the browser
        let base = "<h1>MySQL Results:</h1>"
        res.send(base + JSON.stringify(results))
    })
})

/*
    LISTENER
*/
server.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
})
