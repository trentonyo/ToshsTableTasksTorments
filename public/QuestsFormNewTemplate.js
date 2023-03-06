(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":29,"column":27},"end":{"line":29,"column":43}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":29,"column":45},"end":{"line":29,"column":63}}}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":39,"column":31},"end":{"line":39,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":39,"column":46},"end":{"line":39,"column":61}}}) : helper)))
    + "</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_quest\">\n    <div class=\"new add title quest\">\n        New Quest\n    </div>\n    <input hidden id=\"entity\" name=\"entity\" value=\"quest\"></input>\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n        <label for=\"questName\">Quest Name:</label>\n        <br>\n        <input type=\"text\" id=\"quest-questName\" name=\"questName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderQuestName") || (depth0 != null ? lookupProperty(depth0,"placeholderQuestName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderQuestName","hash":{},"data":data,"loc":{"start":{"line":9,"column":78},"end":{"line":9,"column":102}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n        <label for=\"available\">Quest Available?</label>\n        <select id=\"available\" name=\"available\">\n            <option value=\"1\">Yes</option>\n            <option value=\"0\">No</option>\n        </select>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n        <label for=\"questDesc\">Quest Description:</label>\n        <br>\n        <textarea id=\"questDesc\" name=\"questDesc\"></textarea>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n        <label for=\"questGiver\">Quest Giver:</label>\n        <select id=\"questGivers-list\" name=\"questGiverId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"questGivers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":30,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n        <label for=\"monsterName\">Monster:</label>\n        <br>\n        <select id=\"monsterNames-list\" name=\"monsterId\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsters") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":40,"column":21}}})) != null ? stack1 : "")
    + "        </select>\n    </div>\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n        <label for=\"monsterQty\">How many monsters?</label>\n        <br>\n        <input type=\"number\" min=\"1\" placeholder=\"1\" id=\"monsterQty\" name=\"monsterQty\">\n    </div>\n\n    <div class=\"form_section\">\n        <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n            <label for=\"rewardXp\">Reward XP:</label>\n            <br>\n            <input type=\"number\" min=\"0\" placeholder=\"1\" id=\"rewardXp\" name=\"rewardXp\">\n        </div>\n        <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n            <label for=\"rewardGold\">Reward Gold:</label>\n            <br>\n            <input type=\"number\" min=\"0\" placeholder=\"1\" id=\"rewardGold\" name=\"rewardGold\">\n        </div>\n        <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\n            <label for=\"suggestedLevel\">Suggested Level:</label>\n            <br>\n            <input type=\"number\" min=\"1\" placeholder=\"1\" id=\"suggestedLevel\" name=\"suggestedLevel\">\n        </div>\n    </div>\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\" value=\"Submit\">\n        <button type=\"submit\" value=\"Submit\">Submit</button>\n    </div>\n</form></div>";
},"useData":true});
})();