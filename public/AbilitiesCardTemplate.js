(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AbilitiesCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "full static";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stats\">"
    + ((stack1 = (lookupProperty(helpers,"ifIsPassive")||(depth0 && lookupProperty(depth0,"ifIsPassive"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"abilityCooldown") : depth0),{"name":"ifIsPassive","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":6,"column":44},"end":{"line":10,"column":24}}})) != null ? stack1 : "")
    + "</div>";
},"4":function(container,depth0,helpers,partials,data) {
    return "\r\n            Passive\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"abilityCooldown") || (depth0 != null ? lookupProperty(depth0,"abilityCooldown") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"abilityCooldown","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":31}}}) : helper)))
    + "s Cooldown\r\n        ";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":25,"column":4}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"button_container\">\r\n            <button onClick=\"toggleEditMode(this, {'entity': 'Abilities', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":21,"column":81},"end":{"line":21,"column":94}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-Abilities-"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":21,"column":130},"end":{"line":21,"column":143}}}) : helper)))
    + "\">Edit</button>\r\n            <button onClick=\"updateEntity(this, {'entity': 'Abilities', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":22,"column":79},"end":{"line":22,"column":92}}}) : helper)))
    + "'} )\" id=\"update-Abilities-"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":22,"column":119},"end":{"line":22,"column":132}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n            <button onClick=\"deleteEntity(this, {'entity': 'Abilities', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":23,"column":79},"end":{"line":23,"column":92}}}) : helper)))
    + "'} )\">Delete</button>\r\n        </div>\r\n    ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card ability jsp-ability-light-backgroundColor jsp-ability-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":96},"end":{"line":1,"column":126}}})) != null ? stack1 : "")
    + "\" id=\"Abilities-"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":1,"column":142},"end":{"line":1,"column":155}}}) : helper)))
    + "\">\r\n    <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"ability\" id=\"Abilities-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":2,"column":124},"end":{"line":2,"column":137}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityName") || (depth0 != null ? lookupProperty(depth0,"abilityName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityName","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":23}}}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"description jsp-ability-dark-textColor\" id=\"Abilities-abilityDesc-"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":5,"column":82},"end":{"line":5,"column":95}}}) : helper)))
    + "\">\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsterId") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":10,"column":37}}})) != null ? stack1 : "")
    + "\r\n\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityDesc") || (depth0 != null ? lookupProperty(depth0,"abilityDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityDesc","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":23}}}) : helper)))
    + "\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suppressDetailsButton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
})();