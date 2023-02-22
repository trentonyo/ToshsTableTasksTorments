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

//Tools
let names = require('./src/name-generator')
// const {getMonsterName, getQuestName, getLootItemName} = require("./src/name-generator");

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
    let SQL_allEntity = 'SELECT * FROM '+entity+';' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_allEntity, function(err, results, fields){

        let context = {
            "queryName" : "All "+entity,
            "results" : results
        }
        res.status(200).render(entity, context)
    })
})

//View a quest details page
app.get('/Quests/:questID', function(req, res)
{
    let questID = req.params.questID

    // All quests query
    let SQL_thisQuest = 'SELECT * FROM Quests WHERE questId='+questID+';'   //TODO use the DMQ hookup when time comes
                                                                            //TODO also need to serve up the monster stuff and quest giver, so we need a join here

    // SELECT *...
    db.pool.query(SQL_thisQuest, function(err, results, fields)
    {
        results = [
            {
                "questName": "Goblin Slayer",
                "available": 1,
                "suggestedLevel": 3,
                "rewardXp": 100,
                "rewardGold": 25,
                "questDesc": "Clear the goblin infestation at the local farm",
                "questGiverId": "Farmer Fred",
                "monsterQty": 8,
                "monsterId": "Goblin"
            }
        ]
        res.status(200).render("DetailsQuest", results[0] || [''])
    })
})

///Create new quest
app.get('/Quests/new', function(req, res)
{
    // All monsters query
    let SQL_monsters = 'SELECT * FROM Monsters;' //TODO use the DMQ hookup when time comes

    // All quest givers query
    let SQL_questGivers = 'SELECT * FROM QuestGivers;' //TODO use the DMQ hookup when time comes

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
