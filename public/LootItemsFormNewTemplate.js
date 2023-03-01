(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemsFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":23,"column":31},"end":{"line":23,"column":51}}}) : helper)))
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":53},"end":{"line":23,"column":86}}})) != null ? stack1 : "")
    + "</option>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "Equipable";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card\"><form id=\"add_new_ability\">\r\n    <div class=\"new add title loot\">\r\n        New Loot Item\r\n    </div>\r\n    <div class=\"new>\r\n        <label for=\"lootItem-lootName\">Loot Item Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"lootItem-lootName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderItemName") || (depth0 != null ? lookupProperty(depth0,"placeholderItemName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderItemName","hash":{},"data":data,"loc":{"start":{"line":8,"column":63},"end":{"line":8,"column":86}}}) : helper)))
    + "\">\r\n    </div>\r\n\r\n    <div class=\"new>\r\n        <label for=\"lootItem-lootDesc\">Loot Item Description:</label>\r\n        <br>\r\n        <textarea id=\"lootItem-lootDesc\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"new>\r\n        <label for=\"lootItem-lootItemTypeName\">Loot Item Type:</label>\r\n        <br>\r\n        <input list=\"lootItem-lootItemTypeNames-list\" id=\"lootItem-lootItemTypeName\" name=\"lootItem-lootItemTypeName\">\r\n        <datalist id=\"lootItem-lootItemTypeNames-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lootItemTypes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </datalist>\r\n    </div>\r\n\r\n    <div class=\"new>\r\n        <label for=\"lootItem-lootValue\">Loot Value (gold):</label>\r\n        <br>\r\n        <input type=\"number\" min=\"0\" placeholder=\"1\" id=\"lootItem-lootValue\">\r\n    </div>\r\n</form></div>";
},"useData":true});
})();