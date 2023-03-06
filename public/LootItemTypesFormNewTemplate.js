(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_loot_item_type\">\n    <div class=\"new add title lootItemType\">\n        New Loot Item Type\n    </div>\n    <input hidden id=\"entity\" name=\"entity\" value=\"lootItemType\"></input>\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"lootItemType-lootItemTypeName\">Loot Item Type Name:</label>\n        <br>\n        <input name=\"lootItemTypeName\" type=\"text\" id=\"lootItemType-lootItemTypeName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":9,"column":99},"end":{"line":9,"column":114}}}) : helper)))
    + "\">\n    </div>\n        <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"lootItemType-equipable\">Equipable:</label>\n        <br>\n        <select name=\"equipable\" type=\"select\" id=\"lootItemType-equipable\">\n            <option value=\"1\">Yes</option>\n            <option value=\"0\">No</option>\n        </select>\n    </div>\n    <div class=\"new add animate-background-gradient\" value=\"Submit\">\n        <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n</form></div>";
},"useData":true});
})();