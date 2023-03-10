(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemsCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "full static";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"subtitle nowrap\" id=\"LootItems-Subtitle-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":8,"column":68},"end":{"line":8,"column":78}}}) : helper)))
    + "\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"lootValue") || (depth0 != null ? lookupProperty(depth0,"lootValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootValue","hash":{},"data":data,"loc":{"start":{"line":8,"column":81},"end":{"line":8,"column":94}}}) : helper)))
    + " gold)</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":21,"column":35},"end":{"line":21,"column":53}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":21,"column":55},"end":{"line":21,"column":75}}}) : helper)))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stats\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"dropQuantity") || (depth0 != null ? lookupProperty(depth0,"dropQuantity") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dropQuantity","hash":{},"data":data,"loc":{"start":{"line":26,"column":48},"end":{"line":26,"column":64}}}) : helper)))
    + " Dropped | "
    + alias3((lookupProperty(helpers,"localizeChance")||(depth0 && lookupProperty(depth0,"localizeChance"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"dropChance") : depth0),{"name":"localizeChance","hash":{},"data":data,"loc":{"start":{"line":26,"column":75},"end":{"line":26,"column":104}}}))
    + "</div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":43,"column":8}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <a href=\"/LootItems/view/"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":35,"column":37},"end":{"line":35,"column":47}}}) : helper)))
    + "\">\r\n                <button class=\"viewDetails\"></button>\r\n            </a>\r\n            <div class=\"button_container\">\r\n                <button onClick=\"toggleEditMode(this, {'entity': 'LootItems', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":39,"column":85},"end":{"line":39,"column":95}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-LootItems-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":39,"column":131},"end":{"line":39,"column":141}}}) : helper)))
    + "\">Edit</button>\r\n                <button onClick=\"updateEntity(this, {'entity': 'LootItems', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":40,"column":83},"end":{"line":40,"column":93}}}) : helper)))
    + "'} )\" id=\"update-LootItems-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":40,"column":120},"end":{"line":40,"column":130}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n                <button onClick=\"deleteEntity(this, {'entity': 'LootItems', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":41,"column":83},"end":{"line":41,"column":93}}}) : helper)))
    + "'} )\">Delete</button>\r\n            </div>\r\n        ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"card loot jsp-loot-light-backgroundColor jsp-loot-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":91},"end":{"line":1,"column":121}}})) != null ? stack1 : "")
    + "\" id=\"LootItems-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":1,"column":137},"end":{"line":1,"column":147}}}) : helper)))
    + "\">\r\n        <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"loot\">\r\n            <div id=\"LootItems-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":46}}}) : helper)))
    + "\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootName") || (depth0 != null ? lookupProperty(depth0,"lootName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootName","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":28}}}) : helper)))
    + "\r\n            </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"hidden description jsp-quest-dark-textColor\" data-jsp-palette=\"loot\" id=\"LootItems-Edit-Value-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":11,"column":114},"end":{"line":11,"column":124}}}) : helper)))
    + "\">\r\n            <label for=\"editValue\">New Value: </label>\r\n            <input name=\"editValue\" id=\"editValue-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":60}}}) : helper)))
    + "\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"lootValue") || (depth0 != null ? lookupProperty(depth0,"lootValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootValue","hash":{},"data":data,"loc":{"start":{"line":13,"column":91},"end":{"line":13,"column":104}}}) : helper)))
    + "\">\r\n        </div>\r\n        <div class=\"stats description\" id=\"LootItems-ItemType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":15,"column":62},"end":{"line":15,"column":72}}}) : helper)))
    + "\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeName") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeName","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":32}}}) : helper)))
    + "\r\n        </div>\r\n        <div class=\"hidden description jsp-quest-dark-textColor\" id=\"LootItems-lootItemType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":18,"column":92},"end":{"line":18,"column":102}}}) : helper)))
    + "\">\r\n            <select id=\"lootTypes-list-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":19,"column":39},"end":{"line":19,"column":49}}}) : helper)))
    + "\" name=\"lootItemTypeId\" data-current=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"lootItemTypeId") || (depth0 != null ? lookupProperty(depth0,"lootItemTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootItemTypeId","hash":{},"data":data,"loc":{"start":{"line":19,"column":87},"end":{"line":19,"column":105}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"lootTypesList") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":22,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n        </div>\r\n        <div class=\"description jsp-quest-dark-textColor\" id=\"LootItems-lootDesc-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":25,"column":81},"end":{"line":25,"column":91}}}) : helper)))
    + "\">\r\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsterId") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":117}}})) != null ? stack1 : "")
    + "\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootDesc") || (depth0 != null ? lookupProperty(depth0,"lootDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootDesc","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":24}}}) : helper)))
    + "\r\n            <br>\r\n            <br>\r\n        </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suppressDetailsButton") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":43,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n";
},"useData":true});
})();