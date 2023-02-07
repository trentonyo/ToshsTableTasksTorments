# CREATE Statements below

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
    monsterDesc TEXT NOT NULL,
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
    questDesc TEXT NOT NULL,
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
    abilityDesc TEXT NOT NULL,
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
    lootDesc TEXT NOT NULL,
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

# INSERT Statements below
INSERT INTO QuestGivers (questGiverName) VALUES
    ('Tosh'),
    ('Noble'),
    ('Priest'),
    ('Blacksmith');
INSERT INTO MonsterTypes (monsterTypeName) VALUES
    ('Beast'),
    ('Undead'),
    ('Fey'),
    ('Humanoid'),
    ('Insectoid');
INSERT INTO LootItemTypes (lootItemTypeName, equipable) VALUES
    ('Resource',    FALSE),
    ('Jewelry',     TRUE),
    ('Tool',        TRUE),
    ('Weapon',      TRUE),
    ('Armor',       TRUE),
    ('Junk',        FALSE);

INSERT INTO Quests (questName, questDesc, available, questGiverId, suggestedLevel, monsterQty, monsterId, rewardXp, rewardGold) VALUES
    ('Clear Cave',      'There\'s something in the old gemstone mine that\'s driven all the miners away, see if you can clear it out.',                                     TRUE,   (SELECT questGiverId FROM QuestGivers WHERE questGiverName='Tosh'),         1,  5,  1,  100,    100),
    ('Liberate Hamlet', 'Our village has been overtaken by a ghoulish haint, please help us!',                                                                              TRUE,   (SELECT questGiverId FROM QuestGivers WHERE questGiverName='Priest'),       5,  2,  2,  500,    200),
    ('Evict Hovel',     'I intend to expand my operation, but I shall need an outpost in the swamp. Brush the cobwebs out of the corners, will you?',                       TRUE,   (SELECT questGiverId FROM QuestGivers WHERE questGiverName='Noble'),        5,  3,  3,  300,    500),
    ('Battle Giant',    'Ever tussle with a giant before? Want to earn those bragging rights?',                                                                             FALSE,  (SELECT questGiverId FROM QuestGivers WHERE questGiverName='Blacksmith'),   10, 1,  4,  500,    200),
    ('Harvest Farm',    'The cornfield is being harassed every night, and nobody is around to shoo the buggers away!',                                                      TRUE,   NULL,                                                                       2,  3,  5,  300,    0),
    ('Defend Castle',   'There are a couple wretched giants laying siege to our castle walls, go along with the castle guard to turn them back in the name of the crown.',  TRUE,   (SELECT questGiverId FROM QuestGivers WHERE questGiverName='Noble'),        15, 2,  4,  700,    1000);

INSERT INTO Monsters (monsterName, monsterDesc, monsterTypeId, healthPool, attack, defense, speed) VALUES
    ('Slime',           'The living, hostile gel. Slow-moving, but inexorable while it remains intact.',                                                (SELECT monsterTypeId FROM MonsterTypes WHERE monsterTypeName='Beast'),     10,     5,  1,  1),
    ('Specter',         'The vengeful spirit. Only visible in the dark, and dangerous in numbers.',                                                     (SELECT monsterTypeId FROM MonsterTypes WHERE monsterTypeName='Undead'),    10,     1,  5,  5),
    ('Harpy',           'The winged hags. More territorial than hostile, and often gather to torment the guilty.',                                      (SELECT monsterTypeId FROM MonsterTypes WHERE monsterTypeName='Fey'),       25,     5,  7,  10),
    ('Giant',           'The big ones. Though thought to be rather dim, these loners tend to the same needs as their smaller humanoid counterparts.',   (SELECT monsterTypeId FROM MonsterTypes WHERE monsterTypeName='Humanoid'),  100,    10, 10, 3),
    ('Great Spider',    'The horror weavers. Very large and territorial spiders, they prey on anything that happens into their web.',                   (SELECT monsterTypeId FROM MonsterTypes WHERE monsterTypeName='Insectoid'), 50,     3,  3,  5);

INSERT INTO LootItems (lootName, lootDesc, lootItemTypeId, lootValue) VALUES
    ('Shimmering Gel',  'A lump of gel that shimmers in the light, can be used for potion-making.',                         (SELECT lootItemTypeId FROM LootItemTypes WHERE lootItemTypeName='Resource'),   15),
    ('Gold Chain',      'A necklace chain wrought of gold, in fine condition.',                                             (SELECT lootItemTypeId FROM LootItemTypes WHERE lootItemTypeName='Jewelry'),    200),
    ('Tough Feather',   'A feather that is stout and thick, can be used in crafting.',                                      (SELECT lootItemTypeId FROM LootItemTypes WHERE lootItemTypeName='Resource'),   30),
    ('Giant Button',    'A large wooden button with a leather strap run through the buttonholes, can be used as a shield.', (SELECT lootItemTypeId FROM LootItemTypes WHERE lootItemTypeName='Armor'),      200),
    ('Iron Arrow',      'A single arrow with an iron head and simply fletching.',                                           (SELECT lootItemTypeId FROM LootItemTypes WHERE lootItemTypeName='Weapon'),     2);

INSERT INTO Abilities (abilityName, abilityDesc) VALUES
    ('Acid Spit',           'The user expels a corrosive ball of acid at their target.'),
    ('Piercing Shriek',     'The user releases a wail that shakes the target\'s defenses.'),
    ('Flame Breath',        'The user flings a stream of fire at their target.'),
    ('Incorporeal',         'The user cannot be physically touched.'),
    ('Thick Hide',          'The user resists attacks.'),
    ('Binding Web',         'The user constricts their target in a sticky web.'),
    ('Wall Climb',          'The user can scale vertical surfaces.');

INSERT INTO Monsters_Abilities (monsterId, abilityId, abilityCooldown) VALUES
    ((SELECT monsterId FROM Monsters WHERE monsterName='Slime'),            (SELECT abilityId FROM Abilities WHERE abilityName='Acid Spit'),            5),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Great Spider'),     (SELECT abilityId FROM Abilities WHERE abilityName='Wall Climb'),           0),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Great Spider'),     (SELECT abilityId FROM Abilities WHERE abilityName='Binding Web'),          45),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Specter'),          (SELECT abilityId FROM Abilities WHERE abilityName='Piercing Shriek'),      60),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Specter'),          (SELECT abilityId FROM Abilities WHERE abilityName='Incorporeal'),          0),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Giant'),            (SELECT abilityId FROM Abilities WHERE abilityName='Thick Hide'),           0);

INSERT INTO Monsters_LootItems (monsterId, lootId, dropQuantity, dropChance) VALUES
    ((SELECT monsterId FROM Monsters WHERE monsterName='Slime'),    (SELECT lootId FROM LootItems WHERE lootName='Shimmering Gel'),     1,  0.25),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Harpy'),    (SELECT lootId FROM LootItems WHERE lootName='Gold Chain'),         1,  0.1),
    ((SELECT monsterId FROM Monsters WHERE monsterName='Harpy'),    (SELECT lootId FROM LootItems WHERE lootName='Tough Feather'),      3,  0.5);

