let dml = {STATEMENTS: {}}

if (typeof require === 'function') { dml = require('./dml') }
let tmp = "/"
const ENTITIES = {
    "Quests" : {id: "questId", en_singular: "Quest", en_plural: "Quests", href: "/Quests/new", query_SelectAll: dml.STATEMENTS.SELECT_AllQuests, query_SelectById: dml.STATEMENTS.SELECT_QuestWithDetailsByID},
    "QuestGivers" : {id: "questGiverId", en_singular: "Quest Giver", en_plural: "Quest Givers", href: "/QuestGivers/new", query_SelectAll: dml.STATEMENTS.SELECT_AllQuestGivers, query_SelectById: dml.STATEMENTS.SELECT_QuestGiversByID},
    "Monsters" : {id: "monsterId", en_singular: "Monster", en_plural: "Monsters", href: "/Monsters/new", query_SelectAll: dml.STATEMENTS.SELECT_AllMonsters, query_SelectById: dml.STATEMENTS.SELECT_MonstersByID},
    "MonsterTypes" : {id: "monsterTypeId", en_singular: "Monster Type", en_plural: "Monster Types", href: "/MonsterTypes/new", query_SelectAll: dml.STATEMENTS.SELECT_AllMonsterTypes, query_SelectById: dml.STATEMENTS.SELECT_MonsterTypesByID},
    "LootItems" : {id: "lootId", en_singular: "Loot Item", en_plural: "Loot Items", href: "/LootItems/new", query_SelectAll: dml.STATEMENTS.SELECT_AllLootItems, query_SelectById: dml.STATEMENTS.SELECT_LootItemsByID},
    "LootItemTypes" : {
        id: "lootItemTypeId", en_singular: "Loot Item Type", en_plural: "Loot Item Types", href: "/LootItemTypes/new",
        query_SelectAll: dml.STATEMENTS.SELECT_AllLootItemTypes,
        query_SelectById: dml.STATEMENTS.SELECT_LootItemTypesByID,
        query_Update: dml.STATEMENTS.UPDATE_LootItemsTypes,
        query_Delete: dml.STATEMENTS.DELETE_LootItemTypesByID},
    "Abilities" : {id: "abilityId", en_singular: "Ability", en_plural: "Abilities", href: "/Abilities/new", query_SelectAll: dml.STATEMENTS.SELECT_AllAbilities, query_SelectById: dml.STATEMENTS.SELECT_AbilitiesByID},
    "MonstersAbilities" : {id: ["monsterId", "abilityId"], en_singular: "Monster/Ability Pair", en_plural: "Monsters' Abilities", href: "/MonstersAbilities/new", query_SelectAll: dml.STATEMENTS.SELECT_AllMonsters_Abilities, query_SelectByCompoundId: dml.STATEMENTS.SELECT_Monsters_AbilitiesByID},
    "MonstersLootItems" : {id: ["monsterId", "lootId"], en_singular: "Monster/Loot Item Pair", en_plural: "Monsters' Loot Items", href: "/MonstersLootItems/new", query_SelectAll: dml.STATEMENTS.SELECT_AllMonsters_LootItems, query_SelectByCompoundId: dml.STATEMENTS.SELECT_Monsters_LootItemsByID}
}

if (typeof require === 'function') { module.exports.ENTITIES = ENTITIES }
