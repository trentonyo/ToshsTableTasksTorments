(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestGiversCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/QuestGivers/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":1,"column":43},"end":{"line":1,"column":59}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span class=\"page_subtitle\">- Quest Giver</span>";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":72}}})) != null ? stack1 : "")
    + "\n    <div class=\"card questGiver jsp-quest-light-backgroundColor jsp-quest-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":99},"end":{"line":2,"column":129}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"quest\">\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":30}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":98}}})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":7,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();