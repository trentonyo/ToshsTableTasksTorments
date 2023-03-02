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

    SELECT_AllQuests :  `SELECT * FROM Quests;`,
    SELECT_AllQuestGivers :  `SELECT * FROM QuestGivers;`,
    SELECT_AllMonsters :  `SELECT * FROM Monsters;`,
    SELECT_AllMonsterTypes :  `SELECT * FROM MonsterTypes;`,
    SELECT_AllAbilities :  `SELECT * FROM Abilities;`,
    SELECT_AllLootItemTypes :  `SELECT * FROM LootItemTypes;`,
    SELECT_AllLootItems :  `SELECT * FROM LootItems;`,
    SELECT_AllMonsters_Abilities :  `SELECT * FROM Monsters_Abilities;`,
    SELECT_AllMonster_LootItems :  `SELECT * FROM Monster_LootItems;`,

    SELECT_AvailableQuests: `SELECT * FROM Quests WHERE available=true;`,

    SELECT_QuestsByID :  function (questId) { return `SELECT * FROM Quests WHERE questId=${questId};` },
    SELECT_QuestGiversByID :  function (questGiverId) { return `SELECT * FROM QuestGivers WHERE questGiverId=${questGiverId};` },
    SELECT_MonstersByID :  function (monsterId) { return `SELECT * FROM Monsters WHERE monsterId=${monsterId};` },
    SELECT_MonsterTypesByID :  function (monsterTypeId) { return `SELECT * FROM MonsterTypes WHERE monsterTypeId=${monsterTypeId};` },
    SELECT_LootItemsByID :  function (lootId) { return `SELECT * FROM LootItems WHERE lootId=${lootId};` },
    SELECT_LootItemTypesByID :  function (lootItemTypeId) { return `SELECT * FROM LootItemTypes WHERE lootItemTypeId=${lootItemTypeId};` },
    SELECT_AbilitiesByID :  function (abilityId) { return `SELECT * FROM Abilities WHERE abilityId=${abilityId};` },
    SELECT_Monsters_AbilitiesByID :  function (monsterId, abilityId) { return `SELECT * FROM Monsters_Abilities WHERE (monsterId=${monsterId} AND abilityId=${abilityId});` },
    SELECT_Monsters_LootItemsByID :  function (monsterId, lootId) { return `SELECT * FROM Monsters_LootItems WHERE (monsterId=${monsterId} AND lootId=${lootId});` },

    UPDATE_Quests :   function (questId, questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) {
        return `UPDATE Quests SET questName=${questName}, questDesc=${questDesc}, available=${available}, questGiverId=${questGiverId}, suggestedLevel=${suggestedLevel}, monsterQty=${monsterQty}, rewardXp=${rewardXp}, rewardGold=${rewardGold}, monsterId=${monsterId} WHERE questId=${questId};` },
    UPDATE_Monsters :   function (monsterId, monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) {
        return `UPDATE Monsters SET monsterName=${monsterName}, monsterDesc=${monsterDesc}, monsterTypeId=${monsterTypeId}, healthPool=${healthPool}, attack=${attack}, defense=${defense}, speed=${speed} WHERE monsterId=${monsterId};` },

    UPDATE_Monsters_Abilities_Cooldown :   function (monsterId, abilityId, abilityCooldown) {
        return `UPDATE Monsters_Abilities SET abilityCooldown=${abilityCooldown} WHERE (monsterId=${monsterId} and abilityId=${abilityId});` },
    UPDATE_Monsters_LootItems_Drops :   function (monsterId, lootId, dropQuantity, dropChance) {
        return `UPDATE Monsters_LootItems SET dropQuantity=${dropQuantity}, dropChance=${dropChance} WHERE (monsterId=${monsterId} and lootId=${lootId});` },

    UPDATE_QuestsRemoveQuestGiver : function (questId) { return `UPDATE Quests SET questGiverId = NULL WHERE questId = ${questId};`
    }
}


module.exports.STATEMENTS = STATEMENTS;