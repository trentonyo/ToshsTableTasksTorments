(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsFormNew'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":28,"column":27},"end":{"line":28,"column":45}}}) : helper)))
    + "\">\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":39,"column":31},"end":{"line":39,"column":46}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterDesc") || (depth0 != null ? lookupProperty(depth0,"monsterDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterDesc","hash":{},"data":data,"loc":{"start":{"line":39,"column":48},"end":{"line":39,"column":63}}}) : helper)))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form_card\"><form id=\"add_new_ability\">\r\n    <div class=\"new add title quest\">\r\n        New Quest\r\n    </div>\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"quest-questName\">Quest Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"quest-questName\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholderQuestName") || (depth0 != null ? lookupProperty(depth0,"placeholderQuestName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholderQuestName","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":85}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"quest-available\">Quest Available?</label>\r\n        <br>\r\n        <input type=\"checkbox\" id=\"quest-available\" checked>\r\n    </div>\r\n\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"quest-questDesc\">Quest Description:</label>\r\n        <br>\r\n        <textarea id=\"quest-questDesc\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"quest-questGiver\">Quest Giver:</label>\r\n        <br>\r\n        <input list=\"quest-questGivers-list\" id=\"quest-questGiver\" name=\"quest-questGiver\">\r\n        <datalist id=\"quest-questGivers-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"questGivers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":29,"column":21}}})) != null ? stack1 : "")
    + "        </datalist>\r\n    </div>\r\n\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"quest-monsterName\">Monster:</label>\r\n        <br>\r\n        <input list=\"quest-monsterNames-list\" id=\"quest-monsterName\" name=\"quest-monsterName\">\r\n        <datalist id=\"quest-monsterNames-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsters") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":12},"end":{"line":40,"column":21}}})) != null ? stack1 : "")
    + "        </datalist>\r\n    </div>\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"quest-monsterQty\">How many monsters?</label>\r\n        <br>\r\n        <input type=\"number\" min=\"1\" placeholder=\"1\" id=\"quest-monsterQty\">\r\n    </div>\r\n\r\n    <div class=\"form_section\">\r\n        <div class=\"new add background-gradient\">\r\n            <label for=\"quest-rewardXp\">Reward XP:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"0\" placeholder=\"1\" id=\"quest-rewardXp\">\r\n        </div>\r\n        <div class=\"new add background-gradient\">\r\n            <label for=\"quest-rewardGold\">Reward Gold:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"0\" placeholder=\"1\" id=\"quest-rewardGold\">\r\n        </div>\r\n        <div class=\"new add background-gradient\">\r\n            <label for=\"quest-suggestedLevel\">Suggested Level:</label>\r\n            <br>\r\n            <input type=\"number\" min=\"1\" placeholder=\"1\" id=\"quest-suggestedLevel\">\r\n        </div>\r\n    </div>\r\n</form></div>";
},"useData":true});
})();