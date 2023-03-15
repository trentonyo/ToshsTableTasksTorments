const names = ["Steve", "Randall", "Mary", "Janisha", "Gork", "Mork", "Qyzzyl", "Zyzzys", "Elyria", "Miphea"]
const jobs = ["Farmer", "Sir", "Lady", "Hunter", "Fisherman", "Master", "Shaman"]
const materials = ["Gold", "Stone", "Mithril", "Chitin", "Glass"]
const items = ["Sword", "Pick", "Necklace", "Bucket", "Stool", "Cube"]
const abilities = ["Fireball", "Ice Wall", "Teleport", "Bolt", "Water Jet"]

const monster_types = ["Reundead", "Golemcore", "Kaiju", "Knowable Horror"]
const loot_types = ["Gadget", "Gismo", "Whozit", "Whatzit", "Thingamabob"]

const particles = ["The", "A"]

const adj_monst = ["Great", "Lesser", "Dark", "Spotted", "Hairless", "Carnivorous", "Timid"]
const adj_items = ["Shiny", "Cursed", "Whizzing", "Crusty", "Glistening", "Shimmering", "Blessed"]
const adj_abilt = ["Delayed", "Burning", "Giant", "Reverse", "Bouncing", "Total", "Lesser"]
const verbs_ing = ["Flying", "Burning", "Weeping", "Slinking", "Burrowing"]
const verbs_act = ["Free", "Grind", "Liberate", "Defeat", "Siege", "Protect", "Finish", "Investigate", "Defend"]
const nouns = ["Cave", "Vampire", "Tree", "River", "Skull", "Bird", "Fire", "Ice", "Town", "Castle", "Sky", "Dragon", "King", "Queen", "Mountain"]

const difficulty = ['easy', 'medium', 'hard', 'deadly']
const difficulty_gold_mult = {
    easy: 1,
    medium: 10,
    hard: 100,
    deadly: 1000
}
const xp_table =
    [
        {easy: 25,	    medium: 50,	        hard: 75,	    deadly: 100},
        {easy: 50,	    medium: 100,	    hard: 150,	    deadly: 200},
        {easy: 75,	    medium: 150,	    hard: 225,	    deadly: 400},
        {easy: 125,	    medium: 250,	    hard: 375,	    deadly: 500},
        {easy: 250,	    medium: 500,	    hard: 750,	    deadly: 1100},
        {easy: 300,	    medium: 600,	    hard: 900,	    deadly: 1400},
        {easy: 350,	    medium: 750,	    hard: 1100,	    deadly: 1700},
        {easy: 450,	    medium: 900,	    hard: 1400,	    deadly: 2100},
        {easy: 550,	    medium: 1100,	    hard: 1600,	    deadly: 2400},
        {easy: 600,	    medium: 1200,	    hard: 1900,	    deadly: 2800},
        {easy: 800,	    medium: 1600,	    hard: 2400,	    deadly: 3600},
        {easy: 1000,	medium: 2000,	    hard: 3000,	    deadly: 4500},
        {easy: 1100,	medium: 2200,	    hard: 3400,	    deadly: 5100},
        {easy: 1250,	medium: 2500,	    hard: 3800,	    deadly: 5700},
        {easy: 1400,	medium: 2800,	    hard: 4300,	    deadly: 6400},
        {easy: 1600,	medium: 3200,	    hard: 4800,	    deadly: 7200},
        {easy: 2000,	medium: 3900,	    hard: 5900,	    deadly: 8800},
        {easy: 2100,	medium: 4200,	    hard: 6300,	    deadly: 9500},
        {easy: 2400,	medium: 4900,	    hard: 7300,	    deadly: 10900},
        {easy: 2800,	medium: 5700,	    hard: 8500,	    deadly: 12700}
    ]

function randEl(list)
{
    return list[Math.floor(Math.random() * list.length)]
}
const ROLL_CONDITIONS = {
    "dropLowestN" : function (n, dice) {
        for (let i = 0; i < n; i++) {
            dice.shift()
        }
        return dice
    }
}
function roll(dice, condition)
{
    let parse = dice.split("d")
    let number = parseInt(parse[0])
    let die = parseInt(parse[1])

    let goToZero = parse[2]

    let outputDice = []

    for (let i = 0; i < number; i++) {
        let currRoll = Math.ceil(Math.random() * die) + (goToZero ? -1 : 0)
        outputDice.push(currRoll)
    }
    /* Credit to Sergio Abreu and aks at stackoverflow: https://stackoverflow.com/a/1063027 */
    let sortedDice = outputDice.sort(function (a, b) {
        return a - b
    })

    if(condition)
    {
        let args = condition.split('-')

        // console.log(`Before condition ${args[0]}:`, sortedDice)

        switch (args[0])
        {
            case "dropLowest" :
                for (let i = 0; i < args[1]; i++) {
                    sortedDice.shift()
                }
                break
            case "dropTop" :
                for (let i = 0; i < args[1]; i++) {
                    sortedDice.pop()
                }
                break
        }
    }

    let sum = 0

    for (let i = 0; i < sortedDice.length; i++) {
        sum += sortedDice[i]
    }

    // console.log(sortedDice)
    return sum
}

// example: roll('5d3'))
// example: roll('5d6', 'dropLowest-2'))
// example: roll('2d20', 'dropTop-1'))

// Generate a generic name
function getName()
{
    return randEl(names)
}

// Generate a generic monster type
function getMonsterType()
{
    return randEl(monster_types)
}

// Generate a generic loot type
function getLootType()
{
    return randEl(loot_types)
}

// Generate a monster name
function getMonsterName()
{
    let output = "The "

    let form = Math.floor(Math.random() * 3)

    switch (form)
    {
        case 0:
            output += randEl(adj_monst) + " "
            output += randEl(adj_monst) + " "
            break;
        case 1:
            output += randEl(adj_monst) + " "
            output += randEl(verbs_ing) + " "
            break;
        case 2:
            output += randEl(adj_monst) + " "
            output += randEl(verbs_ing) + " "
            output += randEl(nouns) + " "
            break;
        default:
            output += randEl(adj_monst) + " "
            output += randEl(verbs_ing) + " "
            output += randEl(nouns) + " "
    }

    return output + "Monster"
}

// Generate an item name
function getLootItemName()
{
    let output = randEl(particles) + " "

    let form = Math.floor(Math.random() * 4)

    switch (form)
    {
        case 0:
            output += randEl(adj_items) + " "
            output += randEl(items)
            break;
        case 1:
            output += randEl(adj_items) + " "
            output += randEl(materials) + " "
            output += randEl(items)
            break;
        case 2:
            output += randEl(items) + " of the "
            output += randEl(verbs_ing) + " " + randEl(nouns)
            break;
        case 3:
            output += randEl(materials) + " "
            output += randEl(items)
            break;
        default:
            output += randEl(adj_items) + " "
            output += randEl(materials) + " "
            output += randEl(items)
    }

    return output
}
// Generate an ability name
function getAbilityName()
{
    let output = ""

    let form = Math.floor(Math.random() * 10)

    switch (form)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            output += randEl(abilities)
            break;
        case 5:
        case 6:
            output += randEl(adj_abilt) + " "
            output += randEl(abilities)
            break;
        case 7:
        case 8:
            output += randEl(abilities) + " of the "
            output += randEl(nouns)
            break;
        case 9:
            output += "Summon " + getMonsterName()
            break;
        default:
            output += "Summon " + getMonsterName()
    }

    return output
}
function getQuestName() {
    let output = ""
    let form = Math.floor(Math.random() * 2)

    switch (form)
    {
        case 0:
            output += randEl(verbs_act) + " " + randEl(nouns)
            break;
        case 1:
            output += randEl(verbs_act) + " " + randEl(nouns) + randEl(nouns)
            break;
        default:
            output += randEl(verbs_act) + " " + randEl(nouns) + randEl(nouns)
    }

    return output
}

function getQuestGiverName() {
    return randEl(jobs) + " " + randEl(names)
}

function getQuestNumbers() {
    let level = roll('40d2d1', 'dropTop-20') + 1
    let difficultyLevel = randEl(difficulty)

    let monstersQty = 1

    switch (difficultyLevel) {
        case 'easy':
            monstersQty = roll('2d2', 'dropTop-1')
            break
        case 'medium':
            monstersQty = roll('2d3', 'dropLowest-1')
            break
        case 'hard':
            monstersQty = roll('3d3', 'dropLowest-1')
            break
        case 'deadly':
            monstersQty = roll('4d4', 'dropLowest-2')
            break
    }

    let rewardXp = xp_table[level][difficultyLevel]
    let rewardGold = roll(`${Math.ceil(level / 3)}d${level * 2}`) * difficulty_gold_mult[difficultyLevel]

    return {
        monstersQty: monstersQty,
        rewardXp: rewardXp,
        rewardGold: rewardGold,
        suggestedLevel: level
    }
}

const monster_table =
    [
        { stat: roll('3d6', 'dropTop-2'),   hp: roll('1d70') },
    ]

function getMonsterNumbers() {
    let cr = Math.min(roll('50d2d1', 'dropTop-20'), roll('50d2d1', 'dropTop-20'))

    let hp  = 1
    let atk = 1
    let def = 1
    let spd = 1

    let die = '1d6'
    let cond

    switch (cr)
    {
        case 0:
        case 1:
        case 2:
        case 3:
            hp  = roll('1d70')
                die = '3d6'
                cond = 'dropTop-2'
            atk = roll(die, cond)
            def = roll(die, cond)
            spd = roll(die, cond)
            break
        case 4:
        case 5:
        case 6:
            hp  = roll('2d70', 'dropLowest-1')
                die = '4d6'
                cond = 'dropLowest-2'
            atk = roll(die, cond)
            def = roll(die, cond)
            spd = roll(die, cond)
            break
        case 7:
        case 8:
            hp  = roll('3d70', 'dropLowest-1')
                die = '4d8'
                cond = 'dropLowest-2'
            atk = roll(die, cond)
            def = roll(die, cond)
            spd = roll(die, cond)
            break
        case 9:
        case 10:
            hp  = roll('3d100', 'dropLowest-1')
                die = '5d10'
                cond = 'dropLowest-3'
            atk = roll(die, cond)
            def = roll(die, cond)
            spd = roll(die, cond)
            break
        default:
            hp  = roll(`${cr / 5}d100`, `dropLowest-${cr / 2}`)
            die = `${cr / 4}d12`
            cond = `dropLowest-${cr / 2}`
            atk = roll(die, cond)
            def = roll(die, cond)
            spd = roll(die, cond)
    }

    return {
        cr: cr,
        healthPool: hp,
        attack: atk,
        defense: def,
        speed: spd,
    }
}

function getLootValue() {
    return roll(`3d5`) * 10 * Math.max(1, 100 * roll('2d1d1', 'dropTop-1')) * Math.max(1, 100 * roll('2d1d1', 'dropTop-1'))
}

for (let i = 0; i < 20; i++)
{

    console.log(getLootValue())
}

// Export for use
module.exports.getName = getName;
module.exports.getQuestName = getQuestName;
module.exports.getQuestGiverName = getQuestGiverName;
module.exports.getLootItemName = getLootItemName;
module.exports.getLootType = getLootType;
module.exports.getMonsterName = getMonsterName;
module.exports.getMonsterType = getMonsterType;
module.exports.getAbilityName = getAbilityName;
module.exports.roll = roll;
module.exports.getQuestNumbers = getQuestNumbers;
module.exports.getMonsterNumbers = getMonsterNumbers;