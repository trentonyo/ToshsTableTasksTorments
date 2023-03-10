(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_loot_item_type\">\r\n    <div class=\"new add title lootItemType\">\r\n        New Loot Item Type\r\n    </div>\r\n    <input hidden id=\"entity\" name=\"entity\" value=\"lootItemType\"></input>\r\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\r\n        <label for=\"lootItemType-lootItemTypeName\">Loot Item Type Name:</label>\r\n        <br>\r\n        <input name=\"lootItemTypeName\" type=\"text\" id=\"lootItemType-lootItemTypeName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":9,"column":99},"end":{"line":9,"column":114}}}) : helper)))
    + "\">\r\n    </div>\r\n        <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\r\n        <label for=\"lootItemType-equipable\">Equipable:</label>\r\n        <br>\r\n        <select name=\"equipable\" type=\"select\" id=\"lootItemType-equipable\">\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"new add animate-background-gradient\" value=\"Submit\">\r\n        <button type=\"submit\" value=\"Submit\">Submit</button>\r\n    </div>\r\n</form></div>";
},"useData":true});
})();