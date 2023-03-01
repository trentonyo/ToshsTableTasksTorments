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
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card loot jsp-loot-medium-backgroundColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":84}}})) != null ? stack1 : "")
    + "\" id=\"LootItemTypeId-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":1,"column":105},"end":{"line":1,"column":123}}}) : helper)))
    + "\">\r\n    <div class=\"title jsp-loot-dark-backgroundColor\" contenteditable=\"false\" id=\"lootItemTypeName-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":2,"column":98},"end":{"line":2,"column":116}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":28}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div id=\"description_container\">\r\n        <div class=\"description\" contenteditable=\"false\" id=\"equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":7,"column":71},"end":{"line":7,"column":89}}}) : helper)))
    + "\">\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n<!--        <select class=\"description\" hidden id=\"edit-equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":12,"column":66},"end":{"line":12,"column":84}}}) : helper)))
    + "\">-->\r\n        <select class=\"description hidden\"  id=\"edit-equipable-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":13,"column":63},"end":{"line":13,"column":81}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"equipable") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "        </select>\r\n    </div>\r\n\r\n    <div class=\"button_container\">\r\n        <button onClick=\"toggleEditMode(this, "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":25,"column":46},"end":{"line":25,"column":64}}}) : helper)))
    + ")\" id=\"toggleEdit-lootItemType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":25,"column":95},"end":{"line":25,"column":113}}}) : helper)))
    + "\">Edit</button>\r\n        <button onClick=\"updateEntity(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":26,"column":79},"end":{"line":26,"column":97}}}) : helper)))
    + "'} )\" id=\"update-lootItemType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":26,"column":127},"end":{"line":26,"column":145}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n        <button onClick=\"deleteEntity(this, {'entity': 'LootItemTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":27,"column":79},"end":{"line":27,"column":97}}}) : helper)))
    + "'} )\">Delete</button>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();