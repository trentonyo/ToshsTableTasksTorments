(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemsFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":23,"column":31},"end":{"line":23,"column":49}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":23,"column":51},"end":{"line":23,"column":71}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":71},"end":{"line":23,"column":107}}})) != null ? stack1 : "")
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " (Equipable)";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_loot_item\">\n    <div class=\"new add title loot\">\n        New Loot Item\n    </div>\n    <input hidden id=\"entity\" name=\"entity\" value=\"lootItem\"></input>\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"lootName\">Loot Item Name:</label>\n        <br>\n        <input type=\"text\" id=\"lootName\" name=\"lootName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderItemName") || (depth0 != null ? lookupProperty(depth0,"placeholderItemName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderItemName","hash":{},"data":data,"loc":{"start":{"line":9,"column":70},"end":{"line":9,"column":93}}}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"lootDesc\">Loot Item Description:</label>\n        <br>\n        <textarea id=\"lootDesc\" name=\"lootDesc\"></textarea>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"lootItemTypeName\">Loot Item Type:</label>\n        <br>\n        <select id=\"lootItemTypeNames-list\" name=\"lootItemTypeId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lootItemTypes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"lootValue\">Loot Value (gold):</label>\n        <br>\n        <input type=\"number\" min=\"0\" placeholder=\"1\" id=\"lootValue\" name=\"lootValue\">\n    </div>\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\" value=\"Submit\">\n        <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n</form></div>";
},"useData":true});
})();