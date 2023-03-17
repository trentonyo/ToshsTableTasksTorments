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
VALUES (:lootName, :lootDesc, :lootItemTypeId, :lootValue);

INSERT INTO Monsters_Abilities (monsterId, abilityId, abilityCooldown)
VALUES (:monsterId, :abilityId, :abilityCooldown);

INSERT INTO Monsters_LootItems (monsterId, lootId, dropQuantity, dropChance)
VALUES (:monsterId, :lootId, :dropQuantity, :dropChance);


-- SELECT * operations to display the entirety of each table and associated names
SELECT * FROM Quests LEFT JOIN QuestGivers ON Quests.questGiverId = QuestGivers.questGiverId;

SELECT * FROM QuestGivers;

SELECT * FROM Monsters INNER JOIN MonsterTypes on Monsters.monsterTypeId = MonsterTypes.monsterTypeId;

SELECT * FROM MonsterTypes;

SELECT * FROM Abilities;

SELECT * FROM LootItemTypes;

SELECT * FROM LootItems INNER JOIN LootItemTypes on LootItems.lootItemTypeId = LootItemTypes.lootItemTypeId;

SELECT * FROM Monsters_Abilities INNER JOIN Monsters ON Monsters_Abilities.monsterId = Monsters.monsterId INNER JOIN Abilities On Monsters_Abilities.abilityId = Abilities.abilityId;

SELECT * FROM Monsters_LootItems INNER JOIN Monsters ON Monsters_LootItems.monsterId = Monsters.monsterId INNER JOIN LootItems On Monsters_LootItems.lootId = LootItems.lootId;

-- SELECT * operations to display specific entities
SELECT * FROM Quests LEFT JOIN QuestGivers ON Quests.questGiverId = QuestGivers.questGiverId WHERE available=true; -- Select available Quests

SELECT * FROM Quests WHERE questId=:questId; -- Select a specific quest by ID

SELECT * FROM QuestGivers WHERE questGiverId=:questGiverId; -- Select a specific quest giver by ID

SELECT * FROM Monsters INNER JOIN MonsterTypes on Monsters.monsterTypeId = MonsterTypes.monsterTypeId WHERE monsterId=:monsterId; -- Select a specific monster by ID with type info

SELECT * FROM MonsterTypes WHERE monsterTypeId=:monsterTypeId; -- Select a specific monster type by ID

SELECT * FROM LootItems WHERE lootId=:lootId; -- Select a specific loot item by ID

SELECT * FROM LootItemTypes WHERE lootItemTypeId=:lootItemTypeId; -- Select a specific loot item type by ID

SELECT * FROM Abilities WHERE abilityId=:abilityId; -- Select a specific ability by ID

SELECT * FROM Monsters_Abilities WHERE (monsterId=:monsterId AND abilityId=:abilityId); -- Select a specific monster/ability pair by compound ID

SELECT * FROM Monsters_LootItems WHERE (monsterId=:monsterId AND lootId=:lootId); -- Select a specific monster/loot item pair by compound ID

SELECT * FROM Quests    -- Select quest with details by ID
                  LEFT JOIN QuestGivers ON Quests.questGiverId = QuestGivers.questGiverId
                  INNER JOIN Monsters ON Quests.monsterId = Monsters.monsterId
                  INNER JOIN MonsterTypes on Monsters.monsterTypeId = MonsterTypes.monsterTypeId
WHERE Quests.questId=:questId;

SELECT * FROM Abilities    -- Select abilities associated with a monster by ID
                  JOIN Monsters_Abilities ON Monsters_Abilities.abilityId = Abilities.abilityId
WHERE Monsters_Abilities.monsterId=:monsterId;

SELECT * FROM LootItems    -- Select loot item with loot type info associated with a monster by ID
                  JOIN Monsters_LootItems ON Monsters_LootItems.lootId = LootItems.lootId
                  INNER JOIN LootItemTypes on LootItems.lootItemTypeId = LootItemTypes.lootItemTypeId
WHERE Monsters_LootItems.monsterId=:monsterId;

-- UPDATE operation to remove the questGiverId from a particular quest based on the quest name
UPDATE Quests
SET questGiverId = NULL
WHERE questId = (SELECT questId FROM Quests WHERE questName = :questName);

-- UPDATE operations for other tables
UPDATE Quests
SET questName=:questName, questDesc=":questDesc", available=:available, questGiverId=:questGiverId, suggestedLevel=:suggestedLevel, monsterQty=:monsterQty, rewardXp=:rewardXp, rewardGold=:rewardGold, monsterId=:monsterId
WHERE questId=:questId;

UPDATE Monsters
SET monsterName=:monsterName, monsterDesc=:monsterDesc, monsterTypeId=:monsterTypeId, healthPool=:healthPool, attack=:attack, defense=:defense, speed=:speed
WHERE monsterId=:monsterId;

UPDATE LootItemTypes
SET lootItemTypeName=:lootItemTypeName, equipable=:equipable
WHERE lootItemTypeId=:lootItemTypeId;

UPDATE Abilities
SET abilityName=:abilityName, abilityDesc=:abilityDesc
WHERE abilityId=:abilityId;

UPDATE LootItems
SET lootName=:lootName, lootDesc=:lootDesc, lootItemTypeId=:lootItemTypeId, lootValue=:lootValue
WHERE lootId=:lootId;

UPDATE MonsterTypes
SET monsterTypeName=:monsterTypeName
WHERE monsterTypeId=:monsterTypeId;

UPDATE QuestGivers
SET questGiverName=:questGiverName
WHERE questGiverId=:questGiverId;

UPDATE Monster_Abilities
SET abilityCooldown = :abilityCooldown
WHERE monsterId = :monsterId AND abilityId = :abilityId;

UPDATE Monsters_LootItems
SET dropQuantity = :dropQuantity, dropChance = :dropChance
WHERE monsterId = :monsterId AND lootId = :lootId;

-- DELETE operations for each table

DELETE FROM Quests WHERE questId=:questId;

DELETE FROM QuestGivers WHERE questGiverId=:questGiverId;

DELETE FROM Monsters WHERE monsterId=:monsterId;

DELETE FROM MonsterTypes WHERE monsterTypeId=:monsterTypeId;

DELETE FROM LootItems WHERE lootId=:lootId;

DELETE FROM LootItemTypes WHERE lootItemTypeId=:lootItemTypeId;

DELETE FROM Abilities WHERE abilityId=:abilityId;

DELETE FROM Monsters_Abilities WHERE (monsterId=:monsterId AND abilityId=:abilityId);

DELETE FROM Monsters_LootItems WHERE (monsterId=:monsterId AND lootId=:lootId);


-- Queries to enable text search dropdowns for Monsters and LootItems
SELECT monsterName FROM Monsters
WHERE monsterName LIKE '%' + :searchTerm + '%'
OR monsterDesc LIKE '%'+ :searchTerm + '%';
LIMIT 10;

SELECT lootName FROM LootItems
WHERE lootName LIKE '%' + :searchTerm + '%'
OR lootDesc LIKE '%'+ :searchTerm + '%';
LIMIT 10;