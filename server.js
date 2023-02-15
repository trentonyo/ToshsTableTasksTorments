/*
    SETUP
*/
// Express
const handlebars = require('handlebars')
let express                 = require('express')    // We are using the express library for the web server
const express_handlebars    = require('express-handlebars')
let server                  = express()             // We need to instantiate an express object to interact with the server in our code
PORT                        = 2765                  // Set a port number at the top, so it's easy to change in the future

server.engine('handlebars', express_handlebars.engine({
    defaultLayout: "main"
}));
server.set('view engine', 'handlebars');

/**
 * Middleware to parse POST body
 */
server.use(express.json())


// Database
let db = require('./src/db-connector')

/*
    ROUTES
*/
server.get('/about', function (req, res, next) {
    res.status(200).render('aboutPage');
});

server.get('/', function(req, res)
{
    // Define our queries
    testQuery = 'SELECT * FROM Monsters;'

    // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

    // SELECT *...
    db.pool.query(testQuery, function(err, results, fields){

        let context = {
            "results" : results
        }

        res.status(200).render("index", context)

    })
})

/*
    LISTENER
*/
server.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
})
