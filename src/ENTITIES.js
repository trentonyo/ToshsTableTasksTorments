let dml = {STATEMENTS: {}}

if (typeof require === 'function') { dml = require('./dmq') }
const ENTITIES = {
    "Quests" : {id: "questId", en_singular: "Quest", en_plural: "Quests", href_view: "/Quests/view", href_new: "/Quests/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllQuests,
        query_SelectById: dml.STATEMENTS.SELECT_QuestWithDetailsByID,
        query_Insert: dml.STATEMENTS.INSERT_Quests,
        query_Update: dml.STATEMENTS.UPDATE_Quests,
        query_Delete: dml.STATEMENTS.DELETE_QuestsByID},
    "QuestGivers" : {id: "questGiverId", en_singular: "Quest Giver", en_plural: "Quest Givers", href_view: "/QuestGivers/view", href_new: "/QuestGivers/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllQuestGivers,
        query_SelectById: dml.STATEMENTS.SELECT_QuestGiversByID,
        query_Insert: dml.STATEMENTS.INSERT_QuestGivers,
        query_Update: dml.STATEMENTS.UPDATE_QuestGivers,
        query_Delete: dml.STATEMENTS.DELETE_QuestGiversByID},
    "Monsters" : {id: "monsterId", en_singular: "Monster", en_plural: "Monsters", href_view: "/Monsters/view", href_new: "/Monsters/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllMonsters,
        query_SelectById: dml.STATEMENTS.SELECT_MonstersByID,
        query_Insert: dml.STATEMENTS.INSERT_Monsters,
        query_Update: dml.STATEMENTS.UPDATE_Monsters,
        query_Delete: dml.STATEMENTS.DELETE_MonstersByID},
    "MonsterTypes" : {id: "monsterTypeId", en_singular: "Monster Type", en_plural: "Monster Types", href_view: "/MonsterTypes/view", href_new: "/MonsterTypes/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllMonsterTypes,
        query_SelectById: dml.STATEMENTS.SELECT_MonsterTypesByID,
        query_Insert: dml.STATEMENTS.INSERT_MonsterTypes,
        query_Update: dml.STATEMENTS.UPDATE_MonsterTypes,
        query_Delete: dml.STATEMENTS.DELETE_MonsterTypesByID},
    "LootItems" : {id: "lootId", en_singular: "Loot Item", en_plural: "Loot Items", href_view: "/LootItems/view", href_new: "/LootItems/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllLootItems,
        query_SelectById: dml.STATEMENTS.SELECT_LootItemsByID,
        query_Insert: dml.STATEMENTS.INSERT_LootItems,
        query_Update: dml.STATEMENTS.UPDATE_LootItems,
        query_Delete: dml.STATEMENTS.DELETE_LootItemsByID},
    "LootItemTypes" : {
        id: "lootItemTypeId", en_singular: "Loot Item Type", en_plural: "Loot Item Types", href_view: "/LootItemTypes/view", href_new: "/LootItemTypes/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllLootItemTypes,
        query_SelectById: dml.STATEMENTS.SELECT_LootItemTypesByID,
        query_Insert: dml.STATEMENTS.INSERT_LootItemTypes,
        query_Update: dml.STATEMENTS.UPDATE_LootItemTypes,
        query_Delete: dml.STATEMENTS.DELETE_LootItemTypesByID},
    "Abilities" : {id: "abilityId", en_singular: "Ability", en_plural: "Abilities", href_view: "/Abilities/view", href_new: "/Abilities/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllAbilities,
        query_SelectById: dml.STATEMENTS.SELECT_AbilitiesByID,
        query_Insert: dml.STATEMENTS.INSERT_Abilities,
        query_Update: dml.STATEMENTS.UPDATE_Abilities,
        query_Delete: dml.STATEMENTS.DELETE_AbilitiesByID},
    "MonstersAbilities" : {id: ["monsterId", "abilityId"], en_singular: "Monster/Ability Pair", en_plural: "Monsters' Abilities", href_view: "/MonstersAbilities/view", href_new: "/MonstersAbilities/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllMonsters_Abilities,
        query_SelectByCompoundId: dml.STATEMENTS.SELECT_Monsters_AbilitiesByID,
        query_Insert: dml.STATEMENTS.INSERT_Monsters_Abilities,
        query_Delete: dml.STATEMENTS.DELETE_Monsters_AbilitiesByID},
    "MonstersLootItems" : {id: ["monsterId", "lootId"], en_singular: "Monster/Loot Item Pair", en_plural: "Monsters' Loot Items", href_view: "/MonstersLootItems/view", href_new: "/MonstersLootItems/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllMonsters_LootItems,
        query_SelectByCompoundId: dml.STATEMENTS.SELECT_Monsters_LootItemsByID,
        query_Insert: dml.STATEMENTS.INSERT_Monsters_LootItems,
        query_Delete: dml.STATEMENTS.DELETE_Monsters_LootItemsByID}
}

if (typeof require === 'function') { module.exports.ENTITIES = ENTITIES }
