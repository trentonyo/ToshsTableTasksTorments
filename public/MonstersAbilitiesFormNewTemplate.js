(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersAbilitiesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form id=\"add_new_monster_ability\">\r\n    <div class=\"new add title monsterAbility\">\r\n        Assign Ability to Monster\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"monsterAbility-monsterName\">Monster Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"monsterAbility-monsterName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderMonsterName") || (depth0 != null ? lookupProperty(depth0,"placeholderMonsterName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderMonsterName","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":98}}}) : helper)))
    + "\">\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-ability-dark-textColor\" data-jsp-palette=\"ability\">\r\n        <label for=\"monsterAbility-abilityName\">Ability Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"monsterAbility-abilityName\" placeholder=\"Fireball\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\r\n        <label for=\"monsterAbility-Cooldown\">Cooldown (in seconds, enter 0 for passive):</label>\r\n        <br>\r\n        <input type=\"number\" id=\"monsterAbility-Cooldown\" name=\"monsterAbility-Cooldown\">\r\n    </div>\r\n</form>\r\n\r\n</div>";
},"useData":true});
})();