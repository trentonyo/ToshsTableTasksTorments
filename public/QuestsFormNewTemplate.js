(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":30,"column":31},"end":{"line":30,"column":47}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":30,"column":49},"end":{"line":30,"column":67}}}) : helper)))
    + "</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":40,"column":31},"end":{"line":40,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":40,"column":46},"end":{"line":40,"column":61}}}) : helper)))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card jsp-global-light-backgroundColor\"><form action=\"/createEntity\" method=\"POST\" id=\"add_new_quest\">\r\n    <div class=\"new add title quest\">\r\n        New Quest\r\n    </div>\r\n    <input hidden id=\"entity\" name=\"entity\" value=\"quest\"></input>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"questName\">Quest Name:</label>\r\n        <br>\r\n        <input required type=\"text\" id=\"quest-questName\" name=\"questName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderQuestName") || (depth0 != null ? lookupProperty(depth0,"placeholderQuestName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderQuestName","hash":{},"data":data,"loc":{"start":{"line":9,"column":87},"end":{"line":9,"column":111}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"available\">Quest Available?</label>\r\n        <select id=\"available\" name=\"available\">\r\n            <option value=\"1\">Yes</option>\r\n            <option value=\"0\">No</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"questDesc\">Quest Description:</label>\r\n        <br>\r\n        <textarea required id=\"questDesc\" name=\"questDesc\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"questGiver\">Quest Giver:</label>\r\n        <select id=\"questGivers-list\" name=\"questGiverId\">\r\n            <option value=\"NULL\"> -- </option>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"questGivers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":31,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n    </div>\r\n\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"monsterName\">Monster:</label>\r\n        <br>\r\n        <select required id=\"monsterNames-list\" name=\"monsterId\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsters") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":41,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"monsterQty\">How many monsters?</label>\r\n        <br>\r\n        <input required type=\"number\" min=\"1\" placeholder=\"1\" id=\"monsterQty\" name=\"monsterQty\">\r\n    </div>\r\n\r\n    <div class=\"form_section\">\r\n        <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n            <label for=\"rewardXp\">Reward XP:</label>\r\n            <br>\r\n            <input required type=\"number\" min=\"0\" placeholder=\"1\" id=\"rewardXp\" name=\"rewardXp\">\r\n        </div>\r\n        <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n            <label for=\"rewardGold\">Reward Gold:</label>\r\n            <br>\r\n            <input required type=\"number\" min=\"0\" placeholder=\"1\" id=\"rewardGold\" name=\"rewardGold\">\r\n        </div>\r\n        <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n            <label for=\"suggestedLevel\">Suggested Level:</label>\r\n            <br>\r\n            <input required type=\"number\" min=\"1\" placeholder=\"1\" id=\"suggestedLevel\" name=\"suggestedLevel\">\r\n        </div>\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\" value=\"Submit\">\r\n        <button type=\"submit\" value=\"Submit\">Submit</button>\r\n    </div>\r\n</form></div>";
},"useData":true});
})();