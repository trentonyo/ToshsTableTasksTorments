console.log("Loaded ux.js")

let params = new URLSearchParams(document.location.search)

if(params.has("err"))
{
    let msg = ""

    switch (params.get("err"))
    {
        case "ER_DUP_ENTRY":
            msg = "Error: Cannot create duplicate entry!"
            break
        default:
            msg = "An error occurred!"
    }

    alert(msg)
}

/*https://javascript.info/task/delay-promise - Ilya Kantor*/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let input_fields = document.getElementsByTagName("input")

let column_ability = document.getElementById("abilities_column")
let column_loot = document.getElementById("lootItems_column")

let add_ability = document.getElementById("addAbilityForm")
let add_loot = document.getElementById("addLootItemForm")

let collapse_buttons = document.getElementsByClassName('collapse-container')

let closeDiv = function (id)
{
    let target = document.getElementById(id)
    target.remove()
}

let uncollapseChildren = function (event)
{
    let collapse_targets = event.target.closest(".collapse-container").getElementsByClassName("collapse-target")

    for (let i = 0; i < collapse_targets.length; i++)
    {
        collapse_targets[i].classList.remove("hidden")
    }
}
let collapseChildren = async function (event) {
    let collapse_targets = event.target.closest(".collapse-container").getElementsByClassName("collapse-target")

    for (let i = 0; i < collapse_targets.length; i++)
    {
        //Delays the hiding by 100ms (or longer for longer lists) to give the user a chance with a fast cursor
        delay(Math.max(100, collapse_targets.length * 10) - (i * 10)).then(function ()
        {
            collapse_targets[i].classList.add("hidden")
        })
    }
}

for (let i = 0; i < collapse_buttons.length; i++)
{
    collapse_buttons[i].addEventListener('mouseenter', uncollapseChildren)
    collapse_buttons[i].addEventListener('mouseleave', collapseChildren)
}

for (let i = 0; i < input_fields.length; i++)
{
    let placeholder = input_fields[i].placeholder

    if (placeholder.length > 0)
    {
        input_fields[i].addEventListener("contextmenu", function (e)
        {
            if (input_fields[i].value.length === 0)
            {
                e.preventDefault()
                input_fields[i].value = placeholder
            }
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
