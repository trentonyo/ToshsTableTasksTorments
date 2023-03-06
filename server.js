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
handlebars.registerHelper('ifIsPassive', function (cooldown, options)
{
    return (cooldown === 0) ? options.fn(this) : options.inverse(this);
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

// app.get('/testQuery', function (req, res, next)
// {
//     let statement = dml.STATEMENTS.SELECT_LootItemsByMonstersID(3)
//     //GROUP BY Quests.questId
//     db.pool.query(statement, function (err, results, fields)
//     {
//         if (err) { results = err }
//         res.send(results)
//     })
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


/**
 * View a Quest or Monster detail page
 * @param req pass in a req
 * @param res pass in a res
 * @param next pass in a next
 * @param entity expects "Quests" or "Monsters"
 */
let viewWithMonsterDetails = function (req, res, next, entity) {
    let entityID = req.params.entityID

    let query = get_SQL_thisEntity(entity, entityID)

    if (query === false) {
        next() // Called if entity is invalid or if entityID is not a number
    } else {
        // SELECT *...
        db.pool.query(query, function (err, quest, fields) {
            //Offline override
            if (useOffline) {
                err = "Too lazy"
            }

            if (quest === undefined || quest.length === 0) {
                next() // Called if there was no result return
            } else {
                let context = quest[0]
                context["entity"] = entity
                context["view"] = true

                db.pool.query(dml.STATEMENTS.SELECT_AbilitiesByMonstersID(context.monsterId), function (err, abilities, fields) {
                    db.pool.query(dml.STATEMENTS.SELECT_LootItemsByMonstersID(context.monsterId), function (err, lootItems, fields) {
                        context["abilitiesList"] = abilities
                        context["lootItemsList"] = lootItems

                        res.status(200).render("ViewDetails", context)
                    })
                })
            }
        })
    }
}

app.get('/Quests/view/:entityID', function (req, res, next)
{
    viewWithMonsterDetails(req, res, next, "Quests")
})
app.get('/Monsters/view/:entityID', function (req, res, next)
{
    viewWithMonsterDetails(req, res, next, "Monsters")
})

//View any other entity's details page
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
    else
    {
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
                let context = results[0]
                context["entity"] = entity
                context["view"] = true

                res.status(200).render("ViewDetails", context)
            }
        })
    }
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

///Create entity
app.post('/createEntity', function (req, res)
{
    let SQL_statement = ''
    let redirectTarget = ''
    let createData = req.body
    console.log(createData)

    switch(createData.entity) {
        case "quest":
            SQL_statement = `INSERT INTO Quests (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold)
            VALUES ('${createData['questName']}', '${createData['questDesc']}', '${createData['available']}', '${createData['questGiverId']}',
            '${createData['suggestedLevel']}', '${createData['monsterQty']}', '${createData['monsterId']}', '${createData['rewardXp']}', '${createData['rewardGold']}');`
            redirectTarget = '/Quests/new'
            break
        case "questGiver":
            SQL_statement = `INSERT INTO QuestGivers (questGiverName) VALUES ('${createData['questGiverName']}');`
            redirectTarget = '/QuestGivers/new'
            break
        case "monster":
            SQL_statement = `INSERT INTO Monsters (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed)
            VALUES ('${createData.monsterName}', '${createData.monsterDesc}', '${createData.monsterTypeId}', '${createData.healthPool}',
            '${createData.attack}', '${createData.defense}', '${createData.speed}');`
            redirectTarget = '/Monsters/new'
            break
        case "monsterType":
            SQL_statement = `INSERT INTO MonsterTypes (monsterTypeName) VALUES ('${createData.monsterTypeName}');`
            redirectTarget = '/MonsterTypes/new'
            break
        case "lootItem":
            SQL_statement = `INSERT INTO LootItems (lootName, lootDesc, lootItemTypeId, lootValue)
            VALUES ('${createData.lootName}', '${createData.lootDesc}', '${createData.lootItemTypeId}', '${createData.lootValue}');`
            redirectTarget = '/LootItems/new'
            break
        case "lootItemType":
            SQL_statement = `INSERT INTO LootItemTypes (lootItemTypeName, equipable) VALUES ('${req.body.lootItemTypeName}', '${req.body.equipable}');`
            redirectTarget = '/LootItemTypes/new'
            break
        case "ability":
            SQL_statement = `INSERT INTO Abilities (abilityName, abilityDesc) VALUES ('${createData.abilityName}', '${createData.abilityDesc}');`
            redirectTarget = '/Abilities/new'
            break
        case "monsterAbility":
            SQL_statement = `INSERT INTO Monsters_Abilities (monsterId, abilityId, abilityCooldown)
            VALUES ('${createData.monsterId}', '${createData.abilityId}', '${createData.abilityCooldown}');`
            redirectTarget = '/MonstersAbilities/new'
            break
        case "monsterLootItem":
            SQL_statement = `INSERT INTO Monsters_LootItems (monsterId, lootId, dropQuantity, dropChance)
            VALUES ('${createData.monsterId}', '${createData.lootId}', '${createData.dropQuantity}', '${createData.dropChance}');`
            redirectTarget = '/MonstersLootItems/new'
            break
        default:
            res.status(400) //TODO the entity not found

    }
    console.log(SQL_statement)
    db.pool.query(SQL_statement, function(err, results){
        if(useOffline) { err = 'Unable to add entities while offline' }
        // Error code 1062: duplicate primary key
        console.log("Results: " + results)
    })
    res.redirect(redirectTarget)
    // Further TODO Perhaps we could get the ID returned and redirect to the details page of larger entities (quests, monsters, not loot item types or quest givers)
})


///Create loot item type
app.post('/updateEntity', function (req, res, next)
{
    let updatedData = req.body
    let SQL_statement = ''
    let redirectTarget = ''

    switch (updatedData.entity)
    {
        case "LootItemTypes":
            SQL_statement = ENTITIES[updatedData.entity].query_Update(updatedData.id, updatedData.title, updatedData.equipable)
            redirectTarget = false
            break
        default:
            res.status(400) //TODO the entity not found
    }

    db.pool.query(SQL_statement, function(err, results)
    {
        if(useOffline) { err = 'Unable to make database changes while offline' }

        if(err)
        {
            next()
        }
        else
        {
            res.status(200)
            // res.redirect(`/LootItemTypes/view/${results.insertId}`) // TODO use this for larger entities (quests, monsters, not loot item types or quest givers)
            if (redirectTarget) { res.redirect(redirectTarget) }
            else { res.send() }
        }
    })
})

app.post('/deleteEntity', function (req, res) {
    let dataToDelete = req.body
    let SQL_statement = ''
    let redirectTarget = ''

    if (ENTITIES.hasOwnProperty(dataToDelete.entity) && typeof parseInt(dataToDelete.id) === "number")
    {
        SQL_statement = ENTITIES[dataToDelete.entity].query_Delete(dataToDelete.id)
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

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
})
