(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemTypesCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "full static";
},"3":function(container,depth0,helpers,partials,data) {
    return " Equipable\n            ";
},"5":function(container,depth0,helpers,partials,data) {
    return " Not Equipable\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <option value=\"1\" selected>Equipable</option>\n            <option value=\"0\">Not Equipable</option>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <option value=\"1\">Equipable</option>\n            <option value=\"0\" selected>Not Equipable</option>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/LootItemTypes/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":31,"column":49},"end":{"line":31,"column":67}}}) : helper)))
    + "\">\n        <button class=\"viewDetails\"></button>\n    </a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card loot jsp-loot-medium-backgroundColor jsp-loot-light-backgroundColor jsp-loot-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":119},"end":{"line":1,"column":149}}})) != null ? stack1 : "")
    + "\" id=\"LootItemTypeId-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":1,"column":170},"end":{"line":1,"column":188}}}) : helper)))
    + "\">\n\n    <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"loot\" id=\"LootItemTypes-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":3,"column":125},"end":{"line":3,"column":143}}}) : helper)))
    + "\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":28}}}) : helper)))
    + "\n    </div>\n\n    <div id=\"description_container jsp-loot-dark-textColor\">\n        <div class=\"description\" contenteditable=\"false\" id=\"equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":8,"column":71},"end":{"line":8,"column":89}}}) : helper)))
    + "\">\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n<!--        <select class=\"description\" hidden id=\"edit-equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":13,"column":66},"end":{"line":13,"column":84}}}) : helper)))
    + "\">-->\n        <select class=\"description hidden\"  id=\"edit-equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":14,"column":63},"end":{"line":14,"column":81}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":21,"column":19}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n\n    <div class=\"button_container\">\n        <button onClick=\"toggleEditMode(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":26,"column":81},"end":{"line":26,"column":99}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-lootItemType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":26,"column":138},"end":{"line":26,"column":156}}}) : helper)))
    + "\">Edit</button>\n        <button onClick=\"updateEntity(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":27,"column":79},"end":{"line":27,"column":97}}}) : helper)))
    + "'} )\" id=\"update-lootItemType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":27,"column":127},"end":{"line":27,"column":145}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\n        <button onClick=\"deleteEntity(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":28,"column":79},"end":{"line":28,"column":97}}}) : helper)))
    + "'} )\">Delete</button>\n    </div>\n\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});
})();