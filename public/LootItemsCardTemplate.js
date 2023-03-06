(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['LootItemsCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/LootItems/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lootId") || (depth0 != null ? lookupProperty(depth0,"lootId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lootId","hash":{},"data":data,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":51}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lootValue") || (depth0 != null ? lookupProperty(depth0,"lootValue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lootValue","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":55}}}) : helper)))
    + " gold)";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":64}}})) != null ? stack1 : "")
    + "\n    <div class=\"card loot jsp-loot-light-backgroundColor jsp-loot-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":91},"end":{"line":2,"column":121}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"loot\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootName") || (depth0 != null ? lookupProperty(depth0,"lootName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":24}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":72}}})) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"description jsp-quest-dark-textColor\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"lootDesc") || (depth0 != null ? lookupProperty(depth0,"lootDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootDesc","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":24}}}) : helper)))
    + "\n        </div>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":10,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();