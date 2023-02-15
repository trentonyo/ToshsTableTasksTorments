/**
 * SETUP
 */

const FileSystem = require("fs");

// Server
const express               = require('express')    // We are using the express library for the web app
const handlebars            = require('handlebars')
const express_handlebars    = require('express-handlebars')

let app = express()             // We need to instantiate an express object to interact with the app in our code
PORT    = 2765                  // Set a port number at the top, so it's easy to change in the future

// Database
let db = require('./src/db-connector')

//Tools
let names = require('./src/name-generator')
// const {getMonsterName, getQuestName, getLootItemName} = require("./src/name-generator");

// Handlebars
app.engine('handlebars', express_handlebars.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars');

/**
 * DMQ to replace this
 */
// Homepage query (available quests)
let SQL_availableQuests = 'SELECT * FROM Quests WHERE available=TRUE;' //TODO use the DMQ hookup when time comes
// All monsters query
let SQL_monsters = 'SELECT * FROM Monsters;' //TODO use the DMQ hookup when time comes
// All quest givers query
let SQL_questGivers = 'SELECT * FROM QuestGivers;' //TODO use the DMQ hookup when time comes
// All quests query
function get_SQL_allEntity(entity)
{
    return 'SELECT * FROM '+entity+';' //TODO use the DMQ hookup when time comes
}
// All quests query
function get_SQL_thisQuest(questID)
{
    return 'SELECT * FROM Quests WHERE questId='+questID+';'   //TODO use the DMQ hookup when time comes
                                                                            //TODO also need to serve up the monster stuff and quest giver, so we need a join here
}

const SQL_thisQuest1 = get_SQL_thisQuest(1)
const SQL_thisQuest2 = get_SQL_thisQuest(2)
const SQL_thisQuest3 = get_SQL_thisQuest(3)

// Catch arguments
const ARG_OFFLINE = '-offline'
let db_offline = {
    SQL_availableQuests : {},
    SQL_monsters : {},
    SQL_questGivers : {},
    get_SQL_thisQuest(1) : {},
}
let useOffline = false
if (process.argv.length === 3 && process.argv[2] === ARG_OFFLINE)
{
    useOffline = true
}

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

    // SELECT *...
    db.pool.query(get_SQL_allEntity(entity), function(err, results, fields){

        let context = {
            "queryName" : "All "+entity,
            "results" : results
        }
        res.status(200).render(entity, context)
    })
})


///Create new quest
app.get('/Quests/new', function(req, res)
{
    // SELECT *...
    db.pool.query(SQL_monsters, function(err, monsters, fields){
        db.pool.query(SQL_questGivers, function(err, questGivers, fields){

            let context = {
                "monsters" : monsters,
                "questGivers" : questGivers,
                "placeholderQuestName" : names.getQuestName()
            }
            res.status(200).render("NewQuests", context)
        })
    })
})
//View a quest details page
app.get('/Quests/:questID', function(req, res)
{
    let questID = req.params.questID

    // SELECT *...
    db.pool.query(get_SQL_thisQuest(questID), function(err, results, fields)
    {
        res.status(200).render("DetailsQuest", results[0])
    })
})
///Create new monster
app.get('/Monsters/new', function(req, res)
{
    // All monster types query
    let SQL_monsterTypes = 'SELECT * FROM MonsterTypes;' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_monsterTypes, function(err, results, fields){

        let context = {
            "monsterTypes" : results,
            "placeholderMonsterName" : names.getMonsterName()
        }
        res.status(200).render("NewMonsters", context)
    })
})
///Create new loot item
app.get('/LootItems/new', function(req, res)
{
    // All loot item types query
    let SQL_lootItemTypes = 'SELECT * FROM LootItemTypes;' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_lootItemTypes, function(err, results, fields){

        let context = {
            "lootItemTypes" : results,
            "placeholderItemName" : names.getLootItemName()
        }
        res.status(200).render("NewLootItems", context)
    })
})
///Create new ability
app.get('/Abilities/new', function(req, res)
{
    res.status(200).render("NewAbilities")
})

app.get('*', function (req, res)
{
    res.status(404).render("PageNotFound")
})

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
})
