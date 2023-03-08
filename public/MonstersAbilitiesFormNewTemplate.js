(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersAbilitiesFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":11,"column":27},"end":{"line":11,"column":40}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":11,"column":42},"end":{"line":11,"column":57}}}) : helper)))
    + "</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityId") || (depth0 != null ? lookupProperty(depth0,"abilityId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityId","hash":{},"data":data,"loc":{"start":{"line":22,"column":27},"end":{"line":22,"column":40}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"abilityName") || (depth0 != null ? lookupProperty(depth0,"abilityName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abilityName","hash":{},"data":data,"loc":{"start":{"line":22,"column":42},"end":{"line":22,"column":57}}}) : helper)))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_monster_ability\">\r\n    <div class=\"new add title monsterAbility\">\r\n        Assign Ability to Monster\r\n    </div>\r\n        <input hidden id=\"entity\" name=\"entity\" value=\"monsterAbility\"></input>\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"monsterNames\">Monster:</label>\r\n        <br>\r\n        <select id=\"monsterNames-list\" name=\"monsterId\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsters") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-ability-dark-textColor\" data-jsp-palette=\"ability\">\r\n\r\n        <label for=\"abilityNames\">Ability:</label>\r\n        <br>\r\n        <select id=\"abilityNames-list\" name=\"abilityId\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"abilities") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":23,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"coolabilityCooldowndown\">Cooldown (in seconds, enter 0 for passive):</label>\r\n        <br>\r\n        <input type=\"number\" min=\"0\" id=\"abilityCooldown\" name=\"abilityCooldown\">\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\" value=\"Submit\">\r\n        <button type=\"submit\" value=\"Submit\">Submit</button>\r\n    </div>\r\n</form></div>";
},"useData":true});
})();