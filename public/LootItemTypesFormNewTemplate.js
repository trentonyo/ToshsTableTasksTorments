(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_loot_item_type\">\n    <div class=\"new add title lootItemType\">\n        New Loot Item Type\n    </div>\n    <div class=\"new add background-gradient\">\n        <label for=\"lootItemType-lootItemTypeName\">Loot Item Type Name:</label>\n        <br>\n        <input type=\"text\" id=\"monsterType-monsterTypeName\" placeholder=\"Currency\">\n    </div>\n        <div class=\"new add background-gradient\">\n        <label for=\"lootItemType-equipable\">Equipable:</label>\n        <br>\n        <input type=\"number\" min=\"0\" max=\"1\" placeholder=\"0\" id=\"lootItemType-equipable\">\n    </div>\n</form></div>";
},"useData":true});
})();