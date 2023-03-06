(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonsterTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_monster_type\">\n    <div class=\"new add title monsterType\">\n        New Monster Type\n    </div>\n    <input hidden id=\"entity\" name=\"entity\" value=\"monsterType\"></input>\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\">\n        <label for=\"monsterTypeName\">Monster Type Name:</label>\n        <br>\n        <input type=\"text\" id=\"monsterTypeName\" name=\"monsterTypeName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":9,"column":84},"end":{"line":9,"column":99}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"new add animate-background-gradient jsp-monster-dark-textColor\" data-jsp-palette=\"monster\" value=\"Submit\">\n        <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n</form></div>";
},"useData":true});
})();