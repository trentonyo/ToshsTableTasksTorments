/**
 * SETUP
 */

// Server
const express               = require('express')    // We are using the express library for the web app
const handlebars            = require('handlebars')
const express_handlebars    = require('express-handlebars')

let app = express()             // We need to instantiate an express object to interact with the app in our code
PORT    = 2765                  // Set a port number at the top, so it's easy to change in the future

// Database
let db = require('./src/db-connector')

// Handlebars
app.engine('handlebars', express_handlebars.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars');

/**
 * Middleware to parse POST body
 */
app.use(express.json())

app.use(express.static("public/"))
app.use(express.static("src/"))

/**
 * ROUTES
 */
///Homepage
app.get('/', function(req, res)
{
    // Homepage query (available quests)
    let SQL_availableQuests = 'SELECT * FROM Quests WHERE available=TRUE;' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_availableQuests, function(err, results, fields){

        let context = {
            "queryName" : "Available Quests",
            "results" : results
        }
        res.status(200).render("quests", context)
    })
})

///View all queries
app.get('/:entity/view', function(req, res)
{
    let entity = req.params.entity

    // All quests query
    let SQL_quests = 'SELECT * FROM '+entity+';' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_quests, function(err, results, fields){

        let context = {
            "queryName" : "All "+entity,
            "results" : results
        }
        res.status(200).render(entity, context)
    })
})

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
})
