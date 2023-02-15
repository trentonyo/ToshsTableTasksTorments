const names = ["Steve", "Randall", "Mary", "Janisha", "Gork", "Mork", "Qyzzyl", "Zyzzys", "Elyria", "Miphea"]
const materials = ["Gold", "Stone", "Mithril", "Chitin", "Glass"]
const items = ["Sword", "Pick", "Necklace", "Bucket", "Stool", "Cube"]

const particles = ["The", "A"]

const adj_monst = ["Great", "Lesser", "Dark", "Spotted", "Hairless", "Carnivorous", "Timid"]
const adj_items = ["Shiny", "Cursed", "Whizzing", "Crusty", "Glistening", "Shimmering", "Blessed"]
const verbs_ing = ["Flying", "Burning", "Weeping", "Slinking", "Burrowing"]
const verbs_act = ["Free", "Grind", "Liberate", "Defeat", "Siege", "Protect", "Finish"]
const nouns = ["Cave", "Vampire", "Tree", "River", "Skull", "Bird", "Fire", "Ice", "Town", "Castle"]

function randEl(list)
{
    return list[Math.floor(Math.random() * list.length)]
}

// Generate a generic name
function getName()
{
    return randEl(names)
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
function getQuestName() {
    return randEl(verbs_act) + " " + randEl(nouns)
}

// Export for use
module.exports.getName = getName;
module.exports.getQuestName = getQuestName;
module.exports.getLootItemName = getLootItemName;
module.exports.getMonsterName = getMonsterName;