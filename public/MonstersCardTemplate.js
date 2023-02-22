(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/Monsters/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":53}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stats\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"attack") || (depth0 != null ? lookupProperty(depth0,"attack") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attack","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":57}}}) : helper)))
    + " ATK | "
    + alias4(((helper = (helper = lookupProperty(helpers,"defense") || (depth0 != null ? lookupProperty(depth0,"defense") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defense","hash":{},"data":data,"loc":{"start":{"line":7,"column":64},"end":{"line":7,"column":75}}}) : helper)))
    + " DEF | "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":7,"column":82},"end":{"line":7,"column":91}}}) : helper)))
    + " SPD</div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":66}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"card monster "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":60}}})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"title\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":27}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"healthPool") || (depth0 != null ? lookupProperty(depth0,"healthPool") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"healthPool","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":43}}}) : helper)))
    + " hp)\r\n        </div>\r\n        <div class=\"description\">\r\n            "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":112}}})) != null ? stack1 : "")
    + "\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterDesc") || (depth0 != null ? lookupProperty(depth0,"monsterDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterDesc","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":27}}}) : helper)))
    + "\r\n        </div>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":11,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();