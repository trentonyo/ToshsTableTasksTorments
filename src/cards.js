console.log("cards.js loaded")

function showElementById(id) {
    document.getElementById(id).removeAttribute("hidden")
}

function hideElementById(id) {
    document.getElementById(id).setAttribute("hidden", "hidden")
}
function toggleEditMode(button, lootItemTypeId) {
    let name = document.getElementById(`lootItemTypeName-${lootItemTypeId}`)
    let equipable = document.getElementById(`equipable-${lootItemTypeId}`)
    if (name.contentEditable == "false") { // Enables editing
        name.contentEditable = "true"
        equipable.contentEditable = "true"
        showElementById(`update-lootItemType-${lootItemTypeId}`)
        showElementById(`edit-equipable-${lootItemTypeId}`)
        hideElementById(`equipable-${lootItemTypeId}`)
        button.innerHTML = "Cancel"
    } else { // Disables editing
        name.contentEditable = "false"
        equipable.contentEditable = "false"
        hideElementById(`update-lootItemType-${lootItemTypeId}`)
        hideElementById(`edit-equipable-${lootItemTypeId}`)
        showElementById(`equipable-${lootItemTypeId}`)
        button.innerHTML = "Edit"
    }
}

function updateDOMEntity(updatedEntityData)
{
    switch (updatedEntityData.entity)
    {
        case "LootItemType":
            document.getElementById(`lootItemTypeName-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            document.getElementById(`edit-equipable-${updatedEntityData.id}`).value = updatedEntityData['equipable']
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }
}

function deleteDOMEntity(updatedEntityData)
{
    switch (updatedEntityData.entity)
    {
        case "LootItemType":
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
        case "LootItemType":
            updatedEntityData['title'] = document.getElementById(`lootItemTypeName-${updatedEntityData.id}`).textContent.trim()
            updatedEntityData['equipable'] = document.getElementById(`edit-equipable-${updatedEntityData.id}`).value
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }

    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", '/updateEntity', true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(updatedEntityData))
}

function deleteEntity(button, entityDataToDelete) {
    if (confirm(`Are you sure you want to delete this ${entityDataToDelete.entity}?`))
    {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState === 4)
            {
                if (this.status === 400)
                {
                    alert(`Error: ${this.responseText}`);
                }
            }
        };
        xhttp.open("POST", '/deleteEntity', true);
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send(JSON.stringify(entityDataToDelete))
    }
    else
    {
        return
    }
}