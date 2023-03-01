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

function updateLootItemType(button, lootItemTypeId) {
    let name = document.getElementById(`lootItemTypeName-${lootItemTypeId}`).textContent.trim()
    let equipable = document.getElementById(`edit-equipable-${lootItemTypeId}`).value
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/update/LootItemType', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`lootItemTypeId=${lootItemTypeId}&lootItemTypeName=${name}&equipable=${equipable}`);
}

function deleteLootItemType(button, lootItemTypeId) {
    if (confirm("Are you sure you want to delete this loot item type?")) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 400) {
                    alert(`Error: ${this.responseText}`);
                }
            }
        };
        xhttp.open("POST", '/delete/LootItemType', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(`lootItemTypeId=${lootItemTypeId}`);
    } else {
        return
    }
}