(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/Quests/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":49}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    return "(!)";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "- "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":10,"column":30},"end":{"line":10,"column":46}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    return "- Unknown";
},"11":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":62}}})) != null ? stack1 : "")
    + "\r\n<div class=\"card quest "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":23},"end":{"line":2,"column":54}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"title\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"questName") || (depth0 != null ? lookupProperty(depth0,"questName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questName","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":21}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"available") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":49}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n    <div class=\"description\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"questDesc") || (depth0 != null ? lookupProperty(depth0,"questDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questDesc","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":21}}}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"giver\">\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":70}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":13,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();