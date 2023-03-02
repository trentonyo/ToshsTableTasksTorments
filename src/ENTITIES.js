const ENTITIES = {
    "Quests" : {id: "questId", en_singular: "Quest", en_plural: "Quests"},
    "QuestGivers" : {id: "questGiverId", en_singular: "Quest Giver", en_plural: "Quest Givers"},
    "Monsters" : {id: "monsterId", en_singular: "Monster", en_plural: "Monsters"},
    "MonsterTypes" : {id: "monsterTypeId", en_singular: "Monster Type", en_plural: "Monster Types"},
    "LootItems" : {id: "lootId", en_singular: "Loot Item", en_plural: "Loot Item"},
    "LootItemTypes" : {id: "lootItemTypeId", en_singular: "Loot Item Type", en_plural: "Loot Item Types"},
    "Abilities" : {id: "abilityId", en_singular: "Ability", en_plural: "Abilities"},
    "MonstersAbilities" : {id: ["monsterId", "abilityId"], en_singular: "Monster Ability", en_plural: "Monster Abilities"},
    "MonstersLootItems" : {id: ["monsterId", "lootId"], en_singular: "Monster Loot Item", en_plural: "Monster Loot Items"},
}

module.exports.ENTITIES = ENTITIES