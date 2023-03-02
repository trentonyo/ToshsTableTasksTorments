/**
 * SETUP
 */

// Server
const express               = require('express')    // We are using the express library for the web app
const handlebars            = require('handlebars')
const express_handlebars    = require('express-handlebars')
const filesystem            = require('fs')

let app = express()             // We need to instantiate an express object to interact with the app in our code
PORT    = 2765                  // Set a port number at the top, so it's easy to change in the future

// Database
let db = require('./src/db-connector')
let dml = require('./src/dml')

//Tools
let names = require('./src/name-generator')

let entities = require('./src/ENTITIES')
const ENTITIES = entities.ENTITIES

let style = require('./src/jsp')
filesystem.writeFile('./src/jsp.css', style.generateCSSPalette(), function (err) {
    if (err)
    {
        console.log("Error writing ./src/jsp.css:", err)
    }
    else
    {
        console.log("Compiled", style.generateCSSPalette().split('\n').length, "lines from JSP to ./src/jsp.css")
    }
})

// Handlebars
app.engine('handlebars', express_handlebars.engine({ defaultLayout: "main" }))
app.set('view engine', 'handlebars');

/**
 * DMQ to replace this
 */
// All quests query
function get_SQL_allEntity(entity)
{
    if (ENTITIES.hasOwnProperty(entity))
    {
        return ENTITIES[entity].query_SelectAll
    }

    return false
}

// Find a specific entity
function get_SQL_thisEntity(entity, id, secondId)
{
    id = parseInt(id)
    secondId = parseInt(secondId)

    if (ENTITIES.hasOwnProperty(entity) && typeof id === "number")
    {
        if (ENTITIES[entity].hasOwnProperty('query_SelectById'))
        {
            return ENTITIES[entity].query_SelectById(id)
        }
        else if (ENTITIES[entity].hasOwnProperty('query_SelectByCompoundId') && typeof secondId === "number")
        {
            return ENTITIES[entity].query_SelectByCompoundId(id, secondId)
        }
        else
        {
            return false
        }
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
    SQL_allQuestGivers: require("./offline_sources/allQuestGivers.json"),
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
app.use(express.urlencoded())

app.use(express.static("public/"))
app.use(express.static("src/"))

/**
 * ROUTES
 */
///View
let viewEntity = function(req, res, next)
{
    let entity = req.params.entity

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
    db.pool.query(dml.STATEMENTS.SELECT_AvailableQuests, function(err, results, fields){

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

// app.get('/testDML', function (req, res, next) {
//
//     let test = []
//
//     let i = 0
//
//     for (let query in dml.STATEMENTS)
//     {
//         console.log(`Testing query #${++i}:`, query)
//         if (Object.hasOwnProperty.call(dml.STATEMENTS, query))
//         {
//             console.log("--Verified query:", query)
//             let statement = dml.STATEMENTS[query]
//
//             if (typeof statement === 'function')
//             {
//                 console.log("==Is a function")
//                 statement = statement(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
//             }
//
//             db.pool.query(statement, function (err, results, fields) {
//                 if(err)
//                 {
//                     test.push([statement, " :ERRORS : ", err])
//                 }
//                 else
//                 {
//                     test.push([statement, " :RESULTS: ", results])
//                 }
//                 console.log("----Got DB response")
//
//                 if (i === Object.keys(dml.STATEMENTS).length)
//                 {
//                     console.log(test)
//                 }
//             })
//         }
//     }
//
//     res.send("Executing dirty DML test serverside")
// })

///View all queries
app.get('/:entity/view', viewEntity)

///Create new quest
app.get('/Quests/new', function(req, res)
{
    // SELECT *...
    db.pool.query(dml.STATEMENTS.SELECT_AllMonsters, function(err, monsters, fields){
        db.pool.query(dml.STATEMENTS.SELECT_AllQuestGivers, function(err, questGivers, fields){

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
//View an entity details page
app.get('/:entity/view/:entityID', function(req, res, next)
{
    let entityID = req.params.entityID
    let entityID2 = ""
    let entity = req.params.entity

    if (entity === "MonstersAbilities" || entity === "MonstersLootItems")
    {
        let tmp = entityID
        entityID = tmp.split("-")[0]
        entityID2 = tmp.split("-")[1]
    }

    let query = get_SQL_thisEntity(entity, entityID, entityID2)

    if(query === false)
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
        "entity" : "QuestGivers",
        "placeholderQuestGiverName" : names.getQuestGiverName()
    }
    res.status(200).render("NewQuestGivers", context)
})
///Create new monster
app.get('/Monsters/new', function(req, res)
{
    // SELECT *...
    db.pool.query(dml.STATEMENTS.SELECT_AllMonsterTypes, function(err, monsterTypes, fields){

        //Offline override
        if(useOffline) { monsterTypes = db_offline['SQL_monsterTypes'] }

        let context = {
            "entity" : "Monsters",
            "monsterTypes" : monsterTypes,
            "placeholderMonsterName" : names.getMonsterName()
        }
        res.status(200).render("NewMonsters", context)
    })
})
///Create new monster type
app.get('/MonsterTypes/new', function(req, res)
{
    let context = {
        "entity" : "MonsterType",
        "placeholder" : names.getMonsterType()
    }
    res.status(200).render("NewMonsterTypes", context)
})
///Create new loot item
app.get('/LootItems/new', function(req, res)
{
    // SELECT *...
    db.pool.query(dml.STATEMENTS.SELECT_AllLootItemTypes, function(err, lootItemTypes, fields){

        //Offline override
        if(useOffline) { lootItemTypes = db_offline['SQL_lootItemTypes'] }

        let context = {
            "entity" : "LootItems",
            "lootItemTypes" : lootItemTypes,
            "placeholderItemName" : names.getLootItemName()
        }
        res.status(200).render("NewLootItems", context)
    })
})
///Create new loot item type
app.get('/LootItemTypes/new', function(req, res)
{
    let context = {
        "entity" : "LootItemType",
        "placeholder" : names.getLootType()
    }
    res.status(200).render("NewLootItemTypes", context)
})
///Create new ability
app.get('/Abilities/new', function(req, res)
{
    let context = {
        "entity" : "Abilities",
        "placeholder" : names.getAbilityName()
    }
    res.status(200).render("NewAbilities", context)
})
///Create new monster ability
app.get('/MonstersAbilities/new', function(req, res)
{
    db.pool.query(dml.STATEMENTS.SELECT_AllMonsters, function (err, monsters, fields) {
        db.pool.query(dml.STATEMENTS.SELECT_AllAbilities, function (err, abilities, fields) {

            let context = {
                "entity" : "MonstersAbilities",
                "monsters" : monsters,
                "abilities" : abilities
            }

            res.status(200).render("NewMonstersAbilities", context)
        })
    })
})
///Create new monster loot
app.get('/MonstersLootItems/new', function(req, res)
{
    db.pool.query(dml.STATEMENTS.SELECT_AllMonsters, function (err, monsters, fields) {
        db.pool.query(dml.STATEMENTS.SELECT_AllLootItems, function (err, lootItems, fields) {

            let context = {
                "entity" : "MonstersAbilities",
                "monsters" : monsters,
                "lootItems" : lootItems
            }

            res.status(200).render("NewMonstersLootItems", context)
        })
    })
})
app.get('*', function (req, res)
{
    res.status(404).render("PageNotFound")
})


///Create loot item type
app.post('/submit/LootItemType', function (req, res, next)
{
    console.log(req.body.lootItemTypeName, req.body.equipable)
    console.log(dml.STATEMENTS.INSERT_LootItemTypes(req.body.lootItemTypeName, req.body.equipable))

    db.pool.query(dml.STATEMENTS.INSERT_LootItemTypes(req.body.lootItemTypeName, req.body.equipable), function(err, results)
    {
        if(useOffline) { err = 'Unable to add loot item types while offline' }

        if(err)
        {
            next()
        }
        else
        {
            res.redirect(`/LootItemTypes/view/${results.insertId}`)
            // res.redirect('/LootItemTypes/new'); // TODO Add success/failure message on reload
            // Further TODO Perhaps we could get the ID returned and redirect to the details page of larger entities (quests, monsters, not loot item types or quest givers)
        }
    })
})

///Create loot item type
app.post('/updateEntity', function (req, res)
{
    let updatedData = req.body
    let SQL_statement = ''
    let redirectTarget = ''

    switch (updatedData.entity)
    {
        case "LootItemTypes":
            SQL_statement = `UPDATE LootItemTypes SET lootItemTypeName = '${updatedData.title}', equipable = '${updatedData.equipable}' WHERE lootItemTypeId = ${updatedData.id};`
            redirectTarget = '/LootItemTypes/view'
            break
        default:
            res.status(400) //TODO the entity not found
    }

    db.pool.query(SQL_statement, function(err, results){
        console.log(results)
        if(useOffline) { err = 'Unable to make database changes while offline' }
    })

    res.redirect(redirectTarget); // TODO Add success/failure message on reload
    // Further TODO Perhaps we could get the ID returned and redirect to the details page of larger entities (quests, monsters, not loot item types or quest givers)
})

app.post('/deleteEntity', function (req, res) {
    let dataToDelete = req.body
    let SQL_statement = ''
    let redirectTarget = ''

    console.log("Got a delete request")
    console.log(dataToDelete)

    if (ENTITIES.hasOwnProperty(dataToDelete.entity) && typeof parseInt(dataToDelete.id) === "number")
    {
        console.log("Validated ")
        SQL_statement = `DELETE FROM ${dataToDelete.entity} WHERE ${ENTITIES[dataToDelete.entity].id} = ${dataToDelete.id};`
        redirectTarget = `/${dataToDelete.entity}/view`
    }
    else
    {
        res.status(400) //TODO the entity not found
    }


    db.pool.query(SQL_statement, function (err, results)
    {
        if (useOffline) {
            err = 'Unable to make database changes while offline'
        }

        if (err) {
            if (err.errno === 1451) {
                res.status(400).send(`Cannot delete ${dataToDelete.entity} in use`)
            }
        } else {
            res.redirect(redirectTarget);
        }
    })
})
///Delete loot item type
app.post('/delete/LootItemType', function (req, res)
{
    let SQL_deleteLootItemType = `DELETE FROM LootItemTypes WHERE lootItemTypeId = ${parseInt(req.body.lootItemTypeId)};`
    db.pool.query(SQL_deleteLootItemType, function(err, results){
        if(useOffline) { err = 'Unable to delete loot item types while offline' }
        if(err) {
            if (err.errno === 1451) {
                res.status(400).send("Cannot delete loot item type in use")
            }
        } else {
            res.redirect('/LootItemTypes/view');
        }
    })

})

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
})
