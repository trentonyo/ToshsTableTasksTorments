-- Data manipulation queries for Project Step 3, Group 96
-- Trenton Young, Joshua Williams

-- All variable names are preceded by a colon, e.g. ':variableName'

-- INSERT operations to add individual entries to each table
INSERT INTO Quests (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold)
VALUES (:questName, :questDesc, :available, :questGiverId, :suggestedLevel, :monsterQty, :monsterId, :rewardXp, :rewardGold);

INSERT INTO QuestGivers (questGiverName)
VALUES (:questGiverName);

INSERT INTO Monsters (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed)
VALUES (:monsterName, :monsterDesc, :monsterTypeId, :healthPool, :attack, :defense, :speed);

INSERT INTO MonsterTypes (monsterTypeName)
VALUES (:monsterTypeName);

INSERT INTO Abilities (abilityName, abilityDesc)
VALUES (:abilityName, :abilityDesc);

INSERT INTO LootItemTypes (lootItemTypeName, equipable)
VALUES (:lootItemTypeName, :equipable);

INSERT INTO LootItems (lootName, lootDesc, lootItemTypeId, lootValue)
VALUES (:lootName, :lootDesc, (SELECT lootItemTypeId FROM LootItemTypes WHERE lootItemTypeName = :lootItemTypeName), :lootValue);

INSERT INTO Monsters_Abilities (monsterId, abilityId, abilityCooldown)
VALUES ((SELECT monsterId FROM Monsters WHERE monsterName = :monsterName), (SELECT abilityId FROM Abilities WHERE abilityName = :abilityName), :abilityCooldown);

INSERT INTO Monsters_LootItems (monsterId, lootId, dropQuantity, dropChance)
VALUES ((SELECT monsterId FROM Monsters WHERE monsterName = :monsterName), (SELECT lootId FROM LootItems WHERE lootName = :lootName), :dropQuantity, :dropChance);

-- SELECT * operations to display the entirety of each table
SELECT * FROM Quests;

SELECT * FROM QuestGivers;

SELECT * FROM Monsters;

SELECT * FROM MonsterTypes;

SELECT * FROM Abilities;

SELECT * FROM LootItemTypes;

SELECT * FROM LootItems;

SELECT * FROM Monsters_Abilities;

SELECT * FROM Monsters_LootItems;

-- UPDATE operation to remove the questGiverId from a particular quest based on the quest name
UPDATE Quests
SET questGiverId = NULL
WHERE questId = (SELECT questId FROM Quests WHERE questName = :questName);

-- DELETE operation to remove a particular ability from a particular monster, based on name
DELETE FROM Monsters_Abilities
WHERE monsterId = (SELECT monsterId FROM Monsters WHERE monsterName = :monsterName)
AND abilityId = (SELECT abilityId FROM Abilities WHERE abilityName = :abilityName);

-- DELETE operation to remove a particular loot item from a particular monster, based on name
DELETE FROM Monsters_LootItems
WHERE monsterId = (SELECT monsterId FROM Monsters WHERE monsterName = :monsterName)
AND lootId = (SELECT lootId FROM LootItems WHERE lootName = :lootName);

-- Queries to enable text search dropdowns for Monsters and LootItems
SELECT monsterName FROM Monsters
WHERE monsterName LIKE '%' + :searchTerm + '%'
OR monsterDesc LIKE '%'+ :searchTerm + '%';
LIMIT 10;

SELECT lootName FROM LootItems
WHERE lootName LIKE '%' + :searchTerm + '%'
OR lootDesc LIKE '%'+ :searchTerm + '%';
LIMIT 10;