console.log("Loaded ux.js")

let input_fields = document.getElementsByTagName("input")

let column_ability = document.getElementById("abilities_column")
let column_loot = document.getElementById("lootItems_column")

let add_ability = document.getElementById("addAbilityForm")
let add_loot = document.getElementById("addLootItemForm")

let collapse_buttons = document.getElementsByClassName('collapse-container')

let uncollapseChildren = function (event)
{
    let collapse_targets = event.target.closest(".collapse-container").getElementsByClassName("collapse-target")
    console.log(collapse_targets)
    for (let i = 0; i < collapse_targets.length; i++)
    {
        collapse_targets[i].classList.remove("hidden")
    }
}
let collapseChildren = function (event)
{
    let collapse_targets = event.target.closest(".collapse-container").getElementsByClassName("collapse-target")
    console.log(collapse_targets)
    for (let i = 0; i < collapse_targets.length; i++)
    {
        collapse_targets[i].classList.add("hidden")
    }
}

for (let i = 0; i < collapse_buttons.length; i++)
{
    collapse_buttons[i].addEventListener('mouseenter', uncollapseChildren)
    collapse_buttons[i].addEventListener('mouseleave', collapseChildren)
}

// let nav_collapse_new = document.getElementById("collapse_new")
// let nav_collapse_view = document.getElementById("collapse_view")
//
// let toggleNewList = function (ev) {
//     let collapseTarget = document.querySelectorAll('.collapse-target.new')
//     for (let i = 0; i < collapseTarget.length; i++)
//     {
//         collapseTarget[i].classList.toggle('hidden')
//         nav_collapse_new.classList.toggle('uncollapsed')
//     }
// }
//
// nav_collapse_new.addEventListener('mouseenter', toggleNewList)
// nav_collapse_new.addEventListener('mouseleave', toggleNewList)
//
// let toggleViewList = function (ev) {
//     let collapseTarget = document.querySelectorAll('.collapse-target.view')
//     for (let i = 0; i < collapseTarget.length; i++) {
//         collapseTarget[i].classList.toggle('hidden')
//         nav_collapse_view.classList.toggle('uncollapsed')
//     }
// }
//
// nav_collapse_view.addEventListener('mouseenter', toggleViewList)
// nav_collapse_view.addEventListener('mouseleave', toggleViewList)


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
