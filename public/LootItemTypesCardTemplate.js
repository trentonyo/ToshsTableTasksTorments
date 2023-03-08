(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemTypesCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "full static";
},"3":function(container,depth0,helpers,partials,data) {
    return " Equipable\r\n            ";
},"5":function(container,depth0,helpers,partials,data) {
    return " Not Equipable\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <option value=\"1\" selected>Equipable</option>\r\n            <option value=\"0\">Not Equipable</option>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <option value=\"1\">Equipable</option>\r\n            <option value=\"0\" selected>Not Equipable</option>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":38,"column":4}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\"/LootItemTypes/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":35,"column":37},"end":{"line":35,"column":55}}}) : helper)))
    + "\">\r\n            <button class=\"viewDetails\"></button>\r\n        </a>\r\n    ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card loot jsp-loot-medium-backgroundColor jsp-loot-light-backgroundColor jsp-loot-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":119},"end":{"line":1,"column":149}}})) != null ? stack1 : "")
    + "\" id=\"LootItemTypes-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":1,"column":169},"end":{"line":1,"column":187}}}) : helper)))
    + "\">\r\n\r\n    <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"loot\" id=\"LootItemTypes-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":3,"column":125},"end":{"line":3,"column":143}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":28}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div id=\"description_container jsp-loot-dark-textColor\">\r\n        <div class=\"description\" contenteditable=\"false\" id=\"equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":8,"column":71},"end":{"line":8,"column":89}}}) : helper)))
    + "\">\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n        <select class=\"description hidden\"  id=\"edit-equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":13,"column":63},"end":{"line":13,"column":81}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "        </select>\r\n\r\n        <br>\r\n    </div>\r\n\r\n    <div class=\"button_container\">\r\n        <button onClick=\"toggleEditMode(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":27,"column":81},"end":{"line":27,"column":99}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-LootItemTypes-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":27,"column":139},"end":{"line":27,"column":157}}}) : helper)))
    + "\">Edit</button>\r\n        <button onClick=\"updateEntity(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":28,"column":79},"end":{"line":28,"column":97}}}) : helper)))
    + "'} )\" id=\"update-LootItemTypes-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":28,"column":128},"end":{"line":28,"column":146}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n        <button onClick=\"deleteEntity(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":29,"column":79},"end":{"line":29,"column":97}}}) : helper)))
    + "'} )\">Delete</button>\r\n    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suppressDetailsButton") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});
})();