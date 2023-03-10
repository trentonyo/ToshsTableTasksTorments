(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersLootItemsCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/MonstersLootItems/view/"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":1,"column":49},"end":{"line":1,"column":62}}}) : helper)))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":73}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stats\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"dropQuantity") || (depth0 != null ? lookupProperty(depth0,"dropQuantity") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dropQuantity","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":63}}}) : helper)))
    + " Dropped | "
    + alias3((lookupProperty(helpers,"localizeChance")||(depth0 && lookupProperty(depth0,"localizeChance"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"dropChance") : depth0),{"name":"localizeChance","hash":{},"data":data,"loc":{"start":{"line":7,"column":74},"end":{"line":7,"column":103}}}))
    + "</div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":86}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"card loot jsp-loot-light-backgroundColor jsp-loot-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":91},"end":{"line":2,"column":121}}})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"monster\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":27}}}) : helper)))
    + "\r\n        </div>\r\n        <div class=\"description jsp-loot-dark-textColor\">\r\n            "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":120}}})) != null ? stack1 : "")
    + "\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootName") || (depth0 != null ? lookupProperty(depth0,"lootName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootName","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":24}}}) : helper)))
    + "\r\n\r\n        </div>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":12,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();