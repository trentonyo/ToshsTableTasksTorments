(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":23,"column":27},"end":{"line":23,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeName") || (depth0 != null ? lookupProperty(depth0,"monsterTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeName","hash":{},"data":data,"loc":{"start":{"line":23,"column":46},"end":{"line":23,"column":65}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_monster\">\n    <div class=\"new add title monster\">\n        New Monster\n    </div>\n    <input hidden id=\"entity\" name=\"entity\" value=\"monster\"></input>\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n        <label for=\"monsterName\">Monster Name:</label>\n        <br>\n        <input type=\"text\" id=\"monsterName\" name=\"monsterName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderMonsterName") || (depth0 != null ? lookupProperty(depth0,"placeholderMonsterName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderMonsterName","hash":{},"data":data,"loc":{"start":{"line":9,"column":76},"end":{"line":9,"column":102}}}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n        <label for=\"monsterDesc\">Monster Description:</label>\n        <br>\n        <textarea id=\"monsterDesc\" name=\"monsterDesc\"></textarea>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n        <label for=\"monsterTypeId\">Monster Type:</label>\n        <br>\n        <select id=\"monster-types-list\" name=\"monsterTypeId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsterTypes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":24,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n\n    <div class=\"form_section\">\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n            <label for=\"healthPool\">Health Pool:</label>\n            <br>\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"healthPool\" name=\"healthPool\">\n        </div>\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n            <label for=\"attack\">Attack:</label>\n            <br>\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"attack\" name=\"attack\">\n        </div>\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n            <label for=\"defense\">Defense:</label>\n            <br>\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"defense\" name=\"defense\">\n        </div>\n        <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n            <label for=\"speed\">Speed:</label>\n            <br>\n            <input type=\"number\" min=\"1\" max=\"100\" placeholder=\"1\" id=\"speed\" name=\"speed\">\n        </div>\n    </div>\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\" value=\"Submit\">\n        <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n</form>\n\n</div>\n\n<div id=\"addAbilityForm\" class=\"add ability title add_form jsp-ability-medium-backgroundColor jsp-ability-light-thickerBorderColor\"> + </div>\n<div id=\"addLootItemForm\" class=\"add loot title add_form jsp-loot-medium-backgroundColor jsp-loot-light-thickerBorderColor\"> + </div>";
},"useData":true});
})();