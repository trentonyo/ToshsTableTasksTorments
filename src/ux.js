console.log("Loaded ux.js")

let input_fields = document.getElementsByTagName("input")

let column_ability = document.getElementById("abilities_column")
let column_loot = document.getElementById("lootItems_column")

let add_ability = document.getElementById("addAbilityForm")
let add_loot = document.getElementById("addLootItemForm")

for (let i = 0; i < input_fields.length; i++)
{
    let plc = input_fields[i].placeholder

    if (plc.length > 0)
    {
        input_fields[i].addEventListener("auxclick", function (e)
        {
            input_fields[i].value = plc
        })
    }
}

add_ability.addEventListener("click", function (e)
{
    addAbilitiesForm()
    updateGradientElements()
})
add_loot.addEventListener("click", function (e)
{
    addLootItemsForm()
    updateGradientElements()
})
