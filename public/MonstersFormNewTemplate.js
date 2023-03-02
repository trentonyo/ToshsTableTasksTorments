(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monsterTypeName") || (depth0 != null ? lookupProperty(depth0,"monsterTypeName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monsterTypeName","hash":{},"data":data,"loc":{"start":{"line":23,"column":27},"end":{"line":23,"column":46}}}) : helper)))
    + "\">\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form id=\"add_new_ability\">\r\n    <div class=\"new add title monster\">\r\n        New Monster\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"monster-monsterName\">Monster Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"monster-monsterName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderMonsterName") || (depth0 != null ? lookupProperty(depth0,"placeholderMonsterName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderMonsterName","hash":{},"data":data,"loc":{"start":{"line":8,"column":65},"end":{"line":8,"column":91}}}) : helper)))
    + "\">\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"monster-monsterDesc\">Monster Description:</label>\r\n        <br>\r\n        <textarea id=\"monster-monsterDesc\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"monster-type\">Monster Type:</label>\r\n        <br>\r\n        <input list=\"monster-types-list\" id=\"monster-type\" name=\"monster-type\">\r\n        <datalist id=\"monster-types-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsterTypes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </datalist>\r\n    </div>\r\n\r\n    <div class=\"form_section\">\r\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n            <label for=\"monster-healthPool\">Health Pool:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"monster-healthPool\">\r\n        </div>\r\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n            <label for=\"monster-attack\">Attack:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"monster-attack\">\r\n        </div>\r\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n            <label for=\"monster-defense\">Defense:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"monster-defense\">\r\n        </div>\r\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n            <label for=\"monster-speed\">Speed:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"monster-speed\">\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n\r\n<div id=\"addAbilityForm\" class=\"add ability title add_form jsp-ability-medium-backgroundColor jsp-ability-light-thickerBorderColor\"> + </div>\r\n<div id=\"addLootItemForm\" class=\"add loot title add_form jsp-loot-medium-backgroundColor jsp-loot-light-thickerBorderColor\"> + </div>";
},"useData":true});
})();