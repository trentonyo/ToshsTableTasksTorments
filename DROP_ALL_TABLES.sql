# DELETES all tables

SET foreign_key_checks = 0;
DROP TABLE QuestGivers, MonsterTypes, Monsters, Quests, Abilities, Monsters_Abilities, LootItemTypes, LootItems, Monsters_LootItems;
