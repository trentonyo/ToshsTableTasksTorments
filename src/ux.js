console.log("Loaded ux.js")
console.log(
    [{"questId":1,"questName":"Clear Cave","questDesc":"There's something in the old gemstone mine that's driven all the miners away, see if you can clear it out.","available":1,"questGiverId":1,"suggestedLevel":1,"monsterQty":5,"monsterId":1,"rewardXp":100,"rewardGold":100,"questGiverName":"Tosh","monsterName":"Slime","monsterDesc":"The living, hostile gel. Slow-moving, but inexorable while it remains intact.","monsterTypeId":1,"healthPool":10,"attack":5,"defense":1,"speed":1}])

let input_fields = document.getElementsByTagName("input")

let column_ability = document.getElementById("abilities_column")
let column_loot = document.getElementById("lootItems_column")

let add_ability = document.getElementById("addAbilityForm")
let add_loot = document.getElementById("addLootItemForm")

for (let i = 0; i < input_fields.length; i++)
{
    let placeholder = input_fields[i].placeholder

    if (placeholder.length > 0)
    {
        input_fields[i].addEventListener("auxclick", function (e)
        {
            input_fields[i].value = placeholder
        })
    }
}

if(add_ability)
{
    add_ability.addEventListener("click", function (e)
    {
        addAbilitiesForm()
        updateGradientElements()
    })
}

if(add_loot)
{
    add_loot.addEventListener("click", function (e)
    {
        addLootItemsForm()
        updateGradientElements()
    })
}
