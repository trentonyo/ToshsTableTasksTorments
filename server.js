/**
 * SETUP
 */

// Define entities
const ENTITIES = {
    "Abilities" : {id: "abilityId", en_singular: "Ability", en_plural: "Abilities"},
    "LootItems" : {id: "lootId", en_singular: "Loot Item", en_plural: "Loot Item"},
    "Monsters" : {id: "monsterId", en_singular: "Monster", en_plural: "Monsters"},
    "Quests" : {id: "questId", en_singular: "Quest", en_plural: "Quests"},
}

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
    if (ENTITIES.hasOwnProperty(entity))
    {
        return 'SELECT * FROM '+entity+';' //TODO use the DMQ hookup when time comes
    }

    return false
}

// Find a specific entity
function get_SQL_thisEntity(entity, id)
{
    id = parseInt(id)

    if (ENTITIES.hasOwnProperty(entity) && typeof id === "number")
    {
        return 'SELECT * FROM '+entity+' where '+ENTITIES[entity].id+'='+id+';' //TODO use DMQ
    }

    return false
}

// Catch arguments
const ARG_OFFLINE = '-offline'
let db_offline = {
    SQL_availableQuests : require("./offline_sources/availableQuests.json"),
    SQL_monsters : require("./offline_sources/monsters.json"),
    SQL_monsterTypes : require("./offline_sources/monsterTypes.json"),
    SQL_lootItemTypes : require("./offline_sources/lootItemTypes.json"),
    SQL_questGivers : require("./offline_sources/questGivers.json"),
    SQL_thisQuests1 : require("./offline_sources/questDetails1.json"),
    SQL_thisQuests2 : require("./offline_sources/questDetails2.json"),
    SQL_thisQuests3 : require("./offline_sources/questDetails3.json"),
    SQL_allQuests     : require("./offline_sources/allQuests.json"),
    SQL_allMonsters   : require("./offline_sources/allMonsters.json"),
    SQL_allLootItems  : require("./offline_sources/allLootItems.json"),
    SQL_allAbilities  : require("./offline_sources/allAbilities.json")
}
let useOffline = false
if (process.argv.length === 3 && process.argv[2] === ARG_OFFLINE)
{
    useOffline = true
    console.log("Server running in offline mode.")
}

/**
 * Handlebars steps
 */
const partialTypes = ["Card", "Title", "InfoBand"]

partialTypes.forEach(function (value, index, array)
{
    handlebars.registerHelper('whichPartial'+value, function(context, options)
    {
        return context.data.root['entity']+value
    })
})

/**
 * Middleware to parse POST body
 */
app.use(express.json())

app.use(express.static("public/"))
app.use(express.static("src/"))

/**
 * ROUTES
 */
///View
let viewEntity = function(req, res, next)
{
    let entity = req.params.entity

    // SELECT *...
    let query = ""

    if(get_SQL_allEntity(entity))
    {
        query = get_SQL_allEntity(entity)
    }
    else
    {
        next()
    }

    db.pool.query(query, function(err, results, fields){

        //Offline override
        if(useOffline) { results = db_offline['SQL_all'+entity] }

        let context = {
            "entity" : entity,
            "queryName" : "All "+entity,
            "results" : results
        }
        res.status(200).render("ViewCards", context)
    })
}

///Homepage
app.get('/', function(req, res)
{
    // SELECT *...
    db.pool.query(SQL_availableQuests, function(err, results, fields){

        //Offline override
        if(useOffline) { results = db_offline['SQL_availableQuests'] }

        let context = {
            "entity" : "Quests",
            "queryName" : "Available Quests" + (useOffline ? " (OFFLINE MODE)" : ""),
            "results" : results
        }
        res.status(200).render("ViewCards", context)
    })
})

///View all queries
app.get('/:entity/view', viewEntity)


///Create new quest
app.get('/Quests/new', function(req, res)
{
    // SELECT *...
    db.pool.query(SQL_monsters, function(err, monsters, fields){
        db.pool.query(SQL_questGivers, function(err, questGivers, fields){

            //Offline override
            if(useOffline) { monsters = db_offline['SQL_monsters'];  questGivers = db_offline['SQL_questGivers'] }

            let context = {
                "entity" : "Quests",
                "monsters" : monsters,
                "questGivers" : questGivers,
                "placeholderQuestName" : names.getQuestName()
            }
            res.status(200).render("NewQuests", context)
        })
    })
})
//View a quest details page
app.get('/:entity/view/:entityID', function(req, res, next)
{
    let entityID = req.params.entityID
    let entity = req.params.entity

    let query = ""

    if(get_SQL_thisEntity(entity, entityID))
    {
        query = get_SQL_thisEntity(entity, entityID)
    }
    else
    {
        next() // Called if entity is invalid or if entityID is not a number
    }

    // SELECT *...
    db.pool.query(query, function(err, results, fields)
    {
        //Offline override
        if(useOffline) { results = [db_offline["SQL_this"+entity+(Math.min(entityID, 3))]] }

        if(results === undefined || results.length === 0)
        {
            next() // Called if there was no result return
        }
        else
        {
            results[0]["entity"] = entity
            results[0]["view"] = true

            res.status(200).render("ViewDetails", results[0])
        }
    })
})
///Create new quest giver
app.get('/QuestGivers/new', function(req, res)
{
    let context = {
        "entity" : "QuestGivers"
    }
    res.status(200).render("NewQuestGivers", context)
})
///Create new monster
app.get('/Monsters/new', function(req, res)
{
    // All monster types query
    let SQL_monsterTypes = 'SELECT * FROM MonsterTypes;' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_monsterTypes, function(err, results, fields){

        //Offline override
        if(useOffline) { results = db_offline['SQL_monsterTypes'] }

        let context = {
            "entity" : "Monsters",
            "monsterTypes" : results,
            "placeholderMonsterName" : names.getMonsterName()
        }
        res.status(200).render("NewMonsters", context)
    })
})
///Create new monster type
app.get('/MonsterTypes/new', function(req, res)
{
    let context = {
        "entity" : "MonsterType"
    }
    res.status(200).render("NewMonsterTypes", context)
})
///Create new loot item
app.get('/LootItems/new', function(req, res)
{
    // All loot item types query
    let SQL_lootItemTypes = 'SELECT * FROM LootItemTypes;' //TODO use the DMQ hookup when time comes

    // SELECT *...
    db.pool.query(SQL_lootItemTypes, function(err, results, fields){

        //Offline override
        if(useOffline) { results = db_offline['SQL_lootItemTypes'] }

        let context = {
            "entity" : "LootItems",
            "lootItemTypes" : results,
            "placeholderItemName" : names.getLootItemName()
        }
        res.status(200).render("NewLootItems", context)
    })
})
///Create new loot item type
app.get('/LootItemTypes/new', function(req, res)
{
    let context = {
        "entity" : "LootItemType"
    }
    res.status(200).render("NewLootItemTypes", context)
})
///Create new ability
app.get('/Abilities/new', function(req, res)
{
    res.status(200).render("NewAbilities")
})
///Create new monster ability
app.get('/MonstersAbilities/new', function(req, res)
{
    res.status(200).render("NewMonstersAbilities")
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
