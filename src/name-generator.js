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

function randEl(list)
{
    return list[Math.floor(Math.random() * list.length)]
}

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

// Export for use
module.exports.getName = getName;
module.exports.getQuestName = getQuestName;
module.exports.getQuestGiverName = getQuestGiverName;
module.exports.getLootItemName = getLootItemName;
module.exports.getLootType = getLootType;
module.exports.getMonsterName = getMonsterName;
module.exports.getMonsterType = getMonsterType;
module.exports.getAbilityName = getAbilityName;