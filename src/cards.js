console.log("cards.js loaded")


function showElementById(id) {
    // document.getElementById(id).removeAttribute("hidden")
    document.getElementById(id).classList.remove("hidden")
}

function hideElementById(id) {
    // document.getElementById(id).setAttribute("hidden", "hidden")
    document.getElementById(id).classList.add("hidden")
}

function toggleElementById(id) {
    if (document.getElementById(id).classList.contains("hidden"))
    {
        document.getElementById(id).classList.remove("hidden")
    }
    else
    {
        document.getElementById(id).classList.add("hidden")
    }
}
function toggleEditMode(button, editToggleData, restoreUnsavedName) {
    if (button.innerText === "Cancel")
    {
        button.innerText = "Edit"

        if (restoreUnsavedName)
        {
            document.getElementById(`${editToggleData.entity}-Name-${editToggleData.id}`).innerText = document.getElementById(`${editToggleData.entity}-Name-${editToggleData.id}`).dataset.unchangedName
        }
    }
    else if (button.innerText === "Edit")
    {
        button.innerText = "Cancel"

        document.getElementById(`${editToggleData.entity}-Name-${editToggleData.id}`).dataset.unchangedName = document.getElementById(`${editToggleData.entity}-Name-${editToggleData.id}`).innerText
    }

    switch (editToggleData.entity)
    {
        case "Quests":
            let questId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${questId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-questDesc-${questId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${questId}`).classList.toggle("editable")
            toggleElementById(`update-Quests-${questId}`)
            break
        case "QuestGivers":
            let questGiverId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${questGiverId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${questGiverId}`).classList.toggle("editable")
            toggleElementById(`update-QuestGivers-${questGiverId}`)
            break
        case "MonsterTypes":
            let monsterTypeId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${monsterTypeId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${monsterTypeId}`).classList.toggle("editable")
            toggleElementById(`update-MonsterTypes-${monsterTypeId}`)
            break
        case "LootItemTypes": 
            let lootItemTypeId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${lootItemTypeId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${lootItemTypeId}`).classList.toggle("editable")
            toggleElementById(`update-lootItemType-${lootItemTypeId}` )
            toggleElementById(`edit-equipable-${lootItemTypeId}`)
            toggleElementById(`equipable-${lootItemTypeId}`)
            break
        default:
            console.log(`Unexpected entity type '${editToggleData.entity}!`, editToggleData.entity)
    }
}

function updateDOMEntity(updatedEntityData)
{
    //toggleEditMode(document.getElementById(`toggleEdit-lootItemType-${updatedEntityData.id}`), updatedEntityData.id)

    switch (updatedEntityData.entity)
    {
        case "Quests":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            document.getElementById(`Quests-questDesc-${updatedEntityData.id}`).value = updatedEntityData['questDesc']
            break
        case "QuestGivers":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            break
        case "MonsterTypes":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            break
        case "LootItemTypes":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            document.getElementById(`edit-equipable-${updatedEntityData.id}`).value = updatedEntityData['equipable']
            document.getElementById(`equipable-${updatedEntityData.id}`).innerText = (updatedEntityData['equipable'] === "1" ? "Equipable" : "Not Equipable")
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }
}

function deleteDOMEntity(updatedEntityData)
{
    switch (updatedEntityData.entity)
    {
        case "Quests":
            document.getElementById(`Quests-${updatedEntityData.id}`).remove()
            break
        case "QuestGivers":
            document.getElementById(`QuestGivers-${updatedEntityData.id}`).remove()
            break
        case "MonsterTypes":
            document.getElementById(`MonsterTypes-${updatedEntityData.id}`).remove()
            break
        case "LootItemTypes":
            document.getElementById(`LootItemType-${updatedEntityData.id}`).remove()
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }
}

function updateEntity(button, updatedEntityData)
{
    switch (updatedEntityData.entity)
    {
        case "Quests":
            updatedEntityData['title'] = document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).textContent.trim()
            updatedEntityData['questDesc'] = document.getElementById(`${updatedEntityData.entity}-questDesc-${updatedEntityData.id}`).textContent.trim()
            // TODO Add other attributes
            break
        case "QuestGivers":
            updatedEntityData['title'] = document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).textContent.trim()
            break
        case "MonsterTypes":
            updatedEntityData['title'] = document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).textContent.trim()
            break
        case "LootItemTypes":
            updatedEntityData['title'] = document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).textContent.trim()
            updatedEntityData['equipable'] = document.getElementById(`edit-equipable-${updatedEntityData.id}`).value
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }

    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function()
    {
        if (this.readyState === 4)
        {
            if (this.status === 200 || this.status === 302)
            {
                updateDOMEntity(updatedEntityData)
                toggleEditMode(document.getElementById(`toggleEdit-${updatedEntityData.entity}-${updatedEntityData.id}`), updatedEntityData, false)
            }
            else
            {
                alert(`Error: ${this.responseText}`)
            }
        }
    }

    xhttp.open("POST", '/updateEntity', true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(updatedEntityData))
}

function deleteEntity(button, entityDataToDelete) {
    if (confirm(`Are you sure you want to delete this ${ENTITIES[entityDataToDelete.entity].en_singular}?`))
    // if (confirm(`Are you sure you want to delete this ${entityDataToDelete.entity}?`))
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState === 4)
            {
                if (this.status === 200)
                {
                    deleteDOMEntity(entityDataToDelete)
                }
                else
                {
                    alert(`Error: ${this.responseText}`)
                }
            }
        }

        xhttp.open("POST", '/deleteEntity', true);
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send(JSON.stringify(entityDataToDelete))
    }
    else
    {
        return
    }
}