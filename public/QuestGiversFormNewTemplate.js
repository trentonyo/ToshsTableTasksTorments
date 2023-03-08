(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestGiversFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_quest_giver\">\r\n    <div class=\"new add title questGiver\">\r\n        New Quest Giver\r\n    </div>\r\n    <input hidden id=\"entity\" name=\"entity\" value=\"questGiver\"></input>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"questGiverName\">Quest Giver Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"questGiverName\" name=\"questGiverName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderQuestGiverName") || (depth0 != null ? lookupProperty(depth0,"placeholderQuestGiverName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholderQuestGiverName","hash":{},"data":data,"loc":{"start":{"line":9,"column":82},"end":{"line":9,"column":111}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\" value=\"Submit\">\r\n        <button type=\"submit\" value=\"Submit\">Submit</button>\r\n    </div>\r\n</form></div>";
},"useData":true});
})();