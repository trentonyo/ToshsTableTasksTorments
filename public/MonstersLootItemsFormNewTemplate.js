(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersLootItemsFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":12,"column":27},"end":{"line":12,"column":40}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":57}}}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":23,"column":27},"end":{"line":23,"column":37}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootName") || (depth0 != null ? lookupProperty(depth0,"lootName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootName","hash":{},"data":data,"loc":{"start":{"line":23,"column":39},"end":{"line":23,"column":51}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_monster_loot_item\">\n    <div class=\"new add title monsterLootItem\">\n        Assign Loot Item to Monster\n    </div>\n    <input hidden id=\"entity\" name=\"entity\" value=\"monsterLootItem\"></input>\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n\n        <label for=\"monsterId\">Monster:</label>\n        <br>\n        <select id=\"monsterNames-list\" name=\"monsterId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsters") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":13,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n\n        <label for=\"lootItemName\">Loot Item:</label>\n        <br>\n        <select id=\"lootItemNames-list\" name=\"lootId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lootItems") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"dropQuantity\">Drop Quantity:</label>\n        <br>\n        <input type=\"number\" min=\"1\" id=\"dropQuantity\" name=\"dropQuantity\">\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-loot-dark-textColor\" data-jsp-palette=\"loot\">\n        <label for=\"dropChance\">Drop Chance (decimal):</label>\n        <br>\n        <input type=\"number\" max=\"1\" min=\"0.000001\" step=\"0.000001\" value=\"1\" id=\"dropChance\" name=\"dropChance\">\n    </div>\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\" value=\"Submit\">\n        <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n</form></div>";
},"useData":true});
})();