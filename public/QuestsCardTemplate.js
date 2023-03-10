(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/Quests/view/"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":1,"column":43},"end":{"line":1,"column":54}}}) : helper)))
    + "\" name=\"quest-redirect-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":1,"column":77},"end":{"line":1,"column":88}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"available") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":66},"end":{"line":3,"column":99}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "available";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "- "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":10,"column":30},"end":{"line":10,"column":48}}}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    return "- Unknown";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hidden giver jsp-quest-dark-textColor\" id=\"editQuestGiverId\">\r\n            <select id=\"questGivers-list\" name=\"questGiverId\" data-current=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":15,"column":76},"end":{"line":15,"column":92}}}) : helper)))
    + "\">\r\n                <option value=\"NULL\"> -- </option>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"questGiversList") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n        </div>\r\n        <div class=\"hidden giver jsp-quest-dark-textColor\" id=\"editAvailable\">\r\n            <label for=\"editAvailableCheckbox\">Available?</label>\r\n            <input type=\"checkbox\" id=\"editAvailableCheckbox\" name=\"available\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"available") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":79},"end":{"line":24,"column":110}}})) != null ? stack1 : "")
    + ">\r\n        </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":18,"column":35},"end":{"line":18,"column":51}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":18,"column":53},"end":{"line":18,"column":71}}}) : helper)))
    + "</option>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "checked";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button onClick=\"toggleEditMode(this, {'entity': 'Quests', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":29,"column":74},"end":{"line":29,"column":85}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-Quests-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":29,"column":118},"end":{"line":29,"column":129}}}) : helper)))
    + "\">Edit</button>\r\n        <button onClick=\"updateEntity(this, {'entity': 'Quests', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":30,"column":72},"end":{"line":30,"column":83}}}) : helper)))
    + "'} )\" id=\"update-Quests-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":30,"column":107},"end":{"line":30,"column":118}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"button_container\">\r\n            <a href=\"/Quests/view/"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":33,"column":34},"end":{"line":33,"column":45}}}) : helper)))
    + "/?edit=1\"><button id=\"toggleEdit-Quests-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":33,"column":85},"end":{"line":33,"column":96}}}) : helper)))
    + "\">Edit/View</button></a>\r\n            <button onClick=\"deleteEntity(this, {'entity': 'Quests', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":34,"column":76},"end":{"line":34,"column":87}}}) : helper)))
    + "'} )\">Delete</button>\r\n        </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":45,"column":31},"end":{"line":45,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":45,"column":46},"end":{"line":45,"column":61}}}) : helper)))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":101}}})) != null ? stack1 : "")
    + " -->\r\n<div class=\"card quest jsp-quest-light-backgroundColor jsp-quest-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":90},"end":{"line":2,"column":121}}})) != null ? stack1 : "")
    + "\" id=\"Quests-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":2,"column":134},"end":{"line":2,"column":145}}}) : helper)))
    + "\">\r\n    <div class=\"title animate-background-gradient "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":110}}})) != null ? stack1 : "")
    + " jsp-global-black-textColor\" data-jsp-palette=\"quest\" id=\"Quests-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":3,"column":180},"end":{"line":3,"column":191}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"questName") || (depth0 != null ? lookupProperty(depth0,"questName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questName","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":21}}}) : helper)))
    + " \r\n    </div>\r\n    <div class=\"description jsp-quest-dark-textColor\" id=\"Quests-questDesc-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":6,"column":75},"end":{"line":6,"column":86}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"questDesc") || (depth0 != null ? lookupProperty(depth0,"questDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questDesc","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":21}}}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"giver jsp-quest-dark-textColor\" id=\"Quests-questGiverId-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questId") || (depth0 != null ? lookupProperty(depth0,"questId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questId","hash":{},"data":data,"loc":{"start":{"line":9,"column":72},"end":{"line":9,"column":83}}}) : helper)))
    + "\">\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":72}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":36,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"hidden card quest jsp-monster-light-backgroundColor\" id=\"editQuestsMonster\">\r\n    <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"quest\">\r\n        Change Monster\r\n    </div>\r\n    <div class=\"description jsp-quest-dark-textColor\">\r\n        <select id=\"monsters-list\" name=\"monsterId\" data-current=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":43,"column":66},"end":{"line":43,"column":79}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monstersList") : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":46,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n        <br>\r\n        <label for=\"editMonsterQty\">Quantity: </label>\r\n        <input type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterQty") || (depth0 != null ? lookupProperty(depth0,"monsterQty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterQty","hash":{},"data":data,"loc":{"start":{"line":50,"column":44},"end":{"line":50,"column":58}}}) : helper)))
    + "\" id=\"editMonsterQty\">\r\n    </div>\r\n</div>";
},"useData":true});
})();