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
            document.getElementById(`${editToggleData.entity}-Name-${questId}`).classList.toggle("editable")
            document.getElementById(`${editToggleData.entity}-questDesc-${questId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-questDesc-${questId}`).classList.toggle("editable")

            document.getElementById(`editQuestGiverId`).classList.toggle("hidden")
            document.getElementById(`Quests-questGiverId-${questId}`).classList.toggle("hidden")

            document.getElementById(`editAvailable`).classList.toggle("hidden")

            document.getElementById(`editQuestsMonster`).classList.toggle("hidden")
            let currentQuestGiverId = document.getElementById('questGivers-list').dataset["current"]

            if (currentQuestGiverId.length === 0)
            {
                currentQuestGiverId = "NULL"
            }

            document.getElementById('questGivers-list').value = currentQuestGiverId
            document.getElementById('monsters-list').value = document.getElementById('monsters-list').dataset["current"]

            document.getElementById('staticInfoband').classList.toggle("hidden")
            document.getElementById('editInfoband').classList.toggle("hidden")

            let otherCards = document.querySelectorAll(".card:not(.quest)")
            for (let i = 0; i < otherCards.length; i++) {
                otherCards[i].classList.toggle("suppressed")
            }

            toggleElementById(`update-Quests-${questId}`)
            break
        case "QuestGivers":
            let questGiverId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${questGiverId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${questGiverId}`).classList.toggle("editable")
            document.getElementById(`${editToggleData.entity}-Name-${questGiverId}`).focus()
            toggleElementById(`update-QuestGivers-${questGiverId}`)
            break
        case "MonsterTypes":
            let monsterTypeId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${monsterTypeId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${monsterTypeId}`).classList.toggle("editable")
            document.getElementById(`${editToggleData.entity}-Name-${monsterTypeId}`).focus()
            toggleElementById(`update-MonsterTypes-${monsterTypeId}`)
            break
        case "LootItems":
            let lootId = editToggleData.id
            // TODO allow editing of title/value

            document.getElementById(`${editToggleData.entity}-Name-${lootId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${lootId}`).classList.toggle("editable")

            document.getElementById(`${editToggleData.entity}-lootDesc-${lootId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-lootDesc-${lootId}`).classList.toggle("editable")

            document.getElementById(`${editToggleData.entity}-Subtitle-${lootId}`).classList.toggle("hidden")
            document.getElementById(`${editToggleData.entity}-Edit-Value-${lootId}`).classList.toggle("hidden")
            document.getElementById(`${editToggleData.entity}-lootItemType-${lootId}`).classList.toggle("hidden")
            document.getElementById(`${editToggleData.entity}-ItemType-${lootId}`).classList.toggle("hidden")

            let currentLootItemTypeId = document.getElementById(`lootTypes-list-${lootId}`).dataset["current"]
            document.getElementById(`lootTypes-list-${lootId}`).value = currentLootItemTypeId

            toggleElementById(`update-LootItems-${lootId}`)
            break
        case "Monsters":
            let monsterId = editToggleData.id
            // TODO allow editing of title/value

            document.getElementById(`${editToggleData.entity}-Name-${monsterId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${monsterId}`).classList.toggle("editable")

            document.getElementById(`${editToggleData.entity}-Desc-${monsterId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Desc-${monsterId}`).classList.toggle("editable")

            document.getElementById(`${editToggleData.entity}-Stats-${monsterId}`).classList.toggle("hidden")
            document.getElementById(`${editToggleData.entity}-EditStats-${monsterId}`).classList.toggle("hidden")

            document.getElementById(`${editToggleData.entity}-Type-${monsterId}`).classList.toggle("hidden")
            document.getElementById(`${editToggleData.entity}-EditType-${monsterId}`).classList.toggle("hidden")

            let currentMonsterTypeId = document.getElementById(`monster-types-list-${monsterId}`).dataset["current"]
            document.getElementById(`monster-types-list-${monsterId}`).value = currentMonsterTypeId

            toggleElementById(`update-Monsters-${monsterId}`)
            break
        case "LootItemTypes":
            let lootItemTypeId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${lootItemTypeId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${lootItemTypeId}`).classList.toggle("editable")
            document.getElementById(`${editToggleData.entity}-Name-${lootItemTypeId}`).focus()

            toggleElementById(`update-LootItemTypes-${lootItemTypeId}` )
            toggleElementById(`edit-equipable-${lootItemTypeId}`)
            toggleElementById(`equipable-${lootItemTypeId}`)
            break
        case "Abilities":
            let abilityId = editToggleData.id
            document.getElementById(`${editToggleData.entity}-Name-${abilityId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-abilityDesc-${abilityId}`).toggleAttribute("contentEditable")
            document.getElementById(`${editToggleData.entity}-Name-${abilityId}`).classList.toggle("editable")
            document.getElementById(`${editToggleData.entity}-Name-${abilityId}`).focus()
            toggleElementById(`update-Abilities-${abilityId}`)
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
            window.location.replace(`/Quests/view/${updatedEntityData.id}`)
            break
        case "QuestGivers":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            break
        case "MonsterTypes":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            break
        case "LootItems":
            document.getElementById(`LootItems-lootDesc-${updatedEntityData.id}`).value = updatedEntityData['lootDesc']
            document.getElementById(`LootItems-Subtitle-${updatedEntityData.id}`).innerText = `(${updatedEntityData['lootValue']} gold)`
            document.getElementById(`LootItems-ItemType-${updatedEntityData.id}`).innerText = updatedEntityData['lootItemTypeName']
            document.getElementById(`lootTypes-list-${updatedEntityData.id}`).dataset.current = updatedEntityData['lootItemTypeId']
            break
        case "Monsters":
            document.getElementById(`Monsters-TypeName-${updatedEntityData.id}`).innerText = updatedEntityData['monsterTypeName']

            let monsterStatsContainer = document.getElementById(`Monsters-Stats-${updatedEntityData.id}`)
            let newMonsterStats = {
                attack : updatedEntityData['attack'],
                defense : updatedEntityData['defense'],
                speed : updatedEntityData['speed'],
                healthPool : updatedEntityData['healthPool']
            }
            monsterStatsContainer.innerHTML = Handlebars.templates['MonstersInfoBand'](newMonsterStats)

            break
        case "LootItemTypes":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            document.getElementById(`edit-equipable-${updatedEntityData.id}`).value = updatedEntityData['equipable']
            document.getElementById(`equipable-${updatedEntityData.id}`).innerText = (updatedEntityData['equipable'] === "1" ? "Equipable" : "Not Equipable")
            break
        case "Abilities":
            document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).innerText = updatedEntityData['title']
            document.getElementById(`Abilities-abilityDesc-${updatedEntityData.id}`).value = updatedEntityData['questDesc']
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
        case "Monsters":
            document.getElementById(`Monsters-${updatedEntityData.id}`).remove()
            break
        case "QuestGivers":
            document.getElementById(`QuestGivers-${updatedEntityData.id}`).remove()
            break
        case "MonsterTypes":
            document.getElementById(`MonsterTypes-${updatedEntityData.id}`).remove()
            break
        case "LootItems":
            document.getElementById(`LootItems-${updatedEntityData.id}`).remove()
            break
        case "LootItemTypes":
            document.getElementById(`LootItemTypes-${updatedEntityData.id}`).remove()
            break
        case "Abilities":
            document.getElementById(`Abilities-${updatedEntityData.id}`).remove()
            break
        default:
            console.log(`Unexpected entity type '${updatedEntityData.entity}!`, updatedEntityData)
    }
}

function updateEntity(button, updatedEntityData)
{
    updatedEntityData['title'] = document.getElementById(`${updatedEntityData.entity}-Name-${updatedEntityData.id}`).textContent.trim()
    switch (updatedEntityData.entity)
    {
        case "Quests":
            updatedEntityData['questDesc'] = document.getElementById(`${updatedEntityData.entity}-questDesc-${updatedEntityData.id}`).textContent.trim()
            updatedEntityData['available'] = document.getElementById("editAvailableCheckbox").checked
            updatedEntityData['questGiverId'] = document.getElementById("questGivers-list").value
            updatedEntityData['suggestedLevel'] = document.getElementById("suggestedLevel").value
            updatedEntityData['monsterQty'] = document.getElementById("editMonsterQty").value
            updatedEntityData['rewardXp'] = document.getElementById("rewardXp").value
            updatedEntityData['rewardGold'] = document.getElementById("rewardGold").value
            updatedEntityData['monsterId'] = document.getElementById("monsters-list").value
            break
        case "Monsters":
            updatedEntityData['monsterDesc'] = document.getElementById(`Monsters-Desc-${updatedEntityData.id}`).textContent.trim()
            updatedEntityData['monsterTypeId'] = document.getElementById(`monster-types-list-${updatedEntityData.id}`).value
            let monsterTypeSelect = document.getElementById(`monster-types-list-${updatedEntityData.id}`)
            updatedEntityData['monsterTypeName'] = monsterTypeSelect.options[monsterTypeSelect.selectedIndex].innerText
            updatedEntityData['healthPool'] = document.getElementById(`editHealthPool-${updatedEntityData.id}`).value
            updatedEntityData['attack'] =  document.getElementById(`editAttack-${updatedEntityData.id}`).value
            updatedEntityData['defense'] =  document.getElementById(`editDefense-${updatedEntityData.id}`).value
            updatedEntityData['speed'] =  document.getElementById(`editSpeed-${updatedEntityData.id}`).value
            break
        case "QuestGivers":

            break
        case "MonsterTypes":

            break
        case "LootItems":

            updatedEntityData['lootDesc'] = document.getElementById(`${updatedEntityData.entity}-lootDesc-${updatedEntityData.id}`).textContent.trim()

            let lootTypeSelect = document.getElementById(`lootTypes-list-${updatedEntityData.id}`)
            updatedEntityData['lootItemTypeId'] = lootTypeSelect.value
            updatedEntityData['lootItemTypeName'] = lootTypeSelect.options[lootTypeSelect.selectedIndex].innerText

            updatedEntityData['lootValue'] = document.getElementById(`editValue-${updatedEntityData.id}`).value

            break
        case "LootItemTypes":

            updatedEntityData['equipable'] = document.getElementById(`edit-equipable-${updatedEntityData.id}`).value
            break
        case "Abilities":

            updatedEntityData['abilityDesc'] = document.getElementById(`${updatedEntityData.entity}-abilityDesc-${updatedEntityData.id}`).textContent.trim()
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