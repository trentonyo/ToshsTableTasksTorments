CREATE TABLE QuestGivers (
    questGiverId INT NOT NULL AUTO_INCREMENT,
    questGiverName VARCHAR(255) NOT NULL,
    PRIMARY KEY (questGiverId)
);

CREATE TABLE MonsterTypes (
    monsterTypeId INT NOT NULL AUTO_INCREMENT,
    monsterTypeName VARCHAR(255) NOT NULL,
    PRIMARY KEY (monsterTypeId)
);

CREATE TABLE Monsters (
    monsterId INT NOT NULL AUTO_INCREMENT,
    monsterName VARCHAR(255) NOT NULL,
    monsterDesc VARCHAR(255) NOT NULL,
    monsterTypeId INT NOT NULL,
    healthPool INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    speed INT NOT NULL,
    PRIMARY KEY (monsterId),
    FOREIGN KEY (monsterTypeId) REFERENCES MonsterTypes(monsterTypeId)
);

CREATE TABLE Quests (
    questId INT NOT NULL AUTO_INCREMENT,
    questName VARCHAR(255) NOT NULL,
    questDesc VARCHAR(255) NOT NULL,
    available BOOLEAN NOT NULL DEFAULT TRUE,
    questGiverId INT,
    suggestedLevel INT NOT NULL,
    monsterQty INT NOT NULL,
    monsterId INT NOT NULL,
    rewardXp INT NOT NULL DEFAULT 0,
    rewardGold INT NOT NULL DEFAULT 0,
    PRIMARY KEY (questId),
    FOREIGN KEY (questGiverId) REFERENCES QuestGivers(questGiverId),
    FOREIGN KEY (monsterId) REFERENCES Monsters(monsterId)
);

CREATE TABLE Abilities (
    abilityId INT NOT NULL AUTO_INCREMENT,
    abilityName VARCHAR(255) NOT NULL,
    abilityDesc VARCHAR(255) NOT NULL,
    PRIMARY KEY (abilityId)
);

CREATE TABLE Monsters_Abilities (
    monsterId INT NOT NULL,
    abilityId INT NOT NULL,
    abilityCooldown INT NOT NULL,
    PRIMARY KEY (monsterId, abilityId),
    FOREIGN KEY (monsterId) REFERENCES Monsters(monsterId),
    FOREIGN KEY (abilityId) REFERENCES Abilities(abilityId)
);

CREATE TABLE LootItemTypes (
    lootItemTypeId INT NOT NULL AUTO_INCREMENT,
    lootItemTypeName VARCHAR(255) NOT NULL,
    equipable BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (lootItemTypeId)
);

CREATE TABLE LootItems (
    lootId INT NOT NULL AUTO_INCREMENT,
    lootName VARCHAR(255) NOT NULL,
    lootDesc VARCHAR(255) NOT NULL,
    lootItemTypeId INT NOT NULL,
    lootValue INT NOT NULL DEFAULT 0,
    PRIMARY KEY (lootId),
    FOREIGN KEY (lootItemTypeId) REFERENCES LootItemTypes(lootItemTypeId)
);

CREATE TABLE Monsters_LootItems (
    monsterId INT NOT NULL,
    lootId INT NOT NULL,
    dropQuantity INT NOT NULL DEFAULT 1,
    dropChance DECIMAL NOT NULL,
    PRIMARY KEY (monsterId, lootId),
    FOREIGN KEY (monsterId) REFERENCES Monsters(monsterId),
    FOREIGN KEY (lootId) REFERENCES LootItems(lootId)
);
