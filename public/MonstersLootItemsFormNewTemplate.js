(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersLootItemsFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card\"><form id=\"add_new_monster_loot_item\">\n    <div class=\"new add title monsterLootItem\">\n        New Monster Loot Item\n    </div>\n    <div class=\"new add background-gradient\">\n        <label for=\"monsterLootItem-monsterName\">Monster Name:</label>\n        <br>\n        <input type=\"text\" id=\"monsterLootItem-monsterName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderMonsterName") || (depth0 != null ? lookupProperty(depth0,"placeholderMonsterName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderMonsterName","hash":{},"data":data,"loc":{"start":{"line":8,"column":73},"end":{"line":8,"column":99}}}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"new add background-gradient\">\n        <label for=\"monsterLootItem-lootItemName\">Loot Item Name:</label>\n        <br>\n        <input type=\"text\" id=\"monsterLootItem-lootItemName\" placeholder=\"Gold Necklace\"></textarea>\n    </div>\n\n    <div class=\"new add background-gradient\">\n        <label for=\"monsterLootItem-dropQuantity\">Drop Quantity:</label>\n        <br>\n        <input type=\"number\" min=\"1\" id=\"monsterLootItem-dropQuantity\" name=\"monsterAbilitydropQuantity\">\n    </div>\n\n    <div class=\"new add background-gradient\">\n        <label for=\"monsterLootItem-dropChance\">Drop Chance (decimal):</label>\n        <br>\n        <input type=\"number\" max=\"1\" min=\"0.001\" step=\"0.001\" id=\"monsterLootItem-dropChance\" name=\"monsterAbility-dropChance\">\n    </div>\n</form>\n\n</div>";
},"useData":true});
})();