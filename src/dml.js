let STATEMENTS = {
    INSERT_Quests:              function (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) {
                                    return `INSERT INTO Quests (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) VALUES (${questName}, ${questDesc}, ${available}, ${questGiverId}, ${suggestedLevel}, ${monsterQty}, ${monsterId}, ${rewardXp}, ${rewardGold});` },
    INSERT_QuestGivers:         function (questGiverName) {
                                    return `INSERT INTO QuestGivers (questGiverName) VALUES (${questGiverName});` },
    INSERT_Monsters:            function (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) {
                                    return `INSERT INTO Monsters (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) VALUES (${monsterName}, ${monsterDesc}, ${monsterTypeId}, ${healthPool}, ${attack}, ${defense}, ${speed});` },
    INSERT_MonsterTypes:        function (monsterTypeName) {
                                    return `INSERT INTO MonsterTypes (monsterTypeName) VALUES (${monsterTypeName});` },
    INSERT_Abilities:           function (abilityName, abilityDesc) {
                                    return `INSERT INTO Abilities (abilityName, abilityDesc) VALUES (${abilityName}, ${abilityDesc});` },
    INSERT_LootItemTypes:       function (lootItemTypeName, equipable) {
                                    return `INSERT INTO LootItemTypes (lootItemTypeName, equipable) VALUES (${lootItemTypeName}, ${equipable});` },
    INSERT_LootItems:           function (lootName, lootDesc, lootItemTypeId, lootValue) {
                                    return `INSERT INTO LootItems (lootName, lootDesc, lootItemTypeId, lootValue) VALUES (${lootName}, ${lootDesc}, ${lootItemTypeId}, ${lootValue});` },
    INSERT_Monsters_Abilities:  function (monsterId, abilityId, abilityCooldown) {
                                    return `INSERT INTO Monsters_Abilities (monsterId, abilityId, abilityCooldown) VALUES (${monsterId}, ${abilityId}, ${abilityCooldown});` },
    INSERT_Monsters_LootItems:  function (monsterId, lootId, dropQuantity, dropChance) {
                                    return `INSERT INTO Monsters_LootItems (monsterId, lootId, dropQuantity, dropChance) VALUES (${monsterId}, ${lootId}, ${dropQuantity}, ${dropChance});` },


    SELECT_AvailableQuests: `SELECT * FROM Quests WHERE available=true;`
}


module.exports.STATEMENTS = STATEMENTS;