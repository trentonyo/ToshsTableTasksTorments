(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersAbilitiesCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/MonstersAbilities/view/"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":1,"column":49},"end":{"line":1,"column":62}}}) : helper)))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":76}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    return "                Passive\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"abilityCooldown") || (depth0 != null ? lookupProperty(depth0,"abilityCooldown") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"abilityCooldown","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":35}}}) : helper)))
    + "s Cooldown\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":89}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"card ability jsp-ability-light-backgroundColor jsp-ability-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":100},"end":{"line":2,"column":130}}})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"monster\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":27}}}) : helper)))
    + "\r\n        </div>\r\n        <div class=\"description jsp-ability-dark-textColor\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityName") || (depth0 != null ? lookupProperty(depth0,"abilityName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityName","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":27}}}) : helper)))
    + " -\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifIsPassive")||(depth0 && lookupProperty(depth0,"ifIsPassive"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"abilityCooldown") : depth0),{"name":"ifIsPassive","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":13,"column":28}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();