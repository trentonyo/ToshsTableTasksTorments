(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_loot_item_type\">\r\n    <div class=\"new add title lootItemType\">\r\n        New Loot Item Type\r\n    </div>\r\n    <div class=\"new>\r\n        <label for=\"lootItemType-lootItemTypeName\">Loot Item Type Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"monsterType-monsterTypeName\" placeholder=\"Currency\">\r\n    </div>\r\n        <div class=\"new>\r\n        <label for=\"lootItemType-equipable\">Equipable:</label>\r\n        <br>\r\n        <input type=\"number\" min=\"0\" max=\"1\" placeholder=\"0\" id=\"lootItemType-equipable\">\r\n    </div>\r\n</form></div>";
},"useData":true});
})();