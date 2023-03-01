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
function toggleEditMode(button, editToggleData) {
    if (button.innerText === "Cancel")
    {
        button.innerText = "Edit"
    }
    else if (button.innerText === "Edit")
    {
        button.innerText = "Cancel"
    }

    switch (editToggleData.entity)
    {
        case "LootItemTypes": 
            let lootItemTypeId = editToggleData.id
            document.getElementById(`lootItemTypeName-${lootItemTypeId}`).toggleAttribute("contentEditable")
            toggleElementById(`update-lootItemType-${lootItemTypeId}` )
            toggleElementById(`edit-equipable-${lootItemTypeId}`)
            toggleElementById(`equipable-${lootItemTypeId}`)
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, editToggleData.entity)
    }
}

function updateDOMEntity(updatedEntityData)
{
    toggleEditMode(document.getElementById(`toggleEdit-lootItemType-${updatedEntityData.id}`), updatedEntityData.id)

    switch (updatedEntityData.entity)
    {
        case "LootItemTypes":
            document.getElementById(`lootItemTypeName-${updatedEntityData.id}`).innerText = updatedEntityData['title']
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
        case "LootItemTypes":
            document.getElementById(`LootItemTypeId-${updatedEntityData.id}`).remove()
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }
}

function updateEntity(button, updatedEntityData)
{
    switch (updatedEntityData.entity)
    {
        case "LootItemTypes":
            updatedEntityData['title'] = document.getElementById(`lootItemTypeName-${updatedEntityData.id}`).textContent.trim()
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
            if (this.status === 200)
            {
                updateDOMEntity(updatedEntityData)
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