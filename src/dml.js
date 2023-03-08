//TODO sanitize inputs

/* https://stackoverflow.com/a/7760578 - Thanks to ffxsam and Paul d'Aoust */
function sanitize (str) {
    str = String(str)
    let sanitized = ""

    for (let i = 0; i < str.length; i++)
    {
        let char = str.substring(i, i+1)
        switch (char)
        {
            case '"':
            case "'":
            case "\\":
            case ";":
                sanitized +=  "\\"+char
                break
            default:
                sanitized += char
        }
    }

    return sanitized

    // return str.replace(/[\x08\x09\x1a\n\r"'\\%]/g, function (char) {
    //     switch (char) {
    //         case "\0":
    //             return "\\0";
    //         case "\x08":
    //             return "\\b";
    //         case "\x09":
    //             return "\\t";
    //         case "\x1a":
    //             return "\\z";
    //         case "\n":
    //             return "\\n";
    //         case "\r":
    //             return "\\r";
    //         case "\"":
    //         case "'":
    //         case "\\":
    //         case "%":
    //             return "\\"+char; // prepends a backslash to backslash, percent,
    //                               // and double/single quotes
    //         default:
    //             // return char;
    //             return 'x';
    //     }
    // });
}

let STATEMENTS = {
    INSERT_Quests:              function (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) { /* TODO A foreign key constraint fails */
                                    return `INSERT INTO Quests (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) VALUES ('${sanitize(questName)}', '${sanitize(questDesc)}', ${sanitize(available)}, ${sanitize(questGiverId)}, ${sanitize(suggestedLevel)}, ${sanitize(monsterQty)}, ${sanitize(monsterId)}, ${sanitize(rewardXp)}, ${sanitize(rewardGold)});` },
    INSERT_QuestGivers:         function (questGiverName) {
                                    return `INSERT INTO QuestGivers (questGiverName) VALUES ('${sanitize(questGiverName)}');` },
    INSERT_Monsters:            function (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) {
                                    return `INSERT INTO Monsters (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) VALUES ('${sanitize(monsterName)}', '${sanitize(monsterDesc)}', ${sanitize(monsterTypeId)}, ${sanitize(healthPool)}, ${sanitize(attack)}, ${sanitize(defense)}, ${sanitize(speed)});` },
    INSERT_MonsterTypes:        function (monsterTypeName) {
                                    return `INSERT INTO MonsterTypes (monsterTypeName) VALUES ('${sanitize(monsterTypeName)}');` },
    INSERT_Abilities:           function (abilityName, abilityDesc) {
                                    return `INSERT INTO Abilities (abilityName, abilityDesc) VALUES ('${sanitize(abilityName)}', '${sanitize(abilityDesc)}');` },
    INSERT_LootItemTypes:       function (lootItemTypeName, equipable) {
                                    return `INSERT INTO LootItemTypes (lootItemTypeName, equipable) VALUES ('${sanitize(lootItemTypeName)}', ${sanitize(equipable)});` },
    INSERT_LootItems:           function (lootName, lootDesc, lootItemTypeId, lootValue) {
                                    return `INSERT INTO LootItems (lootName, lootDesc, lootItemTypeId, lootValue) VALUES ('${sanitize(lootName)}', '${sanitize(lootDesc)}', ${sanitize(lootItemTypeId)}, ${sanitize(lootValue)});` },
    INSERT_Monsters_Abilities:  function (monsterId, abilityId, abilityCooldown) {
                                    return `INSERT INTO Monsters_Abilities (monsterId, abilityId, abilityCooldown) VALUES (${sanitize(monsterId)}, ${sanitize(abilityId)}, ${sanitize(abilityCooldown)});` },
    INSERT_Monsters_LootItems:  function (monsterId, lootId, dropQuantity, dropChance) {
                                    return `INSERT INTO Monsters_LootItems (monsterId, lootId, dropQuantity, dropChance) VALUES (${sanitize(monsterId)}, ${sanitize(lootId)}, ${sanitize(dropQuantity)}, ${sanitize(dropChance)});` },

    SELECT_AllQuests :  `SELECT * FROM Quests LEFT JOIN QuestGivers ON Quests.questGiverId = QuestGivers.questGiverId;`,
    SELECT_AllQuestGivers :  `SELECT * FROM QuestGivers;`,
    SELECT_AllMonsters :  `SELECT * FROM Monsters;`,
    SELECT_AllMonsterTypes :  `SELECT * FROM MonsterTypes;`,
    SELECT_AllAbilities :  `SELECT * FROM Abilities;`,
    SELECT_AllLootItemTypes :  `SELECT * FROM LootItemTypes;`,
    SELECT_AllLootItems :  `SELECT * FROM LootItems INNER JOIN LootItemTypes on LootItems.lootItemTypeId = LootItemTypes.lootItemTypeId;`,
    SELECT_AllMonsters_Abilities :  `SELECT * FROM Monsters_Abilities INNER JOIN Monsters ON Monsters_Abilities.monsterId = Monsters.monsterId INNER JOIN Abilities On Monsters_Abilities.abilityId = Abilities.abilityId;`,
    SELECT_AllMonsters_LootItems :  `SELECT * FROM Monsters_LootItems INNER JOIN Monsters ON Monsters_LootItems.monsterId = Monsters.monsterId INNER JOIN LootItems On Monsters_LootItems.lootId = LootItems.lootId;`,

    SELECT_AvailableQuests: `SELECT * FROM Quests LEFT JOIN QuestGivers ON Quests.questGiverId = QuestGivers.questGiverId WHERE available=true;`,

    SELECT_QuestsByID :             function (questId) { return `SELECT * FROM Quests WHERE questId=${sanitize(questId)};` },
    SELECT_QuestGiversByID :        function (questGiverId) { return `SELECT * FROM QuestGivers WHERE questGiverId=${sanitize(questGiverId)};` },
    SELECT_MonstersByID :           function (monsterId) { return `SELECT * FROM Monsters WHERE monsterId=${sanitize(monsterId)};` },
    SELECT_MonsterTypesByID :       function (monsterTypeId) { return `SELECT * FROM MonsterTypes WHERE monsterTypeId=${sanitize(monsterTypeId)};` },
    SELECT_LootItemsByID :          function (lootId) { return `SELECT * FROM LootItems WHERE lootId=${sanitize(lootId)};` },
    SELECT_LootItemTypesByID :      function (lootItemTypeId) { return `SELECT * FROM LootItemTypes WHERE lootItemTypeId=${sanitize(lootItemTypeId)};` },
    SELECT_AbilitiesByID :          function (abilityId) { return `SELECT * FROM Abilities WHERE abilityId=${sanitize(abilityId)};` },
    SELECT_Monsters_AbilitiesByID : function (monsterId, abilityId) { return `SELECT * FROM Monsters_Abilities WHERE (monsterId=${sanitize(monsterId)} AND abilityId=${sanitize(abilityId)});` },
    SELECT_Monsters_LootItemsByID : function (monsterId, lootId) { return `SELECT * FROM Monsters_LootItems WHERE (monsterId=${sanitize(monsterId)} AND lootId=${sanitize(lootId)});` },

    SELECT_QuestWithDetailsByID :   function (questId) { return `SELECT * FROM Quests 
                                                                    LEFT JOIN QuestGivers ON Quests.questGiverId = QuestGivers.questGiverId 
                                                                    INNER JOIN Monsters ON Quests.monsterId = Monsters.monsterId 
                                                                 WHERE Quests.questId=${sanitize(questId)} ;` },
    SELECT_AbilitiesByMonstersID:   function (monsterId) { return   `SELECT * FROM Abilities 
                                                                        JOIN Monsters_Abilities ON Monsters_Abilities.abilityId = Abilities.abilityId 
                                                                    WHERE Monsters_Abilities.monsterId=${sanitize(monsterId)} ;`},
    SELECT_LootItemsByMonstersID:   function (monsterId) { return   `SELECT * FROM LootItems 
                                                                        JOIN Monsters_LootItems ON Monsters_LootItems.lootId = LootItems.lootId 
                                                                    WHERE Monsters_LootItems.monsterId=${sanitize(monsterId)} ;`},

    UPDATE_Quests :             function (questId, questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) {
                                    return `UPDATE Quests SET questName='${sanitize(questName)}', questDesc="${sanitize(questDesc)}", available=${sanitize(available)}, questGiverId=${sanitize(questGiverId)}, suggestedLevel=${sanitize(suggestedLevel)}, monsterQty=${sanitize(monsterQty)}, rewardXp=${sanitize(rewardXp)}, rewardGold=${sanitize(rewardGold)}, monsterId=${sanitize(monsterId)} WHERE questId=${sanitize(questId)};` },
    UPDATE_Monsters :           function (monsterId, monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) {
                                    return `UPDATE Monsters SET monsterName='${sanitize(monsterName)}', monsterDesc='${sanitize(monsterDesc)}', monsterTypeId=${sanitize(monsterTypeId)}, healthPool=${sanitize(healthPool)}, attack=${sanitize(attack)}, defense=${sanitize(defense)}, speed=${sanitize(speed)} WHERE monsterId=${sanitize(monsterId)};` },
    UPDATE_LootItemTypes :     function (lootItemTypeId, lootItemTypeName, equipable) {
                                    return `UPDATE LootItemTypes SET lootItemTypeName='${sanitize(lootItemTypeName)}', equipable=${sanitize(equipable)} WHERE lootItemTypeId=${sanitize(lootItemTypeId)};` },
    UPDATE_Abilities :          function (abilityId, abilityName, abilityDesc) {
                                    return `UPDATE Abilities SET abilityName=${sanitize(abilityName)}, abilityDesc='${sanitize(abilityDesc)}' WHERE abilityId=${sanitize(abilityId)};` },
    UPDATE_LootItems :          function (lootId, lootName, lootDesc, lootItemTypeId, lootValue) {
                                    return `UPDATE LootItems SET lootName='${sanitize(lootName)}', lootDesc='${sanitize(lootDesc)}', lootItemTypeId='${sanitize(lootItemTypeId)}', lootValue='${sanitize(lootValue)}' WHERE lootId=${sanitize(lootId)};` },
    UPDATE_MonsterTypes :       function (monsterTypeId, monsterTypeName) {
                                    return `UPDATE MonsterTypes SET monsterTypeName='${sanitize(monsterTypeName)}' WHERE monsterTypeId=${sanitize(monsterTypeId)};` },
    UPDATE_QuestGivers :       function (questGiverId, questGiverName) {
                                    return `UPDATE QuestGivers SET questGiverName='${sanitize(questGiverName)}' WHERE questGiverId=${sanitize(questGiverId)};` },

    UPDATE_Monsters_Abilities_Cooldown :    function (monsterId, abilityId, abilityCooldown) {
                                                return `UPDATE Monsters_Abilities SET abilityCooldown=${sanitize(abilityCooldown)} WHERE (monsterId=${sanitize(monsterId)} and abilityId=${sanitize(abilityId)});` },
    UPDATE_Monsters_LootItems_Drops :       function (monsterId, lootId, dropQuantity, dropChance) {
                                                return `UPDATE Monsters_LootItems SET dropQuantity=${sanitize(dropQuantity)}, dropChance=${sanitize(dropChance)} WHERE (monsterId=${sanitize(monsterId)} and lootId=${sanitize(lootId)});` },
    UPDATE_QuestsRemoveQuestGiver :         function (questId) {
                                                return `UPDATE Quests SET questGiverId = NULL WHERE questId = ${sanitize(questId)};` },

    DELETE_QuestsByID :             function (questId) { return `DELETE FROM Quests WHERE questId=${sanitize(questId)};` },
    DELETE_QuestGiversByID :        function (questGiverId) { return `DELETE FROM QuestGivers WHERE questGiverId=${sanitize(questGiverId)};` },
    DELETE_MonstersByID :           function (monsterId) { return `DELETE FROM Monsters WHERE monsterId=${sanitize(monsterId)};` },
    DELETE_MonsterTypesByID :       function (monsterTypeId) { return `DELETE FROM MonsterTypes WHERE monsterTypeId=${sanitize(monsterTypeId)};` },
    DELETE_LootItemsByID :          function (lootId) { return `DELETE FROM LootItems WHERE lootId=${sanitize(lootId)};` },
    DELETE_LootItemTypesByID :      function (lootItemTypeId) { return `DELETE FROM LootItemTypes WHERE lootItemTypeId=${sanitize(lootItemTypeId)};` },
    DELETE_AbilitiesByID :          function (abilityId) { return `DELETE FROM Abilities WHERE abilityId=${sanitize(abilityId)};` },
    DELETE_Monsters_AbilitiesByID : function (monsterId, abilityId) { return `DELETE FROM Monsters_Abilities WHERE (monsterId=${sanitize(monsterId)} AND abilityId=${sanitize(abilityId)});` },
    DELETE_Monsters_LootItemsByID : function (monsterId, lootId) { return `DELETE FROM Monsters_LootItems WHERE (monsterId=${sanitize(monsterId)} AND lootId=${sanitize(lootId)});` }
}

module.exports.STATEMENTS = STATEMENTS;
module.exports.sanitize = sanitize;